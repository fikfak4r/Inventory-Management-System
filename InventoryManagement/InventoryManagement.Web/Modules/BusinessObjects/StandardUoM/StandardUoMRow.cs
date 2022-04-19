
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

    [ConnectionKey("Default"), DisplayName("StandardUOMs"), InstanceName("StandardUOMs"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.StandardUoM.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.StandardUoM.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.StandardUoM.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.StandardUoM.Delete)]
    [LookupScript("BusinessObjects.StandardUoM")]
    public sealed class StandardUoMRow : Row, IIdRow, INameRow
    {        
            #region Standard Uomid
            [DisplayName("Standard Uomid"), Column("StandardUOMID"), Identity]
            public Int32? StandardUomid { get { return Fields.StandardUomid[this]; } set { Fields.StandardUomid[this] = value; } }
            public partial class RowFields { public Int32Field StandardUomid; }
            #endregion StandardUomid
                
            #region Product
            [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
            [LookupEditor(typeof(BusinessObjects.Entities.ProductRow), InplaceAdd = true)]
            public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
            public partial class RowFields { public Int32Field ProductId; }
            #endregion ProductId
                
            #region Standard Unit Name
            [DisplayName("Standard Unit Name"), Size(50), NotNull, QuickSearch]
            public String StandardUnitName { get { return Fields.StandardUnitName[this]; } set { Fields.StandardUnitName[this] = value; } }
            public partial class RowFields { public StringField StandardUnitName; }
            #endregion StandardUnitName
                
            #region Discontinued
            [DisplayName("Discontinued"), NotNull]
            public Boolean? Discontinued { get { return Fields.Discontinued[this]; } set { Fields.Discontinued[this] = value; } }
            public partial class RowFields { public BooleanField Discontinued; }
            #endregion Discontinued
                
            #region Cost
            [DisplayName("Cost"), Size(19), Scale(4)]
            public Decimal? Cost { get { return Fields.Cost[this]; } set { Fields.Cost[this] = value; } }
            public partial class RowFields { public DecimalField Cost; }
            #endregion Cost
        

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
    get { return Fields.StandardUomid; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.StandardUnitName; }
            }
            #endregion Id and Name fields

    #region Constructor
    public StandardUoMRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[StandardUOMs]")
    {
    LocalTextPrefix = "BusinessObjects.StandardUoM";
    }
    }
    #endregion RowFields
    }
    }
