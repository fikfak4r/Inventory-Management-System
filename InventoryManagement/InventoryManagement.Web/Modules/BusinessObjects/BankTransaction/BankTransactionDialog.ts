
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BankTransactionDialog extends Serenity.EntityDialog<BankTransactionRow, any> {
        protected getFormKey() { return BankTransactionForm.formKey; }
        protected getIdProperty() { return BankTransactionRow.idProperty; }
        protected getLocalTextPrefix() { return BankTransactionRow.localTextPrefix; }
        protected getNameProperty() { return BankTransactionRow.nameProperty; }
        protected getService() { return BankTransactionService.baseUrl; }

        protected form = new BankTransactionForm(this.idPrefix);

    }
}