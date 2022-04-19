


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/PurchasesPaymentsDetails"), Route("{action=index}")]
    public class PurchasesPaymentDetailsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/PurchasesPaymentsDetails/PurchasesPaymentDetailsIndex.cshtml");
        }
    }
}