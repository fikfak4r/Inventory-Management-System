


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/PurchasesUoMAndPrice"), Route("{action=index}")]
    public class PurchasesUoMAndPriceController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/PurchasesUoMAndPrice/PurchasesUoMAndPriceIndex.cshtml");
        }
    }
}