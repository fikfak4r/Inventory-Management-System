namespace InventoryManagement.BusinessObjects {
    export class SalesDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.SalesDetails';

    }

    export interface SalesDetailsForm {
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
    }

    [['SalesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.LookupEditor], ['Quantity', () => Serenity.DecimalEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Discount', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(SalesDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

