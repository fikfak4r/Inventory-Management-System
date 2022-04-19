
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SalesDetailsEditor extends Common.GridEditorBase<SalesDetailsRow> {
        protected getColumnsKey() { return 'BusinessObjects.SalesDetails'; }
        protected getDialogType() { return SalesDetailsEditorDialog; }
                protected getLocalTextPrefix() { return SalesDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}