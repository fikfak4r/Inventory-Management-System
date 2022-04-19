
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ReturnInwardsDetails")]
    [BasedOnRow(typeof(Entities.ReturnInwardsDetailsRow))]
    public class ReturnInwardsDetailsForm
    {

        public DateTime Date { get; set; }
        public Int32 ProductId { get; set; }
        public Double Quantity { get; set; }
        public Int32 UomAndPriceId { get; set; }
        public Int32 RtnInwardsId { get; set; }
        public Int32 SalesDetailsId { get; set; }
        public Int32 SalesId { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        
        
        public Int32 LocationId { get; set; }
    }
}