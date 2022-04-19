
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class StandardUoMGrid extends Serenity.EntityGrid<StandardUoMRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.StandardUoM'; }
        protected getDialogType() { return StandardUoMDialog; }
        protected getIdProperty() { return StandardUoMRow.idProperty; }
        protected getLocalTextPrefix() { return StandardUoMRow.localTextPrefix; }
        protected getService() { return StandardUoMService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}