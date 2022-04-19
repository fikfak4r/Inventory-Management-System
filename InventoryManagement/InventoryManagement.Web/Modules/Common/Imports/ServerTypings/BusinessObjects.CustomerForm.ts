namespace InventoryManagement.BusinessObjects {
    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Customer';

    }

    export interface CustomerForm {
        Name: Serenity.StringEditor;
        FullName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        LocationList: Serenity.LookupEditor;
    }

    [['Name', () => Serenity.StringEditor], ['FullName', () => Serenity.StringEditor], ['PhoneNumber', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Website', () => Serenity.StringEditor], ['Address', () => Serenity.TextAreaEditor], ['LocationList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(CustomerForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

