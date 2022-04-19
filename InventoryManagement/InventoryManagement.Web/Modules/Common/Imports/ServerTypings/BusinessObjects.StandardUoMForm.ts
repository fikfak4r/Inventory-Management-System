namespace InventoryManagement.BusinessObjects {
    export class StandardUoMForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.StandardUoM';

    }

    export interface StandardUoMForm {
        ProductId: Serenity.LookupEditor;
        StandardUnitName: Serenity.StringEditor;
        Discontinued: Serenity.BooleanEditor;
        Cost: Serenity.DecimalEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['StandardUnitName', () => Serenity.StringEditor], ['Discontinued', () => Serenity.BooleanEditor], ['Cost', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(StandardUoMForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

