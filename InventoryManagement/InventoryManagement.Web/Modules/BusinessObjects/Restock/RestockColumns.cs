
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Restock")]
    [BasedOnRow(typeof(Entities.RestockRow))]
    public class RestockColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ReStockId { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }

        public DateTime Date { get; set; }

        [Width(125), EditLink]
        public String ProductProductName { get; set; }
        [Hidden]
        public Int32 RtnInwardsDtlsId { get; set; }
        public Int32 SalesId { get; set; }
        public Double Quantity { get; set; }
        [Width(125)]
        public String UomAndPriceUnitName { get; set; }
        [Hidden]
        public Int32 UomAndPriceId { get; set; }
        public Boolean IsRestocked { get; set; }
        public Int32 LocationId { get; set; }
    }
}