
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.PurchaseTrail")]
    [BasedOnRow(typeof(Entities.PurchaseTrailRow))]
    public class PurchaseTrailForm
    {
        public Int32 PurchasesId { get; set; }
        public DateTime Date { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 UomAndPriceId { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        public Int32 Quantity { get; set; }
        public Decimal QuantityInLeastUnit { get; set; }
        public Int32 LocationId { get; set; }
        public Boolean IsReceived { get; set; }
    }
}