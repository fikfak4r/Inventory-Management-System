
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

    [ConnectionKey("Default"), DisplayName("Purchases"), InstanceName("Purchases"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Purchase.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.Purchase.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Purchase.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.Purchase.Delete)]
    [LookupScript("BusinessObjects.Purchases")]
    public sealed class PurchasesRow : Row, IIdRow, INameRow
    {
        #region Purchases Id
         [Hidden]
        [DisplayName("Purchases Id"), Column("PurchasesID"), Identity]
        public Int32? PurchasesId { get { return Fields.PurchasesId[this]; } set { Fields.PurchasesId[this] = value; } }
        public partial class RowFields { public Int32Field PurchasesId; }
        #endregion PurchasesId

        #region Order Id
        [DisplayName("Order Id"), Column("OrderID"), Size(50), NotNull, QuickSearch]
        public String OrderId { get { return Fields.OrderId[this]; } set { Fields.OrderId[this] = value; } }
        public partial class RowFields { public StringField OrderId; }
        #endregion OrderId

        #region Date
        [DisplayName("Date"), NotNull, DefaultValue("now")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region Supplier
        
        [DisplayName("Supplier"), Column("SupplierID"), ForeignKey("[dbo].[Suppliers]", "SupplierID"), LeftJoin("jSupplier"), TextualField("SupplierSupplierName")]
        [LookupEditor(typeof(BusinessObjects.Scripts.SupplierLookup), InplaceAdd = true, DialogType = "BusinessObjects.Supplier")]
        public Int32? SupplierId { get { return Fields.SupplierId[this]; } set { Fields.SupplierId[this] = value; } }
        public partial class RowFields { public Int32Field SupplierId; }
        #endregion SupplierId

        #region Total Amount
        [DefaultValue(0)]
        [Updatable(false)]
        [DisplayName("Amount"), Size(19), Scale(4)]
        [DisplayFormat("#,##0.00")]
        [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? TotalAmount { get { return Fields.TotalAmount[this]; } set { Fields.TotalAmount[this] = value; } }
        public partial class RowFields { public DecimalField TotalAmount; }
        #endregion TotalAmount

        #region Total Amount Paid
        [Updatable(false)]
        [DefaultValue(0)]
        [DisplayName("Paid")]
        [DisplayFormat("#,##0.00")]
        [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? TotalAmountPaid { get { return Fields.TotalAmountPaid[this]; } set { Fields.TotalAmountPaid[this] = value; } }
        public partial class RowFields { public DecimalField TotalAmountPaid; }
        #endregion TotalAmountPaid

        #region Total Amount Left
        [DefaultValue(0)]
        //[Updatable(false)]
        [DisplayName("Balance"), Size(19), Scale(4)]
        [DisplayFormat("#,##0.00")]
        [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? TotalAmountLeft { get { return Fields.TotalAmountLeft[this]; } set { Fields.TotalAmountLeft[this] = value; } }
        public partial class RowFields { public DecimalField TotalAmountLeft; }
        #endregion TotalAmountLeft

        #region Has Purchases Details
        [DefaultValue(false)]
        [Updatable(false)]
        [Hidden]
        [DisplayName("Has Purchases Details"), NotNull]
        public Boolean? HasPurchasesDetails { get { return Fields.HasPurchasesDetails[this]; } set { Fields.HasPurchasesDetails[this] = value; } }
        public partial class RowFields { public BooleanField HasPurchasesDetails; }
        #endregion HasPurchasesDetails

        #region Location
     
        [DisplayName("Location"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
        public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
        public partial class RowFields { public Int32Field LocationId; }
        #endregion LocationId

        #region Is Integer Trailing Order Id With Prefix Po
        [Hidden]
        [Updatable(false)]
        [DisplayName("Is Integer Trailing Order Id With Prefix Po"), Column("IsIntegerTrailingOrderIDWithPrefixPO")]
        public Boolean? IsIntegerTrailingOrderIdWithPrefixPo { get { return Fields.IsIntegerTrailingOrderIdWithPrefixPo[this]; } set { Fields.IsIntegerTrailingOrderIdWithPrefixPo[this] = value; } }
        public partial class RowFields { public BooleanField IsIntegerTrailingOrderIdWithPrefixPo; }
        #endregion IsIntegerTrailingOrderIdWithPrefixPo

        #region Status
        [DefaultValue("Open")]
        [Updatable(false)]
        [DisplayName("Status"), Size(20), NotNull]
        public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
        public partial class RowFields { public StringField Status; }
        #endregion Status

        #region Is Open
        [DefaultValue(true)]
        [Hidden]
        [DisplayName("Is Open"), NotNull]
        [Updatable(false)]
        public Boolean? IsOpen { get { return Fields.IsOpen[this]; } set { Fields.IsOpen[this] = value; } }
        public partial class RowFields { public BooleanField IsOpen; }
        #endregion IsOpen

        #region Is In Progress
        [Hidden]
        [Updatable(false)]
        [DefaultValue(false)]
        [DisplayName("Is In Progress"), NotNull]
        public Boolean? IsInProgress { get { return Fields.IsInProgress[this]; } set { Fields.IsInProgress[this] = value; } }
        public partial class RowFields { public BooleanField IsInProgress; }
        #endregion IsInProgress

        #region Is Fully Received
        [Hidden]
        [Updatable(false)]
        [DefaultValue(false)]
        [DisplayName("Is Fully Received"), NotNull]
        public Boolean? IsFullyReceived { get { return Fields.IsFullyReceived[this]; } set { Fields.IsFullyReceived[this] = value; } }
        public partial class RowFields { public BooleanField IsFullyReceived; }
        #endregion IsFullyReceived

        #region Is Fully Paid
        [Hidden]
        [Updatable(false)]
        [DefaultValue(false)]
        [DisplayName("Is Fully Paid"), NotNull]
        public Boolean? IsFullyPaid { get { return Fields.IsFullyPaid[this]; } set { Fields.IsFullyPaid[this] = value; } }
        public partial class RowFields { public BooleanField IsFullyPaid; }
        #endregion IsFullyPaid

        #region Is Advanced
        [DefaultValue(0)]
        [Updatable(false)]
        [Hidden]
        [DisplayName("Is Advanced")]
        public Boolean? IsAdvanced { get { return Fields.IsAdvanced[this]; } set { Fields.IsAdvanced[this] = value; } }
        public partial class RowFields { public BooleanField IsAdvanced; }
        #endregion IsAdvanced


        #region Discount
        [DefaultValue(0)]
        [DisplayName("Discount"), Scale(4)]
        [DisplayFormat("#,##0.00")]
        public Decimal? Discount { get { return Fields.Discount[this]; } set { Fields.Discount[this] = value; } }
        public partial class RowFields { public DecimalField Discount; }
        #endregion Discount


        #region Tax
        [DefaultValue(0)]
        [DisplayName("Tax"), Scale(4)]
        [DisplayFormat("#,##0.00")]
        public Decimal? Tax { get { return Fields.Tax[this]; } set { Fields.Tax[this] = value; } }
        public partial class RowFields { public DecimalField Tax; }
        #endregion Tax


        #region Foreign Fields

        [DisplayName("Supplier Date"), Expression("jSupplier.[Date]")]
        public DateTime? SupplierDate { get { return Fields.SupplierDate[this]; } set { Fields.SupplierDate[this] = value; } }
        public partial class RowFields { public DateTimeField SupplierDate; }


        [DisplayName("Supplier"), Expression("jSupplier.[SupplierName]")]
        public String SupplierSupplierName { get { return Fields.SupplierSupplierName[this]; } set { Fields.SupplierSupplierName[this] = value; } }
        public partial class RowFields { public StringField SupplierSupplierName; }


        [DisplayName("Supplier Phone Number"), Expression("jSupplier.[PhoneNumber]")]
        public String SupplierPhoneNumber { get { return Fields.SupplierPhoneNumber[this]; } set { Fields.SupplierPhoneNumber[this] = value; } }
        public partial class RowFields { public StringField SupplierPhoneNumber; }


        [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        public String SupplierFax { get { return Fields.SupplierFax[this]; } set { Fields.SupplierFax[this] = value; } }
        public partial class RowFields { public StringField SupplierFax; }


        [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
        public String SupplierEmail { get { return Fields.SupplierEmail[this]; } set { Fields.SupplierEmail[this] = value; } }
        public partial class RowFields { public StringField SupplierEmail; }


        [DisplayName("Supplier Website"), Expression("jSupplier.[Website]")]
        public String SupplierWebsite { get { return Fields.SupplierWebsite[this]; } set { Fields.SupplierWebsite[this] = value; } }
        public partial class RowFields { public StringField SupplierWebsite; }


        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public String SupplierAddress { get { return Fields.SupplierAddress[this]; } set { Fields.SupplierAddress[this] = value; } }
        public partial class RowFields { public StringField SupplierAddress; }


        [DisplayName("Supplier Note"), Expression("jSupplier.[Note]")]
        public String SupplierNote { get { return Fields.SupplierNote[this]; } set { Fields.SupplierNote[this] = value; } }
        public partial class RowFields { public StringField SupplierNote; }


        [DisplayName("Supplier Account Id"), Expression("jSupplier.[AccountID]")]
        public Int32? SupplierAccountId { get { return Fields.SupplierAccountId[this]; } set { Fields.SupplierAccountId[this] = value; } }
        public partial class RowFields { public Int32Field SupplierAccountId; }


        [DisplayName("Location Account Id"), Expression("jLocation.[AccountID]")]
        public Int32? LocationAccountId { get { return Fields.LocationAccountId[this]; } set { Fields.LocationAccountId[this] = value; } }
        public partial class RowFields { public Int32Field LocationAccountId; }


        [DisplayName("Location Date"), Expression("jLocation.[Date]")]
        public DateTime? LocationDate { get { return Fields.LocationDate[this]; } set { Fields.LocationDate[this] = value; } }
        public partial class RowFields { public DateTimeField LocationDate; }


        [DisplayName("Location Phone Number"), Expression("jLocation.[PhoneNumber]")]
        public String LocationPhoneNumber { get { return Fields.LocationPhoneNumber[this]; } set { Fields.LocationPhoneNumber[this] = value; } }
        public partial class RowFields { public StringField LocationPhoneNumber; }


        [DisplayName("Location Email"), Expression("jLocation.[Email]")]
        public String LocationEmail { get { return Fields.LocationEmail[this]; } set { Fields.LocationEmail[this] = value; } }
        public partial class RowFields { public StringField LocationEmail; }


        [DisplayName("Location Website"), Expression("jLocation.[Website]")]
        public String LocationWebsite { get { return Fields.LocationWebsite[this]; } set { Fields.LocationWebsite[this] = value; } }
        public partial class RowFields { public StringField LocationWebsite; }


        [DisplayName("Location Location Name"), Expression("jLocation.[LocationName]")]
        public String LocationLocationName { get { return Fields.LocationLocationName[this]; } set { Fields.LocationLocationName[this] = value; } }
        public partial class RowFields { public StringField LocationLocationName; }


        [DisplayName("Location Address"), Expression("jLocation.[Address]")]
        public String LocationAddress { get { return Fields.LocationAddress[this]; } set { Fields.LocationAddress[this] = value; } }
        public partial class RowFields { public StringField LocationAddress; }


        [DisplayName("Location User Id"), Expression("jLocation.[UserID]")]
        public Int32? LocationUserId { get { return Fields.LocationUserId[this]; } set { Fields.LocationUserId[this] = value; } }
        public partial class RowFields { public Int32Field LocationUserId; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.PurchasesId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderId; }
        }
        #endregion Id and Name fields

        #region Constructor
        public PurchasesRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[Purchases]")
            {
                LocalTextPrefix = "BusinessObjects.Purchases";
            }
        }
        #endregion RowFields

    }
}
