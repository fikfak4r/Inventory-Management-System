///<reference path="../PurchasesDetails/PurchasesDetailsGrid.ts"/>
namespace InventoryManagement.BusinessObjects{
    @Serenity.Decorators.registerClass()

    export class ProductPurchasesDetailsGrid extends PurchasesDetailsGrid{
        constructor(container: JQuery){
            super(container);
            
        }

        private _productID : number;

        protected getButtons(): Serenity.ToolButton[]
        {
            return null;
        }

       //protected getGridCanLoad(){
       //    return this.productID != null;
       //}

        get productID(){
            return this._productID;
        }

 
        set productID(value: number){
            if(this._productID != value){
                this._productID = value;
                this.setEquality(PurchasesDetailsRow.Fields.ProductId, value);
                this.refresh();
            }
        }

    } 
}