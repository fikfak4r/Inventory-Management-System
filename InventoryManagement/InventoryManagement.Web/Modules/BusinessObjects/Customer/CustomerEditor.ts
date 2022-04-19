
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CustomerEditor extends Common.GridEditorBase<CustomerRow> {
        protected getColumnsKey() { return 'BusinessObjects.Customer'; }
        protected getDialogType() { return CustomerEditorDialog; }
                protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}