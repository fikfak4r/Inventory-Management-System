
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchasesDetailsEditorDialog extends Common.GridEditorDialog<PurchasesDetailsRow> {
        protected getFormKey() { return PurchasesDetailsForm.formKey; }
                protected getLocalTextPrefix() { return PurchasesDetailsRow.localTextPrefix; }
        protected form = new PurchasesDetailsForm(this.idPrefix);
    }
}