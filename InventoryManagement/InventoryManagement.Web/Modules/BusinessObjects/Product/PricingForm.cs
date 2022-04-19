namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Pricing")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class PricingForm
    {
        public List<Entities.PurchasesUoMAndPriceRow> PurchasesUoMAndPriceList { get; set; }
    }
}