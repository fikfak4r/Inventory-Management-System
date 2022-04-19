
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

    [ConnectionKey("Default"), DisplayName("Sales"), InstanceName("Sale"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Sale.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.Sale.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Sale.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.Sale.Delete)]
    [LookupScript("BusinessObjects.Sales")]
    public sealed class SalesRow : Row, IIdRow, INameRow
    {        

            #region Sales Id
            [DisplayName("Sales Id"), Column("SalesID"), Identity, Hidden]
            public Int32? SalesId { get { return Fields.SalesId[this]; } set { Fields.SalesId[this] = value; } }
            public partial class RowFields { public Int32Field SalesId; }
            #endregion SalesId
                
            #region Order Id
            [DisplayName("Order Id"), Column("OrderID"), Size(50), NotNull, QuickSearch]
            public String OrderId { get { return Fields.OrderId[this]; } set { Fields.OrderId[this] = value; } }
            public partial class RowFields { public StringField OrderId; }
            #endregion OrderId
                
            #region Date
            [DefaultValue("now")]
            [DisplayName("Date"), NotNull]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Customer
        
            [DisplayName("Customer"), Column("CustomerID"), ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerName")]
            [LookupEditor(typeof(BusinessObjects.Scripts.CustomerLookup), InplaceAdd = true, DialogType = "BusinessObjects.Customer")]
            public Int32? CustomerId { get { return Fields.CustomerId[this]; } set { Fields.CustomerId[this] = value; } }
            public partial class RowFields { public Int32Field CustomerId; }
            #endregion CustomerId
                
            #region Total Amount
            [DefaultValue(0)]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            [DisplayName("Amount"), Size(19), Scale(4), NotNull]
            public Decimal? TotalAmount { get { return Fields.TotalAmount[this]; } set { Fields.TotalAmount[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmount; }
            #endregion TotalAmount
                
            #region Total Amount Paid
            [DefaultValue(0)]
            [DisplayName("Paid"), Size(19), Scale(4)]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? TotalAmountPaid { get { return Fields.TotalAmountPaid[this]; } set { Fields.TotalAmountPaid[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmountPaid; }
            #endregion TotalAmountPaid
                
            #region Total Amount Left
            [DefaultValue(0)]
            [DisplayName("Balance"), Size(19), Scale(4)]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? TotalAmountLeft { get { return Fields.TotalAmountLeft[this]; } set { Fields.TotalAmountLeft[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmountLeft; }
            #endregion TotalAmountLeft
                
            #region Cost Of Goods Sold
            [DefaultValue(0), Hidden]
            [DisplayName("Cost Of Goods Sold"), Size(19), Scale(4)]
            public Decimal? CostOfGoodsSold { get { return Fields.CostOfGoodsSold[this]; } set { Fields.CostOfGoodsSold[this] = value; } }
            public partial class RowFields { public DecimalField CostOfGoodsSold; }
            #endregion CostOfGoodsSold
                
            #region Gross Profit
            [DisplayName("Gross Profit"), Size(19), Scale(4)]
            public Decimal? GrossProfit { get { return Fields.GrossProfit[this]; } set { Fields.GrossProfit[this] = value; } }
            public partial class RowFields { public DecimalField GrossProfit; }
            #endregion GrossProfit
                
            #region Has Sales Details
            [DefaultValue(false), Hidden]
            [DisplayName("Has Sales Details"), NotNull]
            public Boolean? HasSalesDetails { get { return Fields.HasSalesDetails[this]; } set { Fields.HasSalesDetails[this] = value; } }
            public partial class RowFields { public BooleanField HasSalesDetails; }
            #endregion HasSalesDetails
                
            #region Location
            [DisplayName("Location"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
            [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
                
            #region Is Integer Trailing Order Id With Prefix So
            [DisplayName("Is Integer Trailing Order Id With Prefix So"), Column("IsIntegerTrailingOrderIDWithPrefixSO")]
            public Boolean? IsIntegerTrailingOrderIdWithPrefixSo { get { return Fields.IsIntegerTrailingOrderIdWithPrefixSo[this]; } set { Fields.IsIntegerTrailingOrderIdWithPrefixSo[this] = value; } }
            public partial class RowFields { public BooleanField IsIntegerTrailingOrderIdWithPrefixSo; }
            #endregion IsIntegerTrailingOrderIdWithPrefixSo
                
            #region Status
            [DefaultValue("Open")]
            [DisplayName("Status"), Size(20), NotNull]
            public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
            public partial class RowFields { public StringField Status; }
            #endregion Status
                
            #region Is Open
            [DefaultValue(true), Hidden]
            [DisplayName("Is Open"), NotNull]
            public Boolean? IsOpen { get { return Fields.IsOpen[this]; } set { Fields.IsOpen[this] = value; } }
            public partial class RowFields { public BooleanField IsOpen; }
            #endregion IsOpen
                
            #region Is In Progress
            [DefaultValue(false), Hidden]
            [DisplayName("Is In Progress"), NotNull]
            public Boolean? IsInProgress { get { return Fields.IsInProgress[this]; } set { Fields.IsInProgress[this] = value; } }
            public partial class RowFields { public BooleanField IsInProgress; }
            #endregion IsInProgress
                
            #region Is Fully Picked
            [DefaultValue(false), Hidden]
            [DisplayName("Is Fully Picked"), NotNull]
            public Boolean? IsFullyPicked { get { return Fields.IsFullyPicked[this]; } set { Fields.IsFullyPicked[this] = value; } }
            public partial class RowFields { public BooleanField IsFullyPicked; }
            #endregion IsFullyPicked
                
            #region Is Fully Paid
            [DefaultValue(false), Hidden]
            [DisplayName("Is Fully Paid"), NotNull]
            public Boolean? IsFullyPaid { get { return Fields.IsFullyPaid[this]; } set { Fields.IsFullyPaid[this] = value; } }
            public partial class RowFields { public BooleanField IsFullyPaid; }
            #endregion IsFullyPaid
                
            #region Is Invoiced
            [DefaultValue(false), Hidden]
            [DisplayName("Is Invoiced"), NotNull]
            public Boolean? IsInvoiced { get { return Fields.IsInvoiced[this]; } set { Fields.IsInvoiced[this] = value; } }
            public partial class RowFields { public BooleanField IsInvoiced; }
            #endregion IsInvoiced
                
            #region Is Advanced
            [DefaultValue(0), Hidden]
            [DisplayName("Is Advanced")]
            public Boolean? IsAdvanced { get { return Fields.IsAdvanced[this]; } set { Fields.IsAdvanced[this] = value; } }
            public partial class RowFields { public BooleanField IsAdvanced; }
            #endregion IsAdvanced



    #region Foreign Fields
            
                [DisplayName("Customer"), Expression("jCustomer.[Name]")]
                public String CustomerName { get { return Fields.CustomerName[this]; } set { Fields.CustomerName[this] = value; } }
                public partial class RowFields { public StringField CustomerName; }

                        
                [DisplayName("Customer Phone Number"), Expression("jCustomer.[PhoneNumber]")]
                public String CustomerPhoneNumber { get { return Fields.CustomerPhoneNumber[this]; } set { Fields.CustomerPhoneNumber[this] = value; } }
                public partial class RowFields { public StringField CustomerPhoneNumber; }

                        
                [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
                public String CustomerEmail { get { return Fields.CustomerEmail[this]; } set { Fields.CustomerEmail[this] = value; } }
                public partial class RowFields { public StringField CustomerEmail; }

                        
                [DisplayName("Customer Website"), Expression("jCustomer.[Website]")]
                public String CustomerWebsite { get { return Fields.CustomerWebsite[this]; } set { Fields.CustomerWebsite[this] = value; } }
                public partial class RowFields { public StringField CustomerWebsite; }

                        
                [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
                public String CustomerAddress { get { return Fields.CustomerAddress[this]; } set { Fields.CustomerAddress[this] = value; } }
                public partial class RowFields { public StringField CustomerAddress; }

                        
                [DisplayName("Customer Account Id"), Expression("jCustomer.[AccountID]")]
                public Int32? CustomerAccountId { get { return Fields.CustomerAccountId[this]; } set { Fields.CustomerAccountId[this] = value; } }
                public partial class RowFields { public Int32Field CustomerAccountId; }

                        
                [DisplayName("Customer Address2"), Expression("jCustomer.[Address2]")]
                public String CustomerAddress2 { get { return Fields.CustomerAddress2[this]; } set { Fields.CustomerAddress2[this] = value; } }
                public partial class RowFields { public StringField CustomerAddress2; }

                        
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
    get { return Fields.SalesId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.OrderId; }
            }
            #endregion Id and Name fields

    #region Constructor
    public SalesRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Sales]")
    {
        LocalTextPrefix = "BusinessObjects.Sales";
    }

    }
    #endregion RowFields
    }
    }
