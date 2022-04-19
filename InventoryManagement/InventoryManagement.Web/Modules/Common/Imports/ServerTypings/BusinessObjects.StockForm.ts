namespace InventoryManagement.BusinessObjects {
    export class StockForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Stock';

    }

    export interface StockForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        LocationId: Serenity.LookupEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['Quantity', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(StockForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

