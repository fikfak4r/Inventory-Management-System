
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class NotesGrid extends Serenity.EntityGrid<NotesRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Notes'; }
        protected getDialogType() { return NotesDialog; }
        protected getIdProperty() { return NotesRow.idProperty; }
        protected getLocalTextPrefix() { return NotesRow.localTextPrefix; }
        protected getService() { return NotesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

         protected addButtonClick() {
            this.editItem({ PurchaseId: this.purchasesID });
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
                 this.setEquality(NotesRow.Fields.PurchaseId, value);
                 this.refresh();
             }
        }

        get purchasesID(){
            return this._purchasesId;
        }



    }
}