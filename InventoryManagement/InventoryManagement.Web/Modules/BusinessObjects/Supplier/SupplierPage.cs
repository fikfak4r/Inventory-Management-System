


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/Supplier"), Route("{action=index}")]
    public class SupplierController : Controller
    {

        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Supplier/SupplierIndex.cshtml");
            //return View("Supplier");
        }


      



    }
}