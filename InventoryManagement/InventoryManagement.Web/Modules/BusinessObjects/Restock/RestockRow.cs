
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

    [ConnectionKey("Default"), DisplayName("Restock"), InstanceName("Restock"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Restock.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.Restock.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Restock.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.Restock.Delete)]
    [LookupScript("BusinessObjects.Restock")]
    public sealed class RestockRow : Row, IIdRow
    {        
            #region Re Stock Id
            [Hidden]
            [DisplayName("Re Stock Id"), Column("ReStockID"), Identity]
            public Int32? ReStockId { get { return Fields.ReStockId[this]; } set { Fields.ReStockId[this] = value; } }
            public partial class RowFields { public Int32Field ReStockId; }
            #endregion ReStockId
                
            #region Product
            [Hidden]
            [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
            [LookupEditor(typeof(BusinessObjects.Entities.ProductRow), InplaceAdd = true)]
            public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
            public partial class RowFields { public Int32Field ProductId; }
            #endregion ProductId
                
            #region Date
            [DisplayName("Date"), DefaultValue("now")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Rtn Inwards Dtls Id
            
            [DisplayName("Product"), Column("RtnInwardsDtlsID"), NotNull]
            //[ForeignKey("[dbo].[ReturnInwardsDetails]", "SalesID"), LeftJoin("jSalesRtnInwards")]
            [LookupEditor(typeof(Scripts.ReturnInwardsDetailsLookup))]
            public Int32? RtnInwardsDtlsId { get { return Fields.RtnInwardsDtlsId[this]; } set { Fields.RtnInwardsDtlsId[this] = value; } }
            public partial class RowFields { public Int32Field RtnInwardsDtlsId; }
            #endregion RtnInwardsDtlsId
                
            #region Sales Id
            [Hidden]
            [DisplayName("Sales Id"), Column("SalesID")]
            public Int32? SalesId { get { return Fields.SalesId[this]; } set { Fields.SalesId[this] = value; } }
            public partial class RowFields { public Int32Field SalesId; }
            #endregion SalesId
                
            #region Quantity
            [DisplayName("Quantity"), Size(18), NotNull]
            public Double? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
            public partial class RowFields { public DoubleField Quantity; }
            #endregion Quantity
                
            #region Uom And Price
            [DisplayName("Unit"), Column("UOMAndPriceID"), ForeignKey("[dbo].[SalesUOMsAndPrices]", "UOMAndPriceID"), LeftJoin("jUomAndPrice"), TextualField("UomAndPriceUnitName")]
            [LookupEditor(typeof(BusinessObjects.Entities.SalesUoMAndPriceRow), CascadeFrom = "RtnInwardsDtlsId", CascadeField = "ProductId")]
            public Int32? UomAndPriceId { get { return Fields.UomAndPriceId[this]; } set { Fields.UomAndPriceId[this] = value; } }
            public partial class RowFields { public Int32Field UomAndPriceId; }
            #endregion UomAndPriceId
                
            #region Is Restocked
            [Hidden, DefaultValue(true)]
            [DisplayName("Is Restocked"), NotNull]
            public Boolean? IsRestocked { get { return Fields.IsRestocked[this]; } set { Fields.IsRestocked[this] = value; } }
            public partial class RowFields { public BooleanField IsRestocked; }
            #endregion IsRestocked
                
            #region Location Id
            [Hidden]
            [DisplayName("Location Id"), Column("LocationID")]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
        

    #region Foreign Fields
            
                [DisplayName("Product Date"), Expression("jProduct.[Date]")]
                public DateTime? ProductDate { get { return Fields.ProductDate[this]; } set { Fields.ProductDate[this] = value; } }
                public partial class RowFields { public DateTimeField ProductDate; }

                        
                [DisplayName("Product Product Code"), Expression("jProduct.[ProductCode]")]
                public String ProductProductCode { get { return Fields.ProductProductCode[this]; } set { Fields.ProductProductCode[this] = value; } }
                public partial class RowFields { public StringField ProductProductCode; }

                        
                [DisplayName("Product"), Expression("jProduct.[ProductName]")]
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

                        
                [DisplayName("Uom And Price Product Id"), Expression("jUomAndPrice.[ProductID]")]
                public Int32? UomAndPriceProductId { get { return Fields.UomAndPriceProductId[this]; } set { Fields.UomAndPriceProductId[this] = value; } }
                public partial class RowFields { public Int32Field UomAndPriceProductId; }

                        
                [DisplayName("Unit"), Expression("jUomAndPrice.[UnitName]")]
                public String UomAndPriceUnitName { get { return Fields.UomAndPriceUnitName[this]; } set { Fields.UomAndPriceUnitName[this] = value; } }
                public partial class RowFields { public StringField UomAndPriceUnitName; }

                        
                [DisplayName("Uom And Price Unit Make Up"), Expression("jUomAndPrice.[UnitMakeUp]")]
                public Decimal? UomAndPriceUnitMakeUp { get { return Fields.UomAndPriceUnitMakeUp[this]; } set { Fields.UomAndPriceUnitMakeUp[this] = value; } }
                public partial class RowFields { public DecimalField UomAndPriceUnitMakeUp; }

                        
                [DisplayName("Uom And Price Standard Uomid"), Expression("jUomAndPrice.[StandardUOMID]")]
                public Int32? UomAndPriceStandardUomid { get { return Fields.UomAndPriceStandardUomid[this]; } set { Fields.UomAndPriceStandardUomid[this] = value; } }
                public partial class RowFields { public Int32Field UomAndPriceStandardUomid; }

                        
                [DisplayName("Uom And Price Discontinued"), Expression("jUomAndPrice.[Discontinued]")]
                public Boolean? UomAndPriceDiscontinued { get { return Fields.UomAndPriceDiscontinued[this]; } set { Fields.UomAndPriceDiscontinued[this] = value; } }
                public partial class RowFields { public BooleanField UomAndPriceDiscontinued; }

                        
                [DisplayName("Uom And Price Price"), Expression("jUomAndPrice.[Price]")]
                public Decimal? UomAndPricePrice { get { return Fields.UomAndPricePrice[this]; } set { Fields.UomAndPricePrice[this] = value; } }
                public partial class RowFields { public DecimalField UomAndPricePrice; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.ReStockId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public RestockRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Restock]")
    {
    LocalTextPrefix = "BusinessObjects.Restock";
    }
    }
    #endregion RowFields
    }
    }
