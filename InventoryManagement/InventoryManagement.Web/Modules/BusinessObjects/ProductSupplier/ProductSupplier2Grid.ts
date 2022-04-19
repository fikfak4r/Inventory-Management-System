
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductSupplier2Grid extends Serenity.EntityGrid<SupplierRow, any> {
        
        protected getColumnsKey() { return 'BusinessObjects.ProductSupplier2'; }
        protected getDialogType() { return <any>ProductSupplierDialog; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getService() { return SupplierService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            
        }

        protected getButtons():Serenity.ToolButton[]
        {
            var btns = super.getButtons();

            btns.splice(Q.indexOf(btns, x => x.cssClass == "column-picker-button"), 1)
            
            return btns;
            
        }

        protected getInitialTitle() {
            return null;
        }


    }
}