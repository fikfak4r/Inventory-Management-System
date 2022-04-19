
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductLocationEditorDialog extends Common.GridEditorDialog<ProductLocationRow> {
        protected getFormKey() { return ProductLocationForm.formKey; }
                protected getLocalTextPrefix() { return ProductLocationRow.localTextPrefix; }
        protected form = new ProductLocationForm(this.idPrefix);
    }
}