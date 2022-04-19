
namespace InventoryManagement.Membership.Pages
{

    using Administration;
    using Administration.Entities;
    using Administration.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.IO;
    using System.Net.Mail;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;
    using BizPrcs = InventoryManagement.BusinessObjects.Repositories;
    using System.Collections.Generic;
    using BusinessObjects.Entities;
    using BusinessObjects.Repositories;


    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult SignUp(string acct, string loc)
        {
            SetLoginPageNavViewBags(acct, loc);

            if (String.IsNullOrEmpty(acct))
                return View(MVC.Views.Membership.Account.SignUp.AccountSignUp);

            return View("~/Modules/Membership/Account/SignUp/AccountSignUp_ClientOfClient.cshtml");
        }

        [HttpPost, JsonFilter]
        public ActionResult SignUp(SignUpRequest request, string acct, string loc)
        {


            using (var conn = SqlConnections.NewByKey("Default"))
            {

                if (AuthenticationService.DoesBusinessExist(conn, request.CompanyName))
                    ModelState.AddModelError("CompanyName", "Company name already exist");

                if (AuthenticationService.DoesEmailExist(conn, request.Email))
                    ModelState.AddModelError("Email", "Email address already exist");

                if (!request.AgreeToTerms)
                {
                    ModelState.AddModelError("", "You have to agree to terms");
                }

            }


            if (ModelState.IsValid)
            {


                if (!String.IsNullOrEmpty(acct))
                    return ClientOfClientSignUp(request, acct, loc);

                using (var connection = SqlConnections.NewByKey("Default"))
                using (var uow = new UnitOfWork(connection))
                {

                    string salt = null;
                    var hash = UserRepository.GenerateHash(request.Password, ref salt);
                    var companyName = request.CompanyName.TrimToEmpty();
                    var email = request.Email;
                    var username = request.Email;




                    //Creates Account 
                    var acctFld = AccountRow.Fields;
                    var accountID = (int)new SqlInsert(acctFld.TableName)
                        .Set(acctFld.Date, DateTime.Now)
                        .Set(acctFld.CompanyName, companyName)
                        .ExecuteAndGetID(connection);

                    //Creates All Locations
                    var locationFld = LocationRow.Fields;
                    int locationID = (int)new SqlInsert(locationFld.TableName)
                        .Set(locationFld.Date, DateTime.Now)
                        .Set(locationFld.AccountId, accountID)
                        .Set(locationFld.LocationName, "All Locations")
                        .Set(locationFld.IsVisible, false)
                        .ExecuteAndGetID(connection);

                    //BizPrcs.GetCodeBizPrcs.CreateGetCode(connection, accountID, locationID, true);


                    //Creates Default Location
                    locationID = (int)new SqlInsert(locationFld.TableName)
                            .Set(locationFld.Date, DateTime.Now)
                            .Set(locationFld.AccountId, accountID)
                            .Set(locationFld.LocationName, "Default Location")
                            .Set(locationFld.IsVisible, true)
                            .ExecuteAndGetID(connection);

                    //BizPrcs.GetCodeBizPrcs.CreateGetCode(connection, accountID, locationID, false);


                    //Creates User
                    var fld = UserRow.Fields;
                    var userId = (int)new SqlInsert(fld.TableName)
                        .Set(fld.Username, username)
                        .Set(fld.Source, "sign")
                        .Set(fld.DisplayName, companyName)
                        .Set(fld.Email, email)
                        .Set(fld.PasswordHash, hash)
                        .Set(fld.PasswordSalt, salt)
                        .Set(fld.IsActive, 1)
                        .Set(fld.InsertDate, DateTime.Now)
                        .Set(fld.InsertUserId, 1)
                        .Set(fld.LastDirectoryUpdate, DateTime.Now)
                        .Set(fld.AccountId, accountID)
                        .Set(fld.CustomerId, 0)
                        .ExecuteAndGetID(connection);

                    //Creates UserLocation
                    var userLocFlds = UserLocationRow.Fields;
                    var userLocationID = (int)new SqlInsert(userLocFlds.TableName)
                        .Set(userLocFlds.UserId, userId)
                        .Set(userLocFlds.LocationId, locationID)
                        .ExecuteAndGetID(connection);

                    //Creates Role
                    var roleFlds = RoleRow.Fields;
                    var roleId = (int)new SqlInsert(roleFlds.TableName)
                        .Set(roleFlds.AccountId, accountID)
                        .Set(roleFlds.RoleName, RoleRow.AccountOwner)
                        .ExecuteAndGetID(connection);


                    //Creates RolePermissions
                    #region RolePermissions
                    RolePermission(connection, roleId, PermissionKeys.Client);

                    RolePermission(connection, roleId, PermissionKeys.Administration);
                    RolePermission(connection, roleId, PermissionKeys.Security);
                    RolePermission(connection, roleId, PermissionKeys.Account);
                    RolePermission(connection, roleId, PermissionKeys.Location);
                    //RolePermission(connection, roleId, PermissionKeys.GetCode);

                    RolePermission(connection, roleId, PermissionKeys.UserLocation.Read);
                    RolePermission(connection, roleId, PermissionKeys.UserLocation.Insert);
                    RolePermission(connection, roleId, PermissionKeys.UserLocation.Update);
                    RolePermission(connection, roleId, PermissionKeys.UserLocation.Delete);

                    RolePermission(connection, roleId, PermissionKeys.RoleLocation.Read);
                    RolePermission(connection, roleId, PermissionKeys.RoleLocation.Insert);
                    RolePermission(connection, roleId, PermissionKeys.RoleLocation.Update);



                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.AdjustStock.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.AdjustStock.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.AdjustStock.Update);


                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Bank.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Bank.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Bank.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Bank.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.BankTransaction.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.BankTransaction.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.BankTransaction.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.BankTransaction.Delete);


                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.CostingInfo.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.CostingInfo.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.CostingInfo.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.CostingInfo.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Customer.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Customer.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Customer.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Customer.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.CustomerLocation.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.CustomerLocation.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.CustomerLocation.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.CustomerLocation.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PickSalesOrder.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PickSalesOrder.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PickSalesOrder.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PickSalesOrder.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Product.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Product.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Product.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Product.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductCategory.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductCategory.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductCategory.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductCategory.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductCategoryLocation.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductCategoryLocation.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductCategoryLocation.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductCategoryLocation.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductLocation.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductLocation.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductLocation.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductLocation.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Purchase.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Purchase.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Purchase.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Purchase.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesDetails.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesDetails.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesDetails.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesDetails.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesPaymentDetails.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesPaymentDetails.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesPaymentDetails.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesPaymentDetails.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesUoMAndPrice.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesUoMAndPrice.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesUoMAndPrice.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.PurchasesUoMAndPrice.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReceivePurchases.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReceivePurchases.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReceivePurchases.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReceivePurchases.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReorderPoint.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReorderPoint.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReorderPoint.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReorderPoint.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Restock.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Restock.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Restock.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Restock.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwards.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwards.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwards.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwards.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwardsDetails.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwardsDetails.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwardsDetails.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwardsDetails.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwardsPayment.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwardsPayment.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwardsPayment.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnInwardsPayment.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwards.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwards.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwards.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwards.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwardsDetails.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwardsDetails.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwardsDetails.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwardsDetails.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwardsPayment.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwardsPayment.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwardsPayment.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ReturnOutwardsPayment.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Sale.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Sale.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Sale.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Sale.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesDetails.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesDetails.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesDetails.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesDetails.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesInvoice.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesInvoice.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesInvoice.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesInvoice.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesPaymentDetails.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesPaymentDetails.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesPaymentDetails.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesPaymentDetails.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesUoMAndPrice.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesUoMAndPrice.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesUoMAndPrice.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SalesUoMAndPrice.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.StandardUoM.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.StandardUoM.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.StandardUoM.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.StandardUoM.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Stock.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Stock.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Stock.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Stock.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Supplier.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Supplier.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Supplier.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Supplier.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SupplierLocation.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SupplierLocation.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SupplierLocation.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.SupplierLocation.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Unstock.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Unstock.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Unstock.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Unstock.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductSupplier.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductSupplier.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductSupplier.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.ProductSupplier.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.BillOfMaterial.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.BillOfMaterial.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.BillOfMaterial.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.BillOfMaterial.Delete);

                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.MovementHistory.Read);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.MovementHistory.Insert);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.MovementHistory.Update);
                    RolePermission(connection, roleId, BusinessObjects.PermissionKeys.MovementHistory.Delete);


                    #endregion












                    //Creates RoleLocation
                    var roleLocFlds = RoleLocationRow.Fields;
                    new SqlInsert(roleLocFlds.TableName)
                        .Set(roleLocFlds.RoleId, roleId)
                        .Set(roleLocFlds.LocationId, locationID)
                        .Execute(connection);


                    //Creates UserRole
                    var userRoleFlds = UserRoleRow.Fields;
                    new SqlInsert(userRoleFlds.TableName)
                        .Set(userRoleFlds.UserId, userId)
                        .Set(userRoleFlds.RoleId, roleId)
                        .Execute(connection);


                    /***************** Creates Role and Permissions for ClientOfClient *******************/
                    #region CleintOfClient


                    //roleId = CreateRoleAndPermissionsForClientOfClient(connection, accountID, locationID, roleFlds);

                    #endregion

                    /*#######################################   DELETE TREE   ##########################################*/
                    #region Delete Tree
                    //Delete from CustomersLocations
                    //Delete from SalesPaymentsDetails
                    //Delete from SalesInvoice
                    //Delete from PickSalesOrders
                    //Delete from SalesDetails
                    //Delete from Sales
                    //Delete from Customers

                    //Delete from [dbo].[SuppliersLocations]
                    //Delete from [dbo].[PurchasesPaymentsDetails]
                    //Delete from [dbo].[PurchasesDetails]
                    //Delete from [dbo].[ReceivePurchases]
                    //Delete from [dbo].[Purchases]
                    //Delete from [dbo].[Suppliers]



                    //Delete from [dbo].[Restock]
                    //Delete from [dbo].[ReturnInwardsDetails]
                    //Delete from [dbo].[SalesUOMsAndPrices]

                    //Delete from [dbo].[Unstock]
                    //Delete from [dbo].[ReturnOutwardsDetails]
                    //Delete from [dbo].[PurchasesUOMsAndPrices]


                    //Delete from [dbo].[StandardUOMs]
                    //Delete from ProductsLocations
                    //Delete from Products






                    //Delete from UserRoles
                    //Delete from RolesLocations
                    //Delete from RolePermissions
                    //Delete from Roles
                    //Delete from UsersLocations
                    //--Delete from Users
                    //Delete from Stocks
                    //Delete from Locations
                    //Delete from Customers
                    //Delete from Accounts 
                    #endregion


                    #region Delete Tree

                    #endregion


                    //byte[] bytes;
                    //using (var ms = new MemoryStream())
                    //using (var bw = new BinaryWriter(ms))
                    //{
                    //    bw.Write(DateTime.UtcNow.AddHours(3).ToBinary());
                    //    bw.Write(userId);
                    //    bw.Flush();
                    //    bytes = ms.ToArray();
                    //}

                    //var token = Convert.ToBase64String(MachineKey.Protect(bytes, "Activate"));

                    //var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                    //    Request.Url.GetLeftPart(UriPartial.Authority) + VirtualPathUtility.ToAbsolute("~/");

                    //var activateLink = UriHelper.Combine(externalUrl, "Account/Activate?t=");
                    //activateLink = activateLink + Uri.EscapeDataString(token);

                    //var emailModel = new ActivateEmailModel();
                    //emailModel.Username = username;
                    //emailModel.DisplayName = displayName;
                    //emailModel.ActivateLink = activateLink;

                    //var emailSubject = Texts.Forms.Membership.SignUp.ActivateEmailSubject.ToString();
                    //var emailBody = TemplateHelper.RenderTemplate(
                    //    MVC.Views.Membership.Account.SignUp.AccountActivateEmail, emailModel);

                    //var message = new MailMessage();
                    //message.To.Add(email);
                    //message.Subject = emailSubject;
                    //message.Body = emailBody;
                    //message.IsBodyHtml = true;

                    //var client = new SmtpClient();

                    //if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                    //    string.IsNullOrEmpty(client.PickupDirectoryLocation))
                    //{
                    //    var pickupPath = Server.MapPath("~/App_Data");
                    //    pickupPath = Path.Combine(pickupPath, "Mail");
                    //    Directory.CreateDirectory(pickupPath);
                    //    client.PickupDirectoryLocation = pickupPath;
                    //}


                    uow.OnRollback += () => { };
                    uow.Commit();
                    UserRetrieveService.RemoveCachedUser(userId, username);

                    //client.Send(message);


                }//Ends the using block

                return Redirect("~/");


            }//End the if block


            return View(MVC.Views.Membership.Account.SignUp.AccountSignUp, request);



        }//Ends the methods block


        private int CreateRoleAndPermissionsForClientOfClient(System.Data.IDbConnection connection, int accountID, int locationID, RoleRow.RowFields roleFlds)
        {

            int roleId;

            roleId = (int)new SqlInsert(roleFlds.TableName)
                .Set(roleFlds.AccountId, accountID)
                .Set(roleFlds.RoleName, RoleRow.ClientOfClient)
                .ExecuteAndGetID(connection);

            var roleLocFlds = RoleLocationRow.Fields;
            new SqlInsert(roleLocFlds.TableName)
                .Set(roleLocFlds.RoleId, roleId)
                .Set(roleLocFlds.LocationId, locationID)
                .Execute(connection);

            //RolePersmission for ClientOfClient
            RolePermission(connection, roleId, Administration.PermissionKeys.ClientOfClient);

            RolePermission(connection, roleId, Administration.PermissionKeys.Administration);

            RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Customer.Read);
            RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Customer.Update);


            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Ticket.Insert);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Ticket.Read);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.Ticket.Update);

            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.TicketProcess.Read);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.TicketProcess.Insert);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.TicketProcess.Update);

            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KbCategory.Read);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KbCategory.Insert);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KbCategory.Update);

            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KnowledgeBase.Read);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KnowledgeBase.Insert);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KnowledgeBase.Update);

            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KbCategoryLocation.Read);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KbCategoryLocation.Insert);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KbCategoryLocation.Update);

            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Read);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Insert);
            //RolePermission(connection, roleId, BusinessObjects.PermissionKeys.KnowledgeBaseLocation.Update);

            return roleId;

        }


        public static void RolePermission(System.Data.IDbConnection conn, int roleId, string permissionKey)
        {
            var rolePermFlds = RolePermissionRow.Fields;
            new SqlInsert(rolePermFlds.TableName)
            .Set(rolePermFlds.RoleId, roleId)
            .Set(rolePermFlds.PermissionKey, permissionKey)
            .Execute(conn);
        }


        public static void DeleteRolePermission(System.Data.IDbConnection conn, int roleId)
        {
            conn.DeleteById<RolePermissionRow>(roleId);
        }

        private Result<ServiceResponse> ClientOfClientSignUp(SignUpRequest request, string accountID, string locationID)
        {
            return this.UseConnection("Default", connection =>
            {

                request.CheckNotNull();

                Check.NotNullOrWhiteSpace(request.Email, "email");
                Check.NotNullOrEmpty(request.Password, "password");
                UserRepository.ValidatePassword(request.Email, request.Password, true);
                Check.NotNullOrWhiteSpace(request.FullName, "fullName");

                if (connection.Exists<UserRow>(
                        UserRow.Fields.Username == request.Email |
                        UserRow.Fields.Email == request.Email))
                {
                    throw new ValidationError("EmailInUse", Texts.Validation.CantFindUserWithEmail);
                }

                using (var uow = new UnitOfWork(connection))
                {

                    string username;
                    int userId;

                    List<LocationRow> locationList = new List<LocationRow>();
                    if (String.IsNullOrEmpty(locationID))
                    {
                        locationList.AddRange(connection.List<LocationRow>(new Criteria("AccountId") == accountID));
                    }
                    else
                    {
                        locationList.Add(connection.Single<LocationRow>(new Criteria("LocationId") == locationID));
                    }

                    CustomerBizPrcs.CreateCustomerWithUserReference(request, accountID, locationList, connection, out username, out userId);

                    uow.Commit();
                    UserRetrieveService.RemoveCachedUser(userId, username);
                    //client.Send(message);

                    return new ServiceResponse();
                }

            });
        }





        [HttpGet]
        public ActionResult Activate(string t)
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            using (var uow = new UnitOfWork(connection))
            {
                int userId;
                try
                {
                    using (var ms = new MemoryStream(MachineKey.Unprotect(Convert.FromBase64String(t), "Activate")))
                    using (var br = new BinaryReader(ms))
                    {
                        var dt = DateTime.FromBinary(br.ReadInt64());
                        if (dt < DateTime.UtcNow)
                            return Error(Texts.Validation.InvalidActivateToken);

                        userId = br.ReadInt32();
                    }
                }
                catch (Exception)
                {
                    return Error(Texts.Validation.InvalidActivateToken);
                }

                var user = uow.Connection.TryById<UserRow>(userId);
                if (user == null || user.IsActive != 0)
                    return Error(Texts.Validation.InvalidActivateToken);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = user.UserId.Value,
                    IsActive = 1
                });

                BatchGenerationUpdater.OnCommit(uow, UserRow.Fields.GenerationKey);
                uow.Commit();

                return new RedirectResult("~/Account/Login?activated=" + Uri.EscapeDataString(user.Email));
            }
        }


    }
}