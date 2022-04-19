
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class StockGrid extends Serenity.EntityGrid<StockRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Stock'; }
        protected getDialogType() { return StockDialog; }
        protected getIdProperty() { return StockRow.idProperty; }
        protected getLocalTextPrefix() { return StockRow.localTextPrefix; }
        protected getService() { return StockService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
         
        }

		/*
        protected   getButtons():Serenity.ToolButton[]{
                return null;
            }
			*/

		protected getButtons():Serenity.ToolButton[]
        {
            var btns = super.getButtons();

            btns.splice(Q.indexOf(btns, x => x.cssClass == "column-picker-button"), 1)
			btns.splice(Q.indexOf(btns, x => x.cssClass == "add-button"), 1)
            return btns;
        }

    }

    
}