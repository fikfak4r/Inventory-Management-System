
namespace InventoryManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.RoleLocation")]
    [BasedOnRow(typeof(Entities.RoleLocationRow))]
    public class RoleLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RoleLocationId { get; set; }
        public Int32 RoleId { get; set; }
        public Int32 LocationId { get; set; }
        public String RoleRoleName { get; set; }
        
    }
}