
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.PurchasesPaymentsDetails")]
    [BasedOnRow(typeof(Entities.PurchasesPaymentDetailsRow))]
    public class PurchasesPaymentDetailsColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PurchPymntDetailsId { get; set; }
        public Int32 PurchasesId { get; set; }
        [Width(107)]
        public DateTime Date { get; set; }
        [EditLink, Width(155)]
        public Decimal TotalAmount { get; set; }
        [Width(117)]
        public Decimal AmountPaid { get; set; }
     
        public Boolean IsTotalAmountRow { get; set; }
        public Int32 LocationId { get; set; }
    }
}