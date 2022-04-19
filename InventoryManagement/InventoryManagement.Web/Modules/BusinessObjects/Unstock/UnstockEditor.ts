
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class UnstockEditor extends Common.GridEditorBase<UnstockRow> {
        protected getColumnsKey() { return 'BusinessObjects.Unstock'; }
        protected getDialogType() { return UnstockEditorDialog; }
                protected getLocalTextPrefix() { return UnstockRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}