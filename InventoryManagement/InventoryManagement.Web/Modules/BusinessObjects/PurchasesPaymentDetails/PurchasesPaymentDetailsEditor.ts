
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PurchasesPaymentDetailsEditor extends Common.GridEditorBase<PurchasesPaymentDetailsRow> {
        protected getColumnsKey() { return 'BusinessObjects.PurchasesPaymentsDetails'; }
        protected getDialogType() { return PurchasesPaymentDetailsEditorDialog; }
                protected getLocalTextPrefix() { return PurchasesPaymentDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}