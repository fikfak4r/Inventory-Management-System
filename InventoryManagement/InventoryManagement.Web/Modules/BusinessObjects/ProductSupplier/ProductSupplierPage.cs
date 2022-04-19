
namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/ProductSupplier"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductSupplierRow))]
    public class ProductSupplierController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/ProductSupplier/ProductSupplierIndex.cshtml");
        }
    }
}