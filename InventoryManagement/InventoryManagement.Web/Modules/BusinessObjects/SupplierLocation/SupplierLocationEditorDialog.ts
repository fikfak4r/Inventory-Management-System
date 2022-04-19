
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupplierLocationEditorDialog extends Common.GridEditorDialog<SupplierLocationRow> {
        protected getFormKey() { return SupplierLocationForm.formKey; }
                protected getLocalTextPrefix() { return SupplierLocationRow.localTextPrefix; }
        protected form = new SupplierLocationForm(this.idPrefix);
    }
}