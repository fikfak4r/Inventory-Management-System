
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow))]
    public class CustomerColumns
    {

        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 CustomerId { get; set; }
        [EditLink]
        public String Name { get; set; }
        
        public String FullName { get; set; }

        public String PhoneNumber { get; set; }

        public String Email { get; set; }

        public String Website { get; set; }

        public String Address { get; set; }

        [Administration.LocationListFormatter]
        public List<Int32> LocationList { get; set; }
        //public Int32 AccountId { get; set; }
        //public String Address2 { get; set; }

    }
}