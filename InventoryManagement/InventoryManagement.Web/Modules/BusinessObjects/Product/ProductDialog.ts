
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
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
        private billOfMaterial: BillOfMaterialGrid;
        private movementHistory: MovementHistoryGrid;
        private reOrderLevelId: number;


        constructor() {

            super();



            this.purchUoMAndPricingGrid = new PurchasesUoMAndPriceGrid(this.byId("PurchUoMAndPricingGrid"));

            this.slsUoMAndPricingGrid = new SalesUoMAndPriceGrid(this.byId("SlsUoMAndPricingGrid"));

            this.purchasesDetailsGrid = new ProductPurchasesDetailsGrid(this.byId("PurchasesDetailsGrid"));

            this.productSupplierGrid = new ProductSupplierGrid(this.byId("SuppliersGrid"));

            this.movementHistory = new MovementHistoryGrid(this.byId("MvmntHist"));

            this.billOfMaterial = new BillOfMaterialGrid(this.byId("BillOfMat"));


            
            this.tabs.bind("tabsactivate", () => this.arrange());


            var selfChange = 0;



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


             Serenity.TabsExtensions.setDisabled(this.tabs, 'PurchasesDetails', !productId);
             Serenity.TabsExtensions.setDisabled(this.tabs, 'Suppliers', !productId);


             if (!productId) {
                 // no product is selected, just load an empty entity
                 
                 return;
             }
             else {

                 this.productSupplierGrid.productID = productId
                 this.purchUoMAndPricingGrid.productID = productId
                 this.slsUoMAndPricingGrid.productID = productId
                 this.movementHistory.productID = productId
                 this.billOfMaterial.productID = productId

                 GlobalScripts.ProductId = productId;


                 Q.reloadLookup("BusinessObjects.PurchasesUoMAndPrice")


                 //var criteria = [Serenity.Criteria("ProductId"), '=', productId]
                 // load selected customer into customer form by calling CustomerService
         

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