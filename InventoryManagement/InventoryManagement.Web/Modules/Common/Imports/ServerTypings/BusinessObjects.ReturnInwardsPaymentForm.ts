namespace InventoryManagement.BusinessObjects {
    export class ReturnInwardsPaymentForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ReturnInwardsPayment';

    }

    export interface ReturnInwardsPaymentForm {
        RtnInwardsId: Serenity.LookupEditor;
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        AmountRefunded: Serenity.DecimalEditor;
        Fee: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
    }

    [['RtnInwardsId', () => Serenity.LookupEditor], ['SalesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['Amount', () => Serenity.DecimalEditor], ['AmountRefunded', () => Serenity.DecimalEditor], ['Fee', () => Serenity.DecimalEditor], ['Credit', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(ReturnInwardsPaymentForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

