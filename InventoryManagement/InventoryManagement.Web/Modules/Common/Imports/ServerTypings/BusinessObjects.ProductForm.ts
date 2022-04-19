namespace InventoryManagement.BusinessObjects {
    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Product';

    }

    export interface ProductForm {
        ProductId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        ProductCategoryId: Serenity.LookupEditor;
        ProductName: Serenity.StringEditor;
        ProductCode: Serenity.StringEditor;
        BrandName: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        ReorderPoint: Serenity.IntegerEditor;
        ReorderQuantity: Serenity.IntegerEditor;
        LeastUnitName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }

    [['ProductId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['SupplierId', () => Serenity.LookupEditor], ['ProductCategoryId', () => Serenity.LookupEditor], ['ProductName', () => Serenity.StringEditor], ['ProductCode', () => Serenity.StringEditor], ['BrandName', () => Serenity.StringEditor], ['Barcode', () => Serenity.StringEditor], ['ReorderPoint', () => Serenity.IntegerEditor], ['ReorderQuantity', () => Serenity.IntegerEditor], ['LeastUnitName', () => Serenity.StringEditor], ['LocationList', () => Serenity.LookupEditor], ['AccountId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

