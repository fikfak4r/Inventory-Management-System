namespace InventoryManagement.BusinessObjects {
    export class ReturnOutwardsDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ReturnOutwardsDetails';

    }

    export interface ReturnOutwardsDetailsForm {
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        RtnOutwardsId: Serenity.LookupEditor;
        PurchasesDetailsId: Serenity.IntegerEditor;
        PurchasesId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        QuantityInLeastUnit: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.LookupEditor], ['RtnOutwardsId', () => Serenity.LookupEditor], ['PurchasesDetailsId', () => Serenity.IntegerEditor], ['PurchasesId', () => Serenity.IntegerEditor], ['Quantity', () => Serenity.DecimalEditor], ['QuantityInLeastUnit', () => Serenity.DecimalEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ReturnOutwardsDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

