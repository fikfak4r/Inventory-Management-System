


namespace InventoryManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Account"), Route("{action=index}")]
    public class AccountController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            return View("~/Modules/Administration/Account/AccountIndex.cshtml", user.AccountId);
        }
    }
}