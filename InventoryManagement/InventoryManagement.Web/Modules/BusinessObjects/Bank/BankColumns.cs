
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Bank")]
    [BasedOnRow(typeof(Entities.BankRow))]
    public class BankColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BankId { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String BankName { get; set; }
        public Int32 AccountId { get; set; }
        public String AccountCompanyName { get; set; }
    }
}