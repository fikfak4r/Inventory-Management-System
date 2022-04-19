
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.PurchaseTrail")]
    [BasedOnRow(typeof(Entities.PurchaseTrailRow))]
    public class PurchaseTrailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 PurchasesTrailId { get; set; }
        [Hidden]
        public Int32 PurchasesId { get; set; }
        public DateTime Date { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }
        [Width(125)]
        [EditLink]
        public String ProductProductName { get; set; }

        [DisplayName("Quantity"), Width(80)]
        public Int32 Quantity { get; set; }

        [DisplayName("Unit")]
        public String UomAndPriceUnitName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        [Width(108)]
        public Decimal Amount { get; set; }
    }
}