
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ProductSupplier4")]
    [BasedOnRow(typeof(Entities.ProductSupplierRow))]
    public class ProductSupplier3Columns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductSupplierId { get; set; }

        public String SupplierSupplierName { get; set; }

        public string ProductProductName { get; set; }

        public String ProductProductCode { get; set; }

        public String ProductBrandName { get; set; }


    }
}