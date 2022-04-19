
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.CustomerLocation")]
    [BasedOnRow(typeof(Entities.CustomerLocationRow))]
    public class CustomerLocationForm
    {
        public Int32 CustomerId { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 AccountId { get; set; }
    }
}