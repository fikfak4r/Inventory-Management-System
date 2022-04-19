
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CostingInfoEditorDialog extends Common.GridEditorDialog<CostingInfoRow> {
        protected getFormKey() { return CostingInfoForm.formKey; }
                protected getLocalTextPrefix() { return CostingInfoRow.localTextPrefix; }
        protected form = new CostingInfoForm(this.idPrefix);
    }
}