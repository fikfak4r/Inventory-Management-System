
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class ProductSupplier4Grid extends Serenity.EntityGrid<ProductSupplierRow, any> {


        protected getColumnsKey() { return 'BusinessObjects.ProductSupplier4'; }
        protected getDialogType() { return SupplierProductDialog; }
        protected getIdProperty() { return ProductSupplierRow.idProperty; }
        protected getLocalTextPrefix() { return ProductSupplierRow.localTextPrefix; }
        protected getService() { return ProductSupplierService.baseUrl; }


        constructor(container: JQuery) {
            super(container);
        }


        protected addButtonClick() {
            //alert(this.supplierID)
            this.editItem({ SupplierId: this.supplierID })
            
        }


           protected onClick(e: JQueryEventObject, row: number, cell: number){
             e.preventDefault();
             var item = this.itemAt(row);
             var target = $(e.target)

             //this.editItem({ SupplierId: item.SupplierId })
             if (target.hasClass("s-BusinessObjects-ProductSupplier4Link")) {

                 //this.supplierID = item.SupplierId
                 var dlg = new SupplierProductDialog()
                 
                 this.initDialog(dlg);
                 dlg.loadByIdAndOpenDialog(item.ProductId);
                 //dlg.loadEntityAndOpenDialog({ SupplierId: this.supplierID, ProductId: item.ProductId })
             }
         }


        //protected onClick(e: JQueryEventObject, row: number, cell: number) {
          
        //    super.onClick(e, row, cell);

        //    if (e.isDefaultPrevented())
        //        return;

        //    alert('Cliced 2')
        //    var item = this.itemAt(row);
        //    var target = $(e.target);

        //    // if user clicks "i" element, e.g. icon
        //    if (target.parent().hasClass('inline-action'))
        //        target = target.parent();

        //    alert('Cliced 3')
        //    if(target.hasClass("s-BusinessObjects-ProductSupplier4Link"))
        //    {
        //        alert('Cliced 4')
        //        var dlg = new ProductDialog()
        //        this.initDialog(dlg);
        //        dlg.loadByIdAndOpenDialog(item.ProductId)
        //     }

        //    alert('Cliced 5')


        //}//Ends onClick


        protected getInitialTitle(): string {
            return null;
        }


        protected getAddButtonCaption(): string
        {
            return "New Product";
        }



        protected getGridCanLoad() {
            return this.supplierID != null;
        }


        private _supplierID: number;

        get supplierID() {
            return this._supplierID;
        }


        set supplierID(value: number) {
            if (this._supplierID != value) {
                this._supplierID = value;
                this.setEquality(ProductSupplierRow.Fields.SupplierId, value);
                this.refresh();
            }
        }


    }
}