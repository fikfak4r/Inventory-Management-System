
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.SalesUoMAndPrice")]
    [BasedOnRow(typeof(Entities.SalesUoMAndPriceRow))]
    public class SalesUoMAndPriceForm
    {
        [Hidden]
        public Int32 ProductId { get; set; }

        [Placeholder("Unit make up of the Standard Unit")]
        public String UnitName { get; set; }
        public Int32 UnitMakeUp { get; set; }
        [Hidden]
        public Int32 StandardUomid { get; set; }
        public Decimal Price { get; set; }
        public Boolean Discontinued { get; set; }
       
    }
}