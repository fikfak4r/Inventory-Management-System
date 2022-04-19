
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

    [ConnectionKey("Default"), DisplayName("ReturnOutwardsDetails"), InstanceName("Return"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ReturnOutwardsDetails.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ReturnOutwardsDetails.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ReturnOutwardsDetails.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ReturnOutwardsDetails.Delete)]
    [LookupScript("BusinessObjects.ReturnOutwardsDetails")]
    public sealed class ReturnOutwardsDetailsRow : Row, IIdRow, INameRow
    {

        #region Rtn Outwards Dtls Id
        [Hidden]
        [DisplayName("Rtn Outwards Dtls Id"), Column("RtnOutwardsDtlsID"), Identity, LookupInclude]
        public Int32? RtnOutwardsDtlsId { get { return Fields.RtnOutwardsDtlsId[this]; } set { Fields.RtnOutwardsDtlsId[this] = value; } }
        public partial class RowFields { public Int32Field RtnOutwardsDtlsId; }
        #endregion RtnOutwardsDtlsId

        #region Date
        [DefaultValue("now")]
        [DisplayName("Date"), NotNull]
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

        #region Rtn Outwards
        [Hidden]
        [DisplayName("Rtn Outwards"), Column("RtnOutwardsID"), ForeignKey("[dbo].[ReturnOutwards]", "RtnOutwardsID"), LeftJoin("jRtnOutwards")]
        [LookupEditor(typeof(BusinessObjects.Entities.ReturnOutwardsRow), InplaceAdd = true)]
        public Int32? RtnOutwardsId { get { return Fields.RtnOutwardsId[this]; } set { Fields.RtnOutwardsId[this] = value; } }
        public partial class RowFields { public Int32Field RtnOutwardsId; }
        #endregion RtnOutwardsId

        #region Purchases Details Id
        [Hidden]
        [DisplayName("Purchases Details Id"), Column("PurchasesDetailsID")]
        public Int32? PurchasesDetailsId { get { return Fields.PurchasesDetailsId[this]; } set { Fields.PurchasesDetailsId[this] = value; } }
        public partial class RowFields { public Int32Field PurchasesDetailsId; }
        #endregion PurchasesDetailsId

        #region Purchases Id
        [Hidden]
        [DisplayName("Purchases Id"), Column("PurchasesID"), LookupInclude]
        public Int32? PurchasesId { get { return Fields.PurchasesId[this]; } set { Fields.PurchasesId[this] = value; } }
        public partial class RowFields { public Int32Field PurchasesId; }
        #endregion PurchasesId

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

        #region Unit Price
        [DisplayFormat("#,##0.00"), Scale(4)]
        [DisplayName("Unit Price")]
        public Decimal? UnitPrice { get { return Fields.UnitPrice[this]; } set { Fields.UnitPrice[this] = value; } }
        public partial class RowFields { public DecimalField UnitPrice; }
        #endregion UnitPrice

        #region Amount
        [DisplayFormat("#,##0.00"), Scale(4)]
        [DisplayName("Amount"), NotNull]
        public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
        public partial class RowFields { public DecimalField Amount; }
        #endregion Amount

        #region Discount
        [DisplayName("Discount"), Size(19), Scale(4)]
        public Decimal? Discount { get { return Fields.Discount[this]; } set { Fields.Discount[this] = value; } }
        public partial class RowFields { public DecimalField Discount; }
        #endregion Discount

        #region Uom And Price
        [DisplayName("Unit Name"), Column("UOMAndPriceID"), ForeignKey("[dbo].[PurchasesUOMsAndPrices]", "UOMAndPriceID"), LeftJoin("jUomAndPrice"), TextualField("UomAndPriceUnitName")]
        [LookupEditor(typeof(BusinessObjects.Entities.PurchasesUoMAndPriceRow), CascadeFrom = "ProductId", CascadeField = "ProductId")]
        public Int32? UomAndPriceId { get { return Fields.UomAndPriceId[this]; } set { Fields.UomAndPriceId[this] = value; } }
        public partial class RowFields { public Int32Field UomAndPriceId; }
        #endregion UomAndPriceId

        #region Location Id
        [Hidden]
        [DisplayName("Location Id"), Column("LocationID"), LookupInclude]
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


        [DisplayName("Rtn Outwards Date"), Expression("jRtnOutwards.[Date]")]
        public DateTime? RtnOutwardsDate { get { return Fields.RtnOutwardsDate[this]; } set { Fields.RtnOutwardsDate[this] = value; } }
        public partial class RowFields { public DateTimeField RtnOutwardsDate; }


        [DisplayName("Rtn Outwards Purchases Id"), Expression("jRtnOutwards.[PurchasesID]")]
        public Int32? RtnOutwardsPurchasesId { get { return Fields.RtnOutwardsPurchasesId[this]; } set { Fields.RtnOutwardsPurchasesId[this] = value; } }
        public partial class RowFields { public Int32Field RtnOutwardsPurchasesId; }


        [DisplayName("Rtn Outwards Total Amount"), Expression("jRtnOutwards.[TotalAmount]")]
        public Decimal? RtnOutwardsTotalAmount { get { return Fields.RtnOutwardsTotalAmount[this]; } set { Fields.RtnOutwardsTotalAmount[this] = value; } }
        public partial class RowFields { public DecimalField RtnOutwardsTotalAmount; }


        [DisplayName("Rtn Outwards Total Fee"), Expression("jRtnOutwards.[TotalFee]")]
        public Decimal? RtnOutwardsTotalFee { get { return Fields.RtnOutwardsTotalFee[this]; } set { Fields.RtnOutwardsTotalFee[this] = value; } }
        public partial class RowFields { public DecimalField RtnOutwardsTotalFee; }


        [DisplayName("Rtn Outwards Total Amount Refunded"), Expression("jRtnOutwards.[TotalAmountRefunded]")]
        public Decimal? RtnOutwardsTotalAmountRefunded { get { return Fields.RtnOutwardsTotalAmountRefunded[this]; } set { Fields.RtnOutwardsTotalAmountRefunded[this] = value; } }
        public partial class RowFields { public DecimalField RtnOutwardsTotalAmountRefunded; }


        [DisplayName("Rtn Outwards Total Credit"), Expression("jRtnOutwards.[TotalCredit]")]
        public Decimal? RtnOutwardsTotalCredit { get { return Fields.RtnOutwardsTotalCredit[this]; } set { Fields.RtnOutwardsTotalCredit[this] = value; } }
        public partial class RowFields { public DecimalField RtnOutwardsTotalCredit; }


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
            get { return Fields.RtnOutwardsDtlsId; }
        }

        public StringField NameField
        {
            get { return Fields.ProductProductName; }
        }

        #endregion Id and Name fields

        #region Constructor
        public ReturnOutwardsDetailsRow()
        : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[ReturnOutwardsDetails]")
            {
                LocalTextPrefix = "BusinessObjects.ReturnOutwardsDetails";
            }
        }
        #endregion RowFields


    }
}
