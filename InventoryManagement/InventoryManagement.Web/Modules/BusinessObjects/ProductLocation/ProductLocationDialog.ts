
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductLocationDialog extends Serenity.EntityDialog<ProductLocationRow, any> {
        protected getFormKey() { return ProductLocationForm.formKey; }
        protected getIdProperty() { return ProductLocationRow.idProperty; }
        protected getLocalTextPrefix() { return ProductLocationRow.localTextPrefix; }
        protected getService() { return ProductLocationService.baseUrl; }

        protected form = new ProductLocationForm(this.idPrefix);

    }
}