
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.BillOfMaterial")]
    [BasedOnRow(typeof(Entities.BillOfMaterialRow))]
    public class BillOfMaterialForm
    {
        [Hidden]
        public Int32 ProductId { get; set; }
        public String ComponentItem { get; set; }
        public String Description { get; set; }
        public Decimal Quantity { get; set; }
        public Decimal Cost { get; set; }
    }
}