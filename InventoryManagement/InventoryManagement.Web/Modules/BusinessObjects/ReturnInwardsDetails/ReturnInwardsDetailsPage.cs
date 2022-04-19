


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ReturnInwardsDetails"), Route("{action=index}")]
    public class ReturnInwardsDetailsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ReturnInwardsDetails/ReturnInwardsDetailsIndex.cshtml");
        }
    }
}