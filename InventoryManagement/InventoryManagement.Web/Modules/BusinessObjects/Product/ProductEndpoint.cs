
namespace InventoryManagement.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ProductRepository;
    using MyRow = Entities.ProductRow;

    [RoutePrefix("Services/BusinessObjects/Product"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class ProductController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
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

        public ServiceResponse AddSupplier(IUnitOfWork uow, IDbConnection conn, ProductSupplierRequest request)
        {

            new Common.DetailListSaveHandler<Entities.ProductSupplierRow>(null, request.SupplierObjectsList, x =>  x.ProductId = request.ProductId).Process(uow);

            return new DefaultResponse() { Status = "Success" };

        }


    }
}
