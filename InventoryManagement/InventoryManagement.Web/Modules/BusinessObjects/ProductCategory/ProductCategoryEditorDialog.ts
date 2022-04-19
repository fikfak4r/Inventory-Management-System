
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductCategoryEditorDialog extends Common.GridEditorDialog<ProductCategoryRow> {
        protected getFormKey() { return ProductCategoryForm.formKey; }
                protected getLocalTextPrefix() { return ProductCategoryRow.localTextPrefix; }
        protected getNameProperty() { return ProductCategoryRow.nameProperty; }
        protected form = new ProductCategoryForm(this.idPrefix);
    }
}