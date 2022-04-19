


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/SalesUoMAndPrice"), Route("{action=index}")]
    public class SalesUoMAndPriceController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/SalesUoMAndPrice/SalesUoMAndPriceIndex.cshtml");
        }
    }
}