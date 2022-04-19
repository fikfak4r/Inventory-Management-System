
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

    [ConnectionKey("Default"), DisplayName("BankTransactions"), InstanceName("BankTransactions"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.BankTransaction.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.BankTransaction.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.BankTransaction.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.BankTransaction.Delete)]
    [LookupScript("BusinessObjects.BankTransaction")]
    public sealed class BankTransactionRow : Row, IIdRow, INameRow
    {        
            #region Bank Transaction Id
            [DisplayName("Bank Transaction Id"), Column("BankTransactionID"), Identity]
            public Int32? BankTransactionId { get { return Fields.BankTransactionId[this]; } set { Fields.BankTransactionId[this] = value; } }
            public partial class RowFields { public Int32Field BankTransactionId; }
            #endregion BankTransactionId
                
            #region Bank
            [DisplayName("Bank"), Column("BankID"), NotNull, ForeignKey("[dbo].[Banks]", "BankID"), LeftJoin("jBank"), TextualField("BankBankName")]
            [LookupEditor(typeof(BusinessObjects.Entities.BankRow), InplaceAdd = true)]
            public Int32? BankId { get { return Fields.BankId[this]; } set { Fields.BankId[this] = value; } }
            public partial class RowFields { public Int32Field BankId; }
            #endregion BankId
                
            #region Date
            [DisplayName("Date"), NotNull]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Account Type
            [DisplayName("Account Type"), Size(10), QuickSearch]
            public String AccountType { get { return Fields.AccountType[this]; } set { Fields.AccountType[this] = value; } }
            public partial class RowFields { public StringField AccountType; }
            #endregion AccountType
                
            #region Customer
            [DisplayName("Customer"), Column("CustomerID"), ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerName")]
            [LookupEditor(typeof(BusinessObjects.Entities.CustomerRow), InplaceAdd = true)]
            public Int32? CustomerId { get { return Fields.CustomerId[this]; } set { Fields.CustomerId[this] = value; } }
            public partial class RowFields { public Int32Field CustomerId; }
            #endregion CustomerId
                
            #region Sales
            [DisplayName("Sales"), Column("SalesID"), ForeignKey("[dbo].[Sales]", "SalesID"), LeftJoin("jSales"), TextualField("SalesOrderId")]
            [LookupEditor(typeof(BusinessObjects.Entities.SalesRow), InplaceAdd = true)]
            public Int32? SalesId { get { return Fields.SalesId[this]; } set { Fields.SalesId[this] = value; } }
            public partial class RowFields { public Int32Field SalesId; }
            #endregion SalesId
                
            #region Amount
            [DisplayName("Amount"), Size(19), Scale(4), NotNull]
            public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
            public partial class RowFields { public DecimalField Amount; }
            #endregion Amount
                
            #region Location Id
            [DisplayName("Location Id"), Column("LocationID")]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
                
            #region Sales Pymnt Details Id
            [DisplayName("Sales Pymnt Details Id"), Column("SalesPymntDetailsID")]
            public Int32? SalesPymntDetailsId { get { return Fields.SalesPymntDetailsId[this]; } set { Fields.SalesPymntDetailsId[this] = value; } }
            public partial class RowFields { public Int32Field SalesPymntDetailsId; }
            #endregion SalesPymntDetailsId
        

    #region Foreign Fields
            
                [DisplayName("Bank Date"), Expression("jBank.[Date]")]
                public DateTime? BankDate { get { return Fields.BankDate[this]; } set { Fields.BankDate[this] = value; } }
                public partial class RowFields { public DateTimeField BankDate; }

                        
                [DisplayName("Bank Bank Name"), Expression("jBank.[BankName]")]
                public String BankBankName { get { return Fields.BankBankName[this]; } set { Fields.BankBankName[this] = value; } }
                public partial class RowFields { public StringField BankBankName; }

                        
                [DisplayName("Bank Account Id"), Expression("jBank.[AccountID]")]
                public Int32? BankAccountId { get { return Fields.BankAccountId[this]; } set { Fields.BankAccountId[this] = value; } }
                public partial class RowFields { public Int32Field BankAccountId; }

                        
                [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
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

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.BankTransactionId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.AccountType; }
            }
            #endregion Id and Name fields

    #region Constructor
    public BankTransactionRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[BankTransactions]")
    {
    LocalTextPrefix = "BusinessObjects.BankTransaction";
    }
    }
    #endregion RowFields
    }
    }
