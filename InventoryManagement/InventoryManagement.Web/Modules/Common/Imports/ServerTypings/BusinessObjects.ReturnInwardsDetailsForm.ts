namespace InventoryManagement.BusinessObjects {
    export class ReturnInwardsDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ReturnInwardsDetails';

    }

    export interface ReturnInwardsDetailsForm {
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        RtnInwardsId: Serenity.LookupEditor;
        SalesDetailsId: Serenity.LookupEditor;
        SalesId: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.LookupEditor], ['Quantity', () => Serenity.DecimalEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['RtnInwardsId', () => Serenity.LookupEditor], ['SalesDetailsId', () => Serenity.LookupEditor], ['SalesId', () => Serenity.IntegerEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Discount', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ReturnInwardsDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

