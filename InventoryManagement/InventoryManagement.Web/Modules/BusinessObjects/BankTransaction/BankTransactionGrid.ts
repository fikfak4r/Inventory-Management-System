
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class BankTransactionGrid extends Serenity.EntityGrid<BankTransactionRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.BankTransaction'; }
        protected getDialogType() { return BankTransactionDialog; }
        protected getIdProperty() { return BankTransactionRow.idProperty; }
        protected getLocalTextPrefix() { return BankTransactionRow.localTextPrefix; }
        protected getService() { return BankTransactionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}