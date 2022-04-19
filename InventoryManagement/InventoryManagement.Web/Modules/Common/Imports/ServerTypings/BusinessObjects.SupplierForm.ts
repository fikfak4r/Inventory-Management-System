namespace InventoryManagement.BusinessObjects {
    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Supplier';

    }

    export interface SupplierForm {
        SupplierId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        SupplierName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Note: Serenity.TextAreaEditor;
        LocationList: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }

    [['SupplierId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['SupplierName', () => Serenity.StringEditor], ['PhoneNumber', () => Serenity.StringEditor], ['Fax', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Website', () => Serenity.StringEditor], ['Address', () => Serenity.TextAreaEditor], ['Note', () => Serenity.TextAreaEditor], ['LocationList', () => Serenity.LookupEditor], ['AccountId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(SupplierForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

