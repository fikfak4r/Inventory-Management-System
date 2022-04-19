


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/SalesPaymentDetails"), Route("{action=index}")]
    public class SalesPaymentDetailsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/SalesPaymentDetails/SalesPaymentDetailsIndex.cshtml");
        }
    }
}