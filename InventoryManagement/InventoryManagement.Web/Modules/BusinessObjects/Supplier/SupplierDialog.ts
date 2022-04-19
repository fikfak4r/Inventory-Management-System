
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey() { return SupplierForm.formKey; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getNameProperty() { return SupplierRow.nameProperty; }
        protected getService() { return SupplierService.baseUrl; }

        protected form = new SupplierForm(this.idPrefix);
        private productsGrid: ProductSupplier4Grid;
        private supplierPurchases: SupplierPurchasesGrid;
        private supplierPayments: SupplierPurchasesPaymentDetailsGrid;

        constructor(){
            super();

            this.productsGrid = new ProductSupplier4Grid(this.byId("ProductGrid"));
            this.supplierPurchases = new SupplierPurchasesGrid(this.byId("PurchasesGrid"))
            this.supplierPayments = new SupplierPurchasesPaymentDetailsGrid(this.byId("PaymentGrid"))
                this.tabs.bind("tabsactivate", () => this.arrange());
            
        }

        // protected afterLoadEntity(){
        //     super.afterLoadEntity();
        //     this.productsGrid.supplierID = this.entityId;
        //     Serenity.TabsExtensions.setDisabled(this.tabs, "Products", this.isNewOrDeleted())
        //     Serenity.TabsExtensions.setDisabled(this.tabs, "PurchasesHistory", this.isNewOrDeleted())
        // }

        public loadEntity(entity: SupplierRow) {
            
            super.loadEntity(entity);
            this.productsGrid.supplierID = entity.SupplierId;
            this.supplierPurchases.supplierID = entity.SupplierId;
            this.supplierPayments.supplierID = entity.SupplierId;
            Serenity.TabsExtensions.setDisabled(this.tabs, "Products", this.isNewOrDeleted());
            
            //Serenity.TabsExtensions.setDisabled(this.tabs, "PurchasesHistory", this.isNewOrDeleted());
        }


    }
    
}