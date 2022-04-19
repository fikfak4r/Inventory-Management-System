namespace InventoryManagement.BusinessObjects {
    export class ProductCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ProductCategory';

    }

    export interface ProductCategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        LocationList: Serenity.LookupEditor;
    }

    [['CategoryName', () => Serenity.StringEditor], ['Description', () => Serenity.TextAreaEditor], ['LocationList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductCategoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

