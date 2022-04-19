
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.PurchasesPaymentsDetails")]
    [BasedOnRow(typeof(Entities.PurchasesPaymentDetailsRow))]
    public class PurchasesPaymentDetailsForm
    {
        public Int32 PurchasesId { get; set; }
        public DateTime Date { get; set; }
        public Decimal TotalAmount { get; set; }
        public Decimal AmountPaid { get; set; }
 
        public Boolean IsTotalAmountRow { get; set; }
        public Int32 LocationId { get; set; }
    }
}