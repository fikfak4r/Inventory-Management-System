
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnInwardsEditorDialog extends Common.GridEditorDialog<ReturnInwardsRow> {
        protected getFormKey() { return ReturnInwardsForm.formKey; }
                protected getLocalTextPrefix() { return ReturnInwardsRow.localTextPrefix; }
        protected form = new ReturnInwardsForm(this.idPrefix);
    }
}