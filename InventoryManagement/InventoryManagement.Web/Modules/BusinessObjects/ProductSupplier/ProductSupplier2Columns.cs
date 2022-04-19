
namespace InventoryManagement.BusinessObjects.Columns
{

    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ProductSupplier2")]
    [BasedOnRow(typeof(Entities.SupplierRow))]
    public class ProductSupplier2Columns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SupplierId { get; set; }
        //public DateTime Date { get; set; }
        [EditLink]
        public String SupplierName { get; set; }
    
        [Administration.LocationListFormatter]
        public List<Int32> LocationList { get; set; }
        //public String Address { get; set; }
        //public String Note { get; set; }
        //public Int32 AccountId { get; set; }
    }
}