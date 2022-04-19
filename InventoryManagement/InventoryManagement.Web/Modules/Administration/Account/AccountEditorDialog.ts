
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AccountEditorDialog extends Common.GridEditorDialog<AccountRow> {
        protected getFormKey() { return AccountForm.formKey; }
                protected getLocalTextPrefix() { return AccountRow.localTextPrefix; }
        protected getNameProperty() { return AccountRow.nameProperty; }
        protected form = new AccountForm(this.idPrefix);
    }
}