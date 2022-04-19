
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RoleLocationEditorDialog extends Common.GridEditorDialog<RoleLocationRow> {
        protected getFormKey() { return RoleLocationForm.formKey; }
                protected getLocalTextPrefix() { return RoleLocationRow.localTextPrefix; }
        protected form = new RoleLocationForm(this.idPrefix);
    }
}