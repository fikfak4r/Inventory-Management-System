
namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/PurchaseTrail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PurchaseTrailRow))]
    public class PurchaseTrailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/PurchaseTrail/PurchaseTrailIndex.cshtml");
        }
    }
}