
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Sales")]
    [BasedOnRow(typeof(Entities.SalesRow))]
    public class SalesForm
    {
        public int? SalesId { get; set; }
        public String OrderId { get; set; }
        public DateTime Date { get; set; }
        public Int32 CustomerId { get; set; }
        [Hidden]
        public Decimal TotalAmount { get; set; }
        [Hidden]
        public Decimal TotalAmountPaid { get; set; }
        [Hidden]
        public Decimal TotalAmountLeft { get; set; }
        public Decimal CostOfGoodsSold { get; set; }
        //public Decimal GrossProfit { get; set; }
        public Boolean HasSalesDetails { get; set; }
        public Int32 LocationId { get; set; }
        //public Boolean IsIntegerTrailingOrderIdWithPrefixSo { get; set; }
        [Hidden]
        public String Status { get; set; }
        public Boolean IsOpen { get; set; }
        public Boolean IsInProgress { get; set; }
        public Boolean IsFullyPicked { get; set; }
        public Boolean IsFullyPaid { get; set; }
        public Boolean IsInvoiced { get; set; }
        public Boolean IsAdvanced { get; set; }

    }
}