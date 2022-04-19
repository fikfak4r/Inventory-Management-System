
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PurchasesGrid extends Serenity.EntityGrid<PurchasesRow, any> {
        
        protected getColumnsKey() { return 'BusinessObjects.Purchases'; }
        protected getDialogType() { return PurchasesDialog; }
        protected getIdProperty() { return PurchasesRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesRow.localTextPrefix; }
        protected getService() { return PurchasesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

    }
}