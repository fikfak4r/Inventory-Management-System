
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.MovementHistory")]
    [BasedOnRow(typeof(Entities.MovementHistoryRow))]
    public class MovementHistoryForm
    {
        public String TransactionType { get; set; }
        public DateTime Date { get; set; }
        public Int32 LocationId { get; set; }
        public String PurchaseOrderId { get; set; }
        public String QuantityBefore { get; set; }
        public String Quantity { get; set; }
        public String QuantityAfter { get; set; }
    }
}