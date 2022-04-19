
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Purchases")]
    [BasedOnRow(typeof(Entities.PurchasesRow))]
    public class PurchasesForm
    {

        public Int32? PurchasesId { get; set; }
        public String OrderId { get; set; }
        public DateTime Date { get; set; }
        public Int32 SupplierId { get; set; }

   
        public Boolean HasPurchasesDetails { get; set; }
        public Int32 LocationId { get; set; }
        public Boolean IsIntegerTrailingOrderIdWithPrefixPo { get; set; }
        [Hidden]
        public String Status { get; set; }
        public Boolean IsOpen { get; set; }
        public Boolean IsInProgress { get; set; }
        public Boolean IsFullyReceived { get; set; }
        public Boolean IsFullyPaid { get; set; }
        public Boolean IsAdvanced { get; set; }

        public Decimal Discount { get; set; }

        public Single Tax { get; set; }

        public Decimal TotalAmount { get; set; }
        public Decimal TotalAmountPaid { get; set; }
        public Decimal TotalAmountLeft { get; set; }


    }
}