
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow))]
    public class CustomerForm
    {
        public String Name { get; set; }
        public String FullName { get; set; }
        [HalfWidth]
        public String PhoneNumber { get; set; }
        [HalfWidth]
        public String Email { get; set; }
        public String Website { get; set; }
        [TextAreaEditor(Rows=8)]
        public String Address { get; set; }
        public List<Int32> LocationList { get; set; }
        //public Int32 AccountId { get; set; }
        //public String Address2 { get; set; }
    }
}