
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Product'; }
        protected getDialogType() { return ProductDialog; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getService() { return ProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
          

        // protected getColumns(): Slick.Column[]
        // {
        //    var columns = super.getColumns();
        //    Q.first(columns, x => x.field == ProductRow.Fields.Pricing).format = 
        //    //ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;
        //    ctx => `<a href="javascript:;" class="pricing-link">Pricing</a>`;
       
        //    return columns;
        // }
          
    //    protected onClick(e: JQueryEventObject, row: number, cell: number){
    //        super.onClick(e, row, cell);

    //        var item = this.itemAt(row);

    //        var target = $(e.target)

    //        if(target.hasClass("pricing-link")){

    //            new PricingDialog().loadByIdAndOpenDialog(item.ProductId);
    //         //    var res = PurchasesUoMAndPriceRow.getLookup().items.filter(x => x.ProductId == item.ProductId);



    //         //    new PurchasesUoMAndPriceDialog().loadEntity(res);
    //        }

    //    }
        
 
    }

}