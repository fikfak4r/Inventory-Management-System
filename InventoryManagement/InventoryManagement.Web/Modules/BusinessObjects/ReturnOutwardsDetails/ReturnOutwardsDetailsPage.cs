


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ReturnOutwardsDetails"), Route("{action=index}")]
    public class ReturnOutwardsDetailsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ReturnOutwardsDetails/ReturnOutwardsDetailsIndex.cshtml");
        }
    }
}