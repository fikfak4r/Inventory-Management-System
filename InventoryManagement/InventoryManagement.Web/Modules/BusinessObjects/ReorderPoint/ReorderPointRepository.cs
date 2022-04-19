

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ReorderPointRow;
    using InventoryManagement.Processes;
    using System.Collections.Generic;
    using System.Linq;
    using Entities;

    public class ReorderPointRepository
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

        public ListResponse<MyRow> GetProductAtReOrderPoint(IDbConnection connection, ListRequest request)
        {
           
            var stck = StockRow.Fields.As("stck");
            var reOrdPnt = ReorderPointRow.Fields;
            var prod = ProductRow.Fields.As("prod");
            var prodLoctn = ProductLocationRow.Fields.As("prodLoctn");
            var loctn = Administration.Entities.LocationRow.Fields.As("loctn");


            SqlQuery query = new SqlQuery();
            query.From(reOrdPnt)

            .SelectTableFields(new BusinessObjects.Entities.ReorderPointRow())
            .Select(prod, prod.ProductName, "ProductProductName")
            .Select(loctn, loctn.LocationName, "LocationName")
            .InnerJoin(stck, new Criteria(reOrdPnt.ProductId) == new Criteria(stck.ProductId))
            .InnerJoin(prod, new Criteria(stck.ProductId) == new Criteria(prod.ProductId))
            .InnerJoin(prodLoctn, new Criteria(prod.ProductId) == new Criteria(prodLoctn.ProductId))
            .InnerJoin(loctn, new Criteria(prodLoctn.LocationId) == new Criteria(loctn.LocationId));
            

            ListResponse<MyRow> myRow = new ListResponse<Entities.ReorderPointRow>();

            myRow.Entities = connection.Query<Entities.ReorderPointRow>(query).ToList();

            return myRow;

        }


        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void BeforeSave()
            {
                base.BeforeSave();

                //Do this either it is a New or Exsisting item.
                Row.QtyInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UOMAndPriceId.Value, Row.ReorderPointValue.Value, UnitOfMeasurement.PurchasesUOM);
                
            }

        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {}

    }
}