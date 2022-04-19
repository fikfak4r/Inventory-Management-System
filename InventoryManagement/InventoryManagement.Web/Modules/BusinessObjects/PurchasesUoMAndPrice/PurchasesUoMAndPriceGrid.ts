
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PurchasesUoMAndPriceGrid extends Serenity.EntityGrid<PurchasesUoMAndPriceRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.PurchasesUoMAndPrice'; }
        protected getDialogType() { return PurchasesUoMAndPriceDialog; }
        protected getIdProperty() { return PurchasesUoMAndPriceRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesUoMAndPriceRow.localTextPrefix; }
        protected getService() { return PurchasesUoMAndPriceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getInitialTitle(): string {
            return "Purchases UoM and Price";
        }



        protected addButtonClick() {
            this.editItem({ ProductId: this.productID })
        }





        private _productID: number;

        get productID() {
            return this._productID;
        }


        set productID(value: number) {
            if (this._productID != value) {
                this._productID = value;
                this.setEquality(PurchasesUoMAndPriceRow.Fields.ProductId, value);
                this.refresh();
            }
        }


    }
}