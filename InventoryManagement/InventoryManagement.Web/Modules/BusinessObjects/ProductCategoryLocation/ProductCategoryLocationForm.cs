
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ProductCategoryLocation")]
    [BasedOnRow(typeof(Entities.ProductCategoryLocationRow))]
    public class ProductCategoryLocationForm
    {
        public Int32 ProductCategoryId { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 AccountId { get; set; }
    }
}