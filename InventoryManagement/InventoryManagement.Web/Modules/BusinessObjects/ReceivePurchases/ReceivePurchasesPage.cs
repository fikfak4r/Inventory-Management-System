


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ReceivePurchases"), Route("{action=index}")]
    public class ReceivePurchasesController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ReceivePurchases/ReceivePurchasesIndex.cshtml");
        }
    }
}