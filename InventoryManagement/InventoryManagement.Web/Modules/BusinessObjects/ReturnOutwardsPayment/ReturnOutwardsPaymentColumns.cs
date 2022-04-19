
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.ReturnOutwardsPayments")]
    [BasedOnRow(typeof(Entities.ReturnOutwardsPaymentRow))]
    public class ReturnOutwardsPaymentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RtnOutwardsPaymentId { get; set; }
        public Int32 RtnOutwardsId { get; set; }
        public Int32 PurchasesId { get; set; }
        [Width(107)]
        public DateTime Date { get; set; }
    
        public Decimal Amount { get; set; }
        [Width(170), EditLink]
        public Decimal AmountRefunded { get; set; }
        public Decimal Fee { get; set; }
        public Decimal Credit { get; set; }
    }
}