
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class UnstockGrid extends Serenity.EntityGrid<UnstockRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Unstock'; }
        protected getDialogType() { return UnstockDialog; }
        protected getIdProperty() { return UnstockRow.idProperty; }
        protected getLocalTextPrefix() { return UnstockRow.localTextPrefix; }
        protected getService() { return UnstockService.baseUrl; }

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