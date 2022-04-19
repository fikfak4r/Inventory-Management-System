
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PurchasesUoMAndPriceEditor extends Common.GridEditorBase<PurchasesUoMAndPriceRow> {
        protected getColumnsKey() { return 'BusinessObjects.PurchasesUoMAndPrice'; }
        protected getDialogType() { return PurchasesUoMAndPriceEditorDialog; }
                protected getLocalTextPrefix() { return PurchasesUoMAndPriceRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
            
        }

        protected addButtonClick() {

        }

        protected  getAddButtonCaption(): string{
            return 'New purchases UOM and price'
            
        }


    



    }
}

