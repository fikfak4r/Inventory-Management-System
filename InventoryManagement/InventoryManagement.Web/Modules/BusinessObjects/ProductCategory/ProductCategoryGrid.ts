
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductCategoryGrid extends Serenity.EntityGrid<ProductCategoryRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ProductCategory'; }
        protected getDialogType() { return ProductCategoryDialog; }
        protected getIdProperty() { return ProductCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCategoryRow.localTextPrefix; }
        protected getService() { return ProductCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}