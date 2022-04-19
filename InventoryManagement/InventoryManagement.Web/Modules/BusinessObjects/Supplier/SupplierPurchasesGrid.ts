
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SupplierPurchasesGrid extends Serenity.EntityGrid<PurchasesRow, any> {
        
        protected getColumnsKey() { return 'BusinessObjects.Purchases'; }
        protected getDialogType() { return PurchasesDialog; }
        protected getIdProperty() { return PurchasesRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesRow.localTextPrefix; }
        protected getService() { return PurchasesService.baseUrl; }

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
            return this._supplierID != null;
        }


        private _supplierID: number;

        get supplierID() {
            return this._supplierID;
        }

        set supplierID(value: number) {
            if (this._supplierID != value) {
                this._supplierID = value;
                this.setEquality("SupplierId", value);
                this.refresh();
            }
        }


    }
}