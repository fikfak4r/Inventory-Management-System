
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnOutwardsEditorDialog extends Common.GridEditorDialog<ReturnOutwardsRow> {
        protected getFormKey() { return ReturnOutwardsForm.formKey; }
                protected getLocalTextPrefix() { return ReturnOutwardsRow.localTextPrefix; }
        protected form = new ReturnOutwardsForm(this.idPrefix);
    }
}