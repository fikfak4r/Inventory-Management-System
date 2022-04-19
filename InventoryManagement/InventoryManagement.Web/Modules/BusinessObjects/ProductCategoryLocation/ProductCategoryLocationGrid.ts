
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductCategoryLocationGrid extends Serenity.EntityGrid<ProductCategoryLocationRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ProductCategoryLocation'; }
        protected getDialogType() { return ProductCategoryLocationDialog; }
        protected getIdProperty() { return ProductCategoryLocationRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCategoryLocationRow.localTextPrefix; }
        protected getService() { return ProductCategoryLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}