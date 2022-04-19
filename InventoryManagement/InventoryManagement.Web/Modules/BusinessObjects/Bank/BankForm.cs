
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Bank")]
    [BasedOnRow(typeof(Entities.BankRow))]
    public class BankForm
    {
        public DateTime Date { get; set; }
        public String BankName { get; set; }
        public Int32 AccountId { get; set; }
    }
}