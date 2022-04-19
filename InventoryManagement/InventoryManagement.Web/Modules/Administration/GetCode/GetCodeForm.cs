
namespace InventoryManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.GetCode")]
    [BasedOnRow(typeof(Entities.GetCodeRow))]
    public class GetCodeForm
    {
        
        public Int32 AccountId { get; set; }
     
        public Int32 LocationId { get; set; }
        [ReadOnly(true)]
        public String LocationLocationName { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String LinkCode { get; set; }
          [TextAreaEditor(Rows = 3)]
        public String FormCode { get; set; }
    }
}