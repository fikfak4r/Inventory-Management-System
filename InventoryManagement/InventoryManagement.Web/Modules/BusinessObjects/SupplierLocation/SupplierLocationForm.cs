
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.SupplierLocation")]
    [BasedOnRow(typeof(Entities.SupplierLocationRow))]
    public class SupplierLocationForm
    {
        public Int32 SupplierId { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 AccountId { get; set; }
    }
}