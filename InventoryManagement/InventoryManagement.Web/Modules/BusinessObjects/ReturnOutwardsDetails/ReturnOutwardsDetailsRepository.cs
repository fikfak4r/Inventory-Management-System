

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ReturnOutwardsDetailsRow;
    using InventoryManagement.Processes;

    public class ReturnOutwardsDetailsRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow> 
        {


            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                //Insert and Update
                Row.Amount = (Row.UnitPrice.Value * Convert.ToDecimal(Row.Quantity.Value));

                Row.QuantityInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM);

            }

            protected override void BeforeSave()
            {
                base.BeforeSave();
                //if (ManyToManyManager.CheckAndCreateManyToMany(Connection, "ProductsLocations", Row.LocationId.Value, "ProductID", Row.ProductId.Value))
                //    StockBizPrcs.InitializeStock(Connection, Row.LocationId.Value, Row.ProductId.Value);


                if(IsUpdate)
                {
                    if (!ReturnOutwardsBizPrcs.CheckReturnOutwardsConstrainForUpdate(Connection, Row.PurchasesId.Value, Row.ProductId.Value, Row.RtnOutwardsDtlsId.Value,
                                               UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM)))
                        throw new Exception("Unstocked quantity can not be greater than quantity returned");
                }

                ProductsBizPrcs.CheckAndInsertProduct(Connection, Row.LocationId.Value, Row.ProductId.Value);


            }



            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {
                    PurchasesBizPrcs.SyncAmountAfterAReturnIsMade(Connection, Row.PurchasesId.Value, Row.Amount.Value);
                }
                else if (IsUpdate)
                {
                    PurchasesBizPrcs.SyncAmountAfterAReturnIsUpdated(Connection, Row.PurchasesId.Value, Old.Amount.Value, Row.Amount.Value);
                }

            }
        
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {

            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();

                if (!ReturnOutwardsBizPrcs.CheckReturnOutwardsConstrainForUpdate(Connection, Row.PurchasesId.Value, Row.ProductId.Value, Row.RtnOutwardsDtlsId.Value,
                           UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM)))
                    throw new Exception("Unstocked quantity can not be greater than quantity returned");

            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}