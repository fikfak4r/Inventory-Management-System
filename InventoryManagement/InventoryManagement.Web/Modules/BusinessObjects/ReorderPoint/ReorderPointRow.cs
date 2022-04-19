
namespace InventoryManagement.BusinessObjects.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("ReorderPoints"), InstanceName("ReorderPoints"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ReorderPoint.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ReorderPoint.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ReorderPoint.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ReorderPoint.Delete)]
    [LookupScript("BusinessObjects.ReorderPoint")]
    public sealed class ReorderPointRow : Row, IIdRow
    { 
               
            #region Reorder Point Id
            [DisplayName("Reorder Point Id"), Column("ReorderPointID"), Identity]
            public Int32? ReorderPointId { get { return Fields.ReorderPointId[this]; } set { Fields.ReorderPointId[this] = value; } }
            public partial class RowFields { public Int32Field ReorderPointId; }
            #endregion ReorderPointId
             
           
            #region Product
            [Hidden]
            [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
            [LookupEditor(typeof(BusinessObjects.Scripts.ProductLookup), InplaceAdd = true)]
            public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
            public partial class RowFields { public Int32Field ProductId; }
            #endregion ProductId
                
            #region Reorder Point Value
            [DisplayName("Reorder Level")]
            public Double? ReorderPointValue { get { return Fields.ReorderPointValue[this]; } set { Fields.ReorderPointValue[this] = value; } }
            public partial class RowFields { public DoubleField ReorderPointValue; }
        #endregion ReorderPointValue


        #region UOMAndPriceId
        [DisplayName("Unit"), Column("UOMAndPriceId"), ForeignKey("[dbo].[PurchasesUoMAndPrice]", "UOMAndPriceId"), LeftJoin("jUOMAndPriceId")]
        [LookupEditor(typeof(BusinessObjects.Scripts.PurchasesUoMAndPriceLookup), CascadeFrom = "ProductId", CascadeField = "ProductId")]
        public Int32? UOMAndPriceId { get { return Fields.UOMAndPriceId[this]; } set { Fields.UOMAndPriceId[this] = value; } }
        public partial class RowFields { public Int32Field UOMAndPriceId; }
        #endregion UOMAndPriceIdId

        #region Qty In Least Unit
        [DisplayName("Qty In Least Unit"), Size(18)]
        public Double? QtyInLeastUnit { get { return Fields.QtyInLeastUnit[this]; } set { Fields.QtyInLeastUnit[this] = value; } }
        public partial class RowFields { public DoubleField QtyInLeastUnit; }
        #endregion QtyInLeastUnit

        [NotMapped]
        public String LocationName { get { return Fields.LocationName[this]; } set { Fields.LocationName[this] = value; } }
        public partial class RowFields { public StringField LocationName; }




        #region Foreign Fields

        [DisplayName("Product Date"), Expression("jProduct.[Date]")]
                public DateTime? ProductDate { get { return Fields.ProductDate[this]; } set { Fields.ProductDate[this] = value; } }
                public partial class RowFields { public DateTimeField ProductDate; }

                        
                [DisplayName("Product Product Code"), Expression("jProduct.[ProductCode]")]
                public String ProductProductCode { get { return Fields.ProductProductCode[this]; } set { Fields.ProductProductCode[this] = value; } }
                public partial class RowFields { public StringField ProductProductCode; }

                        
                [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
                public String ProductProductName { get { return Fields.ProductProductName[this]; } set { Fields.ProductProductName[this] = value; } }
                public partial class RowFields { public StringField ProductProductName; }

                        
                [DisplayName("Product Brand Name"), Expression("jProduct.[BrandName]")]
                public String ProductBrandName { get { return Fields.ProductBrandName[this]; } set { Fields.ProductBrandName[this] = value; } }
                public partial class RowFields { public StringField ProductBrandName; }

                        
                [DisplayName("Product Product Category Id"), Expression("jProduct.[ProductCategoryID]")]
                public Int32? ProductProductCategoryId { get { return Fields.ProductProductCategoryId[this]; } set { Fields.ProductProductCategoryId[this] = value; } }
                public partial class RowFields { public Int32Field ProductProductCategoryId; }

                        
                [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
                public Int32? ProductSupplierId { get { return Fields.ProductSupplierId[this]; } set { Fields.ProductSupplierId[this] = value; } }
                public partial class RowFields { public Int32Field ProductSupplierId; }

                        
                [DisplayName("Product Least Unit Name"), Expression("jProduct.[LeastUnitName]")]
                public String ProductLeastUnitName { get { return Fields.ProductLeastUnitName[this]; } set { Fields.ProductLeastUnitName[this] = value; } }
                public partial class RowFields { public StringField ProductLeastUnitName; }

                        
                [DisplayName("Product Account Id"), Expression("jProduct.[AccountID]")]
                public Int32? ProductAccountId { get { return Fields.ProductAccountId[this]; } set { Fields.ProductAccountId[this] = value; } }
                public partial class RowFields { public Int32Field ProductAccountId; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.ReorderPointId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public ReorderPointRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ReorderPoints]")
    {
    LocalTextPrefix = "BusinessObjects.ReorderPoint";
    }
    }
    #endregion RowFields
    }
    }
