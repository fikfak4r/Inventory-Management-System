


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ReturnOutwardsPayments"), Route("{action=index}")]
    public class ReturnOutwardsPaymentController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ReturnOutwardsPayments/ReturnOutwardsPaymentIndex.cshtml");
        }
    }
}