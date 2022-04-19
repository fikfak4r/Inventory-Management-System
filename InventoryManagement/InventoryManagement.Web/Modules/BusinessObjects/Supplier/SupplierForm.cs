
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow))]
    public class SupplierForm
    {

        public Int32 SupplierId { get; set; }
        [DefaultValue("now")]
        public DateTime Date { get; set; }
        public String SupplierName { get; set; }
        public String PhoneNumber { get; set; }
        public String Fax { get; set; }
        public String Email { get; set; }
        public String Website { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Address { get; set; }
        [TextAreaEditor(Rows = 6)]
        public String Note { get; set; }
        public List<Int32> LocationList { get; set; }
        public Int32 AccountId { get; set; }
    }
}