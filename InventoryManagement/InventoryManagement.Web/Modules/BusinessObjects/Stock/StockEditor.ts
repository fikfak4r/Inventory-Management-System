
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class StockEditor extends Common.GridEditorBase<StockRow> {
        protected getColumnsKey() { return 'BusinessObjects.Stock'; }
        protected getDialogType() { return StockEditorDialog; }
                protected getLocalTextPrefix() { return StockRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}