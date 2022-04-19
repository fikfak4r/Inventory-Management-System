
namespace InventoryManagement.BusinessObjects.Columns
{

    using Serenity.ComponentModel;
    using System;


    [ColumnsScript("BusinessObjects.MovementHistory")]
    [BasedOnRow(typeof(Entities.MovementHistoryRow))]

    public class MovementHistoryColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 MovementHistoryId { get; set; }
 
        public String TransactionType { get; set; }
        public DateTime Date { get; set; }
       
        public String PurchaseOrderId { get; set; }
        public String QuantityBefore { get; set; }
        public String Quantity { get; set; }
        public String QuantityAfter { get; set; }


    }
}