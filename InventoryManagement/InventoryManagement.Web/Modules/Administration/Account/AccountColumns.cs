
namespace InventoryManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Account")]
    [BasedOnRow(typeof(Entities.AccountRow))]
    public class AccountColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AccountId { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String CompanyName { get; set; }
        public String Address { get; set; }
        public String Email { get; set; }
        public String PhoneNumber { get; set; }
        public String WebsiteAddress { get; set; }
    }
}