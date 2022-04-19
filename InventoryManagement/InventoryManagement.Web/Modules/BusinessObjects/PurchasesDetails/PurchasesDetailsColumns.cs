
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.PurchasesDetails")]
    [BasedOnRow(typeof(Entities.PurchasesDetailsRow))]
    public class PurchasesDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 PurchasesDetailsId { get; set; }
        [Hidden]
        public Int32 PurchasesId { get; set; }
        public DateTime Date { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }
        [Width(125)]
        [EditLink]
        public String ProductProductName { get; set; }

        [DisplayName("Quantity"), Width(80)]
        public Double Quantity { get; set; }

        [DisplayName("Unit")]
        public String UomAndPriceUnitName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        [Width(108)]
        public Decimal Amount { get; set; }
           [Hidden]
        public Int32 UomAndPriceId { get; set; }
        

        
        public Int32 LocationId { get; set; }
        public Boolean IsReceived { get; set; }
    }
}