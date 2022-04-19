
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnOutwardsDetailsGrid extends Serenity.EntityGrid<ReturnOutwardsDetailsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnOutwardsDetails'; }
        protected getDialogType() { return ReturnOutwardsDetailsDialog; }
        protected getIdProperty() { return ReturnOutwardsDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnOutwardsDetailsRow.localTextPrefix; }
        protected getService() { return ReturnOutwardsDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

       //protected addButtonClick() {
       //     this.editItem({ PurchasesId: this.purchasesID, LocationId: GlobalScripts.locationId });
       // }


       protected addButtonClick() {

           var dlg = new ReturnOutwardsDetailsDialog();
           dlg.loadEntityAndOpenDialog({ PurchasesId: this.purchasesID, LocationId: GlobalScripts.locationId  })
           dlg.PurchasesDialogReference = this._purchasesDialogRef;
           this.initDialog(dlg);

           return false;
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


        private _purchasesDialogRef: PurchasesDialog;

        set PurchasesDialogRef(value: PurchasesDialog) {
            this._purchasesDialogRef = value;
        }

    }
}