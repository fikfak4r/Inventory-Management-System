
namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BusinessObjects/MovementHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MovementHistoryRow))]
    public class MovementHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/MovementHistory/MovementHistoryIndex.cshtml");
        }
    }
}