


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/PurchasesDetails"), Route("{action=index}")]
    public class PurchasesDetailsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/PurchasesDetails/PurchasesDetailsIndex.cshtml");
        }
    }
}