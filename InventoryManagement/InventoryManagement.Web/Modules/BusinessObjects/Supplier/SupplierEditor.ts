
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SupplierEditor extends Common.GridEditorBase<SupplierRow> {
        protected getColumnsKey() { return 'BusinessObjects.Supplier'; }
        protected getDialogType() { return SupplierEditorDialog; }
                protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}