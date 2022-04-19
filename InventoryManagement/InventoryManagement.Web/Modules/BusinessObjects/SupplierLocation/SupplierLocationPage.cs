


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/SupplierLocation"), Route("{action=index}")]
    public class SupplierLocationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/SupplierLocation/SupplierLocationIndex.cshtml");
        }
    }
}