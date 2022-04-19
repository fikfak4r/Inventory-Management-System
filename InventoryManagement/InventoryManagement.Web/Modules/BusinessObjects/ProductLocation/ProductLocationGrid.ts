
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductLocationGrid extends Serenity.EntityGrid<ProductLocationRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ProductLocation'; }
        protected getDialogType() { return ProductLocationDialog; }
        protected getIdProperty() { return ProductLocationRow.idProperty; }
        protected getLocalTextPrefix() { return ProductLocationRow.localTextPrefix; }
        protected getService() { return ProductLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}