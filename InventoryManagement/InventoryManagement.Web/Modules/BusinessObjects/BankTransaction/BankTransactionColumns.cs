
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.BankTransaction")]
    [BasedOnRow(typeof(Entities.BankTransactionRow))]
    public class BankTransactionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BankTransactionId { get; set; }
        public Int32 BankId { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String AccountType { get; set; }
        public Int32 CustomerId { get; set; }
        public Int32 SalesId { get; set; }
        public Decimal Amount { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 SalesPymntDetailsId { get; set; }
    }
}