
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.PurchasesDetails")]
    [BasedOnRow(typeof(Entities.PurchasesDetailsRow))]
    public class PurchasesDetailsForm
    {
        [Hidden]
        public Int32 PurchasesId { get; set; }
        public DateTime Date { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 UomAndPriceId { get; set; }
        public Double Quantity { get; set; }

        public Double QuantityInLeastUnit { get; set; }

        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
      
        public Decimal Amount { get; set; }
      
        public Int32 LocationId { get; set; }
        public Boolean IsReceived { get; set; }


    }
}