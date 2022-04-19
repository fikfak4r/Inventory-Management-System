

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.PurchasesDetailsRow;
    using InventoryManagement.Processes;
    using System.Collections.Generic;
    using System.Linq;

    public class PurchasesDetailsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                //   UpdateFieldValue("Amount", UnitOfMeasurementBizPrcs.CalculateAmount(quantity, unitPrice, discount));

                Row.Amount = UnitOfMeasurementBizPrcs.CalculateAmount(Row.Quantity, Row.UnitPrice, (decimal)Row.Discount);
                

                Row.QuantityInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM);

        }

            protected override void BeforeSave()
            {
                base.BeforeSave();

                //ProductsBizPrcs.CheckAndInsertProduct(Connection, Row.LocationId.Value, Row.ProductId.Value);

                //if (ManyToManyManager.CheckAndCreateManyToMany(Connection, "ProductsLocations", Row.LocationId.Value, "ProductID", Row.ProductId.Value))

                if (IsUpdate)
                {
                    if (!PurchasesDetailsBizPrcs.CheckPurchasesDetailConstrainForUpdate(Connection, Row.PurchasesId.Value, Row.ProductId.Value, Row.PurchasesDetailsId.Value,
                                               UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM)))
                        throw new Exception("Received quantity can not be greater than quantity ordered");
                }


            }



            protected override void AfterSave()
            {

                base.AfterSave();

                if (IsCreate)
                {

                    Entities.PurchasesRow purchases = Connection.ById<Entities.PurchasesRow>(Row.PurchasesId.Value);
                    purchases.HasPurchasesDetails = true;
                    Connection.UpdateById<Entities.PurchasesRow>(purchases);

                    PurchasesBizPrcs.SyncAmountsAfterAPurchasesOrderIsMade(Connection, Row.PurchasesId.Value, Row.Amount.Value);
                    PurchasesBizPrcs.SetStatus(Connection, Row.PurchasesId.Value, "InProgress");
   
                }
                else if (IsUpdate)
                {

                    //Entities.PurchasesDetailsRow pdr = PurchasesDetailsBizPrcs.GetPurchasesDetails(Connection, Row.PurchasesDetailsId.Value);
                    PurchasesBizPrcs.SyncAmountsAfterAPurchasesOrderIsUpdated(Connection, Row.PurchasesId.Value, Old.Amount.Value, Row.Amount.Value);
                    PurchasesBizPrcs.SetStatus(Connection, Row.PurchasesId.Value, "InProgress");

                }

            }

        
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {
            protected override void OnAfterDelete()
            {
                base.OnAfterDelete();

                

                var recFld = Entities.ReceivePurchasesRow.Fields.As("recPurch");

                SqlQuery query = new SqlQuery();

                query.From(recFld)
                    .Select(recFld.ReceivePurchasesId)
                    .Where(new Criteria(recFld.PurchasesDetailsId) == Row.PurchasesDetailsId.Value);

                List<int> receivedList = Connection.Query<int>(query).ToList();

                DeleteRequest delRequest = new DeleteRequest();

                ReceivePurchasesRepository recPurchResp = new ReceivePurchasesRepository();

                foreach(int recPurcId in receivedList)
                {
                    delRequest.EntityId = recPurcId;
                    recPurchResp.Delete(this.UnitOfWork, delRequest);
                }

                //saveRequest.Entity = receive;

                //.Delete(uow, saveRequest);

                PurchasesBizPrcs.SyncAmountsAfterAPurchasesOrderIsDeleted(Connection, Row.PurchasesId.Value, Row.Amount.Value);
            }
        
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow> {
            
            protected override void PrepareQuery(SqlQuery query)
            {
                base.PrepareQuery(query);
                
            }
        }


    } 
}