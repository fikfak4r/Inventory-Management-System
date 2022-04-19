
namespace InventoryManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Account")]
    [BasedOnRow(typeof(Entities.AccountRow))]
    public class AccountForm
    {
        public DateTime Date { get; set; }
        public String CompanyName { get; set; }
        public String PhoneNumber { get; set; }
        public String Email { get; set; }
        public String WebsiteAddress { get; set; }
        
        [TextAreaEditor(Rows = 6)]
        public String Address { get; set; }

        
    }
}