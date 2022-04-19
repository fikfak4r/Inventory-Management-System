
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesDialog extends Serenity.EntityDialog<SalesRow, any> {
        protected getFormKey() { return SalesForm.formKey; }
        protected getIdProperty() { return SalesRow.idProperty; }
        protected getLocalTextPrefix() { return SalesRow.localTextPrefix; }
        protected getNameProperty() { return SalesRow.nameProperty; }
        protected getService() { return SalesService.baseUrl; }

        protected form = new SalesForm(this.idPrefix);

        private salesOrdersGrid: InventoryManagement.BusinessObjects.SalesDetailsGrid;
        private pickGrid: InventoryManagement.BusinessObjects.PickSalesOrderGrid;
        private invoiceGrid: SalesInvoiceGrid;
        private paymentGrid: SalesPaymentDetailsGrid;
        private returnGrid: ReturnInwardsDetailsGrid;
        private restockGrid: RestockGrid;

        constructor() {
            super();
            this.pickGrid = new PickSalesOrderGrid(this.byId("PickGrid"));
            this.invoiceGrid = new SalesInvoiceGrid(this.byId("InvoiceGrid"));

            this.paymentGrid = new SalesPaymentDetailsGrid(this.byId("PaymentGrid"));
            this.returnGrid = new ReturnInwardsDetailsGrid(this.byId("ReturnGrid"));
            this.restockGrid = new RestockGrid(this.byId("RestockGrid"));
            this.tabs.bind("tabsactivate", () => this.arrange());
            
            this.form.LocationId.changeSelect2(e => {
                GlobalScripts.locationId = parseInt(this.form.LocationId.value)
            })

             this.form.OrderId.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

        }
        
        private once: boolean = true;


        loadEntity(entity: SalesRow) {
            super.loadEntity(entity);
            
            GlobalScripts.salesId = entity.SalesId;
            GlobalScripts.locationId = entity.LocationId;

        if (this.isNewOrDeleted()) {

               
                //this.salesOrdersGrid.element.hide();
                //alert('In here')
                Serenity.TabsExtensions.setDisabled(this.tabs, "SalesOrders", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Pick", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Invoice", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Return", true)
                Serenity.TabsExtensions.setDisabled(this.tabs, "Restock", true)

                this.toolbar.findButton("complete-sales").hide();
                this.toolbar.findButton("reopen-sales").hide();
                this.toolbar.findButton("simple-sales").hide();
                this.toolbar.findButton("advance-sales").hide();
            }
            else {

                if(this.salesOrdersGrid == undefined) 
                            this.initChildren();

                    this.salesOrdersGrid.salesID = entity.SalesId
                    this.pickGrid.salesID = entity.SalesId
                    this.invoiceGrid.salesID = entity.SalesId
                    this.paymentGrid.salesID = entity.SalesId
                    this.returnGrid.salesID = entity.SalesId
                    this.restockGrid.salesID = entity.SalesId

                        this.setToSimpleSales()
                        
                        if (this.once) {
                            //   this.toolbar.findButton("simple-sales").show();
                            //   this.toolbar.findButton("complete-sales").show();
                            this.once = false;
                        }
            }
            //Serenity.TabsExtensions.setDisabled(this.tabs, 'SalesOrders', this.isNewOrDeleted());
            // if (this.isNewOrDeleted())
            //     this.salesOrdersGrid.element.parent("div.cont").hide()
            // else
            // {
            //     this.salesOrdersGrid.element.parent("div.cont").show();
            //     this.salesOrdersGrid.refresh();
            // }
            // if (!this.isNewOrDeleted()) {
            //     this.salesOrdersGrid = new SalesDetailsGrid(this.byId("SalesOrdersGrid"));
            //     this.salesOrdersGrid.salesID = entity.SalesId
            // }

        }


protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton("simple-sales").hide();

            if(!this.isNewOrDeleted())
            {
                if(this.form.IsAdvanced.value == true)
                {
                    this.setToAdvancedSales()
                }
                else
                    this.setToSimpleSales()

                if(this.form.Status.value == 'Fully Picked')
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
                this.toolbar.findButton("reopen-sales").show();
                this.toolbar.findButton("complete-sales").hide();
            }
            else
            {
                this.toolbar.findButton("reopen-sales").hide();
                this.toolbar.findButton("complete-sales").show();
            }
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var buttons = super.getToolbarButtons();
            var btns = buttons;
            //var btns = buttons.filter(x => x.cssClass != 'save-and-close-button');

            btns.push({
                cssClass: 'advance-sales',
                title: 'Convert to Advance Sales',
                onClick: () => {

                    var requestObj = this.GetRequestObject(this.form.LocationId.value, this.form.SalesId.value)
                   
                    var url = "BusinessObjects/Sales/ConvertToAdvancedSales";

                    Q.serviceRequest(url, requestObj, response => {
                          this.setToAdvancedSales()
                          Q.notifySuccess("Conversion to Advanced sales successfull.")
                    })

                },
            });
            btns.push({
                cssClass: 'simple-sales',
                title: 'Convert to Simple Sales',
                onClick: () => {
                
                    var requestObj = this.GetRequestObject(this.form.LocationId.value, this.form.SalesId.value)
                   
                    var url = "BusinessObjects/Sales/ConvertToSimpleSales";

                    Q.serviceRequest(url, requestObj, response => {
                          this.setToSimpleSales()
                          Q.notifySuccess("Conversion to Simple sales successfull.")
                    })
                },
            })

            btns.push({
                cssClass: 'complete-sales',
                title: 'Complete Sales',
                onClick: () => {
                    
                    //Q.alert('About to show')

                    var requestObj = this.GetRequestObject(this.form.LocationId.value, this.form.SalesId.value)
                   
                    var url = "BusinessObjects/Sales/CompleteSales";
                    Q.serviceRequest(url, requestObj, response => {
                        this.toggleCompleteReOpenButtons(true);
                        //Q.notifySuccess(response.LocationId + "\n\n" + response.SalesId)
                        Q.notifySuccess("Complete sales successfull")
                    })
                },
            })

            btns.push({
                cssClass: 'reopen-sales',
                title: 'Re-open Order',
                onClick: () => {
                   
                                
                                
                    var requestObj = this.GetRequestObject(this.form.LocationId.value, this.form.SalesId.value)
                   
                    var url = "BusinessObjects/Sales/ReopenOrder";
                    Q.serviceRequest(url, requestObj, response => {
                        this.toggleCompleteReOpenButtons(false);
                        //Q.notifySuccess("Order reopened: " + response.LocationId + "\n\n" + response.SalesId)
                        Q.notifySuccess("Order reopen successfull")
                    })

                },
            })

            return btns;
            //return buttons;
        }


        private initChildren()
        {
            if(!this.isNewOrDeleted())
            {
                this.salesOrdersGrid = new SalesDetailsGrid(this.byId("SalesOrdersGrid"));
            }
        }


        private GetRequestObject(locationId:string, salesId:number){
             var requestObj = {
                        LocationId: locationId,
                        SalesId: salesId
                    }
                    return requestObj;
        }


        private setToSimpleSales() {

            this.toolbar.findButton("simple-sales").hide();
            this.toolbar.findButton("advance-sales").show();

            // this.toolbar.findButton("complete-sales").show();
            // this.toolbar.findButton("reopen-sales").hide();

            Serenity.TabsExtensions.setDisabled(this.tabs, "SalesOrders", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Pick", true)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Return", true)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Restock", true)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Invoice", true)

            //this.salesOrdersGrid.element.show();
        }

        private setToAdvancedSales() {
            this.toolbar.findButton("advance-sales").hide();
            this.toolbar.findButton("simple-sales").show();
            Serenity.TabsExtensions.setDisabled(this.tabs, "SalesOrders", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Pick", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Payment", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Return", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Restock", false)
            Serenity.TabsExtensions.setDisabled(this.tabs, "Invoice", false)

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
                var prefix = (val || 'SO').toUpperCase();

                
                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                BusinessObjects.SalesService.GetNextNumber({
                    Prefix: prefix,
                    Length: 5 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.OrderId.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.OrderId.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }





    }
}