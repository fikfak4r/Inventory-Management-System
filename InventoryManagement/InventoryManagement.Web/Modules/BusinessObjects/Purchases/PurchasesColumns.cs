
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Purchases")]
    [BasedOnRow(typeof(Entities.PurchasesRow))]
    public class PurchasesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PurchasesId { get; set; }
        [EditLink]
        public String OrderId { get; set; }
        [Width(100)]
        public DateTime Date { get; set; }
        [Hidden]
        public Int32 SupplierId { get; set; }
        [Width(150)]
        public String SupplierSupplierName { get; set; }
        [Width(135)]
        public Decimal TotalAmount { get; set; }
        [Width(135)]
        public Decimal TotalAmountPaid { get; set; }
        [Width(135)]
        public Decimal TotalAmountLeft { get; set; }
        public Boolean HasPurchasesDetails { get; set; }
        [Hidden]
        public Int32 LocationId { get; set; }
        public Boolean IsIntegerTrailingOrderIdWithPrefixPo { get; set; }
        public String Status { get; set; }

        public Boolean IsOpen { get; set; }

        public Boolean IsInProgress { get; set; }

        public Boolean IsFullyReceived { get; set; }

        public Boolean IsFullyPaid { get; set; }
        public Boolean IsAdvanced { get; set; }

    }
}