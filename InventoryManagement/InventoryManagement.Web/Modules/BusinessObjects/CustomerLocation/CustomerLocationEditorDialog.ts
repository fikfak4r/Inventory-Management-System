
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomerLocationEditorDialog extends Common.GridEditorDialog<CustomerLocationRow> {
        protected getFormKey() { return CustomerLocationForm.formKey; }
                protected getLocalTextPrefix() { return CustomerLocationRow.localTextPrefix; }
        protected form = new CustomerLocationForm(this.idPrefix);
    }
}