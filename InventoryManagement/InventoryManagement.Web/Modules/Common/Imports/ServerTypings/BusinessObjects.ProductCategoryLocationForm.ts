namespace InventoryManagement.BusinessObjects {
    export class ProductCategoryLocationForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ProductCategoryLocation';

    }

    export interface ProductCategoryLocationForm {
        ProductCategoryId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }

    [['ProductCategoryId', () => Serenity.LookupEditor], ['LocationId', () => Serenity.LookupEditor], ['AccountId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductCategoryLocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

