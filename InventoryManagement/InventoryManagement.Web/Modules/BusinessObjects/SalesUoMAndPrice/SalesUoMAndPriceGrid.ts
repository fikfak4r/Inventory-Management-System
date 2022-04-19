
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SalesUoMAndPriceGrid extends Serenity.EntityGrid<SalesUoMAndPriceRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.SalesUoMAndPrice'; }
        protected getDialogType() { return SalesUoMAndPriceDialog; }
        protected getIdProperty() { return SalesUoMAndPriceRow.idProperty; }
        protected getLocalTextPrefix() { return SalesUoMAndPriceRow.localTextPrefix; }
        protected getService() { return SalesUoMAndPriceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }



        protected getInitialTitle(): string {
            return "Sales UoM and Price";
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
                this.setEquality(SalesUoMAndPriceRow.Fields.ProductId, value);
                this.refresh();
            }
        }


    }
}