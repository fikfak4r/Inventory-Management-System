
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.PickSalesOrder")]
    [BasedOnRow(typeof(Entities.PickSalesOrderRow))]
    public class PickSalesOrderForm
    {
        public Int32 SalesId { get; set; }
     
        public DateTime Date { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 SalesDetailsId { get; set; }
        public Double Quantity { get; set; }
        public Boolean IsPicked { get; set; }
        public Int32 UomAndPriceId { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        public Decimal Cost { get; set; }
        public Double QuantitySold { get; set; }
        public Decimal CostOfGoodsSold { get; set; }
        public Int32 LocationId { get; set; }
        public Decimal SalesProfit { get; set; }
    }
}