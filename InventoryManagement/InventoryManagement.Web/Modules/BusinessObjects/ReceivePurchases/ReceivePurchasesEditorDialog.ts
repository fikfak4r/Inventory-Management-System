
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReceivePurchasesEditorDialog extends Common.GridEditorDialog<ReceivePurchasesRow> {
        protected getFormKey() { return ReceivePurchasesForm.formKey; }
                protected getLocalTextPrefix() { return ReceivePurchasesRow.localTextPrefix; }
        protected form = new ReceivePurchasesForm(this.idPrefix);
    }
}