namespace InventoryManagement.BusinessObjects {
    export class SupplierLocationForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.SupplierLocation';

    }

    export interface SupplierLocationForm {
        SupplierId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }

    [['SupplierId', () => Serenity.LookupEditor], ['LocationId', () => Serenity.LookupEditor], ['AccountId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(SupplierLocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

