namespace InventoryManagement.BusinessObjects {
    export class BankTransactionForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.BankTransaction';

    }

    export interface BankTransactionForm {
        BankId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        AccountType: Serenity.StringEditor;
        CustomerId: Serenity.LookupEditor;
        SalesId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        SalesPymntDetailsId: Serenity.IntegerEditor;
    }

    [['BankId', () => Serenity.LookupEditor], ['Date', () => Serenity.DateEditor], ['AccountType', () => Serenity.StringEditor], ['CustomerId', () => Serenity.LookupEditor], ['SalesId', () => Serenity.LookupEditor], ['Amount', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.IntegerEditor], ['SalesPymntDetailsId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(BankTransactionForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

