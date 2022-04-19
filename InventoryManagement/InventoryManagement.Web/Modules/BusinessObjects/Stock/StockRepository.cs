

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.StockRow;
    using InventoryManagement.Processes;

    public class StockRepository
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

                if (Row.ActionKey == "AdjustStock")
                {
                    //StockBizPrcs.AdjustStock(Connection, Row.LocationId.Value, Row.ProductId.Value, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM);
                    Row.Quantity = UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.DummyQuantity.Value, UnitOfMeasurement.PurchasesUOM);
                    Row.QuantityInUnit = UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(Connection, Row.ProductId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM);
                }
             

            }
           
            protected override void BeforeSave()
            {
                base.BeforeSave();
                
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (Row.ActionKey == "TransferStock")
                {
                    
                    StockBizPrcs.DeductItem(Connection, Row.LocationId.Value, Row.ProductId.Value, Row.UomAndPriceId.Value, Row.DummyQuantity.Value, UnitOfMeasurement.PurchasesUOM);
                    ProductsBizPrcs.CheckAndInsertProduct(Connection, Row.DummyLocationId.Value, Row.ProductId.Value);

                    StockBizPrcs.InsertUpdateItem(Connection, Row.DummyLocationId.Value, Row.ProductId.Value, Row.UomAndPriceId.Value, Row.DummyQuantity.Value, UnitOfMeasurement.PurchasesUOM);
                }

            }

            protected override void OnReturn()
            {
                base.OnReturn();
             
            }

            
        
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {

            protected override void ApplyFilters(SqlQuery query)
            {

                base.ApplyFilters(query);
                var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
                var stockLocFlds = BusinessObjects.Entities.StockRow.Fields.As("stock");

                var stock = Entities.StockRow.Fields;
                var user = (UserDefinition)Authorization.UserDefinition;
               
                query
                    .Where(new Criteria(stock.LocationId).In(
                            query
                                .SubQuery()
                                .From(userLocFlds)
                                .Select(userLocFlds.LocationId)
                                .Where(userLocFlds.UserId == user.UserId)
                    ));

            }

        }

    
    }
}