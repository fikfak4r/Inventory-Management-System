
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.SalesUoMAndPrice")]
    [BasedOnRow(typeof(Entities.SalesUoMAndPriceRow))]
    public class SalesUoMAndPriceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 UomAndPriceId { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }
        [EditLink]
        public String UnitName { get; set; }

        [Width(125)]
        public Int32 UnitMakeUp { get; set; }
        [Hidden]
        public Int32 StandardUomid { get; set; }
        
        public Decimal Price { get; set; }

        [Width(125), AlignCenter]

        public Boolean Discontinued { get; set; }
    }
}