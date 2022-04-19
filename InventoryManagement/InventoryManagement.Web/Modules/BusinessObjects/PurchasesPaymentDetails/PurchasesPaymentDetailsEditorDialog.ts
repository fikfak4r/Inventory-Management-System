
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchasesPaymentDetailsEditorDialog extends Common.GridEditorDialog<PurchasesPaymentDetailsRow> {
        protected getFormKey() { return PurchasesPaymentDetailsForm.formKey; }
                protected getLocalTextPrefix() { return PurchasesPaymentDetailsRow.localTextPrefix; }
        protected form = new PurchasesPaymentDetailsForm(this.idPrefix);
    }
}