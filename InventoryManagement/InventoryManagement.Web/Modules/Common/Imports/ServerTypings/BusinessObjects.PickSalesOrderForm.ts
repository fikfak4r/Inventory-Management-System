namespace InventoryManagement.BusinessObjects {
    export class PickSalesOrderForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.PickSalesOrder';

    }

    export interface PickSalesOrderForm {
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        SalesDetailsId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        IsPicked: Serenity.BooleanEditor;
        UomAndPriceId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        Cost: Serenity.DecimalEditor;
        QuantitySold: Serenity.DecimalEditor;
        CostOfGoodsSold: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        SalesProfit: Serenity.DecimalEditor;
    }

    [['SalesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.LookupEditor], ['SalesDetailsId', () => Serenity.IntegerEditor], ['Quantity', () => Serenity.DecimalEditor], ['IsPicked', () => Serenity.BooleanEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Discount', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor], ['Cost', () => Serenity.DecimalEditor], ['QuantitySold', () => Serenity.DecimalEditor], ['CostOfGoodsSold', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.IntegerEditor], ['SalesProfit', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(PickSalesOrderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

