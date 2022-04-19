
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnOutwardsGrid extends Serenity.EntityGrid<ReturnOutwardsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnOutwards'; }
        protected getDialogType() { return ReturnOutwardsDialog; }
        protected getIdProperty() { return ReturnOutwardsRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnOutwardsRow.localTextPrefix; }
        protected getService() { return ReturnOutwardsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}