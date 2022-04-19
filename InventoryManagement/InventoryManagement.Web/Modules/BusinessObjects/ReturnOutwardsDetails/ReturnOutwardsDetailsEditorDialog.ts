
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnOutwardsDetailsEditorDialog extends Common.GridEditorDialog<ReturnOutwardsDetailsRow> {
        protected getFormKey() { return ReturnOutwardsDetailsForm.formKey; }
                protected getLocalTextPrefix() { return ReturnOutwardsDetailsRow.localTextPrefix; }
        protected form = new ReturnOutwardsDetailsForm(this.idPrefix);
    }
}