
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class ReceivePurchasesGrid extends Serenity.EntityGrid<ReceivePurchasesRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ReceivePurchases'; }
        protected getDialogType() { return ReceivePurchasesDialog; }
        protected getIdProperty() { return ReceivePurchasesRow.idProperty; }
        protected getLocalTextPrefix() { return ReceivePurchasesRow.localTextPrefix; }
        protected getService() { return ReceivePurchasesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

        }




        protected getButtons(): Serenity.ToolButton[] {
            
            var btns = super.getButtons();

            btns.push({
                cssClass: "add-button",
                title: "Auto fill",
                onClick:  () => {
                    
                    var url = "BusinessObjects/ReceivePurchases/AutoFill";
                    Q.serviceRequest(url, this.GetRequestObject(), response => {
                    
                        Q.notifySuccess(response.Status)
                        
                        this.refresh()
                    } )                  
                        
            },

            })
            return btns;
        }

        //Customer func
        public refreshGrid(){
           
        }

        protected addButtonClick() {
            this.editItem({ PurchasesId: this.purchasesID });
        }


        protected getInitialTitle(): string {
            return null;

        }

        protected getGridCanLoad(): boolean {
            return this._purchasesId != null;
        }


        private _purchasesId: number;

        set purchasesID(value: number) {
            if (this._purchasesId != value) {
                this._purchasesId = value;
                this.setEquality(PurchasesDetailsRow.Fields.PurchasesId, value);
                
                this.refresh();
            }
        }

        get purchasesID() {
            return this._purchasesId;
        }

        private GetRequestObject() {
            return { PurchaseId: this.purchasesID, LocationId: GlobalScripts.locationId }
        }

    }
}