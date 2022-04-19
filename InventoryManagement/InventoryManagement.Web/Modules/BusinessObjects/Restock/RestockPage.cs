


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/Restock"), Route("{action=index}")]
    public class RestockController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Restock/RestockIndex.cshtml");
        }
    }
}