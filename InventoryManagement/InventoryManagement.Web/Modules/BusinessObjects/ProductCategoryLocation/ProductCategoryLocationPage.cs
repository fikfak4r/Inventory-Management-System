

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "BusinessObjects/ProductCategoryLocation", typeof(InventoryManagement.BusinessObjects.Pages.ProductCategoryLocationController))]

namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ProductCategoryLocation"), Route("{action=index}")]
    public class ProductCategoryLocationController : Controller
    {
        [PageAuthorize("Administration:General")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ProductCategoryLocation/ProductCategoryLocationIndex.cshtml");
        }
    }
}