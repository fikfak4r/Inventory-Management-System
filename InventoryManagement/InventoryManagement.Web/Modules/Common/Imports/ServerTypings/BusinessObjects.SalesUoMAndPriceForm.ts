namespace InventoryManagement.BusinessObjects {
    export class SalesUoMAndPriceForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.SalesUoMAndPrice';

    }

    export interface SalesUoMAndPriceForm {
        ProductId: Serenity.LookupEditor;
        UnitName: Serenity.StringEditor;
        UnitMakeUp: Serenity.IntegerEditor;
        StandardUomid: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['UnitName', () => Serenity.StringEditor], ['UnitMakeUp', () => Serenity.IntegerEditor], ['StandardUomid', () => Serenity.LookupEditor], ['Price', () => Serenity.DecimalEditor], ['Discontinued', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(SalesUoMAndPriceForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

