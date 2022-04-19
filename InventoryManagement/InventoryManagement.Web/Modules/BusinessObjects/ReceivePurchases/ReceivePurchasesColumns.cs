
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ReceivePurchases")]
    [BasedOnRow(typeof(Entities.ReceivePurchasesRow))]
    public class ReceivePurchasesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ReceivePurchasesId { get; set; }
        public Int32 PurchasesId { get; set; }
        
        public Int32 PurchasesDetailsId { get; set; }
        public DateTime Date { get; set; }
        [Width(156), EditLink]
        public string ProductProductName { get; set; }
        public Double Quantity { get; set; }
        [Width(60)]
        public String UomAndPriceUnitName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        [Width(80)]
        public Boolean IsReceived { get; set; }
        [Width(120)]
        public Boolean IsFree { get; set; }

        public Int32 LocationId { get; set; }
    }
}