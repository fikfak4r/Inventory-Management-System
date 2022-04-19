namespace InventoryManagement.BusinessObjects {
    export class SalesPaymentDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.SalesPaymentDetails';

    }

    export interface SalesPaymentDetailsForm {
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        TotalAmount: Serenity.DecimalEditor;
        AmountPaid: Serenity.DecimalEditor;
        AmountLeft: Serenity.DecimalEditor;
        IsTotalAmountRow: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        PaymentMode: Serenity.StringEditor;
        BankId: Serenity.LookupEditor;
    }

    [['SalesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['TotalAmount', () => Serenity.DecimalEditor], ['AmountPaid', () => Serenity.DecimalEditor], ['AmountLeft', () => Serenity.DecimalEditor], ['IsTotalAmountRow', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.LookupEditor], ['PaymentMode', () => Serenity.StringEditor], ['BankId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(SalesPaymentDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

