
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.StandardUoM")]
    [BasedOnRow(typeof(Entities.StandardUoMRow))]
    public class StandardUoMForm
    {
        public Int32 ProductId { get; set; }
        public String StandardUnitName { get; set; }
        public Boolean Discontinued { get; set; }
        public Decimal Cost { get; set; }
    }
}