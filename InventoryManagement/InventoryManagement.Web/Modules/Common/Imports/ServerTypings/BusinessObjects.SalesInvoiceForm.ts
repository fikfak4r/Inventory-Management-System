namespace InventoryManagement.BusinessObjects {
    export class SalesInvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.SalesInvoice';

    }

    export interface SalesInvoiceForm {
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        SalesDetailsId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        IsPicked: Serenity.BooleanEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        PickSalesOrderId: Serenity.IntegerEditor;
    }

    [['SalesId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['ProductId', () => Serenity.LookupEditor], ['SalesDetailsId', () => Serenity.IntegerEditor], ['Quantity', () => Serenity.DecimalEditor], ['UomAndPriceId', () => Serenity.LookupEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['IsPicked', () => Serenity.BooleanEditor], ['Discount', () => Serenity.DecimalEditor], ['Amount', () => Serenity.DecimalEditor], ['LocationId', () => Serenity.IntegerEditor], ['PickSalesOrderId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SalesInvoiceForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

