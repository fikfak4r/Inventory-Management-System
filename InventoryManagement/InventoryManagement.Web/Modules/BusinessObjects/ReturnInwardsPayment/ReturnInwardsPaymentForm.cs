
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ReturnInwardsPayment")]
    [BasedOnRow(typeof(Entities.ReturnInwardsPaymentRow))]
    public class ReturnInwardsPaymentForm
    {
        public Int32 RtnInwardsId { get; set; }
        public Int32 SalesId { get; set; }
        public DateTime Date { get; set; }
        public Decimal Amount { get; set; }
        public Decimal AmountRefunded { get; set; }
        public Decimal Fee { get; set; }
        public Decimal Credit { get; set; }
    }
}