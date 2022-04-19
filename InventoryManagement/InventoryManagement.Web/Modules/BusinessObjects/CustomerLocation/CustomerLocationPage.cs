

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "BusinessObjects/CustomerLocation", typeof(InventoryManagement.BusinessObjects.Pages.CustomerLocationController))]

namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/CustomerLocation"), Route("{action=index}")]
    public class CustomerLocationController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/CustomerLocation/CustomerLocationIndex.cshtml");
        }
    }
}