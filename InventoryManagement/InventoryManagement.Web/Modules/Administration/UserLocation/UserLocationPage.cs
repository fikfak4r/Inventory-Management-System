


namespace InventoryManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/UserLocation"), Route("{action=index}")]
    public class UserLocationController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/UserLocation/UserLocationIndex.cshtml");
        }
    }
}