
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

    [ConnectionKey("Default"), DisplayName("ReturnInwards"), InstanceName("ReturnInwards"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ReturnInwards.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ReturnInwards.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ReturnInwards.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ReturnInwards.Delete)]
    [LookupScript("BusinessObjects.ReturnInwards")]
    public sealed class ReturnInwardsRow : Row, IIdRow
    {        
            #region Rtn Inwards Id
            [DisplayName("Rtn Inwards Id"), Column("RtnInwardsID"), Identity]
            public Int32? RtnInwardsId { get { return Fields.RtnInwardsId[this]; } set { Fields.RtnInwardsId[this] = value; } }
            public partial class RowFields { public Int32Field RtnInwardsId; }
            #endregion RtnInwardsId
                
            #region Date
            [DisplayName("Date"), NotNull]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Sales
            [DisplayName("Sales"), Column("SalesID"), ForeignKey("[dbo].[Sales]", "SalesID"), LeftJoin("jSales"), TextualField("SalesOrderId")]
            [LookupEditor(typeof(BusinessObjects.Entities.SalesRow), InplaceAdd = true)]
            public Int32? SalesId { get { return Fields.SalesId[this]; } set { Fields.SalesId[this] = value; } }
            public partial class RowFields { public Int32Field SalesId; }
            #endregion SalesId
                
            #region Total Amount
            [DisplayName("Total Amount"), Size(19), Scale(4), NotNull]
            public Decimal? TotalAmount { get { return Fields.TotalAmount[this]; } set { Fields.TotalAmount[this] = value; } }
            public partial class RowFields { public DecimalField TotalAmount; }
            #endregion TotalAmount
                
            #region Total Fee
            [DisplayName("Total Fee"), Size(19), Scale(4), NotNull]
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
    get { return Fields.RtnInwardsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public ReturnInwardsRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ReturnInwards]")
    {
    LocalTextPrefix = "BusinessObjects.ReturnInwards";
    }
    }
    #endregion RowFields
    }
    }
