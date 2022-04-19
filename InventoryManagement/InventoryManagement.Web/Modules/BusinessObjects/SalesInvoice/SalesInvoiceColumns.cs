
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.SalesInvoice")]
    [BasedOnRow(typeof(Entities.SalesInvoiceRow))]
    public class SalesInvoiceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
       
        public Int32 SalesInvoiceId { get; set; }
        public Int32 SalesId { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }
        
        public DateTime Date { get; set; }
        [Width(125), EditLink]
        public String ProductProductName { get; set; }
        public Int32 SalesDetailsId { get; set; }
        public Double Quantity { get; set; }
        public Boolean IsPicked { get; set; }
        [Hidden]
        public Int32 UomAndPriceId { get; set; }

        [Width(125)]
        public String UomAndPriceUnitName { get; set; }
        [Width(125)]
        public Decimal UnitPrice { get; set; }

        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 PickSalesOrderId { get; set; }
       


    }
}