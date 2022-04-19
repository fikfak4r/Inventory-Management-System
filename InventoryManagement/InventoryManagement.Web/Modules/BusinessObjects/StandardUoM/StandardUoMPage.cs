


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/StandardUoM"), Route("{action=index}")]
    public class StandardUoMController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/StandardUoM/StandardUoMIndex.cshtml");
        }
    }
}