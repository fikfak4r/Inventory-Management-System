
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ReceivePurchases")]
    [BasedOnRow(typeof(Entities.ReceivePurchasesRow))]
    public class ReceivePurchasesForm
    {
        public Int32 PurchasesId { get; set; }

        public Int32 PurchasesDetailsId { get; set; }

        public DateTime Date { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 UomAndPriceId { get; set; }
        public Double Quantity { get; set; }

        public Double QuantityInLeastUnit { get; set; }

        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        [DefaultValue(true)]
        public Boolean IsReceived { get; set; }

        public Boolean IsFree { get; set; }

        public Int32 LocationId { get; set; }



    }
}