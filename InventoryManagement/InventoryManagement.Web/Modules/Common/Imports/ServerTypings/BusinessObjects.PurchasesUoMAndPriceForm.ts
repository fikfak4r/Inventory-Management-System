namespace InventoryManagement.BusinessObjects {
    export class PurchasesUoMAndPriceForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.PurchasesUoMAndPrice';

    }

    export interface PurchasesUoMAndPriceForm {
        ProductId: Serenity.LookupEditor;
        UnitName: Serenity.StringEditor;
        UnitMakeUp: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['UnitName', () => Serenity.StringEditor], ['UnitMakeUp', () => Serenity.IntegerEditor], ['Price', () => Serenity.DecimalEditor], ['Discontinued', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(PurchasesUoMAndPriceForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

