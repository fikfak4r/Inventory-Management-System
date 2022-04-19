
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class RestockEditor extends Common.GridEditorBase<RestockRow> {
        protected getColumnsKey() { return 'BusinessObjects.Restock'; }
        protected getDialogType() { return RestockEditorDialog; }
                protected getLocalTextPrefix() { return RestockRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}