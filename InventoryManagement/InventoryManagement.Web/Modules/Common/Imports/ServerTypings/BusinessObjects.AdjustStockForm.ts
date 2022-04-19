namespace InventoryManagement.BusinessObjects {
    export class AdjustStockForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.AdjustStock';

    }

    export interface AdjustStockForm {
        ProductId: Serenity.LookupEditor;
        DummyQuantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        ActionKey: Serenity.StringEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['DummyQuantity', () => Serenity.DecimalEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['ActionKey', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AdjustStockForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

