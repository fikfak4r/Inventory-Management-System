
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomerEditorDialog extends Common.GridEditorDialog<CustomerRow> {
        protected getFormKey() { return CustomerForm.formKey; }
                protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getNameProperty() { return CustomerRow.nameProperty; }
        protected form = new CustomerForm(this.idPrefix);
    }
}