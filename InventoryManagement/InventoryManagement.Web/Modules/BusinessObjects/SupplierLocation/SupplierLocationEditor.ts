
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SupplierLocationEditor extends Common.GridEditorBase<SupplierLocationRow> {
        protected getColumnsKey() { return 'BusinessObjects.SupplierLocation'; }
        protected getDialogType() { return SupplierLocationEditorDialog; }
                protected getLocalTextPrefix() { return SupplierLocationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}