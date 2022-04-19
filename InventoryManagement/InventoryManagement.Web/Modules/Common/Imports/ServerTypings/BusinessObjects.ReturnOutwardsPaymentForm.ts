namespace InventoryManagement.BusinessObjects {
    export class ReturnOutwardsPaymentForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ReturnOutwardsPayments';

    }

    export interface ReturnOutwardsPaymentForm {
        RtnOutwardsId: Serenity.LookupEditor;
        PurchasesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        AmountRefunded: Serenity.DecimalEditor;
        Fee: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
    }

    [['RtnOutwardsId', () => Serenity.LookupEditor], ['PurchasesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['Amount', () => Serenity.DecimalEditor], ['AmountRefunded', () => Serenity.DecimalEditor], ['Fee', () => Serenity.DecimalEditor], ['Credit', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(ReturnOutwardsPaymentForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

