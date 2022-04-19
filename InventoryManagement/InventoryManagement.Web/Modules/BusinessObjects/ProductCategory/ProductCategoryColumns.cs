
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ProductCategory")]
    [BasedOnRow(typeof(Entities.ProductCategoryRow))]
    public class ProductCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductCategoryId { get; set; }
        [EditLink]
        public String CategoryName { get; set; }
        public String Description { get; set; }

        [Administration.LocationListFormatter]
        public List<Int32> LocationList { get; set; }
        //public Int32 AccountId { get; set; }
    }
}