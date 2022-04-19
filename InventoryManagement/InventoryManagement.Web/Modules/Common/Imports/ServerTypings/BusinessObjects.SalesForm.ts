namespace InventoryManagement.BusinessObjects {
    export class SalesForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Sales';

    }

    export interface SalesForm {
        SalesId: Serenity.IntegerEditor;
        OrderId: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalAmountPaid: Serenity.DecimalEditor;
        TotalAmountLeft: Serenity.DecimalEditor;
        CostOfGoodsSold: Serenity.DecimalEditor;
        HasSalesDetails: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        Status: Serenity.StringEditor;
        IsOpen: Serenity.BooleanEditor;
        IsInProgress: Serenity.BooleanEditor;
        IsFullyPicked: Serenity.BooleanEditor;
        IsFullyPaid: Serenity.BooleanEditor;
        IsInvoiced: Serenity.BooleanEditor;
        IsAdvanced: Serenity.BooleanEditor;
    }

    [['SalesId', () => Serenity.IntegerEditor], ['OrderId', () => Serenity.StringEditor], ['Date', () => Serenity.DateEditor], ['CustomerId', () => Serenity.LookupEditor], ['TotalAmount', () => Serenity.DecimalEditor], ['TotalAmountPaid', () => Serenity.DecimalEditor], ['TotalAmountLeft', () => Serenity.DecimalEditor], ['CostOfGoodsSold', () => Serenity.DecimalEditor], ['HasSalesDetails', () => Serenity.BooleanEditor], ['LocationId', () => Serenity.LookupEditor], ['Status', () => Serenity.StringEditor], ['IsOpen', () => Serenity.BooleanEditor], ['IsInProgress', () => Serenity.BooleanEditor], ['IsFullyPicked', () => Serenity.BooleanEditor], ['IsFullyPaid', () => Serenity.BooleanEditor], ['IsInvoiced', () => Serenity.BooleanEditor], ['IsAdvanced', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(SalesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

