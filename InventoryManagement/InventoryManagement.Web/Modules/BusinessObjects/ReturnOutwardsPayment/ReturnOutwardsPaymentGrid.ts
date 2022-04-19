
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnOutwardsPaymentGrid extends Serenity.EntityGrid<ReturnOutwardsPaymentRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnOutwardsPayments'; }
        protected getDialogType() { return ReturnOutwardsPaymentDialog; }
        protected getIdProperty() { return ReturnOutwardsPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnOutwardsPaymentRow.localTextPrefix; }
        protected getService() { return ReturnOutwardsPaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

       protected addButtonClick() {
            this.editItem({ PurchasesId: this.purchasesID });
        }


        protected getInitialTitle() : string
        {
            return null;
            
        }

        protected getGridCanLoad(): boolean
        {
            return this._purchasesId != null;
        }


        private _purchasesId: number;

         set purchasesID(value: number){
             if(this._purchasesId != value)
             {
                 this._purchasesId = value;
                 this.setEquality(PurchasesDetailsRow.Fields.PurchasesId, value);
                 this.refresh();
             }
        }

        get purchasesID(){
            return this._purchasesId;
        }

    }
}