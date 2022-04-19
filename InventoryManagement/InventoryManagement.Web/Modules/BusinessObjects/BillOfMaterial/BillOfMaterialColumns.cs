
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.BillOfMaterial")]
    [BasedOnRow(typeof(Entities.BillOfMaterialRow))]
    public class BillOfMaterialColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 BillOfMaterialId { get; set; }
        //public String ProductProductCode { get; set; }

        [EditLink]
        public String ComponentItem { get; set; }
        public String Description { get; set; }
        public Decimal Quantity { get; set; }
        public Decimal Cost { get; set; }
    }
}