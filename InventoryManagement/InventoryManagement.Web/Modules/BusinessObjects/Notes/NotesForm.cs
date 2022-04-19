
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Notes")]
    [BasedOnRow(typeof(Entities.NotesRow))]
    public class NotesForm
    {
        public Int32 PurchaseId { get; set; }
        public DateTime Date { get; set; }
        public String Description { get; set; }
    }
}