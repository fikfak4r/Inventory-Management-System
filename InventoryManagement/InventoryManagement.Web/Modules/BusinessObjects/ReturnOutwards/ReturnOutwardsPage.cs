


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ReturnOutwards"), Route("{action=index}")]
    public class ReturnOutwardsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ReturnOutwards/ReturnOutwardsIndex.cshtml");
        }
    }
}