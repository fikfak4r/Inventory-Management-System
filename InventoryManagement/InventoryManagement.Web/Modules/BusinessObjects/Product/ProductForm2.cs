
namespace InventoryManagement.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Product2")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class ProductForm2
    {


        public Int32? ProductId { get; set; }
        
        [DefaultValue("now")]
        public DateTime Date { get; set; }
        public Int32 SupplierId { get; set; }
        
        public Int32 ProductCategoryId { get; set; }
        public String ProductName { get; set; }
        public String ProductCode { get; set; }
        public String BrandName { get; set; }
        public String LeastUnitName { get; set; }
        public List<Int32> LocationList { get; set; }
        [Hidden]
        public Int32 AccountId { get; set; }

        public List<Entities.PurchasesUoMAndPriceRow> PurchasesUoMAndPriceList { get; set; }

        public List<Entities.SalesUoMAndPriceRow> SalesUoMAndPriceList { get; set; }

    }
}