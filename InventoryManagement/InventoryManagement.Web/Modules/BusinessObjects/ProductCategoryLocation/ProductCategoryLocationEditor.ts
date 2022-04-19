
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductCategoryLocationEditor extends Common.GridEditorBase<ProductCategoryLocationRow> {
        protected getColumnsKey() { return 'BusinessObjects.ProductCategoryLocation'; }
        protected getDialogType() { return ProductCategoryLocationEditorDialog; }
                protected getLocalTextPrefix() { return ProductCategoryLocationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}