
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

    [ConnectionKey("Default"), DisplayName("Payment"), InstanceName("Payment"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.SalesPaymentDetails.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.SalesPaymentDetails.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.SalesPaymentDetails.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.SalesPaymentDetails.Delete)]
    [LookupScript("BusinessObjects.SalesPaymentDetails")]
    public sealed class SalesPaymentDetailsRow : Row, IIdRow, INameRow
    {        
            #region Sales Pymnt Details Id
            [Hidden]
            [DisplayName("Sales Pymnt Details Id"), Column("SalesPymntDetailsID"), Identity]
            public Int32? SalesPymntDetailsId { get { return Fields.SalesPymntDetailsId[this]; } set { Fields.SalesPymntDetailsId[this] = value; } }
            public partial class RowFields { public Int32Field SalesPymntDetailsId; }
            #endregion SalesPymntDetailsId
                
            #region Sales
            [Hidden]
            [DisplayName("Sales"), Column("SalesID"), ForeignKey("[dbo].[Sales]", "SalesID"), LeftJoin("jSales"), TextualField("SalesOrderId")]
            public Int32? SalesId { get { return Fields.SalesId[this]; } set { Fields.SalesId[this] = value; } }
            public partial class RowFields { public Int32Field SalesId; }
            #endregion SalesId
                
            #region Date
            [DisplayName("Date"), DefaultValue("now")]
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
            [DisplayName("Amount Paid"), Size(19), Scale(4)]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            [EditLink, Width(155)]
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
            [DisplayName("Is Total Amount Row"), NotNull]
            public Boolean? IsTotalAmountRow { get { return Fields.IsTotalAmountRow[this]; } set { Fields.IsTotalAmountRow[this] = value; } }
            public partial class RowFields { public BooleanField IsTotalAmountRow; }
            #endregion IsTotalAmountRow
                
            #region Location
            [Hidden]
            [DisplayName("Location"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
            [LookupEditor(typeof(Administration.Entities.LocationRow), InplaceAdd = true)]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
                
            #region Payment Mode
            [Hidden]
            [DisplayName("Payment Mode"), Size(10), QuickSearch]
            public String PaymentMode { get { return Fields.PaymentMode[this]; } set { Fields.PaymentMode[this] = value; } }
            public partial class RowFields { public StringField PaymentMode; }
            #endregion PaymentMode
                
            #region Bank
            [Hidden]
            [DisplayName("Bank"), Column("BankID"), ForeignKey("[dbo].[Banks]", "BankID"), LeftJoin("jBank"), TextualField("BankBankName")]
            [LookupEditor(typeof(BusinessObjects.Entities.BankRow), InplaceAdd = true)]
            public Int32? BankId { get { return Fields.BankId[this]; } set { Fields.BankId[this] = value; } }
            public partial class RowFields { public Int32Field BankId; }
            #endregion BankId
        

    #region Foreign Fields
            
                [DisplayName("Sales Order Id"), Expression("jSales.[OrderID]")]
                public String SalesOrderId { get { return Fields.SalesOrderId[this]; } set { Fields.SalesOrderId[this] = value; } }
                public partial class RowFields { public StringField SalesOrderId; }

                        
                [DisplayName("Sales Date"), Expression("jSales.[Date]")]
                public DateTime? SalesDate { get { return Fields.SalesDate[this]; } set { Fields.SalesDate[this] = value; } }
                public partial class RowFields { public DateTimeField SalesDate; }

                        
                [DisplayName("Sales Customer Id"), Expression("jSales.[CustomerID]")]
                public Int32? SalesCustomerId { get { return Fields.SalesCustomerId[this]; } set { Fields.SalesCustomerId[this] = value; } }
                public partial class RowFields { public Int32Field SalesCustomerId; }

                        
                [DisplayName("Sales Total Amount"), Expression("jSales.[TotalAmount]")]
                public Decimal? SalesTotalAmount { get { return Fields.SalesTotalAmount[this]; } set { Fields.SalesTotalAmount[this] = value; } }
                public partial class RowFields { public DecimalField SalesTotalAmount; }

                        
                [DisplayName("Sales Total Amount Paid"), Expression("jSales.[TotalAmountPaid]")]
                public Decimal? SalesTotalAmountPaid { get { return Fields.SalesTotalAmountPaid[this]; } set { Fields.SalesTotalAmountPaid[this] = value; } }
                public partial class RowFields { public DecimalField SalesTotalAmountPaid; }

                        
                [DisplayName("Sales Total Amount Left"), Expression("jSales.[TotalAmountLeft]")]
                public Decimal? SalesTotalAmountLeft { get { return Fields.SalesTotalAmountLeft[this]; } set { Fields.SalesTotalAmountLeft[this] = value; } }
                public partial class RowFields { public DecimalField SalesTotalAmountLeft; }

                        
                [DisplayName("Sales Cost Of Goods Sold"), Expression("jSales.[CostOfGoodsSold]")]
                public Decimal? SalesCostOfGoodsSold { get { return Fields.SalesCostOfGoodsSold[this]; } set { Fields.SalesCostOfGoodsSold[this] = value; } }
                public partial class RowFields { public DecimalField SalesCostOfGoodsSold; }

                        
                [DisplayName("Sales Gross Profit"), Expression("jSales.[GrossProfit]")]
                public Decimal? SalesGrossProfit { get { return Fields.SalesGrossProfit[this]; } set { Fields.SalesGrossProfit[this] = value; } }
                public partial class RowFields { public DecimalField SalesGrossProfit; }

                        
                [DisplayName("Sales Has Sales Details"), Expression("jSales.[HasSalesDetails]")]
                public Boolean? SalesHasSalesDetails { get { return Fields.SalesHasSalesDetails[this]; } set { Fields.SalesHasSalesDetails[this] = value; } }
                public partial class RowFields { public BooleanField SalesHasSalesDetails; }

                        
                [DisplayName("Sales Location Id"), Expression("jSales.[LocationID]")]
                public Int32? SalesLocationId { get { return Fields.SalesLocationId[this]; } set { Fields.SalesLocationId[this] = value; } }
                public partial class RowFields { public Int32Field SalesLocationId; }

                        
                [DisplayName("Sales Is Integer Trailing Order Id With Prefix So"), Expression("jSales.[IsIntegerTrailingOrderIDWithPrefixSO]")]
                public Boolean? SalesIsIntegerTrailingOrderIdWithPrefixSo { get { return Fields.SalesIsIntegerTrailingOrderIdWithPrefixSo[this]; } set { Fields.SalesIsIntegerTrailingOrderIdWithPrefixSo[this] = value; } }
                public partial class RowFields { public BooleanField SalesIsIntegerTrailingOrderIdWithPrefixSo; }

                        
                [DisplayName("Sales Status"), Expression("jSales.[Status]")]
                public String SalesStatus { get { return Fields.SalesStatus[this]; } set { Fields.SalesStatus[this] = value; } }
                public partial class RowFields { public StringField SalesStatus; }

                        
                [DisplayName("Sales Is Open"), Expression("jSales.[IsOpen]")]
                public Boolean? SalesIsOpen { get { return Fields.SalesIsOpen[this]; } set { Fields.SalesIsOpen[this] = value; } }
                public partial class RowFields { public BooleanField SalesIsOpen; }

                        
                [DisplayName("Sales Is In Progress"), Expression("jSales.[IsInProgress]")]
                public Boolean? SalesIsInProgress { get { return Fields.SalesIsInProgress[this]; } set { Fields.SalesIsInProgress[this] = value; } }
                public partial class RowFields { public BooleanField SalesIsInProgress; }

                        
                [DisplayName("Sales Is Fully Picked"), Expression("jSales.[IsFullyPicked]")]
                public Boolean? SalesIsFullyPicked { get { return Fields.SalesIsFullyPicked[this]; } set { Fields.SalesIsFullyPicked[this] = value; } }
                public partial class RowFields { public BooleanField SalesIsFullyPicked; }

                        
                [DisplayName("Sales Is Fully Paid"), Expression("jSales.[IsFullyPaid]")]
                public Boolean? SalesIsFullyPaid { get { return Fields.SalesIsFullyPaid[this]; } set { Fields.SalesIsFullyPaid[this] = value; } }
                public partial class RowFields { public BooleanField SalesIsFullyPaid; }

                        
                [DisplayName("Sales Is Invoiced"), Expression("jSales.[IsInvoiced]")]
                public Boolean? SalesIsInvoiced { get { return Fields.SalesIsInvoiced[this]; } set { Fields.SalesIsInvoiced[this] = value; } }
                public partial class RowFields { public BooleanField SalesIsInvoiced; }

                        
                [DisplayName("Sales Is Advanced"), Expression("jSales.[IsAdvanced]")]
                public Boolean? SalesIsAdvanced { get { return Fields.SalesIsAdvanced[this]; } set { Fields.SalesIsAdvanced[this] = value; } }
                public partial class RowFields { public BooleanField SalesIsAdvanced; }

                        
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

                        
                [DisplayName("Bank Date"), Expression("jBank.[Date]")]
                public DateTime? BankDate { get { return Fields.BankDate[this]; } set { Fields.BankDate[this] = value; } }
                public partial class RowFields { public DateTimeField BankDate; }

                        
                [DisplayName("Bank Bank Name"), Expression("jBank.[BankName]")]
                public String BankBankName { get { return Fields.BankBankName[this]; } set { Fields.BankBankName[this] = value; } }
                public partial class RowFields { public StringField BankBankName; }

                        
                [DisplayName("Bank Account Id"), Expression("jBank.[AccountID]")]
                public Int32? BankAccountId { get { return Fields.BankAccountId[this]; } set { Fields.BankAccountId[this] = value; } }
                public partial class RowFields { public Int32Field BankAccountId; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.SalesPymntDetailsId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.PaymentMode; }
            }
            #endregion Id and Name fields

    #region Constructor
    public SalesPaymentDetailsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[SalesPaymentsDetails]")
    {
    LocalTextPrefix = "BusinessObjects.SalesPaymentDetails";
    }
    }
    #endregion RowFields
    }
    }
