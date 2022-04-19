
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesInvoiceEditorDialog extends Common.GridEditorDialog<SalesInvoiceRow> {
        protected getFormKey() { return SalesInvoiceForm.formKey; }
                protected getLocalTextPrefix() { return SalesInvoiceRow.localTextPrefix; }
        protected form = new SalesInvoiceForm(this.idPrefix);
    }
}