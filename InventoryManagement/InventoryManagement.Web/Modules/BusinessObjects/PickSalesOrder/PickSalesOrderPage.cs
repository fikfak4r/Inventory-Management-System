


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/PickSalesOrder"), Route("{action=index}")]
    public class PickSalesOrderController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/PickSalesOrder/PickSalesOrderIndex.cshtml");
        }
    }
}