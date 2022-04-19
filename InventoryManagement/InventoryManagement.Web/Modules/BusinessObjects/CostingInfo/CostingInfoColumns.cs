
namespace InventoryManagement.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.CostingInfo")]
    [BasedOnRow(typeof(Entities.CostingInfoRow))]
    public class CostingInfoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CostingInfoId { get; set; }
        public Int32 ProductId { get; set; }
        public Decimal Cost { get; set; }
    }
}