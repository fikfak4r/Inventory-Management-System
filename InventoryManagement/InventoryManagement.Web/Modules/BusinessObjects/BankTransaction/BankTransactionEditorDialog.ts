
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BankTransactionEditorDialog extends Common.GridEditorDialog<BankTransactionRow> {
        protected getFormKey() { return BankTransactionForm.formKey; }
                protected getLocalTextPrefix() { return BankTransactionRow.localTextPrefix; }
        protected getNameProperty() { return BankTransactionRow.nameProperty; }
        protected form = new BankTransactionForm(this.idPrefix);
    }
}