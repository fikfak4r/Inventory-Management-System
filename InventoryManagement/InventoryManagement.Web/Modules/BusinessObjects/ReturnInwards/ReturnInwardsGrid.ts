
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnInwardsGrid extends Serenity.EntityGrid<ReturnInwardsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnInwards'; }
        protected getDialogType() { return ReturnInwardsDialog; }
        protected getIdProperty() { return ReturnInwardsRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnInwardsRow.localTextPrefix; }
        protected getService() { return ReturnInwardsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}