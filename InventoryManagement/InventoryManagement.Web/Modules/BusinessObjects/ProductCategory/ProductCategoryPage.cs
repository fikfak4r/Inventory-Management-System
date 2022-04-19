


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ProductCategory"), Route("{action=index}")]
    public class ProductCategoryController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ProductCategory/ProductCategoryIndex.cshtml");
        }
    }
}