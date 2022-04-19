
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Notes")]
    [BasedOnRow(typeof(Entities.NotesRow))]
    public class NotesColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 NoteId { get; set; }
        public Int32 PurchaseId { get; set; }
        
        public DateTime Date { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}