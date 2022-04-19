
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesPaymentDetailsEditorDialog extends Common.GridEditorDialog<SalesPaymentDetailsRow> {
        protected getFormKey() { return SalesPaymentDetailsForm.formKey; }
                protected getLocalTextPrefix() { return SalesPaymentDetailsRow.localTextPrefix; }
        protected getNameProperty() { return SalesPaymentDetailsRow.nameProperty; }
        protected form = new SalesPaymentDetailsForm(this.idPrefix);
    }
}