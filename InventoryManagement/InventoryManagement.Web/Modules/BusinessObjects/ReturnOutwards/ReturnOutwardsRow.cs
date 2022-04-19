
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

    [ConnectionKey("Default"), DisplayName("ReturnOutwards"), InstanceName("Return"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ReturnOutwards.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ReturnOutwards.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ReturnOutwards.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ReturnOutwards.Delete)]
    [LookupScript("BusinessObjects.ReturnOutwards")]
    public sealed class ReturnOutwardsRow : Row, IIdRow
    {        
            #region Rtn Outwards Id
            [DisplayName("Rtn Outwards Id"), Column("RtnOutwardsID"), Identity]
            public Int32? RtnOutwardsId { get { return Fields.RtnOutwardsId[this]; } set { Fields.RtnOutwardsId[this] = value; } }
            public partial class RowFields { public Int32Field RtnOutwardsId; }
            #endregion RtnOutwardsId
                
            #region Date
            [DisplayName("Date"), NotNull]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Purchases
            [DisplayName("Purchases"), Column("PurchasesID"), ForeignKey("[dbo].[Purchases]", "PurchasesID"), LeftJoin("jPurchases"), TextualField("PurchasesOrderId")]
            [LookupEditor(typeof(BusinessObjects.Entities.PurchasesRow), InplaceAdd = true)]
            public Int32? PurchasesId { get { return Fields.PurchasesId[this]; } set { Fields.PurchasesId[this] = value; } }
            public partial class RowFields { public Int32Field PurchasesId; }
            #endregion PurchasesId
                
            #region Total Amount
            [DisplayName("Total Amount"), Size(19), Scale(4), NotNull]
            public Decimal? TotalAmount { get { return Fields.TotalAmount[this]; } set { Fields.TotalAmount[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmount; }
            #endregion TotalAmount
                
            #region Total Fee
            [DisplayName("Total Fee"), Size(19), Scale(4)]
            public Decimal? TotalFee { get { return Fields.TotalFee[this]; } set { Fields.TotalFee[this] = value; } }
            public partial class RowFields { public DecimalField TotalFee; }
            #endregion TotalFee
                
            #region Total Amount Refunded
            [DisplayName("Total Amount Refunded"), Size(19), Scale(4), NotNull]
            public Decimal? TotalAmountRefunded { get { return Fields.TotalAmountRefunded[this]; } set { Fields.TotalAmountRefunded[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmountRefunded; }
            #endregion TotalAmountRefunded
                
            #region Total Credit
            [DisplayName("Total Credit"), Size(19), Scale(4), NotNull]
            public Decimal? TotalCredit { get { return Fields.TotalCredit[this]; } set { Fields.TotalCredit[this] = value; } }
            public partial class RowFields { public DecimalField TotalCredit; }
            #endregion TotalCredit
        

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
    get { return Fields.RtnOutwardsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public ReturnOutwardsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ReturnOutwards]")
    {
    LocalTextPrefix = "BusinessObjects.ReturnOutwards";
    }
    }
    #endregion RowFields
    }
    }
