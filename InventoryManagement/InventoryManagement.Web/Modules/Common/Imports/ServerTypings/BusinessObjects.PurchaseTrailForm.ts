namespace InventoryManagement.BusinessObjects {
    export class PurchaseTrailForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.PurchaseTrail';

    }

    export interface PurchaseTrailForm {
        PurchasesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.IntegerEditor;
        UomAndPriceId: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        QuantityInLeastUnit: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        IsReceived: Serenity.BooleanEditor;
    }

    [['PurchasesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.IntegerEditor], ['UomAndPriceId', () => Serenity.IntegerEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Discount', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor], ['Quantity', () => Serenity.IntegerEditor], ['QuantityInLeastUnit', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.IntegerEditor], ['IsReceived', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(PurchaseTrailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

