


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/Stock"), Route("{action=index}")]
    public class StockController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Stock/StockIndex.cshtml");
        }
    }
}