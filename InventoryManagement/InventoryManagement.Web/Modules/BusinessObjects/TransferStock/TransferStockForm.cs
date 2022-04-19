
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.TransferStock")]
    [BasedOnRow(typeof(Entities.StockRow))]
    public class TransferStockForm
    {
        [ReadOnly(true)]
        public Int32 ProductId { get; set; }
        public Decimal DummyQuantity { get; set; }
        public Int32? UomAndPriceId { get; set; }

        [Hidden]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = false)]
        public Int32? LocationId { get; set; }

        [DisplayName("To Location")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
        public Int32? DummyLocationId { get; set; }

        public string ActionKey { get; set; }

    }
}