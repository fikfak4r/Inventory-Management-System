
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReorderPointEditorDialog extends Common.GridEditorDialog<ReorderPointRow> {
        protected getFormKey() { return ReorderPointForm.formKey; }
                protected getLocalTextPrefix() { return ReorderPointRow.localTextPrefix; }
        protected form = new ReorderPointForm(this.idPrefix);
    }
}