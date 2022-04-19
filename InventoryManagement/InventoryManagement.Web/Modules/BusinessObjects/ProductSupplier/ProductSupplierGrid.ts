
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class ProductSupplierGrid extends Serenity.EntityGrid<ProductSupplierRow, any> {


        protected getColumnsKey() { return 'BusinessObjects.ProductSupplier'; }
        protected getDialogType() { return ProductSupplierDialog; }
        protected getIdProperty() { return ProductSupplierRow.idProperty; }
        protected getLocalTextPrefix() { return ProductSupplierRow.localTextPrefix; }
        protected getService() { return ProductSupplierService.baseUrl; }


        constructor(container: JQuery) {
            super(container);
        }

        //protected addButtonClick() {
        //    alert(this.productID)
        //    this.editItem({ ProductId: this.productID })
        //}


        protected getInitialTitle(): string {
            return null;
        }


        protected getAddButtonCaption(): string
        {
            return "Select suppliers";
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
                this.setEquality(ProductSupplierRow.Fields.ProductId, value);
                this.refresh();
            }
        }


    }
}