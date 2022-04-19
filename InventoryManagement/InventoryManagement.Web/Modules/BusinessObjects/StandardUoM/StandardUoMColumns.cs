
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.StandardUoM")]
    [BasedOnRow(typeof(Entities.StandardUoMRow))]
    public class StandardUoMColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StandardUomid { get; set; }
        public Int32 ProductId { get; set; }
        [EditLink]
        public String StandardUnitName { get; set; }
        public Boolean Discontinued { get; set; }
        public Decimal Cost { get; set; }
    }
}