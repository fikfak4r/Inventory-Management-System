
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class AccountEditor extends Common.GridEditorBase<AccountRow> {
        protected getColumnsKey() { return 'Administration.Account'; }
        protected getDialogType() { return AccountEditorDialog; }
                protected getLocalTextPrefix() { return AccountRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}