namespace InventoryManagement.BusinessObjects {
    export class PurchasesDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.PurchasesDetails';

    }

    export interface PurchasesDetailsForm {
        PurchasesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        UomAndPriceId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        QuantityInLeastUnit: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        IsReceived: Serenity.BooleanEditor;
    }

    [['PurchasesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.LookupEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['Quantity', () => Serenity.DecimalEditor], ['QuantityInLeastUnit', () => Serenity.DecimalEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Discount', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.IntegerEditor], ['IsReceived', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(PurchasesDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

