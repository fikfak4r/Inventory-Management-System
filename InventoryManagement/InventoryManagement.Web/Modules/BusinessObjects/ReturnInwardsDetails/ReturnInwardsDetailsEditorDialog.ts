
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnInwardsDetailsEditorDialog extends Common.GridEditorDialog<ReturnInwardsDetailsRow> {
        protected getFormKey() { return ReturnInwardsDetailsForm.formKey; }
                protected getLocalTextPrefix() { return ReturnInwardsDetailsRow.localTextPrefix; }
        protected form = new ReturnInwardsDetailsForm(this.idPrefix);
    }
}