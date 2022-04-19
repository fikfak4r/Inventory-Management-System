
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ReturnInwardsDetails")]
    [BasedOnRow(typeof(Entities.ReturnInwardsDetailsRow))]
    public class ReturnInwardsDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RtnInwardsDtlsId { get; set; }
        public DateTime Date { get; set; }
        [Hidden]
        public Int32 ProductId { get; set; }
        [Width(125), EditLink]
        public String ProductProductName { get; set; }
        public Int32 RtnInwardsId { get; set; }
        public Int32 SalesDetailsId { get; set; }
        public Int32 SalesId { get; set; }
        public Double Quantity { get; set; }
        [Width(125)]
        public String UomAndPriceUnitName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }
        [Hidden]
        public Int32 UomAndPriceId { get; set; }
        public Int32 LocationId { get; set; }

    }
}