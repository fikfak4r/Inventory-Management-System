
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.ReturnOutwards")]
    [BasedOnRow(typeof(Entities.ReturnOutwardsRow))]
    public class ReturnOutwardsForm
    {
        public DateTime Date { get; set; }
        public Int32 PurchasesId { get; set; }
        public Decimal TotalAmount { get; set; }
        public Decimal TotalFee { get; set; }
        public Decimal TotalAmountRefunded { get; set; }
        public Decimal TotalCredit { get; set; }
    }
}