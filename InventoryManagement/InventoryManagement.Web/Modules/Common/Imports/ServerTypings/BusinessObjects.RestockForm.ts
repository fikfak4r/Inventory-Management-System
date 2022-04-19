namespace InventoryManagement.BusinessObjects {
    export class RestockForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Restock';

    }

    export interface RestockForm {
        ProductId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        RtnInwardsDtlsId: Serenity.LookupEditor;
        SalesId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        IsRestocked: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['Date', () => Serenity.DateEditor], ['RtnInwardsDtlsId', () => Serenity.LookupEditor], ['SalesId', () => Serenity.IntegerEditor], ['Quantity', () => Serenity.DecimalEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['IsRestocked', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(RestockForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

