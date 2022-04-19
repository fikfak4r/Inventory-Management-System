
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ReturnInwards")]
    [BasedOnRow(typeof(Entities.ReturnInwardsRow))]
    public class ReturnInwardsColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RtnInwardsId { get; set; }
        public DateTime Date { get; set; }
        public Int32 SalesId { get; set; }
        public Decimal TotalAmount { get; set; }
        public Decimal TotalFee { get; set; }
        public Decimal TotalAmountRefunded { get; set; }
        public Decimal TotalCredit { get; set; }
    }
}