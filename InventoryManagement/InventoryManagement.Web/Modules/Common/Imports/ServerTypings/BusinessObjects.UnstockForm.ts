namespace InventoryManagement.BusinessObjects {
    export class UnstockForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Unstock';

    }

    export interface UnstockForm {
        Date: Serenity.DateEditor;
        PurchasesId: Serenity.IntegerEditor;
        RtnOutwardsDtlsId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        QuantityInLeastUnit: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        IsUnstocked: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
        SumQuantity: Serenity.DecimalEditor;
    }

    [['Date', () => Serenity.DateEditor], ['PurchasesId', () => Serenity.IntegerEditor], ['RtnOutwardsDtlsId', () => Serenity.LookupEditor], ['Quantity', () => Serenity.DecimalEditor], ['QuantityInLeastUnit', () => Serenity.DecimalEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['IsUnstocked', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.IntegerEditor], ['SumQuantity', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(UnstockForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

