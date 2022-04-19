
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class BankGrid extends Serenity.EntityGrid<BankRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Bank'; }
        protected getDialogType() { return BankDialog; }
        protected getIdProperty() { return BankRow.idProperty; }
        protected getLocalTextPrefix() { return BankRow.localTextPrefix; }
        protected getService() { return BankService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}