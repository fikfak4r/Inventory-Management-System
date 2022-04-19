namespace InventoryManagement.BusinessObjects {
    export class BillOfMaterialForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.BillOfMaterial';

    }

    export interface BillOfMaterialForm {
        ProductId: Serenity.IntegerEditor;
        ComponentItem: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Quantity: Serenity.DecimalEditor;
        Cost: Serenity.DecimalEditor;
    }

    [['ProductId', () => Serenity.IntegerEditor], ['ComponentItem', () => Serenity.StringEditor], ['Description', () => Serenity.TextAreaEditor], ['Quantity', () => Serenity.DecimalEditor], ['Cost', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(BillOfMaterialForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

