
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SalesPaymentDetailsEditor extends Common.GridEditorBase<SalesPaymentDetailsRow> {
        protected getColumnsKey() { return 'BusinessObjects.SalesPaymentDetails'; }
        protected getDialogType() { return SalesPaymentDetailsEditorDialog; }
                protected getLocalTextPrefix() { return SalesPaymentDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}