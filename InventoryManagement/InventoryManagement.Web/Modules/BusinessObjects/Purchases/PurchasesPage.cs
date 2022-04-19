

namespace InventoryManagement.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;
    using Serenity.Data;
    using Entities;
    using Serenity.Services;

    [RoutePrefix("BusinessObjects/Purchases"), Route("{action=index}")]
    public class PurchasesController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Purchases/PurchasesIndex.cshtml");
        }

        [PageAuthorize("Administration")]
        public ActionResult PurchaseOrders(int? id)
        {
            InvoiceResponse ir = new InvoiceResponse();
            ListResponse<PurchasesDetailsRow> lr = new ListResponse<PurchasesDetailsRow>();
            if (id.HasValue)
            {


                using (var conn = SqlConnections.NewByKey("Default"))
                {
                    PurchasesRow pr = conn.Single<PurchasesRow>(new Criteria("PurchasesId") == id.Value);
                    ir.Purchase = pr;

                    //lr.Entities = conn.List<PurchasesDetailsRow>(new Criteria("PurchasesId") == id.Value);
                    var fld = PurchasesDetailsRow.Fields;
                    lr.Entities = conn.List<PurchasesDetailsRow>(query => {
                        query.SelectNonTableFields()
                        .SelectTableFields()
                        .Where(new Criteria(fld.PurchasesId) == id.Value);
                    });

                    ir.PurchasedGoods = lr;

                }

            }
            return View("~/Views/Resc/PurchaseOrders.cshtml", ir);
        }


        [PageAuthorize("Administration")]
        public ActionResult PurchaseInvoice()
        {
            return View("~/Views/Resc/PurchaseInvoice.cshtml");
        }


    }




}