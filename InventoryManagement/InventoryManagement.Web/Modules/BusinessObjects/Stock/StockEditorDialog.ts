
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class StockEditorDialog extends Common.GridEditorDialog<StockRow> {
        protected getFormKey() { return StockForm.formKey; }
                protected getLocalTextPrefix() { return StockRow.localTextPrefix; }
        protected form = new StockForm(this.idPrefix);
    }
}