
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UnstockEditorDialog extends Common.GridEditorDialog<UnstockRow> {
        protected getFormKey() { return UnstockForm.formKey; }
                protected getLocalTextPrefix() { return UnstockRow.localTextPrefix; }
        protected form = new UnstockForm(this.idPrefix);
    }
}