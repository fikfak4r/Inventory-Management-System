
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductEditor extends Common.GridEditorBase<ProductRow> {

        protected getColumnsKey() { return 'BusinessObjects.Product'; }
        protected getDialogType() { return ProductEditorDialog; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}