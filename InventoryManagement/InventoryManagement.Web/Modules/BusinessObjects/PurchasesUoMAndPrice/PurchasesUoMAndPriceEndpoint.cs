
namespace InventoryManagement.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.PurchasesUoMAndPriceRepository;
    using MyRow = Entities.PurchasesUoMAndPriceRow;
    using System.Collections.Generic;

    [RoutePrefix("Services/BusinessObjects/PurchasesUoMAndPrice"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class PurchasesUoMAndPriceController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost]
        public ServiceResponse CreateAsChild(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            //List<MyRow> oldList = uow.Connection.List<MyRow>(new Criteria("ProductId") == request.Entity.ProductId.ToString());

            List<MyRow> oldList = uow.Connection.List<MyRow>(x =>
            {
                x.SelectTableFields(new MyRow())
                .Where(new Criteria("ProductId") == request.Entity.ProductId.ToString());
            });

            List<MyRow> newList = new List<MyRow>(oldList);

             newList.Add(request.Entity);
            new Common.DetailListSaveHandler<MyRow>(oldList, newList, x => x.ProductId = request.Entity.ProductId).Process(uow);

            return new DefaultResponse() { Status = "Success" };
        }

        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
