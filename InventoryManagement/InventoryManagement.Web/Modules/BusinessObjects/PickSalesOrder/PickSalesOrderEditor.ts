
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PickSalesOrderEditor extends Common.GridEditorBase<PickSalesOrderRow> {
        protected getColumnsKey() { return 'BusinessObjects.PickSalesOrder'; }
        protected getDialogType() { return PickSalesOrderEditorDialog; }
                protected getLocalTextPrefix() { return PickSalesOrderRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}