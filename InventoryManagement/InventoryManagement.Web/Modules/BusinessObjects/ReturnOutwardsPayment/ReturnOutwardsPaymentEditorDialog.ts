
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnOutwardsPaymentEditorDialog extends Common.GridEditorDialog<ReturnOutwardsPaymentRow> {
        protected getFormKey() { return ReturnOutwardsPaymentForm.formKey; }
                protected getLocalTextPrefix() { return ReturnOutwardsPaymentRow.localTextPrefix; }
        protected form = new ReturnOutwardsPaymentForm(this.idPrefix);
    }
}