
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Product")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class ProductColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 ProductId { get; set; }
        //public DateTime Date { get; set; }
        [EditLink]

        public String ProductName { get; set; }
        
        public String ProductCode { get; set; }
       
        public String BrandName { get; set; }
        
        [Width(250), Hidden]
        public Int32 ProductCategoryId { get; set; }
        [Width(150)]
        public String ProductCategoryCategoryName { get; set; }

        [Width(150)]
        public String SupplierSupplierName { get; set; }

        [Administration.LocationListFormatter]
        public List<Int32> LocationList { get; set; }

        [Hidden]
        public Int32 SupplierId { get; set; }


        
        //public string Pricing { get; set; }
        


        //public String LeastUnitName { get; set; }
        //public Int32 AccountId { get; set; }
    }
}