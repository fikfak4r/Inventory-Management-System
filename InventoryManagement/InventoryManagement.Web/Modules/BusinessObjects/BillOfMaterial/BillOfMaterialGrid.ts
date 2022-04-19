
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class BillOfMaterialGrid extends Serenity.EntityGrid<BillOfMaterialRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.BillOfMaterial'; }
        protected getDialogType() { return BillOfMaterialDialog; }
        protected getIdProperty() { return BillOfMaterialRow.idProperty; }
        protected getLocalTextPrefix() { return BillOfMaterialRow.localTextPrefix; }
        protected getService() { return BillOfMaterialService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected addButtonClick() {
            this.editItem({ ProductId: this.productID })
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
                this.setEquality(BillOfMaterialRow.Fields.ProductId, value);
                this.refresh();
            }
        }






    }
}