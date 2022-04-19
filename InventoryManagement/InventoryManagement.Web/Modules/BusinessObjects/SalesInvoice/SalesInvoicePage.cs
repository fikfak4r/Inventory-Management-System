


namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/SalesInvoice"), Route("{action=index}")]
    public class SalesInvoiceController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/SalesInvoice/SalesInvoiceIndex.cshtml");
        }
    }
}