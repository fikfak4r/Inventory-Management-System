
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CostingInfoGrid extends Serenity.EntityGrid<CostingInfoRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.CostingInfo'; }
        protected getDialogType() { return CostingInfoDialog; }
        protected getIdProperty() { return CostingInfoRow.idProperty; }
        protected getLocalTextPrefix() { return CostingInfoRow.localTextPrefix; }
        protected getService() { return CostingInfoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}