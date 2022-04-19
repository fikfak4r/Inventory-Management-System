
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.SalesPaymentDetails")]
    [BasedOnRow(typeof(Entities.SalesPaymentDetailsRow))]
    public class SalesPaymentDetailsForm
    {
        public Int32 SalesId { get; set; }
        public DateTime Date { get; set; }
        public Decimal TotalAmount { get; set; }
        public Decimal AmountPaid { get; set; }
        public Decimal AmountLeft { get; set; }
        public Boolean IsTotalAmountRow { get; set; }
        public Int32 LocationId { get; set; }
        public String PaymentMode { get; set; }
        public Int32 BankId { get; set; }
    }
}