
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SalesEditor extends Common.GridEditorBase<SalesRow> {
        protected getColumnsKey() { return 'BusinessObjects.Sales'; }
        protected getDialogType() { return SalesEditorDialog; }
                protected getLocalTextPrefix() { return SalesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}