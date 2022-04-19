
namespace InventoryManagement.BusinessObjects.Columns
{

    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow))]
    public class ProductSupplierColumns2
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SupplierId { get; set; }
        //public DateTime Date { get; set; }
        [EditLink]
        public String SupplierName { get; set; }
        public String PhoneNumber { get; set; }
        public String Fax { get; set; }

        public String Email { get; set; }
        public String Website { get; set; }

        [Administration.LocationListFormatter]
        public List<Int32> LocationList { get; set; }
        //public String Address { get; set; }
        //public String Note { get; set; }
        //public Int32 AccountId { get; set; }
    }
}