namespace InventoryManagement.BusinessObjects {
    export class ReturnOutwardsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ReturnOutwards';

    }

    export interface ReturnOutwardsForm {
        Date: Serenity.DateEditor;
        PurchasesId: Serenity.LookupEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalFee: Serenity.DecimalEditor;
        TotalAmountRefunded: Serenity.DecimalEditor;
        TotalCredit: Serenity.DecimalEditor;
    }

    [['Date', () => Serenity.DateEditor], ['PurchasesId', () => Serenity.LookupEditor], ['TotalAmount', () => Serenity.DecimalEditor], ['TotalFee', () => Serenity.DecimalEditor], ['TotalAmountRefunded', () => Serenity.DecimalEditor], ['TotalCredit', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(ReturnOutwardsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

