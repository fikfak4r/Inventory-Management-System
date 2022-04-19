
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SupplierPurchasesPaymentDetailsGrid extends Serenity.EntityGrid<PurchasesPaymentDetailsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.PurchasesPaymentsDetails'; }
        protected getDialogType() { return PurchasesPaymentDetailsDialog; }
        protected getIdProperty() { return PurchasesPaymentDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesPaymentDetailsRow.localTextPrefix; }
        protected getService() { return PurchasesPaymentDetailsService.baseUrl; }


        constructor(container: JQuery) {
            super(container);
        }

   

        protected getButtons(): Serenity.ToolButton[] {
            var btns = super.getButtons();

            btns.splice(Q.indexOf(btns, x => x.cssClass == "column-picker-button"), 1)
            btns.splice(Q.indexOf(btns, x => x.cssClass == "add-button"), 1)
            return btns;
        }


        protected getInitialTitle() : string
        {
            return null;
        }

        protected getGridCanLoad(): boolean
        {
            return this._supplierId != null;
        }
        

        private _supplierId: number;

        set supplierID(value: number) {

             if(this._supplierId != value)
             {
                 this._supplierId = value;
                 this.setEquality(PurchasesPaymentDetailsRow.Fields.PurchasesSupplierId, value);
                 this.refresh();
            }

        }

        get supplierID(){
            return this._supplierId;
        }




    }
}