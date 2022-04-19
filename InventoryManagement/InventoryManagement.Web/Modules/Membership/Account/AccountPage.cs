
namespace InventoryManagement.Membership.Pages
{

    using Serenity;
    using Serenity.Services;
    using System;
    using System.Web.Mvc;
    using System.Web.Security;
    using CG = InventoryManagement.BusinessObjects.Repositories.GetCodeBizPrcs;


    [RoutePrefix("Account"), Route("{action=index}")]
    public partial class AccountController : Controller
    {

        [HttpGet]
        public ActionResult Login(string activated, string acct, string loc)
        {
            SetLoginPageNavViewBags(acct, loc);

            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;
            return View(MVC.Views.Membership.Account.AccountLogin);
        }

        //[HttpPost, JsonFilter]
        //public Result<ServiceResponse> Login(LoginRequest request)
        //{
        //    return this.ExecuteMethod(() =>
        //    {
        //        request.CheckNotNull();

        //        if (string.IsNullOrEmpty(request.Username))
        //            throw new ArgumentNullException("username");

        //        var username = request.Username;

        //        if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
        //            //return new ServiceResponse();
        //            return View(MVC.Views.Membership.Account.AccountLogin, request);

        //        //WebSecurityHelper.SetAuthenticationTicket(username, false);

        //        //return new ServiceResponse();

        //        throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
        //    });
        //}


        //public void LoginAfterSignup(InventoryManagement.Membership.Forms.LoginForm login)
        //{
        //    Login(login, null, null);
        //}


        [HttpPost]
        [ValidateAntiForgeryToken]
        [AllowAnonymous]
        public ActionResult Login(InventoryManagement.Membership.Forms.LoginForm login, string acct, string loc)
        {

            //request.CheckNotNull();

            //if (string.IsNullOrEmpty(request.Username))
            //    throw new ArgumentNullException("username");

            //if (String.IsNullOrEmpty(login.Username) || String.IsNullOrEmpty(login.Password))
            //    ModelState.AddModelError("Username", "Username is invalid");


            if (ModelState.IsValid)
            {
                var username = login.Username;

                if (WebSecurityHelper.Authenticate(ref username, login.Password, login.RememberMe))
                {
                    return Redirect("/");
                }
                else
                {
                    ModelState.AddModelError("", "Incorrect user name or password.");
                }

            }
            else
            {
                ModelState.AddModelError("", "Incorrect user name or password out.");
            }
            //WebSecurityHelper.SetAuthenticationTicket(username, false);
            //return Redirect("/");
            SetLoginPageNavViewBags(acct, loc);
            return View(MVC.Views.Membership.Account.AccountLogin, login);
            //return new ServiceResponse();

            //throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);

        }




        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }


        public ActionResult Signout(string acct, string loc)
        {
            SetLoginPageNavViewBags(acct, loc);
            Session.Abandon();
            FormsAuthentication.SignOut();
            return new RedirectResult("~/");
        }


        public void SetLoginPageNavViewBags(string acct, string loc)
        {

            string signUpUrl = ""; string forgetPasswordUrl = ""; string loginUrl = "";
            CG.SetLoginPageNavViewBags(acct, loc, out signUpUrl, out loginUrl, out forgetPasswordUrl);
            ViewBag.SignUpUrl = signUpUrl;
            ViewBag.ForgetPasswordUrl = forgetPasswordUrl;
            ViewBag.LoginUrl = loginUrl;

        }


    }


}