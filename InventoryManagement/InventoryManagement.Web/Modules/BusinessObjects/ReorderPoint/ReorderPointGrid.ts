
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReorderPointGrid extends Serenity.EntityGrid<ReorderPointRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ReorderPoint'; }
        protected getDialogType() { return ReorderPointDialog; }
        protected getIdProperty() { return ReorderPointRow.idProperty; }
        protected getLocalTextPrefix() { return ReorderPointRow.localTextPrefix; }
        protected getService() { return ReorderPointService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}