using Serenity.Navigation;
using Administration = InventoryManagement.Administration.Pages;
using InvtMgt = InventoryManagement.BusinessObjects.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]

 [assembly: NavigationMenu(1000, "BusinessObjects")]
 [assembly: NavigationLink(1100, "Suppliers", typeof(InvtMgt.SupplierController), IconClass = "fa-group")]
 [assembly: NavigationLink(1200, "Customers", typeof(InvtMgt.CustomerController), IconClass = "fa-group")]
 [assembly: NavigationLink(1300, "Purchases", typeof(InvtMgt.PurchasesController), IconClass = "glyphicon glyphicon-briefcase")]
 [assembly: NavigationLink(1400, "Sales", typeof(InvtMgt.SalesController), IconClass = "fa-shopping-cart")]
 [assembly: NavigationMenu(1500, "Inventory", icon: "glyphicon glyphicon-th-list")]
 [assembly: NavigationLink(1600, "Inventory/Product category", typeof(InvtMgt.ProductCategoryController))]
 [assembly: NavigationLink(1700, "Inventory/Product", typeof(InvtMgt.ProductController))]
 [assembly: NavigationLink(1800, "Inventory/Current stock", typeof(InvtMgt.StockController))]
 [assembly: NavigationLink(1900, "Inventory/Adjust stock", typeof(InvtMgt.AdjustStockController),  Url = "/BusinessObjects/AdjustStock")]
 [assembly: NavigationLink(1910, "Inventory/Transfer stock", typeof(InvtMgt.TransferStockController), Url = "/BusinessObjects/TransferStock")]
//[assembly: NavigationLink(1920, "Banking", typeof(InvtMgt.BankController))]


//[assembly: NavigationLink(1000, "Locations", typeof(InvtMgt.LocationController))]
[assembly: NavigationMenu(2100, "Reports")]
[assembly: NavigationMenu(2200, "Reports/Sales reports")]
[assembly: NavigationLink(2300, "Reports/Sales reports/Sales profits", typeof(InvtMgt.SalesController))]
[assembly: NavigationLink(2400, "Reports/Sales reports/Sales by products", typeof(InvtMgt.SalesController))]




[assembly: NavigationMenu(9000, "Administration", icon: "icon-screen-desktop")]
[assembly: NavigationLink(9100, "Administration/User Management", typeof(Administration.UserController), icon: "icon-people")]
[assembly: NavigationLink(9200, "Administration/Roles or Group", typeof(Administration.RoleController), icon: "icon-lock")]
[assembly: NavigationLink(9300, "Administration/Account", typeof(Administration.AccountController))]
[assembly: NavigationLink(9400, "Administration/Locations", typeof(Administration.LocationController))]