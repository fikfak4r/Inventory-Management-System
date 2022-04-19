
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductCategoryLocationEditorDialog extends Common.GridEditorDialog<ProductCategoryLocationRow> {
        protected getFormKey() { return ProductCategoryLocationForm.formKey; }
                protected getLocalTextPrefix() { return ProductCategoryLocationRow.localTextPrefix; }
        protected form = new ProductCategoryLocationForm(this.idPrefix);
    }
}