
namespace InventoryManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.GetCode")]
    [BasedOnRow(typeof(Entities.GetCodeRow))]
    public class GetCodeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 GetCodeId { get; set; }
        public Int32 AccountId { get; set; }
        public Int32 LocationId { get; set; }
        [EditLink]
        public String LocationLocationName { get; set; }
        
        public String LinkCode { get; set; }
      
        public String FormCode { get; set; }
    }
}