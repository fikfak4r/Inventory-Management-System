
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PurchasesDetailsGrid extends Serenity.EntityGrid<PurchasesDetailsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.PurchasesDetails'; }
        protected getDialogType() { return PurchasesDetailsDialog; }
        protected getIdProperty() { return PurchasesDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesDetailsRow.localTextPrefix; }
        protected getService() { return PurchasesDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected addButtonClick() {

            var dlg = new PurchasesDetailsDialog();
            dlg.loadEntityAndOpenDialog({ PurchasesId: this.purchasesID })
            dlg.PurchasesDialogReference = this._purchasesDialogRef;
            this.initDialog(dlg);

            return false;
            
            //this.editItem({ PurchasesId: this.purchasesID });

        }


         protected onClick(e: JQueryEventObject, row: number, cell: number){
             e.preventDefault();
             var item = this.itemAt(row);
             var target = $(e.target)

             if (target.hasClass("s-BusinessObjects-PurchasesDetailsLink"))
             {
                 var dlg = new PurchasesDetailsDialog();
                 dlg.PurchasesDialogReference = this._purchasesDialogRef;
                 dlg.loadByIdAndOpenDialog(item.PurchasesDetailsId)

                 this.initDialog(dlg);
             }
         }





        protected getInitialTitle() : string
        {
            return null;
        }

    protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected getGridCanLoad(): boolean
        {
             return super.getGridCanLoad() && !!this.purchasesID
             
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