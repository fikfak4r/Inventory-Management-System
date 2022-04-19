
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReceivePurchasesEditor extends Common.GridEditorBase<ReceivePurchasesRow> {
        protected getColumnsKey() { return 'BusinessObjects.ReceivePurchases'; }
        protected getDialogType() { return ReceivePurchasesEditorDialog; }
                protected getLocalTextPrefix() { return ReceivePurchasesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}