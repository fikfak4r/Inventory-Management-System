namespace InventoryManagement.Administration {
    export class GetCodeForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.GetCode';

    }

    export interface GetCodeForm {
        AccountId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        LocationLocationName: Serenity.StringEditor;
        LinkCode: Serenity.TextAreaEditor;
        FormCode: Serenity.TextAreaEditor;
    }

    [['AccountId', () => Serenity.LookupEditor], ['LocationId', () => Serenity.LookupEditor], ['LocationLocationName', () => Serenity.StringEditor], ['LinkCode', () => Serenity.TextAreaEditor], ['FormCode', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(GetCodeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

