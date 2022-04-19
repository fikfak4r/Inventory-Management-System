namespace InventoryManagement.BusinessObjects {
    export class ReceivePurchasesForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ReceivePurchases';

    }

    export interface ReceivePurchasesForm {
        PurchasesId: Serenity.IntegerEditor;
        PurchasesDetailsId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        UomAndPriceId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        QuantityInLeastUnit: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        IsReceived: Serenity.BooleanEditor;
        IsFree: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['PurchasesId', () => Serenity.IntegerEditor], ['PurchasesDetailsId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.LookupEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['Quantity', () => Serenity.DecimalEditor], ['QuantityInLeastUnit', () => Serenity.DecimalEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Discount', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor], ['IsReceived', () => Serenity.BooleanEditor], ['IsFree', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ReceivePurchasesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

