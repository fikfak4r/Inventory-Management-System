﻿
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

    [ConnectionKey("Default"), DisplayName("Pick"), InstanceName("Pick"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.PickSalesOrder.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.PickSalesOrder.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.PickSalesOrder.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.PickSalesOrder.Delete)]
    [LookupScript("BusinessObjects.PickSalesOrderRow")]
    public sealed class PickSalesOrderRow : Row, IIdRow
    {        
            #region Pick Sales Order Id
            [Hidden]
            [DisplayName("Pick Sales Order Id"), Column("PickSalesOrderID"), Identity]
            public Int32? PickSalesOrderId { get { return Fields.PickSalesOrderId[this]; } set { Fields.PickSalesOrderId[this] = value; } }
            public partial class RowFields { public Int32Field PickSalesOrderId; }
            #endregion PickSalesOrderId
                
            #region Sales
            [Hidden]
            [DisplayName("Sales"), Column("SalesID"), ForeignKey("[dbo].[Sales]", "SalesID"), LeftJoin("jSales"), TextualField("SalesOrderId")]
            public Int32? SalesId { get { return Fields.SalesId[this]; } set { Fields.SalesId[this] = value; } }
            public partial class RowFields { public Int32Field SalesId; }
            #endregion SalesId
                
            #region Product
            
            [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
            [LookupEditor(typeof(BusinessObjects.Entities.ProductRow), InplaceAdd = true)]
            public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
            public partial class RowFields { public Int32Field ProductId; }
            #endregion ProductId
                
            #region Sales Details Id
            [Hidden]
            [DisplayName("Sales Details Id"), Column("SalesDetailsID")]
            public Int32? SalesDetailsId { get { return Fields.SalesDetailsId[this]; } set { Fields.SalesDetailsId[this] = value; } }
            public partial class RowFields { public Int32Field SalesDetailsId; }
            #endregion SalesDetailsId
                
            #region Quantity
            [DisplayName("Quantity"), Size(18), NotNull]
            public Double? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
            public partial class RowFields { public DoubleField Quantity; }
            #endregion Quantity
                
            #region Date
            [DisplayName("Date"), DefaultValue("now")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Is Picked
            [Hidden]
            [DisplayName("Is Picked"), NotNull]
            public Boolean? IsPicked { get { return Fields.IsPicked[this]; } set { Fields.IsPicked[this] = value; } }
            public partial class RowFields { public BooleanField IsPicked; }
            #endregion IsPicked
                
            #region Amount
            [DisplayName("Amount"), Size(19), Scale(4)]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
            public partial class RowFields { public DecimalField Amount; }
            #endregion Amount
                
            #region Uom And Price
            [DisplayName("Unit"), Column("UOMAndPriceID"), ForeignKey("[dbo].[SalesUOMsAndPrices]", "UOMAndPriceID"), LeftJoin("jUomAndPrice"), TextualField("UomAndPriceUnitName")]
            [LookupEditor(typeof(BusinessObjects.Entities.SalesUoMAndPriceRow), CascadeFrom= "ProductId", CascadeField = "ProductId", InplaceAdd = true)]
            public Int32? UomAndPriceId { get { return Fields.UomAndPriceId[this]; } set { Fields.UomAndPriceId[this] = value; } }
            public partial class RowFields { public Int32Field UomAndPriceId; }
            #endregion UomAndPriceId
                
            #region Unit Price
            [DisplayName("Unit Price"), Size(19), Scale(4)]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? UnitPrice { get { return Fields.UnitPrice[this]; } set { Fields.UnitPrice[this] = value; } }
            public partial class RowFields { public DecimalField UnitPrice; }
            #endregion UnitPrice
                
            #region Discount
            [DefaultValue(0)]
            [DisplayName("Discount"), Size(19), Scale(4)]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
            public Decimal? Discount { get { return Fields.Discount[this]; } set { Fields.Discount[this] = value; } }
            public partial class RowFields { public DecimalField Discount; }
            #endregion Discount
                
            #region Cost
            [Hidden]
            [DisplayName("Cost"), Size(19), Scale(4)]
            public Decimal? Cost { get { return Fields.Cost[this]; } set { Fields.Cost[this] = value; } }
            public partial class RowFields { public DecimalField Cost; }
            #endregion Cost
                
            #region Quantity Sold
            [Hidden]
            [DisplayName("Quantity Sold"), Size(18)]
            public Double? QuantitySold { get { return Fields.QuantitySold[this]; } set { Fields.QuantitySold[this] = value; } }
            public partial class RowFields { public DoubleField QuantitySold; }
            #endregion QuantitySold
                
            #region Cost Of Goods Sold
            [Hidden]
            [DisplayName("Cost Of Goods Sold"), Size(19), Scale(4)]
            public Decimal? CostOfGoodsSold { get { return Fields.CostOfGoodsSold[this]; } set { Fields.CostOfGoodsSold[this] = value; } }
            public partial class RowFields { public DecimalField CostOfGoodsSold; }
            #endregion CostOfGoodsSold
                
            #region Location Id
            [Hidden]
            [DisplayName("Location Id"), Column("LocationID")]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
                
            #region Sales Profit
            [Hidden]
            [DisplayName("Sales Profit"), Size(19), Scale(4)]
            public Decimal? SalesProfit { get { return Fields.SalesProfit[this]; } set { Fields.SalesProfit[this] = value; } }
            public partial class RowFields { public DecimalField SalesProfit; }
            #endregion SalesProfit
        

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

                        
                [DisplayName("Unit"), Expression("jUomAndPrice.[UnitName]")]
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
    get { return Fields.PickSalesOrderId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public PickSalesOrderRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[PickSalesOrders]")
    {
    LocalTextPrefix = "BusinessObjects.PickSalesOrder";
    }
    }
    #endregion RowFields
    }
    }
