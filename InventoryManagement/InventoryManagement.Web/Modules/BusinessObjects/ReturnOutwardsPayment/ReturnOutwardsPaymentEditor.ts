
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnOutwardsPaymentEditor extends Common.GridEditorBase<ReturnOutwardsPaymentRow> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnOutwardsPayments'; }
        protected getDialogType() { return ReturnOutwardsPaymentEditorDialog; }
                protected getLocalTextPrefix() { return ReturnOutwardsPaymentRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}