
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CustomerLocationEditor extends Common.GridEditorBase<CustomerLocationRow> {
        protected getColumnsKey() { return 'BusinessObjects.CustomerLocation'; }
        protected getDialogType() { return CustomerLocationEditorDialog; }
                protected getLocalTextPrefix() { return CustomerLocationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}