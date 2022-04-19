
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnInwardsPaymentEditor extends Common.GridEditorBase<ReturnInwardsPaymentRow> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnInwardsPayment'; }
        protected getDialogType() { return ReturnInwardsPaymentEditorDialog; }
                protected getLocalTextPrefix() { return ReturnInwardsPaymentRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}