
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PurchasesDetailsEditor extends Common.GridEditorBase<PurchasesDetailsRow> {
        protected getColumnsKey() { return 'BusinessObjects.PurchasesDetails'; }
        protected getDialogType() { return PurchasesDetailsEditorDialog; }
                protected getLocalTextPrefix() { return PurchasesDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}