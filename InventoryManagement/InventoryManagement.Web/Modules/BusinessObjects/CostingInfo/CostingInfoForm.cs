
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.CostingInfo")]
    [BasedOnRow(typeof(Entities.CostingInfoRow))]
    public class CostingInfoForm
    {
        public Int32 ProductId { get; set; }
        public Decimal Cost { get; set; }
    }
}