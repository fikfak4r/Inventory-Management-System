
namespace InventoryManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.UserLocation")]
    [BasedOnRow(typeof(Entities.UserLocationRow))]
    public class UserLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserLocationId { get; set; }
        public Int32 UserId { get; set; }
        public Int32 LocationId { get; set; }
    }
}