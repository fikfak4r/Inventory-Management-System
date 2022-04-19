
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PurchasesEditor extends Common.GridEditorBase<PurchasesRow> {
        protected getColumnsKey() { return 'BusinessObjects.Purchases'; }
        protected getDialogType() { return PurchasesEditorDialog; }
                protected getLocalTextPrefix() { return PurchasesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}