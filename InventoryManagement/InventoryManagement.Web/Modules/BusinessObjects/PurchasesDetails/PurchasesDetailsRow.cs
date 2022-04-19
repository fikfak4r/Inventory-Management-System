
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


    [ConnectionKey("Default"), DisplayName("PurchasesDetails"), InstanceName("Purchase"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.PurchasesDetails.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.PurchasesDetails.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.PurchasesDetails.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.PurchasesDetails.Delete)]
    [LookupScript("BusinessObjects.PurchasesDetails")]
    public sealed class PurchasesDetailsRow : Row, IIdRow
    {

        #region Purchases Details Id
        [Hidden]
        [DisplayName("Purchases Details Id"), Column("PurchasesDetailsID"), Identity]
        public Int32? PurchasesDetailsId { get { return Fields.PurchasesDetailsId[this]; } set { Fields.PurchasesDetailsId[this] = value; } }
        public partial class RowFields { public Int32Field PurchasesDetailsId; }
        #endregion PurchasesDetailsId

        #region Purchases
        [LookupInclude]
        [DisplayName("Order#"), Column("PurchasesID"), ForeignKey("[dbo].[Purchases]", "PurchasesID"), LeftJoin("jPurchases")]
        public Int32? PurchasesId { get { return Fields.PurchasesId[this]; } set { Fields.PurchasesId[this] = value; } }
        public partial class RowFields { public Int32Field PurchasesId; }
        #endregion PurchasesId

        #region Date
        [DisplayName("Date")]
        [DefaultValue("now")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region Product
     
        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        [LookupEditor(typeof(BusinessObjects.Scripts.ProductLookup), InplaceAdd = true)]
        public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
        public partial class RowFields { public Int32Field ProductId; }
        #endregion ProductId

        #region Quantity
        [DisplayName("Quantity"), Size(18), Scale(5), NotNull]
        public Double? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
        public partial class RowFields { public DoubleField Quantity; }
        #endregion Quantity

        #region QuantityInLeastUnit
        [Hidden]
        [DisplayName("QuantityInLeastUnit"), Size(18), Scale(2), NotNull]
        public Double? QuantityInLeastUnit { get { return Fields.QuantityInLeastUnit[this]; } set { Fields.QuantityInLeastUnit[this] = value; } }
        public partial class RowFields { public DoubleField QuantityInLeastUnit; }
        #endregion QuantityInLeastUnit


        #region Uom And Price

        [DisplayName("Unit"), Column("UOMAndPriceID"), ForeignKey("[dbo].[PurchasesUOMsAndPrices]", "UOMAndPriceID"), LeftJoin("jUomAndPrice"), TextualField("UomAndPriceUnitName")]
        [LookupEditor(typeof(BusinessObjects.Entities.PurchasesUoMAndPriceRow), InplaceAdd = true, CascadeValue =3, CascadeFrom = "ProductId", CascadeField="ProductId")]
        public Int32? UomAndPriceId { get { return Fields.UomAndPriceId[this]; } set { Fields.UomAndPriceId[this] = value; } }
        public partial class RowFields { public Int32Field UomAndPriceId; }
        #endregion UomAndPriceId

        #region Unit Price
        
        [DisplayName("Rate"), Scale(4)]
        [DisplayFormat("#,##0.00")]
        public Decimal? UnitPrice { get { return Fields.UnitPrice[this]; } set { Fields.UnitPrice[this] = value; } }
        public partial class RowFields { public DecimalField UnitPrice; }
        #endregion UnitPrice
        
        #region Discount
        [DefaultValue(0)]
        [DisplayName("Discount(%)"), Scale(4)]
        [DisplayFormat("#,##0.00")]
        public Single? Discount { get { return Fields.Discount[this]; } set { Fields.Discount[this] = value; } }
        public partial class RowFields { public SingleField Discount; }
        #endregion Discount

        #region Amount
         [DisplayFormat("#,##0.00")]
        [DisplayName("Amount"), Scale(4), NotNull]
        public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
        public partial class RowFields { public DecimalField Amount; }
        #endregion Amount

        #region Location Id
        [Hidden]
        [DisplayName("Location Id"), Column("LocationID")]
        public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
        public partial class RowFields { public Int32Field LocationId; }
        #endregion LocationId

        #region Is Received
        [Hidden]
        [DisplayName("Is Received")]
        public Boolean? IsReceived { get { return Fields.IsReceived[this]; } set { Fields.IsReceived[this] = value; } }
        public partial class RowFields { public BooleanField IsReceived; }
        #endregion IsReceived


        #region TotalQuantityInLeastUnit
        [NotMapped, Hidden]
        public Double? TotalQuantityInLeastUnit { get { return Fields.TotalQuantityInLeastUnit[this]; } set { Fields.TotalQuantityInLeastUnit[this] = value; } }
        public partial class RowFields { public DoubleField TotalQuantityInLeastUnit; }
        #endregion TotalQuantityInLeastUnit


        #region Foreign Fields

        [DisplayName("Purchases Order Id"), Expression("jPurchases.[OrderID]")]
        public String PurchasesOrderId { get { return Fields.PurchasesOrderId[this]; } set { Fields.PurchasesOrderId[this] = value; } }
        public partial class RowFields { public StringField PurchasesOrderId; }


        [DisplayName("Purchases Date"), Expression("jPurchases.[Date]")]
        public DateTime? PurchasesDate { get { return Fields.PurchasesDate[this]; } set { Fields.PurchasesDate[this] = value; } }
        public partial class RowFields { public DateTimeField PurchasesDate; }


        [DisplayName("Purchases Supplier Id"), Expression("jPurchases.[SupplierID]")]
        public Int32? PurchasesSupplierId { get { return Fields.PurchasesSupplierId[this]; } set { Fields.PurchasesSupplierId[this] = value; } }
        public partial class RowFields { public Int32Field PurchasesSupplierId; }


        [DisplayName("Purchases Total Amount"), Expression("jPurchases.[TotalAmount]")]
        public Decimal? PurchasesTotalAmount { get { return Fields.PurchasesTotalAmount[this]; } set { Fields.PurchasesTotalAmount[this] = value; } }
        public partial class RowFields { public DecimalField PurchasesTotalAmount; }


        [DisplayName("Purchases Total Amount Paid"), Expression("jPurchases.[TotalAmountPaid]")]
        public Decimal? PurchasesTotalAmountPaid { get { return Fields.PurchasesTotalAmountPaid[this]; } set { Fields.PurchasesTotalAmountPaid[this] = value; } }
        public partial class RowFields { public DecimalField PurchasesTotalAmountPaid; }


        [DisplayName("Purchases Total Amount Left"), Expression("jPurchases.[TotalAmountLeft]")]
        public Decimal? PurchasesTotalAmountLeft { get { return Fields.PurchasesTotalAmountLeft[this]; } set { Fields.PurchasesTotalAmountLeft[this] = value; } }
        public partial class RowFields { public DecimalField PurchasesTotalAmountLeft; }


        [DisplayName("Purchases Has Purchases Details"), Expression("jPurchases.[HasPurchasesDetails]")]
        public Boolean? PurchasesHasPurchasesDetails { get { return Fields.PurchasesHasPurchasesDetails[this]; } set { Fields.PurchasesHasPurchasesDetails[this] = value; } }
        public partial class RowFields { public BooleanField PurchasesHasPurchasesDetails; }


        [DisplayName("Purchases Location Id"), Expression("jPurchases.[LocationID]")]
        public Int32? PurchasesLocationId { get { return Fields.PurchasesLocationId[this]; } set { Fields.PurchasesLocationId[this] = value; } }
        public partial class RowFields { public Int32Field PurchasesLocationId; }


        [DisplayName("Purchases Is Integer Trailing Order Id With Prefix Po"), Expression("jPurchases.[IsIntegerTrailingOrderIDWithPrefixPO]")]
        public Boolean? PurchasesIsIntegerTrailingOrderIdWithPrefixPo { get { return Fields.PurchasesIsIntegerTrailingOrderIdWithPrefixPo[this]; } set { Fields.PurchasesIsIntegerTrailingOrderIdWithPrefixPo[this] = value; } }
        public partial class RowFields { public BooleanField PurchasesIsIntegerTrailingOrderIdWithPrefixPo; }


        [DisplayName("Purchases Status"), Expression("jPurchases.[Status]")]
        public String PurchasesStatus { get { return Fields.PurchasesStatus[this]; } set { Fields.PurchasesStatus[this] = value; } }
        public partial class RowFields { public StringField PurchasesStatus; }


        [DisplayName("Purchases Is Open"), Expression("jPurchases.[IsOpen]")]
        public Boolean? PurchasesIsOpen { get { return Fields.PurchasesIsOpen[this]; } set { Fields.PurchasesIsOpen[this] = value; } }
        public partial class RowFields { public BooleanField PurchasesIsOpen; }


        [DisplayName("Purchases Is In Progress"), Expression("jPurchases.[IsInProgress]")]
        public Boolean? PurchasesIsInProgress { get { return Fields.PurchasesIsInProgress[this]; } set { Fields.PurchasesIsInProgress[this] = value; } }
        public partial class RowFields { public BooleanField PurchasesIsInProgress; }


        [DisplayName("Purchases Is Fully Received"), Expression("jPurchases.[IsFullyReceived]")]
        public Boolean? PurchasesIsFullyReceived { get { return Fields.PurchasesIsFullyReceived[this]; } set { Fields.PurchasesIsFullyReceived[this] = value; } }
        public partial class RowFields { public BooleanField PurchasesIsFullyReceived; }


        [DisplayName("Purchases Is Fully Paid"), Expression("jPurchases.[IsFullyPaid]")]
        public Boolean? PurchasesIsFullyPaid { get { return Fields.PurchasesIsFullyPaid[this]; } set { Fields.PurchasesIsFullyPaid[this] = value; } }
        public partial class RowFields { public BooleanField PurchasesIsFullyPaid; }


        [DisplayName("Purchases Is Advanced"), Expression("jPurchases.[IsAdvanced]")]
        public Boolean? PurchasesIsAdvanced { get { return Fields.PurchasesIsAdvanced[this]; } set { Fields.PurchasesIsAdvanced[this] = value; } }
        public partial class RowFields { public BooleanField PurchasesIsAdvanced; }


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


        [DisplayName("Uom And Price Unit Name"), Expression("jUomAndPrice.[UnitName]")]
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
            get { return Fields.PurchasesDetailsId; }
        }

   
        #endregion Id and Name fields

        #region Constructor
        public PurchasesDetailsRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[PurchasesDetails]")
            {
                LocalTextPrefix = "BusinessObjects.PurchasesDetails";
            }
        }
        #endregion RowFields
    }
}
