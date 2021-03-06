
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.SupplierLocation")]
    [BasedOnRow(typeof(Entities.SupplierLocationRow))]
    public class SupplierLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SuppliersLocationsId { get; set; }
        public Int32 SupplierId { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 AccountId { get; set; }
    }
}