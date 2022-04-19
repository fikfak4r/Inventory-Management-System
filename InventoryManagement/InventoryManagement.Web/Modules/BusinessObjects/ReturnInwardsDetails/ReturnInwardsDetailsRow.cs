
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

    [ConnectionKey("Default"), DisplayName("Return"), InstanceName("Return"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ReturnInwardsDetails.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ReturnInwardsDetails.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ReturnInwardsDetails.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ReturnInwardsDetails.Delete)]
    [LookupScript("BusinessObjects.ReturnInwardsDetails")]
    public sealed class ReturnInwardsDetailsRow : Row, IIdRow
    {
        #region Rtn Inwards Dtls Id
        [Hidden]
        [DisplayName("Rtn Inwards Dtls Id"), Column("RtnInwardsDtlsID"), Identity, LookupInclude]
        public Int32? RtnInwardsDtlsId { get { return Fields.RtnInwardsDtlsId[this]; } set { Fields.RtnInwardsDtlsId[this] = value; } }
        public partial class RowFields { public Int32Field RtnInwardsDtlsId; }
        #endregion RtnInwardsDtlsId

        #region Date

        [DisplayName("Date"), NotNull, DefaultValue("now")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region Product
        [LookupInclude]
        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        [LookupEditor(typeof(BusinessObjects.Scripts.ProductLookup))]
        public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
        public partial class RowFields { public Int32Field ProductId; }
        #endregion ProductId

        #region Rtn Inwards
        [Hidden]
        [DisplayName("Rtn Inwards"), Column("RtnInwardsID"), ForeignKey("[dbo].[ReturnInwards]", "RtnInwardsID"), LeftJoin("jRtnInwards")]
        [LookupEditor(typeof(BusinessObjects.Entities.ReturnInwardsRow), InplaceAdd = true)]
        public Int32? RtnInwardsId { get { return Fields.RtnInwardsId[this]; } set { Fields.RtnInwardsId[this] = value; } }
        public partial class RowFields { public Int32Field RtnInwardsId; }
        #endregion RtnInwardsId

        #region Sales Details
        [Hidden]
        [DisplayName("Sales Details"), Column("SalesDetailsID"), ForeignKey("[dbo].[SalesDetails]", "SalesDetailsID"), LeftJoin("jSalesDetails")]
        [LookupEditor(typeof(BusinessObjects.Entities.SalesDetailsRow), InplaceAdd = true)]
        public Int32? SalesDetailsId { get { return Fields.SalesDetailsId[this]; } set { Fields.SalesDetailsId[this] = value; } }
        public partial class RowFields { public Int32Field SalesDetailsId; }
        #endregion SalesDetailsId

        #region Sales Id
        [Hidden]
        [DisplayName("Sales Id"), Column("SalesID"), LookupInclude]
        public Int32? SalesId { get { return Fields.SalesId[this]; } set { Fields.SalesId[this] = value; } }
        public partial class RowFields { public Int32Field SalesId; }
        #endregion SalesId

        #region Quantity
        [DisplayName("Quantity"), NotNull]
        public Double? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
        public partial class RowFields { public DoubleField Quantity; }
        #endregion Quantity

        #region Unit Price
        [DisplayName("Unit Price"), Size(19), Scale(4)]
        [DisplayFormat("#,##0.00")]
        [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? UnitPrice { get { return Fields.UnitPrice[this]; } set { Fields.UnitPrice[this] = value; } }
        public partial class RowFields { public DecimalField UnitPrice; }
        #endregion UnitPrice

        #region Amount
        [DisplayName("Amount"), Scale(4), NotNull]
        [DisplayFormat("#,##0.00")]
        [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
        public partial class RowFields { public DecimalField Amount; }
        #endregion Amount

        #region Discount
        [DefaultValue(0)]
        [DisplayName("Discount"), Size(19), Scale(4)]
        [DisplayFormat("#,##0.00")]
        [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? Discount { get { return Fields.Discount[this]; } set { Fields.Discount[this] = value; } }
        public partial class RowFields { public DecimalField Discount; }
        #endregion Discount

        #region Uom And Price
        [DisplayName("Unit"), Column("UOMAndPriceID"), ForeignKey("[dbo].[SalesUOMsAndPrices]", "UOMAndPriceID"), LeftJoin("jUomAndPrice"), TextualField("UomAndPriceUnitName")]
        [LookupEditor(typeof(BusinessObjects.Entities.SalesUoMAndPriceRow), CascadeFrom = "ProductId", CascadeField = "ProductId")]
        public Int32? UomAndPriceId { get { return Fields.UomAndPriceId[this]; } set { Fields.UomAndPriceId[this] = value; } }
        public partial class RowFields { public Int32Field UomAndPriceId; }
        #endregion UomAndPriceId

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


        [DisplayName("Product"), Expression("jProduct.[ProductName]"), LookupInclude]
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


        [DisplayName("Rtn Inwards Date"), Expression("jRtnInwards.[Date]")]
        public DateTime? RtnInwardsDate { get { return Fields.RtnInwardsDate[this]; } set { Fields.RtnInwardsDate[this] = value; } }
        public partial class RowFields { public DateTimeField RtnInwardsDate; }


        [DisplayName("Rtn Inwards Sales Id"), Expression("jRtnInwards.[SalesID]")]
        public Int32? RtnInwardsSalesId { get { return Fields.RtnInwardsSalesId[this]; } set { Fields.RtnInwardsSalesId[this] = value; } }
        public partial class RowFields { public Int32Field RtnInwardsSalesId; }


        [DisplayName("Rtn Inwards Total Amount"), Expression("jRtnInwards.[TotalAmount]")]
        public Decimal? RtnInwardsTotalAmount { get { return Fields.RtnInwardsTotalAmount[this]; } set { Fields.RtnInwardsTotalAmount[this] = value; } }
        public partial class RowFields { public DecimalField RtnInwardsTotalAmount; }


        [DisplayName("Rtn Inwards Total Fee"), Expression("jRtnInwards.[TotalFee]")]
        public Decimal? RtnInwardsTotalFee { get { return Fields.RtnInwardsTotalFee[this]; } set { Fields.RtnInwardsTotalFee[this] = value; } }
        public partial class RowFields { public DecimalField RtnInwardsTotalFee; }


        [DisplayName("Rtn Inwards Total Amount Refunded"), Expression("jRtnInwards.[TotalAmountRefunded]")]
        public Decimal? RtnInwardsTotalAmountRefunded { get { return Fields.RtnInwardsTotalAmountRefunded[this]; } set { Fields.RtnInwardsTotalAmountRefunded[this] = value; } }
        public partial class RowFields { public DecimalField RtnInwardsTotalAmountRefunded; }


        [DisplayName("Rtn Inwards Total Credit"), Expression("jRtnInwards.[TotalCredit]")]
        public Decimal? RtnInwardsTotalCredit { get { return Fields.RtnInwardsTotalCredit[this]; } set { Fields.RtnInwardsTotalCredit[this] = value; } }
        public partial class RowFields { public DecimalField RtnInwardsTotalCredit; }


        [DisplayName("Sales Details Sales Id"), Expression("jSalesDetails.[SalesID]")]
        public Int32? SalesDetailsSalesId { get { return Fields.SalesDetailsSalesId[this]; } set { Fields.SalesDetailsSalesId[this] = value; } }
        public partial class RowFields { public Int32Field SalesDetailsSalesId; }


        [DisplayName("Sales Details Date"), Expression("jSalesDetails.[Date]")]
        public DateTime? SalesDetailsDate { get { return Fields.SalesDetailsDate[this]; } set { Fields.SalesDetailsDate[this] = value; } }
        public partial class RowFields { public DateTimeField SalesDetailsDate; }


        [DisplayName("Sales Details Product Id"), Expression("jSalesDetails.[ProductID]")]
        public Int32? SalesDetailsProductId { get { return Fields.SalesDetailsProductId[this]; } set { Fields.SalesDetailsProductId[this] = value; } }
        public partial class RowFields { public Int32Field SalesDetailsProductId; }


        [DisplayName("Sales Details Uom And Price Id"), Expression("jSalesDetails.[UOMAndPriceID]")]
        public Int32? SalesDetailsUomAndPriceId { get { return Fields.SalesDetailsUomAndPriceId[this]; } set { Fields.SalesDetailsUomAndPriceId[this] = value; } }
        public partial class RowFields { public Int32Field SalesDetailsUomAndPriceId; }


        [DisplayName("Sales Details Unit Price"), Expression("jSalesDetails.[UnitPrice]")]
        public Decimal? SalesDetailsUnitPrice { get { return Fields.SalesDetailsUnitPrice[this]; } set { Fields.SalesDetailsUnitPrice[this] = value; } }
        public partial class RowFields { public DecimalField SalesDetailsUnitPrice; }


        [DisplayName("Sales Details Discount"), Expression("jSalesDetails.[Discount]")]
        public Decimal? SalesDetailsDiscount { get { return Fields.SalesDetailsDiscount[this]; } set { Fields.SalesDetailsDiscount[this] = value; } }
        public partial class RowFields { public DecimalField SalesDetailsDiscount; }


        [DisplayName("Sales Details Amount"), Expression("jSalesDetails.[Amount]")]
        public Decimal? SalesDetailsAmount { get { return Fields.SalesDetailsAmount[this]; } set { Fields.SalesDetailsAmount[this] = value; } }
        public partial class RowFields { public DecimalField SalesDetailsAmount; }


        [DisplayName("Sales Details Quantity"), Expression("jSalesDetails.[Quantity]")]
        public Int32? SalesDetailsQuantity { get { return Fields.SalesDetailsQuantity[this]; } set { Fields.SalesDetailsQuantity[this] = value; } }
        public partial class RowFields { public Int32Field SalesDetailsQuantity; }


        [DisplayName("Sales Details Location Id"), Expression("jSalesDetails.[LocationID]")]
        public Int32? SalesDetailsLocationId { get { return Fields.SalesDetailsLocationId[this]; } set { Fields.SalesDetailsLocationId[this] = value; } }
        public partial class RowFields { public Int32Field SalesDetailsLocationId; }


        [DisplayName("Sales Details Cost"), Expression("jSalesDetails.[Cost]")]
        public Decimal? SalesDetailsCost { get { return Fields.SalesDetailsCost[this]; } set { Fields.SalesDetailsCost[this] = value; } }
        public partial class RowFields { public DecimalField SalesDetailsCost; }


        [DisplayName("Sales Details Is Picked"), Expression("jSalesDetails.[IsPicked]")]
        public Boolean? SalesDetailsIsPicked { get { return Fields.SalesDetailsIsPicked[this]; } set { Fields.SalesDetailsIsPicked[this] = value; } }
        public partial class RowFields { public BooleanField SalesDetailsIsPicked; }


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
            get { return Fields.RtnInwardsDtlsId; }
        }

        public StringField NameField
        {
            get { return Fields.ProductProductName; }
        }

        #endregion Id and Name fields

        #region Constructor
        public ReturnInwardsDetailsRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[ReturnInwardsDetails]")
            {
                LocalTextPrefix = "BusinessObjects.ReturnInwardsDetails";
            }
        }
        #endregion RowFields
    }
}
