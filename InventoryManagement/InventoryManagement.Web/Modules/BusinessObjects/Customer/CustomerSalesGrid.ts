/// <reference path="../Sales/SalesGrid.ts" />

namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class CustomerSalesGrid extends SalesGrid {

      //protected getDialogType(){ return SuppplierProductDialog; }

        constructor(container: JQuery) {
            super(container);
        }


        protected addButtonClick() {
            this.editItem({ CustomerId: this.customerID });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            //return this._customerID != null;
                return super.getGridCanLoad() && !!this.customerID;
        }

        private _customerID: number;

        get customerID() {
            return this._customerID;
        }

        set customerID(value: number) {
            if (this._customerID != value) {
                this._customerID = value;
                this.setEquality("CustomerId", value);
                this.refresh();
            }
        }
    }
}