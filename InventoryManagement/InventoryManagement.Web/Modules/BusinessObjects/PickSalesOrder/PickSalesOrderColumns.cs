
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.PickSalesOrder")]
    [BasedOnRow(typeof(Entities.PickSalesOrderRow))]
    public class PickSalesOrderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PickSalesOrderId { get; set; }
        public DateTime Date { get; set; }
        public Int32 SalesId { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }
        public Int32 SalesDetailsId { get; set; }
        [Width(125), EditLink]
        public string ProductProductName { get; set; }
        public Double Quantity { get; set; }
       
        public Boolean IsPicked { get; set; }
        [Hidden]
        public Int32 UomAndPriceId { get; set; }
        [Width(120)]
        public string UomAndPriceUnitName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        
        public Decimal Cost { get; set; }
        public Decimal QuantitySold { get; set; }
        public Double CostOfGoodsSold { get; set; }
        public Int32 LocationId { get; set; }
        public Decimal SalesProfit { get; set; }
    }
}