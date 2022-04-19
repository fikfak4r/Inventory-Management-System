
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SalesGrid extends Serenity.EntityGrid<SalesRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Sales'; }
        protected getDialogType() { return SalesDialog; }
        protected getIdProperty() { return SalesRow.idProperty; }
        protected getLocalTextPrefix() { return SalesRow.localTextPrefix; }
        protected getService() { return SalesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}