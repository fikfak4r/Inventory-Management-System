namespace InventoryManagement.BusinessObjects {
    export class BankForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Bank';

    }

    export interface BankForm {
        Date: Serenity.DateEditor;
        BankName: Serenity.StringEditor;
        AccountId: Serenity.LookupEditor;
    }

    [['Date', () => Serenity.DateEditor], ['BankName', () => Serenity.StringEditor], ['AccountId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(BankForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

