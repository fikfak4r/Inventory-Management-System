
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

    [ConnectionKey("Default"), DisplayName("PurchasesPaymentsDetails"), InstanceName("Payment"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.PurchasesPaymentDetails.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.PurchasesPaymentDetails.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.PurchasesPaymentDetails.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.PurchasesPaymentDetails.Delete)]
    [LookupScript("BusinessObjects.PurchasesPaymentsDetails")]
    public sealed class PurchasesPaymentDetailsRow : Row, IIdRow
    {        
            #region Purch Pymnt Details Id
        [Hidden]
            [DisplayName("Purch Pymnt Details Id"), Column("PurchPymntDetailsID"), Identity]
            public Int32? PurchPymntDetailsId { get { return Fields.PurchPymntDetailsId[this]; } set { Fields.PurchPymntDetailsId[this] = value; } }
            public partial class RowFields { public Int32Field PurchPymntDetailsId; }
            #endregion PurchPymntDetailsId
                
            #region Purchases
            [Hidden]
            [DisplayName("Purchases"), Column("PurchasesID"), ForeignKey("[dbo].[Purchases]", "PurchasesID"), LeftJoin("jPurchases")]
            public Int32? PurchasesId { get { return Fields.PurchasesId[this]; } set { Fields.PurchasesId[this] = value; } }
            public partial class RowFields { public Int32Field PurchasesId; }
            #endregion PurchasesId
                
            #region Date
            [DefaultValue("now")]
            [DisplayName("Date")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Total Amount
        [Hidden]
            [DisplayName("Total Amount"), Size(19), Scale(4)]
            public Decimal? TotalAmount { get { return Fields.TotalAmount[this]; } set { Fields.TotalAmount[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmount; }
            #endregion TotalAmount
                
            #region Amount Paid
            [DisplayName("Amount Paid"),  DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? AmountPaid { get { return Fields.AmountPaid[this]; } set { Fields.AmountPaid[this] = value; } }
            public partial class RowFields { public DecimalField AmountPaid; }
            #endregion AmountPaid
                
            #region Amount Left
            [Hidden]
            [DisplayName("Amount Left"), Size(19), Scale(4)]
            public Decimal? AmountLeft { get { return Fields.AmountLeft[this]; } set { Fields.AmountLeft[this] = value; } }
            public partial class RowFields { public DecimalField AmountLeft; }
            #endregion AmountLeft
                
            #region Is Total Amount Row
            [Hidden]
            [DefaultValue(false)]
            [DisplayName("Is Total Amount Row"), NotNull]
            public Boolean? IsTotalAmountRow { get { return Fields.IsTotalAmountRow[this]; } set { Fields.IsTotalAmountRow[this] = value; } }
            public partial class RowFields { public BooleanField IsTotalAmountRow; }
            #endregion IsTotalAmountRow
                
            #region Location Id
        [Hidden]
            [DisplayName("Location Id"), Column("LocationID")]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
        

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

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.PurchPymntDetailsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public PurchasesPaymentDetailsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[PurchasesPaymentsDetails]")
    {
    LocalTextPrefix = "BusinessObjects.PurchasesPaymentsDetails";
    }
    }
    #endregion RowFields
    }
    }
