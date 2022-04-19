
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchasesEditorDialog extends Common.GridEditorDialog<PurchasesRow> {
        protected getFormKey() { return PurchasesForm.formKey; }
                protected getLocalTextPrefix() { return PurchasesRow.localTextPrefix; }
        protected getNameProperty() { return PurchasesRow.nameProperty; }
        protected form = new PurchasesForm(this.idPrefix);
    }
}