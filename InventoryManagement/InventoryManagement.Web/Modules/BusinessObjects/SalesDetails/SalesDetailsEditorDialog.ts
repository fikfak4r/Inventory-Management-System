
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesDetailsEditorDialog extends Common.GridEditorDialog<SalesDetailsRow> {
        protected getFormKey() { return SalesDetailsForm.formKey; }
                protected getLocalTextPrefix() { return SalesDetailsRow.localTextPrefix; }
        protected form = new SalesDetailsForm(this.idPrefix);
    }
}