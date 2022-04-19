namespace InventoryManagement.BusinessObjects {
    export class PurchasesPaymentDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.PurchasesPaymentsDetails';

    }

    export interface PurchasesPaymentDetailsForm {
        PurchasesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        TotalAmount: Serenity.DecimalEditor;
        AmountPaid: Serenity.DecimalEditor;
        IsTotalAmountRow: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['PurchasesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['TotalAmount', () => Serenity.DecimalEditor], ['AmountPaid', () => Serenity.DecimalEditor], ['IsTotalAmountRow', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(PurchasesPaymentDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

