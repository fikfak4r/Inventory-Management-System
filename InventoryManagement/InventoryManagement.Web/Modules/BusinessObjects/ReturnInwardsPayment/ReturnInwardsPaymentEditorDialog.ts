
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnInwardsPaymentEditorDialog extends Common.GridEditorDialog<ReturnInwardsPaymentRow> {
        protected getFormKey() { return ReturnInwardsPaymentForm.formKey; }
                protected getLocalTextPrefix() { return ReturnInwardsPaymentRow.localTextPrefix; }
        protected form = new ReturnInwardsPaymentForm(this.idPrefix);
    }
}