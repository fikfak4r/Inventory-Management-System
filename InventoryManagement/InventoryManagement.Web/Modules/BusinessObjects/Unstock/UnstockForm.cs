
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Unstock")]
    [BasedOnRow(typeof(Entities.UnstockRow))]
    public class UnstockForm
    {
       
        public DateTime Date { get; set; }
        public Int32 PurchasesId { get; set; }
        public Int32 RtnOutwardsDtlsId { get; set; }
        //[Hidden]
        //public Int32 ProductId { get; set; }
        public Double Quantity { get; set; }

        public Double QuantityInLeastUnit { get; set; }

        public Int32 UomAndPriceId { get; set; }

        [DefaultValue(true)]
        public Boolean IsUnstocked { get; set; }
        public Int32 LocationId { get; set; }

        public Double SumQuantity { get; set; }


    }
}