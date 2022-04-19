
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SalesUoMAndPriceEditor extends Common.GridEditorBase<SalesUoMAndPriceRow> {
        protected getColumnsKey() { return 'BusinessObjects.SalesUoMAndPrice'; }
        protected getDialogType() { return SalesUoMAndPriceEditorDialog; }
                protected getLocalTextPrefix() { return SalesUoMAndPriceRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

                protected  getAddButtonCaption(): string{
            return 'New sales UOM and price'
        }


    }
}