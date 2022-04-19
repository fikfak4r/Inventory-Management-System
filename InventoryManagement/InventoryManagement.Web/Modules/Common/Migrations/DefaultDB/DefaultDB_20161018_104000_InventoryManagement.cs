using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FluentMigrator;

namespace InventoryManagement.Migrations.DefaultDB
{
    [Migration(20161018104000)]
    public class DefaultDB_20161018_104000_InventoryManagement : Migration
    {
        public override void Up()
        {
            #region Create Schemas

            #endregion

            #region Create Tables
            //Create.Table("__MigrationHistory").InSchema("dbo")
            //    .WithColumn("MigrationId").AsString(150).NotNullable().PrimaryKey()
            //    .WithColumn("ContextKey").AsString(300).NotNullable().PrimaryKey()
            //    .WithColumn("Model").AsBinary(-1).NotNullable()
            //    .WithColumn("ProductVersion").AsString(32).NotNullable();

            Create.Table("Accounts").InSchema("dbo")
                .WithColumn("AccountID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDate().NotNullable()
                .WithColumn("CompanyName").AsAnsiString(250).NotNullable()
                .WithColumn("Logo").AsCustom("IMAGE").Nullable()
                .WithColumn("Address").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Email").AsAnsiString(250).Nullable()
                .WithColumn("PhoneNumber").AsString(50).Nullable()
                .WithColumn("WebsiteAddress").AsString(250).Nullable();

            Create.Table("AdjustedStocks").InSchema("dbo")
                .WithColumn("AdjustedStockID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Quantity").AsFixedLengthString(10).NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable();

            //Create.Table("aspnet_Applications").InSchema("dbo")
            //    .WithColumn("ApplicationName").AsString(256).NotNullable()
            //    .WithColumn("LoweredApplicationName").AsString(256).NotNullable()
            //    .WithColumn("ApplicationId").AsGuid().NotNullable().PrimaryKey()
            //    .WithColumn("Description").AsString(256).Nullable();
            
            //Create.Table("aspnet_Membership").InSchema("dbo")
            //    .WithColumn("ApplicationId").AsGuid().NotNullable()
            //    .WithColumn("UserId").AsGuid().NotNullable().PrimaryKey()
            //    .WithColumn("Password").AsString(128).NotNullable()
            //    .WithColumn("PasswordFormat").AsInt32().NotNullable()
            //    .WithColumn("PasswordSalt").AsString(128).NotNullable()
            //    .WithColumn("MobilePIN").AsString(16).Nullable()
            //    .WithColumn("Email").AsString(256).Nullable()
            //    .WithColumn("LoweredEmail").AsString(256).Nullable()
            //    .WithColumn("PasswordQuestion").AsString(256).Nullable()
            //    .WithColumn("PasswordAnswer").AsString(128).Nullable()
            //    .WithColumn("IsApproved").AsBoolean().NotNullable()
            //    .WithColumn("IsLockedOut").AsBoolean().NotNullable()
            //    .WithColumn("CreateDate").AsDateTime().NotNullable()
            //    .WithColumn("LastLoginDate").AsDateTime().NotNullable()
            //    .WithColumn("LastPasswordChangedDate").AsDateTime().NotNullable()
            //    .WithColumn("LastLockoutDate").AsDateTime().NotNullable()
            //    .WithColumn("FailedPasswordAttemptCount").AsInt32().NotNullable()
            //    .WithColumn("FailedPasswordAttemptWindowStart").AsDateTime().NotNullable()
            //    .WithColumn("FailedPasswordAnswerAttemptCount").AsInt32().NotNullable()
            //    .WithColumn("FailedPasswordAnswerAttemptWindowStart").AsDateTime().NotNullable()
            //    .WithColumn("Comment").AsCustom("NTEXT").Nullable();
             

            //Create.Table("aspnet_Roles").InSchema("dbo")
            //    .WithColumn("ApplicationId").AsGuid().NotNullable()
            //    .WithColumn("RoleId").AsGuid().NotNullable().PrimaryKey()
            //    .WithColumn("RoleName").AsString(256).NotNullable()
            //    .WithColumn("LoweredRoleName").AsString(256).NotNullable()
            //    .WithColumn("Description").AsString(256).Nullable();

            //Create.Table("aspnet_SchemaVersions").InSchema("dbo")
            //    .WithColumn("Feature").AsString(128).NotNullable().PrimaryKey()
            //    .WithColumn("CompatibleSchemaVersion").AsString(128).NotNullable().PrimaryKey()
            //    .WithColumn("IsCurrentVersion").AsBoolean().NotNullable();

            //Create.Table("aspnet_Users").InSchema("dbo")
            //    .WithColumn("ApplicationId").AsGuid().NotNullable()
            //    .WithColumn("UserId").AsGuid().NotNullable().PrimaryKey()
            //    .WithColumn("UserName").AsString(256).NotNullable()
            //    .WithColumn("LoweredUserName").AsString(256).NotNullable()
            //    .WithColumn("MobileAlias").AsString(16).Nullable()
            //    .WithColumn("IsAnonymous").AsBoolean().NotNullable()
            //    .WithColumn("LastActivityDate").AsDateTime().NotNullable();

            //Create.Table("aspnet_UsersInRoles").InSchema("dbo")
            //    .WithColumn("UserId").AsGuid().NotNullable().PrimaryKey()
            //    .WithColumn("RoleId").AsGuid().NotNullable().PrimaryKey();

            Create.Table("Banks").InSchema("dbo")
                .WithColumn("BankID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("BankName").AsAnsiString(150).Nullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            Create.Table("BanksLocations").InSchema("dbo")
                .WithColumn("BankLocationID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("BankID").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            Create.Table("BankTransactions").InSchema("dbo")
                .WithColumn("BankTransactionID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("BankID").AsInt32().NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("AccountType").AsFixedLengthString(10).Nullable()
                .WithColumn("CustomerID").AsInt32().Nullable()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("Amount").AsCurrency().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable()
                .WithColumn("SalesPymntDetailsID").AsInt32().Nullable();

            Create.Table("CostingInfo").InSchema("dbo")
                .WithColumn("CostingInfoID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("Cost").AsCurrency().Nullable();

            Create.Table("Customers").InSchema("dbo")
                .WithColumn("CustomerID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Name").AsAnsiString(250).Nullable()
                .WithColumn("PhoneNumber").AsAnsiString(50).Nullable()
                .WithColumn("Email").AsAnsiString(150).Nullable()
                .WithColumn("Website").AsAnsiString(50).Nullable()
                .WithColumn("Address").AsAnsiString(Int32.MaxValue).Nullable()
                .WithColumn("AccountID").AsInt32().Nullable()
                .WithColumn("Address2").AsString(500).Nullable();

            Create.Table("CustomersLocations").InSchema("dbo")
                .WithColumn("CustomersLocationsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("CustomerID").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            //Create.Table("CustomRoles").InSchema("dbo")
            //    .WithColumn("CustomRoleID").AsInt32().Identity().NotNullable().PrimaryKey()
            //    .WithColumn("AccountID").AsInt32().Nullable()
            //    .WithColumn("AspNetRoleName").AsString(50).Nullable()
            //    .WithColumn("RoleName").AsString(50).NotNullable()
            //    .WithColumn("Description").AsString(Int32.MaxValue).Nullable();

            //Create.Table("CustomRolesLocations").InSchema("dbo")
            //    .WithColumn("CustomRoleLocationID").AsInt32().Identity().NotNullable().PrimaryKey()
            //    .WithColumn("CustomRoleID").AsInt32().NotNullable()
            //    .WithColumn("LocationID").AsInt32().NotNullable();

            //Create.Table("CustomUserRoles").InSchema("dbo")
            //    .WithColumn("CustomUserRoleID").AsInt32().Identity().NotNullable().PrimaryKey()
            //    .WithColumn("CustomUserID").AsInt32().NotNullable()
            //    .WithColumn("CustomRoleID").AsInt32().NotNullable();

            //Create.Table("CustomUsers").InSchema("dbo")
            //    .WithColumn("CustomUserID").AsInt32().Identity().NotNullable().PrimaryKey()
            //    .WithColumn("AccountID").AsInt32().NotNullable()
            //    .WithColumn("ASPNetUserName").AsAnsiString(50).Nullable()
            //    .WithColumn("UserName").AsAnsiString(50).Nullable()
            //    .WithColumn("Password").AsAnsiString(50).NotNullable()
            //    .WithColumn("ConfirmPassword").AsAnsiString(50).Nullable()
            //    .WithColumn("Email").AsString(128).NotNullable()
            //    .WithColumn("Comment").AsCustom("NTEXT").Nullable()
            //    .WithColumn("PasswordQuestion").AsString(256).Nullable()
            //    .WithColumn("PasswordAnswer").AsString(128).Nullable()
            //    .WithColumn("IsApproved").AsBoolean().Nullable()
            //    .WithColumn("LastActivityDate").AsDateTime().Nullable()
            //    .WithColumn("LastLoginDate").AsDateTime().Nullable()
            //    .WithColumn("LastPasswordChangedDate").AsDateTime().Nullable()
            //    .WithColumn("CreationDate").AsDateTime().Nullable()
            //    .WithColumn("IsLockedOut").AsBoolean().Nullable()
            //    .WithColumn("LastLockedOutDate").AsDateTime().Nullable()
            //    .WithColumn("FailedPasswordAttemptCount").AsInt32().Nullable()
            //    .WithColumn("FailedPasswordAttemptWindowStart").AsDateTime().Nullable()
            //    .WithColumn("FailedPasswordAnswerAttemptCount").AsInt32().Nullable()
            //    .WithColumn("FailedPasswordAnswerAttemptWindowStart").AsDateTime().Nullable()
            //    .WithColumn("IsActive").AsBoolean().Nullable()
            //    .WithColumn("IsEmailSent").AsBoolean().Nullable()
            //    .WithColumn("VerificationCode").AsAnsiString(50).Nullable();

            //Create.Table("CustomUsersLocations").InSchema("dbo")
            //    .WithColumn("CustomUserLocationID").AsInt32().Identity().NotNullable().PrimaryKey()
            //    .WithColumn("CustomUserID").AsInt32().NotNullable()
            //    .WithColumn("LocationID").AsInt32().NotNullable();

            Create.Table("Locations").InSchema("dbo")
                .WithColumn("LocationID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("AccountID").AsInt32().NotNullable()
                .WithColumn("Date").AsDate().NotNullable()
                .WithColumn("PhoneNumber").AsString(50).Nullable()
                .WithColumn("Email").AsString(50).Nullable()
                .WithColumn("Website").AsString(50).Nullable()
                .WithColumn("LocationName").AsString(250).NotNullable()
                .WithColumn("Address").AsString(Int32.MaxValue).Nullable()
                .WithColumn("UserID").AsInt32().Nullable();

            Create.Table("PickSalesOrders").InSchema("dbo")
                .WithColumn("PickSalesOrderID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("SalesDetailsID").AsInt32().Nullable()
                .WithColumn("Quantity").AsDecimal(18, 0).NotNullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("IsPicked").AsBoolean().NotNullable()
                .WithColumn("Amount").AsCurrency().Nullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("UnitPrice").AsCurrency().Nullable()
                .WithColumn("Discount").AsCurrency().Nullable()
                .WithColumn("Cost").AsCurrency().Nullable()
                .WithColumn("QuantitySold").AsDecimal(18, 0).Nullable()
                .WithColumn("CostOfGoodsSold").AsCurrency().Nullable()
                .WithColumn("LocationID").AsInt32().Nullable()
                .WithColumn("SalesProfit").AsCurrency().Nullable();

            Create.Table("ProductsCategories").InSchema("dbo")
                .WithColumn("ProductCategoryID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("CategoryName").AsAnsiString(50).NotNullable()
                .WithColumn("Description").AsString(250).Nullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            Create.Table("ProductsCategoriesLocations").InSchema("dbo")
                .WithColumn("ProdCatLoctnID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductCategoryID").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            Create.Table("Products").InSchema("dbo")
                .WithColumn("ProductID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDate().Nullable()
                .WithColumn("ProductCode").AsAnsiString(50).Nullable()
                .WithColumn("ProductName").AsAnsiString(50).NotNullable()
                .WithColumn("BrandName").AsAnsiString(50).Nullable()
                .WithColumn("ProductCategoryID").AsInt32().Nullable()
                .WithColumn("SupplierID").AsInt32().Nullable()
                .WithColumn("LeastUnitName").AsAnsiString(50).Nullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            Create.Table("ProductsLocations").InSchema("dbo")
                .WithColumn("ProductsLocationsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            Create.Table("Purchases").InSchema("dbo")
                .WithColumn("PurchasesID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("OrderID").AsAnsiString(50).NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("SupplierID").AsInt32().Nullable()
                .WithColumn("TotalAmount").AsCurrency().NotNullable()
                .WithColumn("TotalAmountPaid").AsCurrency().Nullable()
                .WithColumn("TotalAmountLeft").AsCurrency().Nullable()
                .WithColumn("HasPurchasesDetails").AsBoolean().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable()
                .WithColumn("IsIntegerTrailingOrderIDWithPrefixPO").AsBoolean().Nullable()
                .WithColumn("Status").AsAnsiString(20).NotNullable()
                .WithColumn("IsOpen").AsBoolean().NotNullable()
                .WithColumn("IsInProgress").AsBoolean().NotNullable()
                .WithColumn("IsFullyReceived").AsBoolean().NotNullable()
                .WithColumn("IsFullyPaid").AsBoolean().NotNullable()
                .WithColumn("IsAdvanced").AsBoolean().Nullable();

            Create.Table("PurchasesDetails").InSchema("dbo")
                .WithColumn("PurchasesDetailsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("PurchasesID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("UnitPrice").AsCurrency().Nullable()
                .WithColumn("Discount").AsCurrency().Nullable()
                .WithColumn("Amount").AsCurrency().NotNullable()
                .WithColumn("Quantity").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable()
                .WithColumn("IsReceived").AsBoolean().Nullable();

            Create.Table("PurchasesPaymentsDetails").InSchema("dbo")
                .WithColumn("PurchPymntDetailsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("PurchasesID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("TotalAmount").AsCurrency().Nullable()
                .WithColumn("AmountPaid").AsCurrency().Nullable()
                .WithColumn("AmountLeft").AsCurrency().Nullable()
                .WithColumn("IsTotalAmountRow").AsBoolean().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable();

            Create.Table("PurchasesUOMsAndPrices").InSchema("dbo")
                .WithColumn("UOMAndPriceID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("UnitName").AsString(50).NotNullable()
                .WithColumn("UnitMakeUp").AsDecimal(18, 0).NotNullable()
                .WithColumn("StandardUOMID").AsInt32().Nullable()
                .WithColumn("Discontinued").AsBoolean().NotNullable()
                .WithColumn("Price").AsCurrency().NotNullable();

            Create.Table("PurchasesUOMsAndPricesLocations").InSchema("dbo")
                .WithColumn("PurchUOMAndPriceLocID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("PurchUOMAndPriceID").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable();

            Create.Table("ReceivePurchases").InSchema("dbo")
                .WithColumn("ReceivePurchasesID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("PurchasesID").AsInt32().Nullable()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("PurchasesDetailsID").AsInt32().Nullable()
                .WithColumn("Quantity").AsDecimal(18, 0).NotNullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("IsReceived").AsBoolean().NotNullable()
                .WithColumn("Amount").AsCurrency().Nullable()
                .WithColumn("UnitPrice").AsCurrency().Nullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("Discount").AsCurrency().Nullable()
                .WithColumn("LocationID").AsInt32().Nullable();

            Create.Table("ReorderPoints").InSchema("dbo")
                .WithColumn("ReorderPointID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("ReorderPointValue").AsDecimal(18, 0).Nullable();

            Create.Table("Restock").InSchema("dbo")
                .WithColumn("ReStockID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("RtnInwardsDtlsID").AsInt32().NotNullable()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("Quantity").AsDecimal(18, 0).NotNullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("IsRestocked").AsBoolean().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable();

            Create.Table("ReturnInwards").InSchema("dbo")
                .WithColumn("RtnInwardsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("TotalAmount").AsCurrency().NotNullable()
                .WithColumn("TotalFee").AsCurrency().NotNullable()
                .WithColumn("TotalAmountRefunded").AsCurrency().NotNullable()
                .WithColumn("TotalCredit").AsCurrency().NotNullable();

            Create.Table("ReturnInwardsDetails").InSchema("dbo")
                .WithColumn("RtnInwardsDtlsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("RtnInwardsID").AsInt32().Nullable()
                .WithColumn("SalesDetailsID").AsInt32().Nullable()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("Quantity").AsInt32().NotNullable()
                .WithColumn("UnitPrice").AsCurrency().Nullable()
                .WithColumn("Amount").AsCurrency().NotNullable()
                .WithColumn("Discount").AsCurrency().Nullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("LocationID").AsInt32().Nullable();

            Create.Table("ReturnInwardsPayments").InSchema("dbo")
                .WithColumn("RtnInwardsPaymentID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("RtnInwardsID").AsInt32().Nullable()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Amount").AsCurrency().Nullable()
                .WithColumn("AmountRefunded").AsCurrency().NotNullable()
                .WithColumn("Fee").AsCurrency().Nullable()
                .WithColumn("Credit").AsCurrency().Nullable();

            Create.Table("ReturnOutwards").InSchema("dbo")
                .WithColumn("RtnOutwardsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("PurchasesID").AsInt32().Nullable()
                .WithColumn("TotalAmount").AsCurrency().NotNullable()
                .WithColumn("TotalFee").AsCurrency().Nullable()
                .WithColumn("TotalAmountRefunded").AsCurrency().NotNullable()
                .WithColumn("TotalCredit").AsCurrency().NotNullable();

            Create.Table("ReturnOutwardsDetails").InSchema("dbo")
                .WithColumn("RtnOutwardsDtlsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("RtnOutwardsID").AsInt32().Nullable()
                .WithColumn("PurchasesDetailsID").AsInt32().Nullable()
                .WithColumn("PurchasesID").AsInt32().Nullable()
                .WithColumn("Quantity").AsDecimal(18, 0).NotNullable()
                .WithColumn("UnitPrice").AsCurrency().Nullable()
                .WithColumn("Amount").AsCurrency().NotNullable()
                .WithColumn("Discount").AsCurrency().Nullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("LocationID").AsInt32().Nullable();

            Create.Table("ReturnOutwardsPayments").InSchema("dbo")
                .WithColumn("RtnOutwardsPaymentID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("RtnOutwardsID").AsInt32().Nullable()
                .WithColumn("PurchasesID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Amount").AsCurrency().Nullable()
                .WithColumn("AmountRefunded").AsCurrency().NotNullable()
                .WithColumn("Fee").AsCurrency().Nullable()
                .WithColumn("Credit").AsCurrency().Nullable();

            Create.Table("Sales").InSchema("dbo")
                .WithColumn("SalesID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("OrderID").AsAnsiString(50).NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("CustomerID").AsInt32().Nullable()
                .WithColumn("TotalAmount").AsCurrency().NotNullable()
                .WithColumn("TotalAmountPaid").AsCurrency().Nullable()
                .WithColumn("TotalAmountLeft").AsCurrency().Nullable()
                .WithColumn("CostOfGoodsSold").AsCurrency().Nullable()
                .WithColumn("GrossProfit").AsCurrency().Nullable()
                .WithColumn("HasSalesDetails").AsBoolean().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable()
                .WithColumn("IsIntegerTrailingOrderIDWithPrefixSO").AsBoolean().Nullable()
                .WithColumn("Status").AsAnsiString(20).NotNullable()
                .WithColumn("IsOpen").AsBoolean().NotNullable()
                .WithColumn("IsInProgress").AsBoolean().NotNullable()
                .WithColumn("IsFullyPicked").AsBoolean().NotNullable()
                .WithColumn("IsFullyPaid").AsBoolean().NotNullable()
                .WithColumn("IsInvoiced").AsBoolean().NotNullable()
                .WithColumn("IsAdvanced").AsBoolean().Nullable();

            Create.Table("SalesByProductsSummaries").InSchema("dbo")
                .WithColumn("SalesByProductID").AsInt32().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("QuantitySold").AsDecimal(18, 0).Nullable()
                .WithColumn("TotalSales").AsCurrency().Nullable()
                .WithColumn("CostOfGoodsSold").AsCurrency().Nullable()
                .WithColumn("SalesProfit").AsCurrency().Nullable()
                .WithColumn("LocationID").AsInt32().Identity().NotNullable();

            Create.Table("SalesDetails").InSchema("dbo")
                .WithColumn("SalesDetailsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("UnitPrice").AsCurrency().Nullable()
                .WithColumn("Discount").AsCurrency().Nullable()
                .WithColumn("Amount").AsCurrency().NotNullable()
                .WithColumn("Quantity").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable()
                .WithColumn("Cost").AsCurrency().Nullable()
                .WithColumn("IsPicked").AsBoolean().Nullable();

            Create.Table("SalesInvoice").InSchema("dbo")
                .WithColumn("SalesInvoiceID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("SalesDetailsID").AsInt32().Nullable()
                .WithColumn("Quantity").AsDecimal(18, 0).NotNullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("IsPicked").AsBoolean().NotNullable()
                .WithColumn("Amount").AsCurrency().Nullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("Discount").AsCurrency().Nullable()
                .WithColumn("LocationID").AsInt32().Nullable()
                .WithColumn("PickSalesOrderID").AsInt32().Nullable()
                .WithColumn("UnitPrice").AsCurrency().Nullable();

            Create.Table("SalesPaymentsDetails").InSchema("dbo")
                .WithColumn("SalesPymntDetailsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("SalesID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("TotalAmount").AsCurrency().Nullable()
                .WithColumn("AmountPaid").AsCurrency().Nullable()
                .WithColumn("AmountLeft").AsCurrency().Nullable()
                .WithColumn("IsTotalAmountRow").AsBoolean().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable()
                .WithColumn("PaymentMode").AsAnsiString(10).Nullable()
                .WithColumn("BankID").AsInt32().Nullable();

            Create.Table("SalesUOMsAndPrices").InSchema("dbo")
                .WithColumn("UOMAndPriceID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("UnitName").AsString(50).NotNullable()
                .WithColumn("UnitMakeUp").AsDecimal(18, 0).NotNullable()
                .WithColumn("StandardUOMID").AsInt32().Nullable()
                .WithColumn("Discontinued").AsBoolean().NotNullable()
                .WithColumn("Price").AsCurrency().NotNullable();

            Create.Table("SalesUOMsAndPricesLocations").InSchema("dbo")
                .WithColumn("SalesUOMAndPriceLocID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("SalesUOMAndPriceID").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable();

            Create.Table("StandardUOMs").InSchema("dbo")
                .WithColumn("StandardUOMID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("StandardUnitName").AsString(50).NotNullable()
                .WithColumn("Discontinued").AsBoolean().NotNullable()
                .WithColumn("Cost").AsCurrency().Nullable();

            Create.Table("StandardUOMsLocations").InSchema("dbo")
                .WithColumn("StandardUOMLocationsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("StandardUOMID").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable();

            Create.Table("Stocks").InSchema("dbo")
                .WithColumn("StockID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("Quantity").AsDecimal(18, 0).Nullable()
                .WithColumn("LocationID").AsInt32().NotNullable();

            Create.Table("StocksMovements").InSchema("dbo")
                .WithColumn("StockMovementID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("StockMovementName").AsAnsiString(50).NotNullable()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("PurchUOMAndPriceID").AsInt32().Nullable()
                .WithColumn("SalesUOMAndPriceID").AsInt32().Nullable()
                .WithColumn("Quantity").AsInt32().NotNullable()
                .WithColumn("Amount").AsCurrency().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable();

            Create.Table("SuppliersLocations").InSchema("dbo")
                .WithColumn("SuppliersLocationsID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("SupplierID").AsInt32().NotNullable()
                .WithColumn("LocationID").AsInt32().NotNullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            Create.Table("Suppliers").InSchema("dbo")
                .WithColumn("SupplierID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("Date").AsDate().Nullable()
                .WithColumn("SupplierName").AsAnsiString(50).NotNullable()
                .WithColumn("PhoneNumber").AsAnsiString(50).Nullable()
                .WithColumn("Fax").AsAnsiString(100).Nullable()
                .WithColumn("Email").AsAnsiString(150).Nullable()
                .WithColumn("Website").AsAnsiString(50).Nullable()
                .WithColumn("Address").AsAnsiString(Int32.MaxValue).Nullable()
                .WithColumn("Note").AsAnsiString(Int32.MaxValue).Nullable()
                .WithColumn("AccountID").AsInt32().Nullable();

            Create.Table("Unstock").InSchema("dbo")
                .WithColumn("UnStockID").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("ProductID").AsInt32().Nullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("RtnOutwardsDtlsID").AsInt32().NotNullable()
                .WithColumn("PurchasesID").AsInt32().Nullable()
                .WithColumn("Quantity").AsDecimal(18, 0).NotNullable()
                .WithColumn("UOMAndPriceID").AsInt32().Nullable()
                .WithColumn("IsUnstocked").AsBoolean().NotNullable()
                .WithColumn("LocationID").AsInt32().Nullable();

            //Create.Table("UserProfile").InSchema("dbo")
            //    .WithColumn("UserId").AsInt32().Identity().NotNullable().PrimaryKey()
            //    .WithColumn("UserName").AsString(56).NotNullable();

            //Create.Table("UsersAccount").InSchema("dbo")
            //    .WithColumn("UsersAccountID").AsInt32().Identity().NotNullable().PrimaryKey()
            //    .WithColumn("UserName").AsAnsiString(50).NotNullable()
            //    .WithColumn("AccountID").AsInt32().NotNullable()
            //    .WithColumn("Email").AsString(150).Nullable()
            //    .WithColumn("FirstName").AsAnsiString(50).Nullable()
            //    .WithColumn("IsAccountOwner").AsBoolean().NotNullable()
            //    .WithColumn("LocationID").AsInt32().Nullable();

            //Create.Table("webpages_Membership").InSchema("dbo")
            //    .WithColumn("UserId").AsInt32().NotNullable().PrimaryKey()
            //    .WithColumn("CreateDate").AsDateTime().Nullable()
            //    .WithColumn("ConfirmationToken").AsString(128).Nullable()
            //    .WithColumn("IsConfirmed").AsBoolean().Nullable()
            //    .WithColumn("LastPasswordFailureDate").AsDateTime().Nullable()
            //    .WithColumn("PasswordFailuresSinceLastSuccess").AsInt32().NotNullable()
            //    .WithColumn("Password").AsString(128).NotNullable()
            //    .WithColumn("PasswordChangedDate").AsDateTime().Nullable()
            //    .WithColumn("PasswordSalt").AsString(128).NotNullable()
            //    .WithColumn("PasswordVerificationToken").AsString(128).Nullable()
            //    .WithColumn("PasswordVerificationTokenExpirationDate").AsDateTime().Nullable();

            //Create.Table("webpages_OAuthMembership").InSchema("dbo")
            //    .WithColumn("Provider").AsString(30).NotNullable().PrimaryKey()
            //    .WithColumn("ProviderUserId").AsString(100).NotNullable().PrimaryKey()
            //    .WithColumn("UserId").AsInt32().NotNullable();

            //Create.Table("webpages_Roles").InSchema("dbo")
            //    .WithColumn("RoleId").AsInt32().Identity().NotNullable().PrimaryKey()
            //    .WithColumn("RoleName").AsString(256).NotNullable();

            //Create.Table("webpages_UsersInRoles").InSchema("dbo")
            //    .WithColumn("UserId").AsInt32().NotNullable().PrimaryKey()
            //    .WithColumn("RoleId").AsInt32().NotNullable().PrimaryKey();
            #endregion






            #region Create Foreign Keys
            Create.ForeignKey("FK_AdjustedStocks_Locations")
                .FromTable("AdjustedStocks").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_AdjustedStocks_Products")
                .FromTable("AdjustedStocks").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            //Create.ForeignKey("FK__aspnet_Me__Appli__245D67DE")
            //    .FromTable("aspnet_Membership").InSchema("dbo").ForeignColumns("ApplicationId")
            //    .ToTable("aspnet_Applications").InSchema("dbo").PrimaryColumns("ApplicationId");

            //Create.ForeignKey("FK__aspnet_Me__UserI__25518C17")
            //    .FromTable("aspnet_Membership").InSchema("dbo").ForeignColumns("UserId")
            //    .ToTable("aspnet_Users").InSchema("dbo").PrimaryColumns("UserId");

            //Create.ForeignKey("FK__aspnet_Ro__Appli__2645B050")
            //    .FromTable("aspnet_Roles").InSchema("dbo").ForeignColumns("ApplicationId")
            //    .ToTable("aspnet_Applications").InSchema("dbo").PrimaryColumns("ApplicationId");

            //Create.ForeignKey("FK__aspnet_Us__Appli__2739D489")
            //    .FromTable("aspnet_Users").InSchema("dbo").ForeignColumns("ApplicationId")
            //    .ToTable("aspnet_Applications").InSchema("dbo").PrimaryColumns("ApplicationId");

            //Create.ForeignKey("FK__aspnet_Us__RoleI__282DF8C2")
            //    .FromTable("aspnet_UsersInRoles").InSchema("dbo").ForeignColumns("RoleId")
            //    .ToTable("aspnet_Roles").InSchema("dbo").PrimaryColumns("RoleId");

            //Create.ForeignKey("FK__aspnet_Us__UserI__29221CFB")
            //    .FromTable("aspnet_UsersInRoles").InSchema("dbo").ForeignColumns("UserId")
            //    .ToTable("aspnet_Users").InSchema("dbo").PrimaryColumns("UserId");

            Create.ForeignKey("FK_Banks_Accounts")
                .FromTable("Banks").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_BanksLocations_Banks")
                .FromTable("BanksLocations").InSchema("dbo").ForeignColumns("BankID")
                .ToTable("Banks").InSchema("dbo").PrimaryColumns("BankID");

            Create.ForeignKey("FK_BanksLocations_Locations")
                .FromTable("BanksLocations").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_BankTransactions_Banks")
                .FromTable("BankTransactions").InSchema("dbo").ForeignColumns("BankID")
                .ToTable("Banks").InSchema("dbo").PrimaryColumns("BankID");

            Create.ForeignKey("FK_BankTransactions_Customers")
                .FromTable("BankTransactions").InSchema("dbo").ForeignColumns("CustomerID")
                .ToTable("Customers").InSchema("dbo").PrimaryColumns("CustomerID");

            Create.ForeignKey("FK_BankTransactions_Sales")
                .FromTable("BankTransactions").InSchema("dbo").ForeignColumns("SalesID")
                .ToTable("Sales").InSchema("dbo").PrimaryColumns("SalesID");

            Create.ForeignKey("FK_CostingInfo_Products")
                .FromTable("CostingInfo").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_Customers_Accounts")
                .FromTable("Customers").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_CustomersLocations_Accounts")
                .FromTable("CustomersLocations").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_CustomersLocations_Customers")
                .FromTable("CustomersLocations").InSchema("dbo").ForeignColumns("CustomerID")
                .ToTable("Customers").InSchema("dbo").PrimaryColumns("CustomerID");

            Create.ForeignKey("FK_CustomersLocations_Locations")
                .FromTable("CustomersLocations").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            //Create.ForeignKey("FK_CustomRoles_Accounts")
            //    .FromTable("CustomRoles").InSchema("dbo").ForeignColumns("AccountID")
            //    .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            //Create.ForeignKey("FK_CustomRolesLocations_CustomRoles")
            //    .FromTable("CustomRolesLocations").InSchema("dbo").ForeignColumns("CustomRoleID")
            //    .ToTable("CustomRoles").InSchema("dbo").PrimaryColumns("CustomRoleID");

            //Create.ForeignKey("FK_CustomRolesLocations_Locations")
            //    .FromTable("CustomRolesLocations").InSchema("dbo").ForeignColumns("LocationID")
            //    .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            //Create.ForeignKey("FK_CustomUserRoles_CustomRoles")
            //    .FromTable("CustomUserRoles").InSchema("dbo").ForeignColumns("CustomRoleID")
            //    .ToTable("CustomRoles").InSchema("dbo").PrimaryColumns("CustomRoleID");

            //Create.ForeignKey("FK_CustomUserRoles_CustomUsers")
            //    .FromTable("CustomUserRoles").InSchema("dbo").ForeignColumns("CustomUserID")
            //    .ToTable("CustomUsers").InSchema("dbo").PrimaryColumns("CustomUserID");

            //Create.ForeignKey("FK_CustomUsers_Accounts")
            //    .FromTable("CustomUsers").InSchema("dbo").ForeignColumns("AccountID")
            //    .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            //Create.ForeignKey("FK_CustomUsersLocations_CustomUsers")
            //    .FromTable("CustomUsersLocations").InSchema("dbo").ForeignColumns("CustomUserID")
            //    .ToTable("CustomUsers").InSchema("dbo").PrimaryColumns("CustomUserID");

            //Create.ForeignKey("FK_CustomUsersLocations_Locations")
            //    .FromTable("CustomUsersLocations").InSchema("dbo").ForeignColumns("LocationID")
            //    .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_Locations_Accounts")
                .FromTable("Locations").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_PickSalesOrders_Products")
                .FromTable("PickSalesOrders").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_PickSalesOrders_Sales")
                .FromTable("PickSalesOrders").InSchema("dbo").ForeignColumns("SalesID")
                .ToTable("Sales").InSchema("dbo").PrimaryColumns("SalesID");

            Create.ForeignKey("FK_PickSalesOrders_SalesUOMsAndPrices")
                .FromTable("PickSalesOrders").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("SalesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_ProductsCategories_Accounts")
                .FromTable("ProductsCategories").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_ProductsCategoriesLocations_Accounts")
                .FromTable("ProductsCategoriesLocations").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_ProductsCategoriesLocations_Locations")
                .FromTable("ProductsCategoriesLocations").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_ProductsCategoriesLocations_ProductsCategories")
                .FromTable("ProductsCategoriesLocations").InSchema("dbo").ForeignColumns("ProductCategoryID")
                .ToTable("ProductsCategories").InSchema("dbo").PrimaryColumns("ProductCategoryID");

            Create.ForeignKey("FK_Products_ProductsCategories")
                .FromTable("Products").InSchema("dbo").ForeignColumns("ProductCategoryID")
                .ToTable("ProductsCategories").InSchema("dbo").PrimaryColumns("ProductCategoryID");

            Create.ForeignKey("FK_Products_Accounts")
                .FromTable("Products").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_Products_Suppliers")
                .FromTable("Products").InSchema("dbo").ForeignColumns("SupplierID")
                .ToTable("Suppliers").InSchema("dbo").PrimaryColumns("SupplierID");

            Create.ForeignKey("FK_ProductsLocations_Accounts")
                .FromTable("ProductsLocations").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_ProductsLocations_Locations")
                .FromTable("ProductsLocations").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_ProductsLocations_Products")
                .FromTable("ProductsLocations").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_Purchases_Locations")
                .FromTable("Purchases").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_Purchases_Suppliers")
                .FromTable("Purchases").InSchema("dbo").ForeignColumns("SupplierID")
                .ToTable("Suppliers").InSchema("dbo").PrimaryColumns("SupplierID");

            Create.ForeignKey("FK_PurchasesDetails_Products")
                .FromTable("PurchasesDetails").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_PurchasesDetails_Purchases")
                .FromTable("PurchasesDetails").InSchema("dbo").ForeignColumns("PurchasesID")
                .ToTable("Purchases").InSchema("dbo").PrimaryColumns("PurchasesID");

            Create.ForeignKey("FK_PurchasesDetails_UOMAndPrice")
                .FromTable("PurchasesDetails").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("PurchasesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_PurchasesPaymentsDetails_Purchases")
                .FromTable("PurchasesPaymentsDetails").InSchema("dbo").ForeignColumns("PurchasesID")
                .ToTable("Purchases").InSchema("dbo").PrimaryColumns("PurchasesID");

            Create.ForeignKey("FK_UOMAndPrice_Products")
                .FromTable("PurchasesUOMsAndPrices").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_UOMAndPrice_StandardUOMs")
                .FromTable("PurchasesUOMsAndPrices").InSchema("dbo").ForeignColumns("StandardUOMID")
                .ToTable("StandardUOMs").InSchema("dbo").PrimaryColumns("StandardUOMID");

            Create.ForeignKey("FK_PurchasesUOMsAndPricesLocations_Locations")
                .FromTable("PurchasesUOMsAndPricesLocations").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_PurchasesUOMsAndPricesLocations_PurchasesUOMsAndPrices")
                .FromTable("PurchasesUOMsAndPricesLocations").InSchema("dbo").ForeignColumns("PurchUOMAndPriceID")
                .ToTable("PurchasesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_ReceivePurchases_Products")
                .FromTable("ReceivePurchases").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_ReceivePurchases_Purchases")
                .FromTable("ReceivePurchases").InSchema("dbo").ForeignColumns("PurchasesID")
                .ToTable("Purchases").InSchema("dbo").PrimaryColumns("PurchasesID");

            Create.ForeignKey("FK_ReceivePurchases_PurchasesUOMsAndPrices")
                .FromTable("ReceivePurchases").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("PurchasesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_ReorderPoints_Products")
                .FromTable("ReorderPoints").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_ReStocks_Products")
                .FromTable("ReStock").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_ReStocks_SalesUOMsAndPrices")
                .FromTable("ReStock").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("SalesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_ReturnInwards_Sales")
                .FromTable("ReturnInwards").InSchema("dbo").ForeignColumns("SalesID")
                .ToTable("Sales").InSchema("dbo").PrimaryColumns("SalesID");

            Create.ForeignKey("FK_ReturnInwardsDetails_Products")
                .FromTable("ReturnInwardsDetails").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_ReturnInwardsDetails_ReturnInwards")
                .FromTable("ReturnInwardsDetails").InSchema("dbo").ForeignColumns("RtnInwardsID")
                .ToTable("ReturnInwards").InSchema("dbo").PrimaryColumns("RtnInwardsID");

            Create.ForeignKey("FK_ReturnInwardsDetails_SalesDetails")
                .FromTable("ReturnInwardsDetails").InSchema("dbo").ForeignColumns("SalesDetailsID")
                .ToTable("SalesDetails").InSchema("dbo").PrimaryColumns("SalesDetailsID");

            Create.ForeignKey("FK_ReturnInwardsDetails_SalesUOMsAndPrices")
                .FromTable("ReturnInwardsDetails").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("SalesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_ReturnInwardsPayments_ReturnInwards")
                .FromTable("ReturnInwardsPayments").InSchema("dbo").ForeignColumns("RtnInwardsID")
                .ToTable("ReturnInwards").InSchema("dbo").PrimaryColumns("RtnInwardsID");

            Create.ForeignKey("FK_ReturnOutwards_Purchases")
                .FromTable("ReturnOutwards").InSchema("dbo").ForeignColumns("PurchasesID")
                .ToTable("Purchases").InSchema("dbo").PrimaryColumns("PurchasesID");

            Create.ForeignKey("FK_ReturnOutwardsDetails_Products")
                .FromTable("ReturnOutwardsDetails").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_ReturnOutwardsDetails_PurchasesUOMsAndPrices")
                .FromTable("ReturnOutwardsDetails").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("PurchasesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_ReturnOutwardsDetails_ReturnOutwards")
                .FromTable("ReturnOutwardsDetails").InSchema("dbo").ForeignColumns("RtnOutwardsID")
                .ToTable("ReturnOutwards").InSchema("dbo").PrimaryColumns("RtnOutwardsID");

            Create.ForeignKey("FK_ReturnOutwardsPayments_ReturnOutwards")
                .FromTable("ReturnOutwardsPayments").InSchema("dbo").ForeignColumns("RtnOutwardsID")
                .ToTable("ReturnOutwards").InSchema("dbo").PrimaryColumns("RtnOutwardsID");

            Create.ForeignKey("FK_Sales_Customers")
                .FromTable("Sales").InSchema("dbo").ForeignColumns("CustomerID")
                .ToTable("Customers").InSchema("dbo").PrimaryColumns("CustomerID");

            Create.ForeignKey("FK_Sales_Locations")
                .FromTable("Sales").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_SalesByProductsSummaries_Products")
                .FromTable("SalesByProductsSummaries").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_SalesDetails_Locations")
                .FromTable("SalesDetails").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_SalesDetails_Products")
                .FromTable("SalesDetails").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_SalesDetails_Sales")
                .FromTable("SalesDetails").InSchema("dbo").ForeignColumns("SalesID")
                .ToTable("Sales").InSchema("dbo").PrimaryColumns("SalesID");

            Create.ForeignKey("FK_SalesDetails_SalesUOMsAndPrices")
                .FromTable("SalesDetails").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("SalesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_SalesInvoice_Products")
                .FromTable("SalesInvoice").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_SalesInvoice_Sales")
                .FromTable("SalesInvoice").InSchema("dbo").ForeignColumns("SalesID")
                .ToTable("Sales").InSchema("dbo").PrimaryColumns("SalesID");

            Create.ForeignKey("FK_SalesInvoice_SalesUOMsAndPrices")
                .FromTable("SalesInvoice").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("SalesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_SalesPaymentsDetails_Banks")
                .FromTable("SalesPaymentsDetails").InSchema("dbo").ForeignColumns("BankID")
                .ToTable("Banks").InSchema("dbo").PrimaryColumns("BankID");

            Create.ForeignKey("FK_SalesPaymentsDetails_Locations")
                .FromTable("SalesPaymentsDetails").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_SalesPaymentsDetails_Sales")
                .FromTable("SalesPaymentsDetails").InSchema("dbo").ForeignColumns("SalesID")
                .ToTable("Sales").InSchema("dbo").PrimaryColumns("SalesID");

            Create.ForeignKey("FK_SalesUOMsAndPrices_Products")
                .FromTable("SalesUOMsAndPrices").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_SalesUOMsAndPrices_StandardUOMs")
                .FromTable("SalesUOMsAndPrices").InSchema("dbo").ForeignColumns("StandardUOMID")
                .ToTable("StandardUOMs").InSchema("dbo").PrimaryColumns("StandardUOMID");

            Create.ForeignKey("FK_SalesUOMsAndPricesLocations_Locations")
                .FromTable("SalesUOMsAndPricesLocations").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_SalesUOMsAndPricesLocations_SalesUOMsAndPrices")
                .FromTable("SalesUOMsAndPricesLocations").InSchema("dbo").ForeignColumns("SalesUOMAndPriceID")
                .ToTable("SalesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_StandardUOMs_Products")
                .FromTable("StandardUOMs").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_StandardUOMsLocations_Locations")
                .FromTable("StandardUOMsLocations").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_StandardUOMsLocations_StandardUOMs")
                .FromTable("StandardUOMsLocations").InSchema("dbo").ForeignColumns("StandardUOMID")
                .ToTable("StandardUOMs").InSchema("dbo").PrimaryColumns("StandardUOMID");

            Create.ForeignKey("FK_Stocks_Locations")
                .FromTable("Stocks").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_Stocks_Products")
                .FromTable("Stocks").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_StocksMovements_Locations")
                .FromTable("StocksMovements").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_StocksMovements_Products")
                .FromTable("StocksMovements").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_StocksMovements_PurchasesUOMsAndPrices")
                .FromTable("StocksMovements").InSchema("dbo").ForeignColumns("PurchUOMAndPriceID")
                .ToTable("PurchasesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_StocksMovements_SalesUOMsAndPrices")
                .FromTable("StocksMovements").InSchema("dbo").ForeignColumns("SalesUOMAndPriceID")
                .ToTable("SalesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            Create.ForeignKey("FK_SuppliersLocations_Accounts")
                .FromTable("SuppliersLocations").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_SuppliersLocations_Locations")
                .FromTable("SuppliersLocations").InSchema("dbo").ForeignColumns("LocationID")
                .ToTable("Locations").InSchema("dbo").PrimaryColumns("LocationID");

            Create.ForeignKey("FK_SuppliersLocations_Suppliers")
                .FromTable("SuppliersLocations").InSchema("dbo").ForeignColumns("SupplierID")
                .ToTable("Suppliers").InSchema("dbo").PrimaryColumns("SupplierID");

            Create.ForeignKey("FK_Suppliers_Accounts")
                .FromTable("Suppliers").InSchema("dbo").ForeignColumns("AccountID")
                .ToTable("Accounts").InSchema("dbo").PrimaryColumns("AccountID");

            Create.ForeignKey("FK_UnStock_Products")
                .FromTable("UnStock").InSchema("dbo").ForeignColumns("ProductID")
                .ToTable("Products").InSchema("dbo").PrimaryColumns("ProductID");

            Create.ForeignKey("FK_UnStock_PurchasesUOMsAndPrices")
                .FromTable("UnStock").InSchema("dbo").ForeignColumns("UOMAndPriceID")
                .ToTable("PurchasesUOMsAndPrices").InSchema("dbo").PrimaryColumns("UOMAndPriceID");

            //Create.ForeignKey("fk_RoleId")
            //    .FromTable("webpages_UsersInRoles").InSchema("dbo").ForeignColumns("RoleId")
            //    .ToTable("webpages_Roles").InSchema("dbo").PrimaryColumns("RoleId");

            //Create.ForeignKey("fk_UserId")
            //    .FromTable("webpages_UsersInRoles").InSchema("dbo").ForeignColumns("UserId")
            //    .ToTable("UserProfile").InSchema("dbo").PrimaryColumns("UserId");
            #endregion

            #region Create Unique Constraints
            //Create.UniqueConstraint("UQ__aspnet_A__17477DE4CDDE11B0")
            //    .OnTable("aspnet_Applications").WithSchema("dbo")
            //    .Column("LoweredApplicationName");

            //Create.UniqueConstraint("UQ__aspnet_A__309103311F2F94C4")
            //    .OnTable("aspnet_Applications").WithSchema("dbo")
            //    .Column("ApplicationName");

            //Create.UniqueConstraint("UQ__UserProf__C9F28456C3E216E8")
            //    .OnTable("UserProfile").WithSchema("dbo")
            //    .Column("UserName");

            //Create.UniqueConstraint("UQ__webpages__8A2B61606A4A7DD8")
            //    .OnTable("webpages_Roles").WithSchema("dbo")
            //    .Column("RoleName");
            #endregion

            #region Create Indexes
            #endregion
        }

        public override void Down()
        {
            #region Delete Unique Constraints
            //Delete.UniqueConstraint("UQ__aspnet_A__17477DE4CDDE11B0").FromTable("aspnet_Applications").InSchema("dbo");
            //Delete.UniqueConstraint("UQ__aspnet_A__309103311F2F94C4").FromTable("aspnet_Applications").InSchema("dbo");
            //Delete.UniqueConstraint("UQ__UserProf__C9F28456C3E216E8").FromTable("UserProfile").InSchema("dbo");
            //Delete.UniqueConstraint("UQ__webpages__8A2B61606A4A7DD8").FromTable("webpages_Roles").InSchema("dbo");
            #endregion

            #region Delete Foreign Keys
            Delete.ForeignKey("FK_AdjustedStocks_Locations").OnTable("AdjustedStocks").InSchema("dbo");
            Delete.ForeignKey("FK_AdjustedStocks_Products").OnTable("AdjustedStocks").InSchema("dbo");
            //Delete.ForeignKey("FK__aspnet_Me__Appli__245D67DE").OnTable("aspnet_Membership").InSchema("dbo");
            //Delete.ForeignKey("FK__aspnet_Me__UserI__25518C17").OnTable("aspnet_Membership").InSchema("dbo");
            //Delete.ForeignKey("FK__aspnet_Ro__Appli__2645B050").OnTable("aspnet_Roles").InSchema("dbo");
            //Delete.ForeignKey("FK__aspnet_Us__Appli__2739D489").OnTable("aspnet_Users").InSchema("dbo");
            //Delete.ForeignKey("FK__aspnet_Us__RoleI__282DF8C2").OnTable("aspnet_UsersInRoles").InSchema("dbo");
            //Delete.ForeignKey("FK__aspnet_Us__UserI__29221CFB").OnTable("aspnet_UsersInRoles").InSchema("dbo");
            Delete.ForeignKey("FK_Banks_Accounts").OnTable("Banks").InSchema("dbo");
            Delete.ForeignKey("FK_BanksLocations_Banks").OnTable("BanksLocations").InSchema("dbo");
            Delete.ForeignKey("FK_BanksLocations_Locations").OnTable("BanksLocations").InSchema("dbo");
            Delete.ForeignKey("FK_BankTransactions_Banks").OnTable("BankTransactions").InSchema("dbo");
            Delete.ForeignKey("FK_BankTransactions_Customers").OnTable("BankTransactions").InSchema("dbo");
            Delete.ForeignKey("FK_BankTransactions_Sales").OnTable("BankTransactions").InSchema("dbo");
            Delete.ForeignKey("FK_CostingInfo_Products").OnTable("CostingInfo").InSchema("dbo");
            Delete.ForeignKey("FK_Customers_Accounts").OnTable("Customers").InSchema("dbo");
            Delete.ForeignKey("FK_CustomersLocations_Accounts").OnTable("CustomersLocations").InSchema("dbo");
            Delete.ForeignKey("FK_CustomersLocations_Customers").OnTable("CustomersLocations").InSchema("dbo");
            Delete.ForeignKey("FK_CustomersLocations_Locations").OnTable("CustomersLocations").InSchema("dbo");
            //Delete.ForeignKey("FK_CustomRoles_Accounts").OnTable("CustomRoles").InSchema("dbo");
            //Delete.ForeignKey("FK_CustomRolesLocations_CustomRoles").OnTable("CustomRolesLocations").InSchema("dbo");
            //Delete.ForeignKey("FK_CustomRolesLocations_Locations").OnTable("CustomRolesLocations").InSchema("dbo");
            //Delete.ForeignKey("FK_CustomUserRoles_CustomRoles").OnTable("CustomUserRoles").InSchema("dbo");
            //Delete.ForeignKey("FK_CustomUserRoles_CustomUsers").OnTable("CustomUserRoles").InSchema("dbo");
            //Delete.ForeignKey("FK_CustomUsers_Accounts").OnTable("CustomUsers").InSchema("dbo");
            //Delete.ForeignKey("FK_CustomUsersLocations_CustomUsers").OnTable("CustomUsersLocations").InSchema("dbo");
            //Delete.ForeignKey("FK_CustomUsersLocations_Locations").OnTable("CustomUsersLocations").InSchema("dbo");
            Delete.ForeignKey("FK_Locations_Accounts").OnTable("Locations").InSchema("dbo");
            Delete.ForeignKey("FK_PickSalesOrders_Products").OnTable("PickSalesOrders").InSchema("dbo");
            Delete.ForeignKey("FK_PickSalesOrders_Sales").OnTable("PickSalesOrders").InSchema("dbo");
            Delete.ForeignKey("FK_PickSalesOrders_SalesUOMsAndPrices").OnTable("PickSalesOrders").InSchema("dbo");
            Delete.ForeignKey("FK_ProductsCategories_Accounts").OnTable("ProductsCategories").InSchema("dbo");
            Delete.ForeignKey("FK_ProductsCategoriesLocations_Accounts").OnTable("ProductsCategoriesLocations").InSchema("dbo");
            Delete.ForeignKey("FK_ProductsCategoriesLocations_Locations").OnTable("ProductsCategoriesLocations").InSchema("dbo");
            Delete.ForeignKey("FK_ProductsCategoriesLocations_ProductsCategories").OnTable("ProductsCategoriesLocations").InSchema("dbo");
            Delete.ForeignKey("FK_Products_ProductsCategories").OnTable("Products").InSchema("dbo");
            Delete.ForeignKey("FK_Products_Accounts").OnTable("Products").InSchema("dbo");
            Delete.ForeignKey("FK_Products_Suppliers").OnTable("Products").InSchema("dbo");
            Delete.ForeignKey("FK_ProductsLocations_Accounts").OnTable("ProductsLocations").InSchema("dbo");
            Delete.ForeignKey("FK_ProductsLocations_Locations").OnTable("ProductsLocations").InSchema("dbo");
            Delete.ForeignKey("FK_ProductsLocations_Products").OnTable("ProductsLocations").InSchema("dbo");
            Delete.ForeignKey("FK_Purchases_Locations").OnTable("Purchases").InSchema("dbo");
            Delete.ForeignKey("FK_Purchases_Suppliers").OnTable("Purchases").InSchema("dbo");
            Delete.ForeignKey("FK_PurchasesDetails_Products").OnTable("PurchasesDetails").InSchema("dbo");
            Delete.ForeignKey("FK_PurchasesDetails_Purchases").OnTable("PurchasesDetails").InSchema("dbo");
            Delete.ForeignKey("FK_PurchasesDetails_UOMAndPrice").OnTable("PurchasesDetails").InSchema("dbo");
            Delete.ForeignKey("FK_PurchasesPaymentsDetails_Purchases").OnTable("PurchasesPaymentsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_UOMAndPrice_Products").OnTable("PurchasesUOMsAndPrices").InSchema("dbo");
            Delete.ForeignKey("FK_UOMAndPrice_StandardUOMs").OnTable("PurchasesUOMsAndPrices").InSchema("dbo");
            Delete.ForeignKey("FK_PurchasesUOMsAndPricesLocations_Locations").OnTable("PurchasesUOMsAndPricesLocations").InSchema("dbo");
            Delete.ForeignKey("FK_PurchasesUOMsAndPricesLocations_PurchasesUOMsAndPrices").OnTable("PurchasesUOMsAndPricesLocations").InSchema("dbo");
            Delete.ForeignKey("FK_ReceivePurchases_Products").OnTable("ReceivePurchases").InSchema("dbo");
            Delete.ForeignKey("FK_ReceivePurchases_Purchases").OnTable("ReceivePurchases").InSchema("dbo");
            Delete.ForeignKey("FK_ReceivePurchases_PurchasesUOMsAndPrices").OnTable("ReceivePurchases").InSchema("dbo");
            Delete.ForeignKey("FK_ReorderPoints_Products").OnTable("ReorderPoints").InSchema("dbo");
            Delete.ForeignKey("FK_ReStocks_Products").OnTable("ReStock").InSchema("dbo");
            Delete.ForeignKey("FK_ReStocks_SalesUOMsAndPrices").OnTable("ReStock").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnInwards_Sales").OnTable("ReturnInwards").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnInwardsDetails_Products").OnTable("ReturnInwardsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnInwardsDetails_ReturnInwards").OnTable("ReturnInwardsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnInwardsDetails_SalesDetails").OnTable("ReturnInwardsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnInwardsDetails_SalesUOMsAndPrices").OnTable("ReturnInwardsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnInwardsPayments_ReturnInwards").OnTable("ReturnInwardsPayments").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnOutwards_Purchases").OnTable("ReturnOutwards").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnOutwardsDetails_Products").OnTable("ReturnOutwardsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnOutwardsDetails_PurchasesUOMsAndPrices").OnTable("ReturnOutwardsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnOutwardsDetails_ReturnOutwards").OnTable("ReturnOutwardsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_ReturnOutwardsPayments_ReturnOutwards").OnTable("ReturnOutwardsPayments").InSchema("dbo");
            Delete.ForeignKey("FK_Sales_Customers").OnTable("Sales").InSchema("dbo");
            Delete.ForeignKey("FK_Sales_Locations").OnTable("Sales").InSchema("dbo");
            Delete.ForeignKey("FK_SalesByProductsSummaries_Products").OnTable("SalesByProductsSummaries").InSchema("dbo");
            Delete.ForeignKey("FK_SalesDetails_Locations").OnTable("SalesDetails").InSchema("dbo");
            Delete.ForeignKey("FK_SalesDetails_Products").OnTable("SalesDetails").InSchema("dbo");
            Delete.ForeignKey("FK_SalesDetails_Sales").OnTable("SalesDetails").InSchema("dbo");
            Delete.ForeignKey("FK_SalesDetails_SalesUOMsAndPrices").OnTable("SalesDetails").InSchema("dbo");
            Delete.ForeignKey("FK_SalesInvoice_Products").OnTable("SalesInvoice").InSchema("dbo");
            Delete.ForeignKey("FK_SalesInvoice_Sales").OnTable("SalesInvoice").InSchema("dbo");
            Delete.ForeignKey("FK_SalesInvoice_SalesUOMsAndPrices").OnTable("SalesInvoice").InSchema("dbo");
            Delete.ForeignKey("FK_SalesPaymentsDetails_Banks").OnTable("SalesPaymentsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_SalesPaymentsDetails_Locations").OnTable("SalesPaymentsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_SalesPaymentsDetails_Sales").OnTable("SalesPaymentsDetails").InSchema("dbo");
            Delete.ForeignKey("FK_SalesUOMsAndPrices_Products").OnTable("SalesUOMsAndPrices").InSchema("dbo");
            Delete.ForeignKey("FK_SalesUOMsAndPrices_StandardUOMs").OnTable("SalesUOMsAndPrices").InSchema("dbo");
            Delete.ForeignKey("FK_SalesUOMsAndPricesLocations_Locations").OnTable("SalesUOMsAndPricesLocations").InSchema("dbo");
            Delete.ForeignKey("FK_SalesUOMsAndPricesLocations_SalesUOMsAndPrices").OnTable("SalesUOMsAndPricesLocations").InSchema("dbo");
            Delete.ForeignKey("FK_StandardUOMs_Products").OnTable("StandardUOMs").InSchema("dbo");
            Delete.ForeignKey("FK_StandardUOMsLocations_Locations").OnTable("StandardUOMsLocations").InSchema("dbo");
            Delete.ForeignKey("FK_StandardUOMsLocations_StandardUOMs").OnTable("StandardUOMsLocations").InSchema("dbo");
            Delete.ForeignKey("FK_Stocks_Locations").OnTable("Stocks").InSchema("dbo");
            Delete.ForeignKey("FK_Stocks_Products").OnTable("Stocks").InSchema("dbo");
            Delete.ForeignKey("FK_StocksMovements_Locations").OnTable("StocksMovements").InSchema("dbo");
            Delete.ForeignKey("FK_StocksMovements_Products").OnTable("StocksMovements").InSchema("dbo");
            Delete.ForeignKey("FK_StocksMovements_PurchasesUOMsAndPrices").OnTable("StocksMovements").InSchema("dbo");
            Delete.ForeignKey("FK_StocksMovements_SalesUOMsAndPrices").OnTable("StocksMovements").InSchema("dbo");
            Delete.ForeignKey("FK_SuppliersLocations_Accounts").OnTable("SuppliersLocations").InSchema("dbo");
            Delete.ForeignKey("FK_SuppliersLocations_Locations").OnTable("SuppliersLocations").InSchema("dbo");
            Delete.ForeignKey("FK_SuppliersLocations_Suppliers").OnTable("SuppliersLocations").InSchema("dbo");
            Delete.ForeignKey("FK_Suppliers_Accounts").OnTable("Suppliers").InSchema("dbo");
            Delete.ForeignKey("FK_UnStock_Products").OnTable("UnStock").InSchema("dbo");
            Delete.ForeignKey("FK_UnStock_PurchasesUOMsAndPrices").OnTable("UnStock").InSchema("dbo");
            //Delete.ForeignKey("fk_RoleId").OnTable("webpages_UsersInRoles").InSchema("dbo");
            //Delete.ForeignKey("fk_UserId").OnTable("webpages_UsersInRoles").InSchema("dbo");
            #endregion

            #region Delete Tables
            //Delete.Table("__MigrationHistory").InSchema("dbo");
            Delete.Table("Accounts").InSchema("dbo");
            Delete.Table("AdjustedStocks").InSchema("dbo");
            //Delete.Table("aspnet_Applications").InSchema("dbo");
            //Delete.Table("aspnet_Membership").InSchema("dbo");
            //Delete.Table("aspnet_Roles").InSchema("dbo");
            //Delete.Table("aspnet_SchemaVersions").InSchema("dbo");
            //Delete.Table("aspnet_Users").InSchema("dbo");
            //Delete.Table("aspnet_UsersInRoles").InSchema("dbo");
            Delete.Table("Banks").InSchema("dbo");
            Delete.Table("BanksLocations").InSchema("dbo");
            Delete.Table("BankTransactions").InSchema("dbo");
            Delete.Table("CostingInfo").InSchema("dbo");
            Delete.Table("Customers").InSchema("dbo");
            Delete.Table("CustomersLocations").InSchema("dbo");
            //Delete.Table("CustomRoles").InSchema("dbo");
            //Delete.Table("CustomRolesLocations").InSchema("dbo");
            //Delete.Table("CustomUserRoles").InSchema("dbo");
            //Delete.Table("CustomUsers").InSchema("dbo");
            //Delete.Table("CustomUsersLocations").InSchema("dbo");
            Delete.Table("Locations").InSchema("dbo");
            Delete.Table("PickSalesOrders").InSchema("dbo");
            Delete.Table("ProductsCategories").InSchema("dbo");
            Delete.Table("ProductsCategoriesLocations").InSchema("dbo");
            Delete.Table("Products").InSchema("dbo");
            Delete.Table("ProductsLocations").InSchema("dbo");
            Delete.Table("Purchases").InSchema("dbo");
            Delete.Table("PurchasesDetails").InSchema("dbo");
            Delete.Table("PurchasesPaymentsDetails").InSchema("dbo");
            Delete.Table("PurchasesUOMsAndPrices").InSchema("dbo");
            Delete.Table("PurchasesUOMsAndPricesLocations").InSchema("dbo");
            Delete.Table("ReceivePurchases").InSchema("dbo");
            Delete.Table("ReorderPoints").InSchema("dbo");
            Delete.Table("ReStock").InSchema("dbo");
            Delete.Table("ReturnInwards").InSchema("dbo");
            Delete.Table("ReturnInwardsDetails").InSchema("dbo");
            Delete.Table("ReturnInwardsPayments").InSchema("dbo");
            Delete.Table("ReturnOutwards").InSchema("dbo");
            Delete.Table("ReturnOutwardsDetails").InSchema("dbo");
            Delete.Table("ReturnOutwardsPayments").InSchema("dbo");
            Delete.Table("Sales").InSchema("dbo");
            Delete.Table("SalesByProductsSummaries").InSchema("dbo");
            Delete.Table("SalesDetails").InSchema("dbo");
            Delete.Table("SalesInvoice").InSchema("dbo");
            Delete.Table("SalesPaymentsDetails").InSchema("dbo");
            Delete.Table("SalesUOMsAndPrices").InSchema("dbo");
            Delete.Table("SalesUOMsAndPricesLocations").InSchema("dbo");
            Delete.Table("StandardUOMs").InSchema("dbo");
            Delete.Table("StandardUOMsLocations").InSchema("dbo");
            Delete.Table("Stocks").InSchema("dbo");
            Delete.Table("StocksMovements").InSchema("dbo");
            Delete.Table("SuppliersLocations").InSchema("dbo");
            Delete.Table("Suppliers").InSchema("dbo");
            Delete.Table("UnStock").InSchema("dbo");
            //Delete.Table("UserProfile").InSchema("dbo");
            //Delete.Table("UsersAccount").InSchema("dbo");
            //Delete.Table("webpages_Membership").InSchema("dbo");
            //Delete.Table("webpages_OAuthMembership").InSchema("dbo");
            //Delete.Table("webpages_Roles").InSchema("dbo");
            //Delete.Table("webpages_UsersInRoles").InSchema("dbo");
            #endregion

            #region Delete Schemas
          
            #endregion
        }
    }
}