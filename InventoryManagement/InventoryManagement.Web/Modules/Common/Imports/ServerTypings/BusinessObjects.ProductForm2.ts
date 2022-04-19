namespace InventoryManagement.BusinessObjects {
    export class ProductForm2 extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Product2';

    }

    export interface ProductForm2 {
        ProductId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        ProductCategoryId: Serenity.LookupEditor;
        ProductName: Serenity.StringEditor;
        ProductCode: Serenity.StringEditor;
        BrandName: Serenity.StringEditor;
        LeastUnitName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
        PurchasesUoMAndPriceList: PurchasesUoMAndPriceEditor;
        SalesUoMAndPriceList: SalesUoMAndPriceEditor;
    }

    [['ProductId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['SupplierId', () => Serenity.LookupEditor], ['ProductCategoryId', () => Serenity.LookupEditor], ['ProductName', () => Serenity.StringEditor], ['ProductCode', () => Serenity.StringEditor], ['BrandName', () => Serenity.StringEditor], ['LeastUnitName', () => Serenity.StringEditor], ['LocationList', () => Serenity.LookupEditor], ['AccountId', () => Serenity.LookupEditor], ['PurchasesUoMAndPriceList', () => PurchasesUoMAndPriceEditor], ['SalesUoMAndPriceList', () => SalesUoMAndPriceEditor]].forEach(x => Object.defineProperty(ProductForm2.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

