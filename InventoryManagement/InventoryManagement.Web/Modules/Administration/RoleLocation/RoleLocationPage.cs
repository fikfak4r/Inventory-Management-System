

namespace InventoryManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/RoleLocation"), Route("{action=index}")]
    public class RoleLocationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/RoleLocation/RoleLocationIndex.cshtml");
        }
    }
}