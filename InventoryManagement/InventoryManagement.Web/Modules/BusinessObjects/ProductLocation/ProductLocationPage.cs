


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ProductLocation"), Route("{action=index}")]
    public class ProductLocationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ProductLocation/ProductLocationIndex.cshtml");
        }
    }
}