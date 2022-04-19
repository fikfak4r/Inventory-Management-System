namespace InventoryManagement.BusinessObjects {
    export class ReorderPointForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.ReorderPoint';

    }

    export interface ReorderPointForm {
        ProductId: Serenity.LookupEditor;
        ReorderPointValue: Serenity.DecimalEditor;
        UOMAndPriceId: Serenity.LookupEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['ReorderPointValue', () => Serenity.DecimalEditor], ['UOMAndPriceId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ReorderPointForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

