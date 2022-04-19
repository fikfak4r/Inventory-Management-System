
namespace InventoryManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Location")]
    [BasedOnRow(typeof(Entities.LocationRow))]
    public class LocationForm
    {
        public Int32 AccountId { get; set; }
        public DateTime Date { get; set; }
        public String LocationName { get; set; }
        public String PhoneNumber { get; set; }
        public String Email { get; set; }
        public String Website { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Address { get; set; }
        public Int32 UserId { get; set; }
        public Boolean? IsVisible { get; set; }
    }
}