


namespace InventoryManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/GetCode"), Route("{action=index}")]
    public class GetCodeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/GetCode/GetCodeIndex.cshtml");
        }
    }
}