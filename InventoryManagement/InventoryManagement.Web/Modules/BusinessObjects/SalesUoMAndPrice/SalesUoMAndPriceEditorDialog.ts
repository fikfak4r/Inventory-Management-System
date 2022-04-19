
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesUoMAndPriceEditorDialog extends Common.GridEditorDialog<SalesUoMAndPriceRow> {
        protected getFormKey() { return SalesUoMAndPriceForm.formKey; }
                protected getLocalTextPrefix() { return SalesUoMAndPriceRow.localTextPrefix; }
        protected getNameProperty() { return SalesUoMAndPriceRow.nameProperty; }
        protected form = new SalesUoMAndPriceForm(this.idPrefix);
    }
}