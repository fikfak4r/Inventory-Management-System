namespace InventoryManagement.BusinessObjects {
    export class PurchasesForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Purchases';

    }

    export interface PurchasesForm {
        PurchasesId: Serenity.IntegerEditor;
        OrderId: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        HasPurchasesDetails: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        IsIntegerTrailingOrderIdWithPrefixPo: Serenity.BooleanEditor;
        Status: Serenity.StringEditor;
        IsOpen: Serenity.BooleanEditor;
        IsInProgress: Serenity.BooleanEditor;
        IsFullyReceived: Serenity.BooleanEditor;
        IsFullyPaid: Serenity.BooleanEditor;
        IsAdvanced: Serenity.BooleanEditor;
        Discount: Serenity.DecimalEditor;
        Tax: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalAmountPaid: Serenity.DecimalEditor;
        TotalAmountLeft: Serenity.DecimalEditor;
    }

    [['PurchasesId', () => Serenity.IntegerEditor], ['OrderId', () => Serenity.StringEditor], ['Date', () => Serenity.DateEditor], ['SupplierId', () => Serenity.LookupEditor], ['HasPurchasesDetails', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.LookupEditor], ['IsIntegerTrailingOrderIdWithPrefixPo', () => Serenity.BooleanEditor], ['Status', () => Serenity.StringEditor], ['IsOpen', () => Serenity.BooleanEditor], ['IsInProgress', () => Serenity.BooleanEditor], ['IsFullyReceived', () => Serenity.BooleanEditor], ['IsFullyPaid', () => Serenity.BooleanEditor], ['IsAdvanced', () => Serenity.BooleanEditor], ['Discount', () => Serenity.DecimalEditor], ['Tax', () => Serenity.DecimalEditor], ['TotalAmount', () => Serenity.DecimalEditor], ['TotalAmountPaid', () => Serenity.DecimalEditor], ['TotalAmountLeft', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(PurchasesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

