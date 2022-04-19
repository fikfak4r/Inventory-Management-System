


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ReorderPoint"), Route("{action=index}")]
    public class ReorderPointController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ReorderPoint/ReorderPointIndex.cshtml");
        }
    }
}