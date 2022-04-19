


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ReturnInwardsPayment"), Route("{action=index}")]
    public class ReturnInwardsPaymentController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ReturnInwardsPayment/ReturnInwardsPaymentIndex.cshtml");
        }
    }
}