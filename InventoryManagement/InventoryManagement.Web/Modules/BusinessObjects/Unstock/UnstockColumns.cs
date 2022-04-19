
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Unstock")]
    [BasedOnRow(typeof(Entities.UnstockRow))]
    public class UnstockColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UnStockId { get; set; }
         [Hidden]
        public Int32 ProductId { get; set; }
        public DateTime Date { get; set; }
         [Hidden]
        public Int32 RtnOutwardsDtlsId { get; set; }
        [EditLink]
         public String ProductProductName { get; set; }
        public Int32 PurchasesId { get; set; }
        public Double Quantity { get; set; }
        [Hidden]
        public Int32 UomAndPriceId { get; set; }
        [Width(87)]
        public String UomAndPriceUnitName { get; set; }
        [Width(105)]
        public Boolean IsUnstocked { get; set; }
        public Int32 LocationId { get; set; }
    }
}