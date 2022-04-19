
namespace InventoryManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Location")]
    [BasedOnRow(typeof(Entities.LocationRow))]
    public class LocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 LocationId { get; set; }
        public Int32 AccountId { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String LocationName { get; set; }
        public String PhoneNumber { get; set; }
        public String Email { get; set; }
        public String Website { get; set; }
        
        public String Address { get; set; }
        public Int32 UserId { get; set; }
    }
}