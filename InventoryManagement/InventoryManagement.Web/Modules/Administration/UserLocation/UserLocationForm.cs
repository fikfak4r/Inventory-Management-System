
namespace InventoryManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.UserLocation")]
    [BasedOnRow(typeof(Entities.UserLocationRow))]
    public class UserLocationForm
    {
        public Int32 UserId { get; set; }
        public Int32 LocationId { get; set; }
    }
}