
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ProductCategory")]
    [BasedOnRow(typeof(Entities.ProductCategoryRow))]
    public class ProductCategoryForm
    {
        public String CategoryName { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Description { get; set; }
        public List<Int32> LocationList { get; set; }

        //public Int32 AccountId { get; set; }
    }
}