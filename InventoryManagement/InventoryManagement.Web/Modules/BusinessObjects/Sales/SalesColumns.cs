
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Sales")]
    [BasedOnRow(typeof(Entities.SalesRow))]
    public class SalesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 SalesId { get; set; }
        [EditLink]
        public String OrderId { get; set; }
        [Width(100)]
        public DateTime Date { get; set; }
        [Width(150)]
        public Int32 CustomerName { get; set; }

        [Width(135)]
        public Decimal TotalAmount { get; set; }
        [Width(135)]
        public Decimal TotalAmountPaid { get; set; }
        [Width(135)]
        public Decimal TotalAmountLeft { get; set; }
        public String Status { get; set; }
        //public Decimal CostOfGoodsSold { get; set; }
        //public Decimal GrossProfit { get; set; }
        //public Boolean HasSalesDetails { get; set; }
        //public Int32 LocationId { get; set; }
        //public Boolean IsIntegerTrailingOrderIdWithPrefixSo { get; set; }
    
        //public Boolean IsOpen { get; set; }
        //public Boolean IsInProgress { get; set; }
        //public Boolean IsFullyPicked { get; set; }
        //public Boolean IsFullyPaid { get; set; }
        //public Boolean IsInvoiced { get; set; }
        //public Boolean IsAdvanced { get; set; }
    }
}