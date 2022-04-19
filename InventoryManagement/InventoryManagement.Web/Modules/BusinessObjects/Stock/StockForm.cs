
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Stock")]
    [BasedOnRow(typeof(Entities.StockRow))]
    public class StockForm
    {
        public Int32 ProductId { get; set; }
        public Double Quantity { get; set; }
        
        public Int32 LocationId { get; set; }
    }
}