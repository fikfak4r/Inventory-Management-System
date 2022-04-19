
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ReorderPoint")]
    [BasedOnRow(typeof(Entities.ReorderPointRow))]
    public class ReorderPointForm
    {

        public Int32 ProductId { get; set; }
        [Category("Re-order Point")]
        public Double ReorderPointValue { get; set; }

        public Int32? UOMAndPriceId
        {
            get; set;
        }
    }
}