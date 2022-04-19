namespace InventoryManagement.BusinessObjects {
    export class ReturnInwardsForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ReturnInwards';

    }

    export interface ReturnInwardsForm {
        Date: Serenity.DateEditor;
        SalesId: Serenity.LookupEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalFee: Serenity.DecimalEditor;
        TotalAmountRefunded: Serenity.DecimalEditor;
        TotalCredit: Serenity.DecimalEditor;
    }

    [['Date', () => Serenity.DateEditor], ['SalesId', () => Serenity.LookupEditor], ['TotalAmount', () => Serenity.DecimalEditor], ['TotalFee', () => Serenity.DecimalEditor], ['TotalAmountRefunded', () => Serenity.DecimalEditor], ['TotalCredit', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(ReturnInwardsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

