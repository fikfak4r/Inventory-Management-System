namespace InventoryManagement.BusinessObjects {
    export class ProductSupplierForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ProductSupplier';

    }

    export interface ProductSupplierForm {
        ProductId: Serenity.IntegerEditor;
        SupplierId: Serenity.IntegerEditor;
        SupplierList: Serenity.LookupEditor;
    }

    [['ProductId', () => Serenity.IntegerEditor], ['SupplierId', () => Serenity.IntegerEditor], ['SupplierList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductSupplierForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

