
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.SalesDetails")]
    [BasedOnRow(typeof(Entities.SalesDetailsRow))]
    public class SalesDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 SalesDetailsId { get; set; }
        [Hidden]
        public Int32 SalesId { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        [Width(125)]
        public String ProductProductName { get; set; }
        public Double Quantity { get; set; }
        [Width(125)]
        public String UomAndPriceUnitName { get; set; }
        
        public Decimal UnitPrice { get; set; }
        public Decimal Discount { get; set; }
        public Decimal Amount { get; set; }

        //public Int32 LocationId { get; set; }
        //public Decimal Cost { get; set; }
        //public Boolean IsPicked { get; set; }
    }
}