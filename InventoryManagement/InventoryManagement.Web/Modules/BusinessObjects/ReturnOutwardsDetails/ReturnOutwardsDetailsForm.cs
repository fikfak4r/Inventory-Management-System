
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ReturnOutwardsDetails")]
    [BasedOnRow(typeof(Entities.ReturnOutwardsDetailsRow))]
    public class ReturnOutwardsDetailsForm
    {
        public DateTime Date { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 RtnOutwardsId { get; set; }
        public Int32 PurchasesDetailsId { get; set; }
        public Int32 PurchasesId { get; set; }
        public Double Quantity { get; set; }

        public Double QuantityInLeastUnit { get; set; }


        public Int32 UomAndPriceId { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Amount { get; set; }
        //public Decimal Discount { get; set; }
      
        public Int32 LocationId { get; set; }
    }
}