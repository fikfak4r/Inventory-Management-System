
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductCategoryLocationDialog extends Serenity.EntityDialog<ProductCategoryLocationRow, any> {
        protected getFormKey() { return ProductCategoryLocationForm.formKey; }
        protected getIdProperty() { return ProductCategoryLocationRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCategoryLocationRow.localTextPrefix; }
        protected getService() { return ProductCategoryLocationService.baseUrl; }

        protected form = new ProductCategoryLocationForm(this.idPrefix);

    }
}