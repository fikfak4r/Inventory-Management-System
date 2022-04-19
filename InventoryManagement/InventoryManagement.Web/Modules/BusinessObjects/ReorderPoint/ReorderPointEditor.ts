
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReorderPointEditor extends Common.GridEditorBase<ReorderPointRow> {
        protected getColumnsKey() { return 'BusinessObjects.ReorderPoint'; }
        protected getDialogType() { return ReorderPointEditorDialog; }
                protected getLocalTextPrefix() { return ReorderPointRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}