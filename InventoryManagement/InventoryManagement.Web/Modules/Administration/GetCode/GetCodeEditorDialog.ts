
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class GetCodeEditorDialog extends Common.GridEditorDialog<GetCodeRow> {
        protected getFormKey() { return GetCodeForm.formKey; }
                protected getLocalTextPrefix() { return GetCodeRow.localTextPrefix; }
        protected getNameProperty() { return GetCodeRow.nameProperty; }
        protected form = new GetCodeForm(this.idPrefix);
    }
}