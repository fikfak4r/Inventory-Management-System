
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class PurchaseTrailGrid extends Serenity.EntityGrid<PurchaseTrailRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.PurchaseTrail'; }
        protected getDialogType() { return PurchaseTrailDialog; }
        protected getIdProperty() { return PurchaseTrailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseTrailRow.localTextPrefix; }
        protected getService() { return PurchaseTrailService.baseUrl; }

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


        protected getGridCanLoad(): boolean {
            return super.getGridCanLoad() && !!this.purchasesID

        }


        private _purchasesId: number;

        set purchasesID(value: number) {
            if (this._purchasesId != value) {
                this._purchasesId = value;
                this.setEquality(PurchaseTrailRow.Fields.PurchasesId, value);
                this.refresh();
            }
        }

        get purchasesID() {
            return this._purchasesId;
        }








    }
}