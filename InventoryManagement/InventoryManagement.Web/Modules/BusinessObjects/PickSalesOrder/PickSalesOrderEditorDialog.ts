
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PickSalesOrderEditorDialog extends Common.GridEditorDialog<PickSalesOrderRow> {
        protected getFormKey() { return PickSalesOrderForm.formKey; }
                protected getLocalTextPrefix() { return PickSalesOrderRow.localTextPrefix; }
        protected form = new PickSalesOrderForm(this.idPrefix);
    }
}