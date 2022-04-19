
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductSupplierDialog extends Serenity.EntityDialog<ProductSupplierRow, any> {
        protected getFormKey() { return ProductSupplierForm.formKey; }
        protected getIdProperty() { return ProductSupplierRow.idProperty; }
        protected getLocalTextPrefix() { return ProductSupplierRow.localTextPrefix; }
        protected getService() { return ProductSupplierService.baseUrl; }

        protected form = new ProductSupplierForm(this.idPrefix);

        private suppliersGrid: ProductSupplier3Grid;

        constructor() {
            super()
            
            this.suppliersGrid = new ProductSupplier3Grid(this.byId("SuppliersGrid"))

        }

    }
}