
namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/BillOfMaterial"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BillOfMaterialRow))]
    public class BillOfMaterialController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/BillOfMaterial/BillOfMaterialIndex.cshtml");
        }
    }
}