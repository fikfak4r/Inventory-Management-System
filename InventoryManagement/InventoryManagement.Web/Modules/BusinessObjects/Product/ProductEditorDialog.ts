
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductEditorDialog extends Common.GridEditorDialog<ProductRow> {
        protected getFormKey() { return ProductForm.formKey; }
                protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected form = new ProductForm(this.idPrefix);
    }
}