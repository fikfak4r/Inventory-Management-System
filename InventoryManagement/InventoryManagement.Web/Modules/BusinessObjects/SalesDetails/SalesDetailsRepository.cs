

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.SalesDetailsRow;
    using InventoryManagement.Processes;

    public class SalesDetailsRepository
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
                Row.Amount = UnitOfMeasurementBizPrcs.CalculateAmount(Row.Quantity.Value, Row.UnitPrice, Row.Discount);
            }

            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (ManyToManyManager.CheckAndCreateManyToMany(Connection, "ProductsLocations", Row.LocationId.Value, "ProductID", Row.ProductId.Value))
                    StockBizPrcs.InitializeStock(Connection, Row.LocationId.Value, Row.ProductId.Value);
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {

                    Entities.SalesRow sr = Connection.ById<Entities.SalesRow>(Row.SalesId.Value);
                    sr.HasSalesDetails = true;
                    Connection.UpdateById(sr);

                    SalesBizPrcs.SyncAmountsAfterASalesOrderIsMade(Connection, Row.SalesId.Value, Row.Amount.Value);

                    SalesBizPrcs.SetStatus(Connection, Row.SalesId.Value, "InProgress");
                }
                else if (IsUpdate)
                {
                    FieldValue fv = new FieldValue(Old.Amount, Row.Amount);
                    SalesBizPrcs.SyncAmountsAfterASalesOrderIsUpdated(Connection, Row.SalesId.Value, fv);
                    SalesBizPrcs.SetStatus(Connection, Row.SalesId.Value, "InProgress");
                }


            }

      
        
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }

    }
}