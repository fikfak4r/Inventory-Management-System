
namespace InventoryManagement.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.SalesRepository;
    using MyRow = Entities.SalesRow;
    using InventoryManagement.Processes;

    [RoutePrefix("Services/BusinessObjects/Sales"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class SalesController : ServiceEndpoint
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


        public GetNextNumberResponse GetNextNumber(IDbConnection connection, BusinessObjects.GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }



        public ServiceResponse CompleteSales(IUnitOfWork uow, SalesRequest request)
        {
            request.CheckNotNull();

            SalesDetailsBizPrcs.CompleteSales(uow.Connection, request.LocationId, request.SalesId);
            return new SalesResponse()
            {
                LocationId = request.LocationId,

                SalesId = request.SalesId
            };

        }

        public ServiceResponse ReopenOrder(IUnitOfWork uow, SalesRequest request)
        {
            request.CheckNotNull();
            PickSalesBizPrcs.ReOpen(uow.Connection, request.LocationId, request.SalesId);
            return new SalesResponse()
            {
                LocationId = request.LocationId,
                SalesId = request.SalesId
            };

        }

        public ServiceResponse ConvertToAdvancedSales(IUnitOfWork uow, SalesRequest request)
        {
            Entities.SalesRow purchasesRow = uow.Connection.Single<Entities.SalesRow>(new Criteria("SalesId") == request.SalesId);
            purchasesRow.IsAdvanced = true;
            uow.Connection.UpdateById<Entities.SalesRow>(purchasesRow);


            return new SalesResponse()
            {
                LocationId = request.LocationId,
                SalesId = request.SalesId
            };

            //SalesObj purchase = SalesObj.SelectSingle(purchasesID.Value);
            //purchase.IsAdvanced = true;
            //purchase.Update();
        }

        public ServiceResponse ConvertToSimpleSales(IUnitOfWork uow, SalesRequest request)
        {
            Entities.SalesRow purchasesRow = uow.Connection.Single<Entities.SalesRow>(new Criteria("SalesId") == request.SalesId);
            purchasesRow.IsAdvanced = false;
            uow.Connection.UpdateById<Entities.SalesRow>(purchasesRow);

            return new SalesResponse()
            {
                LocationId = request.LocationId,
                SalesId = request.SalesId
            };

            //SalesObj purchase = SalesObj.SelectSingle(purchasesID.Value);
            //purchase.IsAdvanced = true;
            //purchase.Update();
        }


    }
}
