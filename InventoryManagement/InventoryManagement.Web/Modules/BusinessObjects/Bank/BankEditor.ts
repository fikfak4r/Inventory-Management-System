
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class BankEditor extends Common.GridEditorBase<BankRow> {
        protected getColumnsKey() { return 'BusinessObjects.Bank'; }
        protected getDialogType() { return BankEditorDialog; }
                protected getLocalTextPrefix() { return BankRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}