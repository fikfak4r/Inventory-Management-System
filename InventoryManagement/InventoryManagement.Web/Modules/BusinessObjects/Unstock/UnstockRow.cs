
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

    [ConnectionKey("Default"), DisplayName("Unstock"), InstanceName("Unstock"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Unstock.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.Unstock.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Unstock.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.Unstock.Delete)]
    [LookupScript("BusinessObjects.Unstock")]
    public sealed class UnstockRow : Row, IIdRow
    {        
            #region Un Stock Id
            [Hidden]
            [DisplayName("Un Stock Id"), Column("UnStockID"), Identity]
            public Int32? UnStockId { get { return Fields.UnStockId[this]; } set { Fields.UnStockId[this] = value; } }
            public partial class RowFields { public Int32Field UnStockId; }
            #endregion UnStockId
                
            #region Product
           
            [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
            [LookupEditor(typeof(BusinessObjects.Entities.ProductRow), InplaceAdd = true)]
            public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
            public partial class RowFields { public Int32Field ProductId; }
            #endregion ProductId
                
            #region Date
            [DefaultValue("now")]
            [DisplayName("Date")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date


            #region Purchases Id
            [Hidden]
            [DisplayName("Purchases Id"), Column("PurchasesID")]
            [ForeignKey("[dbo].[Purchases]", "PurchasesID"), LeftJoin("jPurchases")]
            public Int32? PurchasesId { get { return Fields.PurchasesId[this]; } set { Fields.PurchasesId[this] = value; } }
            public partial class RowFields { public Int32Field PurchasesId; }
            #endregion PurchasesId

            #region Rtn Outwards Dtls Id
      
            [DisplayName("Product 1"), Column("RtnOutwardsDtlsID"), NotNull]
            [ForeignKey("[dbo].[ReturnOutwardsDetails]", "ProductID"), LeftJoin("jPurchasesOutwardsDtls")]
            //[ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct1")]
            [LookupEditor(typeof(BusinessObjects.Scripts.ReturnOutwardsDetailsLookup))]//, CascadeFrom = "PurchasesId", CascadeField = "PurchasesId"
            public Int32? RtnOutwardsDtlsId { get { return Fields.RtnOutwardsDtlsId[this]; } set { Fields.RtnOutwardsDtlsId[this] = value; } }
            public partial class RowFields { public Int32Field RtnOutwardsDtlsId; }
            #endregion RtnOutwardsDtlsId
                
        
                
            #region Quantity
            [DisplayName("Quantity"), Size(18), NotNull]
            public Double? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
            public partial class RowFields { public DoubleField Quantity; }
        #endregion Quantity


        #region QuantityInLeastUnit
        [Hidden]
        [DisplayName("QuantityInLeastUnit"), Size(18), NotNull]
        public Double? QuantityInLeastUnit { get { return Fields.QuantityInLeastUnit[this]; } set { Fields.QuantityInLeastUnit[this] = value; } }
        public partial class RowFields { public DoubleField QuantityInLeastUnit; }
        #endregion QuantityInLeastUnit


        #region Uom And Price

        [DisplayName("Unit"), Column("UOMAndPriceID"), ForeignKey("[dbo].[PurchasesUOMsAndPrices]", "UOMAndPriceID"), LeftJoin("jUomAndPrice"), TextualField("UomAndPriceUnitName")]
            [LookupEditor(typeof(BusinessObjects.Entities.PurchasesUoMAndPriceRow), CascadeFrom = "RtnOutwardsDtlsId", CascadeField = "ProductId")]
            public Int32? UomAndPriceId { get { return Fields.UomAndPriceId[this]; } set { Fields.UomAndPriceId[this] = value; } }
            public partial class RowFields { public Int32Field UomAndPriceId; }
            #endregion UomAndPriceId
                
            #region Is Unstocked
            [DefaultValue(true)]
            [DisplayName("Is Unstocked"), NotNull]
            public Boolean? IsUnstocked { get { return Fields.IsUnstocked[this]; } set { Fields.IsUnstocked[this] = value; } }
            public partial class RowFields { public BooleanField IsUnstocked; }
            #endregion IsUnstocked
                
            #region Location Id
        [Hidden]
            [DisplayName("Location Id"), Column("LocationID")]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
        #endregion LocationId


        #region SumQuantity
        [NotMapped, Hidden]
        public Double? SumQuantity { get { return Fields.SumQuantity[this]; } set { Fields.SumQuantity[this] = value; } }
        public partial class RowFields { public DoubleField SumQuantity; }
        #endregion SumQuantity



        #region Foreign Fields

        [DisplayName("Product Date"), Expression("jProduct.[Date]")]
                public DateTime? ProductDate { get { return Fields.ProductDate[this]; } set { Fields.ProductDate[this] = value; } }
                public partial class RowFields { public DateTimeField ProductDate; }

                        
                [DisplayName("Product Code"), Expression("jProduct.[ProductCode]")]
                public String ProductProductCode { get { return Fields.ProductProductCode[this]; } set { Fields.ProductProductCode[this] = value; } }
                public partial class RowFields { public StringField ProductProductCode; }

                        
                [DisplayName("Product Name"), Expression("jProduct.[ProductName]")]
                public String ProductProductName { get { return Fields.ProductProductName[this]; } set { Fields.ProductProductName[this] = value; } }
                public partial class RowFields { public StringField ProductProductName; }

                        
                [DisplayName("Product Brand Name"), Expression("jProduct.[BrandName]")]
                public String ProductBrandName { get { return Fields.ProductBrandName[this]; } set { Fields.ProductBrandName[this] = value; } }
                public partial class RowFields { public StringField ProductBrandName; }

                        
                [DisplayName("Product Category"), Expression("jProduct.[ProductCategoryID]")]
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

                        
                [DisplayName("Unit Name"), Expression("jUomAndPrice.[UnitName]")]
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
    get { return Fields.UnStockId; }
    }
  

    #endregion Id and Name fields

    #region Constructor
    public UnstockRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Unstock]")
    {
    LocalTextPrefix = "BusinessObjects.Unstock";
    }
    }
    #endregion RowFields


    }
    }
