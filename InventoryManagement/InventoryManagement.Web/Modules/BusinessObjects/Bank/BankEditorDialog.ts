
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BankEditorDialog extends Common.GridEditorDialog<BankRow> {
        protected getFormKey() { return BankForm.formKey; }
                protected getLocalTextPrefix() { return BankRow.localTextPrefix; }
        protected getNameProperty() { return BankRow.nameProperty; }
        protected form = new BankForm(this.idPrefix);
    }
}