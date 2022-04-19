
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Restock")]
    [BasedOnRow(typeof(Entities.RestockRow))]
    public class RestockForm
    {
        [Hidden]
        public Int32 ProductId { get; set; }
        public DateTime Date { get; set; }
        public Int32 RtnInwardsDtlsId { get; set; }
        public Int32 SalesId { get; set; }
        public Double Quantity { get; set; }
        public Int32 UomAndPriceId { get; set; }
        public Boolean IsRestocked { get; set; }
        public Int32 LocationId { get; set; }
    }
}