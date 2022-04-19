
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class MovementHistoryGrid extends Serenity.EntityGrid<MovementHistoryRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.MovementHistory'; }
        protected getDialogType() { return MovementHistoryDialog; }
        protected getIdProperty() { return MovementHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return MovementHistoryRow.localTextPrefix; }
        protected getService() { return MovementHistoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }



        protected getButtons(): Serenity.ToolButton[] {
            var btns = super.getButtons();

            btns.splice(Q.indexOf(btns, x => x.cssClass == "column-picker-button"), 1)
            btns.splice(Q.indexOf(btns, x => x.cssClass == "add-button"), 1)
            return btns;
        }


        protected getInitialTitle(): string {
            return null;
        }


        protected getGridCanLoad() {
            return this.productID != null;
        }


        private _productID: number;

        get productID() {
            return this._productID;
        }


        set productID(value: number) {
            if (this._productID != value) {
                this._productID = value;
                this.setEquality(MovementHistoryRow.Fields.ProductId, value);
                this.refresh();
            }
        }






    }
}