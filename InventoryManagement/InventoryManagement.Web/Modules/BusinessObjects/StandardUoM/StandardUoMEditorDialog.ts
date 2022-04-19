
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class StandardUoMEditorDialog extends Common.GridEditorDialog<StandardUoMRow> {
        protected getFormKey() { return StandardUoMForm.formKey; }
                protected getLocalTextPrefix() { return StandardUoMRow.localTextPrefix; }
        protected getNameProperty() { return StandardUoMRow.nameProperty; }
        protected form = new StandardUoMForm(this.idPrefix);
    }
}