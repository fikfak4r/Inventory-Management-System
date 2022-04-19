
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    
    export class PurchasesDialog extends Serenity.EntityDialog<PurchasesRow, any> {

        protected getFormKey() { return PurchasesForm.formKey; }
        protected getIdProperty() { return PurchasesRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesRow.localTextPrefix; }
        protected getNameProperty() { return PurchasesRow.nameProperty; }
        protected getService() { return PurchasesService.baseUrl; }

        protected form = new PurchasesForm(this.idPrefix);

        private purchaseOrdersGrid: InventoryManagement.BusinessObjects.PurchasesDetailsGrid;
        private receiveGrid: InventoryManagement.BusinessObjects.ReceivePurchasesGrid;
        
        private paymentGrid: PurchasesPaymentDetailsGrid;
        private returnGrid: ReturnOutwardsDetailsGrid;
        private unstockGrid: UnstockGrid;
        private notes: NotesGrid;
        private purchaseTrails: PurchaseTrailGrid;

        private returnOutardsPaymentGrid: ReturnOutwardsPaymentGrid;


        private purchasesPropertyGrid: Serenity.PropertyGrid;
        private purchasesId: number;


        constructor() {
            super();
                
                //this.initChildren();
                //this.purchaseOrdersGrid = new PurchasesDetailsGrid(this.byId("PurchaseOrdersGrid"));

                this.receiveGrid = new ReceivePurchasesGrid(this.byId("ReceiveGrid"));
                this.paymentGrid = new PurchasesPaymentDetailsGrid(this.byId("PaymentGrid"));
                this.paymentGrid.PurchasesDialogRef = this;
                this.returnGrid = new ReturnOutwardsDetailsGrid(this.byId("ReturnGrid"));
                this.returnGrid.PurchasesDialogRef = this;
                this.returnOutardsPaymentGrid = new ReturnOutwardsPaymentGrid(this.byId("ReturnOutwardsPaymentGrid"));
                this.unstockGrid = new UnstockGrid(this.byId("UnstockGrid"));
                this.notes = new NotesGrid(this.byId("Notes"));
                this.purchaseTrails = new PurchaseTrailGrid(this.byId("PurchaseTrails"))


                //this.getPropertyItems().filter(x => (x.name != 'Discount'))
            alert('in here')

                this.purchasesPropertyGrid = new Serenity.PropertyGrid(this.byId("PurchasesPropertyGrid"),
                {
                    idPrefix: this.idPrefix + "_Purchases_",
                    items: Q.getForm(InventoryManagement.BusinessObjects.PurchasesForm.formKey).filter(x => (x.name != 'PurchasesId' && x.name != 'OrderId' && x.name != 'Date' && x.name != 'SupplierId' && x.name != 'LocationId')),
                    useCategories: true
                    });

                this.purchasesPropertyGrid.change(x => { this.calculateAmount() })


                new Serenity.Toolbar(this.byId("PurchasesToolbar"),
                    {
                    buttons: [{
                        cssClass: "apply-changes-button",
                        title: Q.text("Controls.EntityDialog.SaveButton"),
                        onClick: () => {

                            this.calculateAmount();

                            var purchasesEntity = <BusinessObjects.PurchasesRow>({});
                            this.purchasesPropertyGrid.save(purchasesEntity)

                            BusinessObjects.PurchasesService.Update({
                                EntityId: GlobalScripts.purchasesId,
                                Entity: purchasesEntity
                            }, response => {
                                // reload customer list just in case
                                //Q.reloadLookup(BusinessObjects.ReorderPointRow.lookupKey);
                                this.purchasesPropertyGrid.save(this.entity);
                                Q.notifySuccess("Save successful");
                            });

                        }
                    }]
                });


                this.tabs.bind("tabsactivate", () => this.arrange());

                    this.form.OrderId.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
                });


        }


        protected getPropertyItems() {
            alert('Called')
            var items = super.getPropertyItems();
            
            items = items.filter(x => (x.name != "Discount" && x.name != "Tax" && x.name != 'TotalAmount' && x.name != 'TotalAmountLeft' && x.name != 'TotalAmountPaid'));

            return items;

        }


        private once: boolean = true;


        loadEntity(entity: PurchasesRow) {
           
            super.loadEntity(entity);
            
            GlobalScripts.purchasesId = entity.PurchasesId;
            GlobalScripts.locationId = entity.LocationId;

                    

            if (this.isNewOrDeleted()) {
                //this.purchaseOrdersGrid.element.hide();
                //alert('In here')
                Serenity.TabsExtensions.setDisabled(this.tabs, "PurchaseOrders", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Receive", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Return", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Unstock", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Notes", true)

                this.toolbar.findButton("approve-button").hide();
                this.toolbar.findButton("refresh-button").hide();
                this.toolbar.findButton("document-check").hide();
                this.toolbar.findButton("documents-stack").hide();
            }
            else {
                        if(this.purchaseOrdersGrid == undefined) 
                            this.initChildren();

                        this.purchaseOrdersGrid.purchasesID = entity.PurchasesId;
                        this.receiveGrid.purchasesID = this.entityId;
                        this.paymentGrid.purchasesID = this.entityId;
                        this.returnGrid.purchasesID = this.entityId;
                        this.unstockGrid.purchasesID = this.entityId
                        this.returnOutardsPaymentGrid.purchasesID = this.entityId
                        this.notes.purchasesID = this.entityId
                        this.purchaseTrails.purchasesID = this.entityId;

                        this.setToSimplePurchase()
                        
                        if (this.once) {
                            //   this.toolbar.findButton("document-check").show();
                            //   this.toolbar.findButton("approve-button").show();
                            this.once = false;
                        }


                        Serenity.EditorUtils.setReadOnly(this.form.OrderId, true)

            }
            //this.byId("PurchaseOrdersGrid").hide();


            var editors = this.purchasesPropertyGrid.get_editors()


            try {
                for (var x = 10; x < editors.length; x++) {
                    Serenity.EditorUtils.setReadOnly(new Serenity.Widget(editors[x].element), true)
                }
            } catch(e){}

            this.purchasesPropertyGrid.load(entity);

        }



        public UpdatePurchases() {


            InventoryManagement.BusinessObjects.PurchasesService.List({
                Criteria: [Serenity.Criteria("PurchasesId"), '=', this.form.PurchasesId.value]
            }, response => {

                if (response.Entities.length != 0) {
                    this.purchasesPropertyGrid.load(response.Entities[0]);
                }

            });

            //for (var x = 10; x < editors.length; x++) {
            //    Serenity.EditorUtils.setReadOnly(new Serenity.Widget(editors[x].element), true)
            //}
        }



        private calculateAmount() {


            var purchasesEntity = <BusinessObjects.PurchasesRow>({});
            this.purchasesPropertyGrid.save(purchasesEntity)

            var amt = purchasesEntity.TotalAmount;

            if (purchasesEntity.Discount != null && purchasesEntity.Discount > 0) {
                amt = amt - purchasesEntity.Discount
            }

            if (purchasesEntity.Tax != null && purchasesEntity.Tax > 0) {
                amt = amt + purchasesEntity.Tax
            }

            purchasesEntity.TotalAmountLeft = amt - purchasesEntity.TotalAmountPaid

            this.purchasesPropertyGrid.load(purchasesEntity);


        }//Ends the calculateAmount

    


        protected updateInterface() {
            super.updateInterface();
            
            this.toolbar.findButton("document-check").hide();

            if(!this.isNewOrDeleted())
            {
                if(this.form.IsAdvanced.value == true)
                {
                    this.setToAdvancedPurchase()
                }
                else
                    this.setToSimplePurchase()

                if(this.form.Status.value == 'Fully Received')
                {
                    this.toggleCompleteReOpenButtons(true)
                }
                else
                    this.toggleCompleteReOpenButtons(false)
            }

        }

      

        private toggleCompleteReOpenButtons(isCompleted:boolean)
        {
            
            if(isCompleted)
            {
                this.toolbar.findButton("refresh-button").show();
                this.toolbar.findButton("approve-button").hide();
            }
            else
            {
                this.toolbar.findButton("refresh-button").hide();
                this.toolbar.findButton("approve-button").show();
            }
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var buttons = super.getToolbarButtons();
            var btns = buttons;
            //var btns = buttons.filter(x => x.cssClass != 'save-and-close-button');

            btns.push({
                cssClass: 'documents-stack',
                title: 'Convert to Advance Purchases',
                onClick: () => {
                   
                    var requestObj = this.GetRequestObject(this.form.LocationId.value, this.form.PurchasesId.value)
                   
                    var url = "BusinessObjects/Purchases/ConvertToAdvancedPurchase";
                    
                    Q.serviceRequest(url, requestObj, response => {
                          this.setToAdvancedPurchase()
                          Q.notifySuccess("Conversion to Advanced purchase successfull.")
                    })

                },
            });

            btns.push({
                cssClass: 'document-check',
                title: 'Convert to Simple Purchases',
                onClick: () => {
                
                    var requestObj = this.GetRequestObject(this.form.LocationId.value, this.form.PurchasesId.value)
                   
                    var url = "BusinessObjects/Purchases/ConvertToSimplePurchase";

                    Q.serviceRequest(url, requestObj, response => {
                          this.setToSimplePurchase()
                          Q.notifySuccess("Conversion to Simple purchase successfull.")
                    })
                },
            })

            btns.push({
                cssClass: 'approve-button',
                title: 'Complete Purchases',
                onClick: () => {
                    
                    //Q.alert('About to show')

                    var requestObj = this.GetRequestObject(this.form.LocationId.value, this.form.PurchasesId.value)
                   
                    var url = "BusinessObjects/Purchases/CompletePurchase";
                    Q.serviceRequest(url, requestObj, response => {
                        this.toggleCompleteReOpenButtons(true);
                        //Q.notifySuccess(response.LocationId + "\n\n" + response.PurchaseId)
                        Q.notifySuccess("Complete purchase successfull")
                    })
                },
            })

            btns.push({
                cssClass: 'refresh-button',
                title: 'Re-open Order',
                onClick: () => {
                                                 
                    var requestObj = this.GetRequestObject(this.form.LocationId.value, this.form.PurchasesId.value)
                   
                    var url = "BusinessObjects/Purchases/ReopenOrder";
                    Q.serviceRequest(url, requestObj, response => {
                        this.toggleCompleteReOpenButtons(false);
                        //Q.notifySuccess("Order reopened: " + response.LocationId + "\n\n" + response.PurchaseId)
                        Q.notifySuccess("Order reopen successfull")
                   
                        this.UpdatePurchases()
                    })

                },
            })

            btns.push({
                cssClass: 'print-preview-button',
                title: 'Print purchases orders',
                
                onClick: () => {
                    open(Q.format("/BusinessObjects/Purchases/PurchaseOrders?id={0}", GlobalScripts.purchasesId));

                },
            })


            btns.push({
                cssClass: 'print-preview-button',
                title: 'Print Invoice',
                onClick: () => {

                    open("/BusinessObjects/Purchases/PurchaseInvoice");

                },
            })

            return btns;
            //return buttons;
        }


        private initChildren()
        {
            if(!this.isNewOrDeleted())
            {
                this.purchaseOrdersGrid = new PurchasesDetailsGrid(this.byId("PurchaseOrdersGrid"));
                this.purchaseOrdersGrid.PurchasesDialogRef = this;
            }
        }


        private GetRequestObject(locationId:string, purchaseId:number){
             var requestObj = {
                        LocationId: locationId,
                        PurchasesId: purchaseId
                    }
                    return requestObj;
        }


        private setToSimplePurchase() {

            this.toolbar.findButton("document-check").hide();
            this.toolbar.findButton("documents-stack").show();

            // this.toolbar.findButton("approve-button").show();
            // this.toolbar.findButton("refresh-button").hide();
            
            Serenity.TabsExtensions.setDisabled(this.tabs, "PurchaseOrders", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Notes", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Receive", true)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Return", true)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Unstock", true)
            //this.purchaseOrdersGrid.element.show();
        }

        private setToAdvancedPurchase() {
            this.toolbar.findButton("documents-stack").hide();
            this.toolbar.findButton("document-check").show();
            Serenity.TabsExtensions.setDisabled(this.tabs, "PurchaseOrders", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Receive", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Return", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Unstock", false)
        }




  /****************************************************************** */

    protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();

        }

        private getNextNumber() {
            
            var val = Q.trimToNull(this.form.OrderId.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PO').toUpperCase();

                
                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                BusinessObjects.PurchasesService.GetNextNumber({
                    Prefix: prefix,
                    Length: 5 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.OrderId.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.OrderId.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


        // private loadedState: string;
        // getSaveState() {
        //     try {
        //         return $.toJSON(this.getSaveEntity());
        //     }
        //     catch (e) {
        //         return null;
        //     }
        // }

        // loadResponse(data) {
        //     super.loadResponse(data);
        //     this.loadedState = this.getSaveState();
        // }


        // onSaveSuccess(response) {
        //     super.onSaveSuccess(response);
        //     alert('Save is successfull')
        //     //Q.reloadLookup('Northwind.Customer');
        // }





    }
}