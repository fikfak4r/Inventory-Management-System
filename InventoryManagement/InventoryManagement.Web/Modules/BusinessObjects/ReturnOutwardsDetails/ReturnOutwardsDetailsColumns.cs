
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ReturnOutwardsDetails")]
    [BasedOnRow(typeof(Entities.ReturnOutwardsDetailsRow))]
    public class ReturnOutwardsDetailsColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RtnOutwardsDtlsId { get; set; }
        public DateTime Date { get; set; }

        [Hidden]
        public Int32 ProductId { get; set; }
        [Width(108), EditLink]
        public String ProductProductName { get; set; }
        public Double Quantity { get; set; }
        [Hidden]
        public Int32 UomAndPriceId { get; set; }
        [Width(85)]
        public String UomAndPriceUnitName { get; set; }

        public Double SumQuantity { get; set; }


        public Decimal UnitPrice { get; set; }
        //public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        public Int32 RtnOutwardsId { get; set; }
        public Int32 PurchasesDetailsId { get; set; }
        public Int32 PurchasesId { get; set; }
        
        public Int32 LocationId { get; set; }
    }
}