namespace InventoryManagement.BusinessObjects {
    export class CostingInfoForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.CostingInfo';

    }

    export interface CostingInfoForm {
        ProductId: Serenity.LookupEditor;
        Cost: Serenity.DecimalEditor;
    }

    [['ProductId', () => Serenity.LookupEditor], ['Cost', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(CostingInfoForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

