namespace InventoryManagement.BusinessObjects {
    export class TransferStockForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.TransferStock';

    }

    export interface TransferStockForm {
        ProductId: Serenity.LookupEditor;
        DummyQuantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        DummyLocationId: Serenity.LookupEditor;
        ActionKey: Serenity.StringEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['DummyQuantity', () => Serenity.DecimalEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['LocationId', () => Serenity.LookupEditor], ['DummyLocationId', () => Serenity.LookupEditor], ['ActionKey', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(TransferStockForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

