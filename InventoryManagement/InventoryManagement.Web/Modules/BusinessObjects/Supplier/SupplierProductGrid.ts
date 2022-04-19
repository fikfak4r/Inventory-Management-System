/// <reference path="../Product/ProductGrid.ts" />

namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class SupplierProductGrid extends ProductGrid {

        protected getDialogType(){ return SupplierProductDialog; }

        constructor(container: JQuery) {
            super(container);
        }


        protected addButtonClick() {
            this.editItem({ SupplierId: this.supplierID });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            //return this._supplierID != null;
                return super.getGridCanLoad() && !!this.supplierID;
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