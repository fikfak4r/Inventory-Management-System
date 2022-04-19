
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ReorderPoint")]
    [BasedOnRow(typeof(Entities.ReorderPointRow))]
    public class ReorderPointColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ReorderPointId { get; set; }
        public Int32 ProductId { get; set; }

        public String ProductProductName { get; set; }
        
        public Double ReorderPointValue { get; set; }

        public String LocationName { get; set; }
    }
}