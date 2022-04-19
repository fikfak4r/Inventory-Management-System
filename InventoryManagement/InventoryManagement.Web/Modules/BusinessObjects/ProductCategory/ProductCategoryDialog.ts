
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductCategoryDialog extends Serenity.EntityDialog<ProductCategoryRow, any> {
        protected getFormKey() { return ProductCategoryForm.formKey; }
        protected getIdProperty() { return ProductCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCategoryRow.localTextPrefix; }
        protected getNameProperty() { return ProductCategoryRow.nameProperty; }
        protected getService() { return ProductCategoryService.baseUrl; }

        protected form = new ProductCategoryForm(this.idPrefix);

    }
}