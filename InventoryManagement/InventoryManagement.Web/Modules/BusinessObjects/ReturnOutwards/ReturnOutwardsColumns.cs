
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ReturnOutwards")]
    [BasedOnRow(typeof(Entities.ReturnOutwardsRow))]
    public class ReturnOutwardsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RtnOutwardsId { get; set; }
        public DateTime Date { get; set; }
        public Int32 PurchasesId { get; set; }
        public Decimal TotalAmount { get; set; }
        public Decimal TotalFee { get; set; }
        public Decimal TotalAmountRefunded { get; set; }
        public Decimal TotalCredit { get; set; }
    }
}