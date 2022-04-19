
namespace InventoryManagement.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[PurchasesTrails]")]
    [DisplayName("Purchase Trail"), InstanceName("Purchase Trail"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PurchaseTrailRow : Row, IIdRow
    {
        [DisplayName("Purchases Trail Id"), Identity]
        public Int32? PurchasesTrailId
        {
            get { return Fields.PurchasesTrailId[this]; }
            set { Fields.PurchasesTrailId[this] = value; }
        }

        [DisplayName("Purchases"), Column("PurchasesID"), ForeignKey("[dbo].[Purchases]", "PurchasesID"), LeftJoin("jPurchases"), TextualField("PurchasesOrderId")]
        public Int32? PurchasesId
        {
            get { return Fields.PurchasesId[this]; }
            set { Fields.PurchasesId[this] = value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Uom And Price"), Column("UOMAndPriceID"), ForeignKey("[dbo].[PurchasesUOMsAndPrices]", "UOMAndPriceID"), LeftJoin("jUomAndPrice"), TextualField("UomAndPriceUnitName")]
        public Int32? UomAndPriceId
        {
            get { return Fields.UomAndPriceId[this]; }
            set { Fields.UomAndPriceId[this] = value; }
        }

        [DisplayName("Rate"), Size(19), Scale(4)]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Discount"), Size(19), Scale(4)]
        public Decimal? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Quantity In Least Unit"), Size(18)]
        public Decimal? QuantityInLeastUnit
        {
            get { return Fields.QuantityInLeastUnit[this]; }
            set { Fields.QuantityInLeastUnit[this] = value; }
        }

        [DisplayName("Location Id"), Column("LocationID")]
        public Int32? LocationId
        {
            get { return Fields.LocationId[this]; }
            set { Fields.LocationId[this] = value; }
        }

        [DisplayName("Is Received")]
        public Boolean? IsReceived
        {
            get { return Fields.IsReceived[this]; }
            set { Fields.IsReceived[this] = value; }
        }

        [DisplayName("Purchases Order Id"), Expression("jPurchases.[OrderID]")]
        public String PurchasesOrderId
        {
            get { return Fields.PurchasesOrderId[this]; }
            set { Fields.PurchasesOrderId[this] = value; }
        }

        [DisplayName("Purchases Date"), Expression("jPurchases.[Date]")]
        public DateTime? PurchasesDate
        {
            get { return Fields.PurchasesDate[this]; }
            set { Fields.PurchasesDate[this] = value; }
        }

        [DisplayName("Purchases Supplier Id"), Expression("jPurchases.[SupplierID]")]
        public Int32? PurchasesSupplierId
        {
            get { return Fields.PurchasesSupplierId[this]; }
            set { Fields.PurchasesSupplierId[this] = value; }
        }

        [DisplayName("Purchases Total Amount"), Expression("jPurchases.[TotalAmount]")]
        public Decimal? PurchasesTotalAmount
        {
            get { return Fields.PurchasesTotalAmount[this]; }
            set { Fields.PurchasesTotalAmount[this] = value; }
        }

        [DisplayName("Purchases Total Amount Paid"), Expression("jPurchases.[TotalAmountPaid]")]
        public Decimal? PurchasesTotalAmountPaid
        {
            get { return Fields.PurchasesTotalAmountPaid[this]; }
            set { Fields.PurchasesTotalAmountPaid[this] = value; }
        }

        [DisplayName("Purchases Total Amount Left"), Expression("jPurchases.[TotalAmountLeft]")]
        public Decimal? PurchasesTotalAmountLeft
        {
            get { return Fields.PurchasesTotalAmountLeft[this]; }
            set { Fields.PurchasesTotalAmountLeft[this] = value; }
        }

        [DisplayName("Purchases Has Purchases Details"), Expression("jPurchases.[HasPurchasesDetails]")]
        public Boolean? PurchasesHasPurchasesDetails
        {
            get { return Fields.PurchasesHasPurchasesDetails[this]; }
            set { Fields.PurchasesHasPurchasesDetails[this] = value; }
        }

        [DisplayName("Purchases Location Id"), Expression("jPurchases.[LocationID]")]
        public Int32? PurchasesLocationId
        {
            get { return Fields.PurchasesLocationId[this]; }
            set { Fields.PurchasesLocationId[this] = value; }
        }

        [DisplayName("Purchases Is Integer Trailing Order Id With Prefix Po"), Expression("jPurchases.[IsIntegerTrailingOrderIDWithPrefixPO]")]
        public Boolean? PurchasesIsIntegerTrailingOrderIdWithPrefixPo
        {
            get { return Fields.PurchasesIsIntegerTrailingOrderIdWithPrefixPo[this]; }
            set { Fields.PurchasesIsIntegerTrailingOrderIdWithPrefixPo[this] = value; }
        }

        [DisplayName("Purchases Status"), Expression("jPurchases.[Status]")]
        public String PurchasesStatus
        {
            get { return Fields.PurchasesStatus[this]; }
            set { Fields.PurchasesStatus[this] = value; }
        }

        [DisplayName("Purchases Is Open"), Expression("jPurchases.[IsOpen]")]
        public Boolean? PurchasesIsOpen
        {
            get { return Fields.PurchasesIsOpen[this]; }
            set { Fields.PurchasesIsOpen[this] = value; }
        }

        [DisplayName("Purchases Is In Progress"), Expression("jPurchases.[IsInProgress]")]
        public Boolean? PurchasesIsInProgress
        {
            get { return Fields.PurchasesIsInProgress[this]; }
            set { Fields.PurchasesIsInProgress[this] = value; }
        }

        [DisplayName("Purchases Is Fully Received"), Expression("jPurchases.[IsFullyReceived]")]
        public Boolean? PurchasesIsFullyReceived
        {
            get { return Fields.PurchasesIsFullyReceived[this]; }
            set { Fields.PurchasesIsFullyReceived[this] = value; }
        }

        [DisplayName("Purchases Is Fully Paid"), Expression("jPurchases.[IsFullyPaid]")]
        public Boolean? PurchasesIsFullyPaid
        {
            get { return Fields.PurchasesIsFullyPaid[this]; }
            set { Fields.PurchasesIsFullyPaid[this] = value; }
        }

        [DisplayName("Purchases Is Advanced"), Expression("jPurchases.[IsAdvanced]")]
        public Boolean? PurchasesIsAdvanced
        {
            get { return Fields.PurchasesIsAdvanced[this]; }
            set { Fields.PurchasesIsAdvanced[this] = value; }
        }

        [DisplayName("Purchases Tax"), Expression("jPurchases.[Tax]")]
        public Decimal? PurchasesTax
        {
            get { return Fields.PurchasesTax[this]; }
            set { Fields.PurchasesTax[this] = value; }
        }

        [DisplayName("Purchases Discount"), Expression("jPurchases.[Discount]")]
        public Decimal? PurchasesDiscount
        {
            get { return Fields.PurchasesDiscount[this]; }
            set { Fields.PurchasesDiscount[this] = value; }
        }

        [DisplayName("Product Date"), Expression("jProduct.[Date]")]
        public DateTime? ProductDate
        {
            get { return Fields.ProductDate[this]; }
            set { Fields.ProductDate[this] = value; }
        }

        [DisplayName("Product Product Code"), Expression("jProduct.[ProductCode]")]
        public String ProductProductCode
        {
            get { return Fields.ProductProductCode[this]; }
            set { Fields.ProductProductCode[this] = value; }
        }

        [DisplayName("Product"), Expression("jProduct.[ProductName]")]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Brand Name"), Expression("jProduct.[BrandName]")]
        public String ProductBrandName
        {
            get { return Fields.ProductBrandName[this]; }
            set { Fields.ProductBrandName[this] = value; }
        }

        [DisplayName("Product Barcode"), Expression("jProduct.[Barcode]")]
        public String ProductBarcode
        {
            get { return Fields.ProductBarcode[this]; }
            set { Fields.ProductBarcode[this] = value; }
        }

        [DisplayName("Product Reorder Point"), Expression("jProduct.[ReorderPoint]")]
        public Int32? ProductReorderPoint
        {
            get { return Fields.ProductReorderPoint[this]; }
            set { Fields.ProductReorderPoint[this] = value; }
        }

        [DisplayName("Product Reorder Quantity"), Expression("jProduct.[ReorderQuantity]")]
        public Int32? ProductReorderQuantity
        {
            get { return Fields.ProductReorderQuantity[this]; }
            set { Fields.ProductReorderQuantity[this] = value; }
        }

        [DisplayName("Product Product Category Id"), Expression("jProduct.[ProductCategoryID]")]
        public Int32? ProductProductCategoryId
        {
            get { return Fields.ProductProductCategoryId[this]; }
            set { Fields.ProductProductCategoryId[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        [DisplayName("Product Least Unit Name"), Expression("jProduct.[LeastUnitName]")]
        public String ProductLeastUnitName
        {
            get { return Fields.ProductLeastUnitName[this]; }
            set { Fields.ProductLeastUnitName[this] = value; }
        }

        [DisplayName("Product Account Id"), Expression("jProduct.[AccountID]")]
        public Int32? ProductAccountId
        {
            get { return Fields.ProductAccountId[this]; }
            set { Fields.ProductAccountId[this] = value; }
        }

        [DisplayName("Uom And Price Product Id"), Expression("jUomAndPrice.[ProductID]")]
        public Int32? UomAndPriceProductId
        {
            get { return Fields.UomAndPriceProductId[this]; }
            set { Fields.UomAndPriceProductId[this] = value; }
        }

        [DisplayName("Uom And Price Unit Name"), Expression("jUomAndPrice.[UnitName]")]
        public String UomAndPriceUnitName
        {
            get { return Fields.UomAndPriceUnitName[this]; }
            set { Fields.UomAndPriceUnitName[this] = value; }
        }

        [DisplayName("Uom And Price Unit Make Up"), Expression("jUomAndPrice.[UnitMakeUp]")]
        public Decimal? UomAndPriceUnitMakeUp
        {
            get { return Fields.UomAndPriceUnitMakeUp[this]; }
            set { Fields.UomAndPriceUnitMakeUp[this] = value; }
        }

        [DisplayName("Uom And Price Standard Uomid"), Expression("jUomAndPrice.[StandardUOMID]")]
        public Int32? UomAndPriceStandardUomid
        {
            get { return Fields.UomAndPriceStandardUomid[this]; }
            set { Fields.UomAndPriceStandardUomid[this] = value; }
        }

        [DisplayName("Uom And Price Discontinued"), Expression("jUomAndPrice.[Discontinued]")]
        public Boolean? UomAndPriceDiscontinued
        {
            get { return Fields.UomAndPriceDiscontinued[this]; }
            set { Fields.UomAndPriceDiscontinued[this] = value; }
        }

        [DisplayName("Uom And Price Price"), Expression("jUomAndPrice.[Price]")]
        public Decimal? UomAndPricePrice
        {
            get { return Fields.UomAndPricePrice[this]; }
            set { Fields.UomAndPricePrice[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchasesTrailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseTrailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchasesTrailId;
            public Int32Field PurchasesId;
            public DateTimeField Date;
            public Int32Field ProductId;
            public Int32Field UomAndPriceId;
            public DecimalField UnitPrice;
            public DecimalField Discount;
            public DecimalField Amount;
            public Int32Field Quantity;
            public DecimalField QuantityInLeastUnit;
            public Int32Field LocationId;
            public BooleanField IsReceived;

            public StringField PurchasesOrderId;
            public DateTimeField PurchasesDate;
            public Int32Field PurchasesSupplierId;
            public DecimalField PurchasesTotalAmount;
            public DecimalField PurchasesTotalAmountPaid;
            public DecimalField PurchasesTotalAmountLeft;
            public BooleanField PurchasesHasPurchasesDetails;
            public Int32Field PurchasesLocationId;
            public BooleanField PurchasesIsIntegerTrailingOrderIdWithPrefixPo;
            public StringField PurchasesStatus;
            public BooleanField PurchasesIsOpen;
            public BooleanField PurchasesIsInProgress;
            public BooleanField PurchasesIsFullyReceived;
            public BooleanField PurchasesIsFullyPaid;
            public BooleanField PurchasesIsAdvanced;
            public DecimalField PurchasesTax;
            public DecimalField PurchasesDiscount;

            public DateTimeField ProductDate;
            public StringField ProductProductCode;
            public StringField ProductProductName;
            public StringField ProductBrandName;
            public StringField ProductBarcode;
            public Int32Field ProductReorderPoint;
            public Int32Field ProductReorderQuantity;
            public Int32Field ProductProductCategoryId;
            public Int32Field ProductSupplierId;
            public StringField ProductLeastUnitName;
            public Int32Field ProductAccountId;

            public Int32Field UomAndPriceProductId;
            public StringField UomAndPriceUnitName;
            public DecimalField UomAndPriceUnitMakeUp;
            public Int32Field UomAndPriceStandardUomid;
            public BooleanField UomAndPriceDiscontinued;
            public DecimalField UomAndPricePrice;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "BusinessObjects.PurchaseTrail";
            }
        }
    }
}
