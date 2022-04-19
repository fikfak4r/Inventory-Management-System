namespace InventoryManagement.BusinessObjects {
    export class CustomerLocationForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.CustomerLocation';

    }

    export interface CustomerLocationForm {
        CustomerId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }

    [['CustomerId', () => Serenity.LookupEditor], ['LocationId', () => Serenity.LookupEditor], ['AccountId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(CustomerLocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

