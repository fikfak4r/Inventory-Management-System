
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Stock")]
    [BasedOnRow(typeof(Entities.StockRow))]
    public class StockColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StockId { get; set; }

        [Width(125)]
        public string ProductCategory { get; set; }

        [Width(126)]
        public String ProductProductCode { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }
        [Width(126)]
        public String ProductProductName { get; set; }
        public Decimal QuantityInUnit { get; set; }

        [Administration.LocationListFormatter, Width(145)]
        public Int32 LocationId { get; set; }

        //[Administration.LocationListFormatter]
        //public List<Int32> LocationList { get; set; }
    }
}