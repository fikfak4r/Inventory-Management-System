
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.PurchasesUoMAndPrice")]
    [BasedOnRow(typeof(Entities.PurchasesUoMAndPriceRow))]
    public class PurchasesUoMAndPriceForm
    {
        [Hidden]
        public Int32 ProductId { get; set; }
        public String UnitName { get; set; }
        [Hint("Unit make up of the Standard Unit"), Placeholder("Unit make up of the Standard Unit")]
        public Int32 UnitMakeUp { get; set; }
        //public Int32 StandardUomid { get; set; }
        //[DisplayName("Standard unit name")]
        //public string StandardUnitName { get; set; }
        
       
        public Decimal Price { get; set; }
        public Boolean Discontinued { get; set; }
      
    }
}