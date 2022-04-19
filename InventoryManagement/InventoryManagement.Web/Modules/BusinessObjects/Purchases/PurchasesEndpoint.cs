
namespace InventoryManagement.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.PurchasesRepository;
    using MyRow = Entities.PurchasesRow;
    using InventoryManagement.Processes;


    [RoutePrefix("Services/BusinessObjects/Purchases"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class PurchasesController : ServiceEndpoint
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


        public ServiceResponse CompletePurchase(IUnitOfWork uow, PurchaseRequest request)
        {
            request.CheckNotNull();
            PurchasesDetailsBizPrcs.CompletePurchase(uow, request.LocationId, request.PurchasesId);
            return new  PurchaseResponse()
            {
                LocationId = request.LocationId,

                PurchaseId = request.PurchasesId
            };

        }


        public ServiceResponse ReopenOrder(IUnitOfWork uow, PurchaseRequest request)
        {
            request.CheckNotNull();
            PurchasesDetailsBizPrcs.ReOpen(uow.Connection, request.LocationId, request.PurchasesId);
            return new PurchaseResponse()
            {
                LocationId = request.LocationId,
                PurchaseId = request.PurchasesId
            };

        }

        public ServiceResponse ConvertToAdvancedPurchase(IUnitOfWork uow, PurchaseRequest request)
        {
            Entities.PurchasesRow purchasesRow = uow.Connection.Single<Entities.PurchasesRow>(new Criteria("PurchasesId") == request.PurchasesId);
            purchasesRow.IsAdvanced = true;
            uow.Connection.UpdateById<Entities.PurchasesRow>(purchasesRow);
            

            return new PurchaseResponse()
            {
                LocationId = request.LocationId,
                PurchaseId = request.PurchasesId
            };

            //PurchasesObj purchase = PurchasesObj.SelectSingle(purchasesID.Value);
            //purchase.IsAdvanced = true;
            //purchase.Update();
        }

        public ServiceResponse ConvertToSimplePurchase(IUnitOfWork uow, PurchaseRequest request)
        {
            Entities.PurchasesRow purchasesRow = uow.Connection.Single<Entities.PurchasesRow>(new Criteria("PurchasesId") == request.PurchasesId);
            purchasesRow.IsAdvanced = false;
            uow.Connection.UpdateById<Entities.PurchasesRow>(purchasesRow);

            return new PurchaseResponse()
            {
                LocationId = request.LocationId,
                PurchaseId = request.PurchasesId
            };

            //PurchasesObj purchase = PurchasesObj.SelectSingle(purchasesID.Value);
            //purchase.IsAdvanced = true;
            //purchase.Update();
        }

    }
}
