
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.AdjustStock")]
    [BasedOnRow(typeof(Entities.StockRow))]
    public class AdjustStockForm
    {

        [LookupEditor(typeof(BusinessObjects.Scripts.ProductLookup))]
        public Int32 ProductId { get; set; }
        public Decimal DummyQuantity { get; set; }
        public Int32? UomAndPriceId { get; set; }
        public string ActionKey { get; set; }

    }
}