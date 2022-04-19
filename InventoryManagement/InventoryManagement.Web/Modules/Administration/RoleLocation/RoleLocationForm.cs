
namespace InventoryManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.RoleLocation")]
    [BasedOnRow(typeof(Entities.RoleLocationRow))]
    public class RoleLocationForm
    {
        public Int32 RoleId { get; set; }
        public Int32 LocationId { get; set; }
    }
}