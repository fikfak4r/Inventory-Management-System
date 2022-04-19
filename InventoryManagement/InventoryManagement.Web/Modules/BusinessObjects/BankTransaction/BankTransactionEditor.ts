
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class BankTransactionEditor extends Common.GridEditorBase<BankTransactionRow> {
        protected getColumnsKey() { return 'BusinessObjects.BankTransaction'; }
        protected getDialogType() { return BankTransactionEditorDialog; }
                protected getLocalTextPrefix() { return BankTransactionRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}