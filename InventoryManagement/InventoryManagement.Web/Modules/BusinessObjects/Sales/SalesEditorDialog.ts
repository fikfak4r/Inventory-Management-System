
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesEditorDialog extends Common.GridEditorDialog<SalesRow> {
        protected getFormKey() { return SalesForm.formKey; }
                protected getLocalTextPrefix() { return SalesRow.localTextPrefix; }
        protected getNameProperty() { return SalesRow.nameProperty; }
        protected form = new SalesForm(this.idPrefix);
    }
}