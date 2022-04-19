
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductCategoryEditor extends Common.GridEditorBase<ProductCategoryRow> {
        protected getColumnsKey() { return 'BusinessObjects.ProductCategory'; }
        protected getDialogType() { return ProductCategoryEditorDialog; }
                protected getLocalTextPrefix() { return ProductCategoryRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}