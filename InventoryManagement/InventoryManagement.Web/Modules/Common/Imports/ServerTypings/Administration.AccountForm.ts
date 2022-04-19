namespace InventoryManagement.Administration {
    export class AccountForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Account';

    }

    export interface AccountForm {
        Date: Serenity.DateEditor;
        CompanyName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        WebsiteAddress: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
    }

    [['Date', () => Serenity.DateEditor], ['CompanyName', () => Serenity.StringEditor], ['PhoneNumber', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['WebsiteAddress', () => Serenity.StringEditor], ['Address', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(AccountForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

