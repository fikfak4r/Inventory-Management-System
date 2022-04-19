
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SalesInvoiceEditor extends Common.GridEditorBase<SalesInvoiceRow> {
        protected getColumnsKey() { return 'BusinessObjects.SalesInvoice'; }
        protected getDialogType() { return SalesInvoiceEditorDialog; }
                protected getLocalTextPrefix() { return SalesInvoiceRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}