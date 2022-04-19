
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UserLocationEditorDialog extends Common.GridEditorDialog<UserLocationRow> {
        protected getFormKey() { return UserLocationForm.formKey; }
                protected getLocalTextPrefix() { return UserLocationRow.localTextPrefix; }
        protected form = new UserLocationForm(this.idPrefix);
    }
}