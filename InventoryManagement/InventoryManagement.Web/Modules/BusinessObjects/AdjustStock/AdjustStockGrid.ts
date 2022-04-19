
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class AdjustStockGrid extends Serenity.EntityGrid<StockRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.AdjustStock'; }
        protected getDialogType() { return AdjustStockDialog; }
        protected getIdProperty() { return StockRow.idProperty; }
        protected getLocalTextPrefix() { return StockRow.localTextPrefix; }
        protected getService() { return StockService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
   
        }

        protected getInitialTitle():string
         {

             return "Adjust stock"
         }

        protected getButtons():Serenity.ToolButton[]
        {
            var btns = super.getButtons();

            btns.splice(Q.indexOf(btns, x => x.cssClass == "column-picker-button"), 1)
			btns.splice(Q.indexOf(btns, x => x.cssClass == "add-button"), 1)
            return btns;
        }


        // protected onClick(e: JQueryEventObject, row: number, cell: number){
        //     e.preventDefault();
        //     var item = this.itemAt(row);
        //     var target = $(e.target)
        //     var dlg = new Adjus
        // }




    }

    
}