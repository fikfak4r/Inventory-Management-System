namespace InventoryManagement.BusinessObjects {
    export class MovementHistoryForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.MovementHistory';

    }

    export interface MovementHistoryForm {
        TransactionType: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        LocationId: Serenity.IntegerEditor;
        PurchaseOrderId: Serenity.StringEditor;
        QuantityBefore: Serenity.StringEditor;
        Quantity: Serenity.StringEditor;
        QuantityAfter: Serenity.StringEditor;
    }

    [['TransactionType', () => Serenity.StringEditor], ['Date', () => Serenity.DateEditor], ['LocationId', () => Serenity.IntegerEditor], ['PurchaseOrderId', () => Serenity.StringEditor], ['QuantityBefore', () => Serenity.StringEditor], ['Quantity', () => Serenity.StringEditor], ['QuantityAfter', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MovementHistoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

