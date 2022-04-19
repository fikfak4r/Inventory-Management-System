
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupplierEditorDialog extends Common.GridEditorDialog<SupplierRow> {
        protected getFormKey() { return SupplierForm.formKey; }
                protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getNameProperty() { return SupplierRow.nameProperty; }
        protected form = new SupplierForm(this.idPrefix);
    }
}