
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductDialogCopy extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey() { return ProductForm.formKey; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected getService() { return ProductService.baseUrl; }

        public form = new ProductForm(this.idPrefix);
        private purchUoMAndPricingGrid: PurchasesUoMAndPriceGrid;
        private slsUoMAndPricingGrid: SalesUoMAndPriceGrid;

        private purchasesDetailsGrid: ProductPurchasesDetailsGrid;
        private productSupplierGrid: ProductSupplierGrid;
        private reOrderLevelPropertyGrid: Serenity.PropertyGrid;
        private reOrderLevelId: number;


        constructor() {

            super();

            this.purchUoMAndPricingGrid = new PurchasesUoMAndPriceGrid(this.byId("PurchUoMAndPricingGrid"));
            this.slsUoMAndPricingGrid = new SalesUoMAndPriceGrid(this.byId("SlsUoMAndPricingGrid"));

            this.purchasesDetailsGrid = new ProductPurchasesDetailsGrid(this.byId("PurchasesDetailsGrid"));

            this.productSupplierGrid = new ProductSupplierGrid(this.byId("SuppliersGrid"));
            
            this.reOrderLevelPropertyGrid = new Serenity.PropertyGrid(this.byId("ReOrderLevelPropertyGrid"),
            {
                idPrefix: this.idPrefix + "_ReOrderLevel_",
                //items: Q.getForm(InventoryManagement.BusinessObjects.ReorderPointForm.formKey).filter(x => x.name != 'ProductId'),
                items: Q.getForm(InventoryManagement.BusinessObjects.ReorderPointForm.formKey),
                useCategories: true
            });


            
            this.tabs.bind("tabsactivate", () => this.arrange());


            var selfChange = 0;


            new Serenity.Toolbar(this.byId("ReOrderLevelToolbar"),
                {

                buttons: [{
                    cssClass: "apply-changes-button",
                    title: Q.text("Controls.EntityDialog.SaveButton"),
                    onClick: () => {

                        var id = this.reOrderLevelId;

                        // prepare an empty entity to serialize customer details into
                        var c = <BusinessObjects.ReorderPointRow>{ ProductId : this.getProductId() };
                        this.reOrderLevelPropertyGrid.save(c);

                        //if (!this.customerValidator.form())
                        //    return;


                        if (!id) {
                            //alert('Create')
                            BusinessObjects.ReorderPointService.Create({
                                Entity: c
                            }, response => {

                                this.reOrderLevelId = response.EntityId
                                Q.notifySuccess("Saved customer details");

                                });

                        } else {

                            BusinessObjects.ReorderPointService.Update({
                                EntityId: id,
                                Entity: c
                            }, response => {
                                // reload customer list just in case
                                //Q.reloadLookup(BusinessObjects.ReorderPointRow.lookupKey);
                                Q.notifySuccess("Saved customer details");
                            });

                        }

                    }
                }]
            });

        }


        updateInterface() {
            super.updateInterface();
            Serenity.EditorUtils.setReadOnly(this.form.SupplierId, true);

        }

        public loadEntity(prod: ProductRow)
         {
             super.loadEntity(prod);
             //Serenity.TabsExtensions.setDisabled(this.tabs, "PurchasesDetails", this.isNewOrDeleted());


             //Q.reloadLookup(BusinessObjects.PurchasesUoMAndPriceRow.lookupKey)
             var productId = this.getProductId();


             Serenity.TabsExtensions.setDisabled(this.tabs, 'ReOrderLevel', !productId);
             Serenity.TabsExtensions.setDisabled(this.tabs, 'PurchasesDetails', !productId);
             Serenity.TabsExtensions.setDisabled(this.tabs, 'Suppliers', !productId);


             if (!productId) {
                 // no product is selected, just load an empty entity
                 this.reOrderLevelPropertyGrid.load({});
                 return;
             }
             else {

                 this.productSupplierGrid.productID = productId
                 this.purchUoMAndPricingGrid.productID = productId
                 this.slsUoMAndPricingGrid.productID = productId

                 GlobalScripts.ProductId = productId;


                 Q.reloadLookup("BusinessObjects.PurchasesUoMAndPrice")


                 //var criteria = [Serenity.Criteria("ProductId"), '=', productId]
                 // load selected customer into customer form by calling CustomerService
                 InventoryManagement.BusinessObjects.ReorderPointService.List({
                     Criteria: [Serenity.Criteria("ProductId"), '=', productId]
                 }, response => {
                     if (response.Entities.length != 0) {
                         this.reOrderLevelId = response.Entities[0].ReorderPointId;

                         this.reOrderLevelPropertyGrid.load(response.Entities[0]);
                     }
                 });

             }

         }


        getProductId() {

            var productId = this.form.ProductId.value;

            //if (Q.isEmptyOrNull(productId))
            //    return null;

              if (productId == null)
                return null;

            // unfortunately, ProductId (a string) used in this form and 
            // the ID (auto increment ID) are different, so we need to 
            // find numeric ID from customer lookups. 
              // you'll probably won't need this step.
              //return Q.first(BusinessObjects.ProductRow.getLookup().items,
              //  x => x.ProductId == productId).ID;

              return productId;

        }


    }





}