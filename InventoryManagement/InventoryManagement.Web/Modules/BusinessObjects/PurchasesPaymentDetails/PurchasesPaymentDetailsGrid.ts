
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PurchasesPaymentDetailsGrid extends Serenity.EntityGrid<PurchasesPaymentDetailsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.PurchasesPaymentsDetails'; }
        protected getDialogType() { return PurchasesPaymentDetailsDialog; }
        protected getIdProperty() { return PurchasesPaymentDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesPaymentDetailsRow.localTextPrefix; }
        protected getService() { return PurchasesPaymentDetailsService.baseUrl; }


        constructor(container: JQuery) {
            super(container);
        }

   


        protected addButtonClick() {
            
            var dlg = new PurchasesPaymentDetailsDialog();
            dlg.loadEntityAndOpenDialog({ PurchasesId: this.purchasesID })
            dlg.PurchasesDialogReference = this._purchasesDialogRef;
            this.initDialog(dlg);

            return false;
            //this.editItem({ PurchasesId: this.purchasesID });
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
                 this.setEquality(PurchasesPaymentDetailsRow.Fields.PurchasesId, value);
                 this.refresh();
             }
        }

        get purchasesID(){
            return this._purchasesId;
        }



        private _purchasesDialogRef: PurchasesDialog;

        set PurchasesDialogRef(value: PurchasesDialog) {
            this._purchasesDialogRef = value;
        }


    }
}