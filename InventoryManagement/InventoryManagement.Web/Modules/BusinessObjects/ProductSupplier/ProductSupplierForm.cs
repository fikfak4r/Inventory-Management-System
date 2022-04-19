
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ProductSupplier")]
    [BasedOnRow(typeof(Entities.ProductSupplierRow))]
    public class ProductSupplierForm
    {
        public Int32 ProductId { get; set; }

        public Int32 SupplierId { get; set; }

        public List<Int32> SupplierList
        {
            get; set;
        }

    }


}