namespace InventoryManagement.BusinessObjects {
    export class PricingForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Pricing';

    }

    export interface PricingForm {
        PurchasesUoMAndPriceList: PurchasesUoMAndPriceEditor;
    }

    [['PurchasesUoMAndPriceList', () => PurchasesUoMAndPriceEditor]].forEach(x => Object.defineProperty(PricingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

