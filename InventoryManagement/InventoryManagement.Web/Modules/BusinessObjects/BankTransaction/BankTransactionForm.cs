
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.BankTransaction")]
    [BasedOnRow(typeof(Entities.BankTransactionRow))]
    public class BankTransactionForm
    {
        public Int32 BankId { get; set; }
        public DateTime Date { get; set; }
        public String AccountType { get; set; }
        public Int32 CustomerId { get; set; }
        public Int32 SalesId { get; set; }
        public Decimal Amount { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 SalesPymntDetailsId { get; set; }
    }
}