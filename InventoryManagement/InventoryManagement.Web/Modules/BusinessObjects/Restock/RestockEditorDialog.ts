
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RestockEditorDialog extends Common.GridEditorDialog<RestockRow> {
        protected getFormKey() { return RestockForm.formKey; }
                protected getLocalTextPrefix() { return RestockRow.localTextPrefix; }
        protected form = new RestockForm(this.idPrefix);
    }
}