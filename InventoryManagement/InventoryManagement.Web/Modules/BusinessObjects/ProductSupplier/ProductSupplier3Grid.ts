
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductSupplier3Grid extends Serenity.EntityGrid<SupplierRow, any> {
        
        protected getColumnsKey() { return 'BusinessObjects.ProductSupplier2'; }
        protected getDialogType() { return <any>SupplierDialog; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getService() { return SupplierService.baseUrl; }


        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
            
        }

        protected getButtons():Serenity.ToolButton[]
        {
            var btns = super.getButtons();

            btns.splice(Q.indexOf(btns, x => x.cssClass == "column-picker-button"), 1)
            
            return btns;
            
        }

        protected getAddButtonCaption(): string {

            return "Add Supplier(s)"
        }

        protected addButtonClick() {

          
            var selectedIDs = this.rowSelection.getSelectedKeys();

            if (selectedIDs.length == 0) {
                Q.notifyWarning("Please select some records to process")

                return;
            }


            ProductService.AddSupplier({
                ProductId: GlobalScripts.ProductId,
                SupplierObjectsList: this.GetSupplierList(selectedIDs)
            }, response => { $("div.s-BusinessObjects-ProductSupplierDialog > div.ui-dialog-titlebar > button").click(); $(".refresh-button").click(); });
            

            return false;
        }


        protected GetSupplierList(ids) {
           return $.map(ids, (elem, index) => {
                return { ProductId: GlobalScripts.ProductId, SupplierId: elem }
            })

        }

        protected getInitialTitle() {
            return null;
        }


        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }


        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

      
            return columns;
        }//Ends getColumns

        private _productId: number;

        set ProductID(value: number) {
            this._productId = value;
        }

        
    }
}