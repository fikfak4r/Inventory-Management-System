
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ProductCategoryLocation")]
    [BasedOnRow(typeof(Entities.ProductCategoryLocationRow))]
    public class ProductCategoryLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProdCatLoctnId { get; set; }
        public Int32 ProductCategoryId { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 AccountId { get; set; }
    }
}