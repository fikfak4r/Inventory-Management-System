

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ProductRow;
    using InventoryManagement.Processes;
    using System.Collections.Generic;


    public class ProductRepository
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

            protected override void AfterSave()
            {
                base.AfterSave();
                
                    //var purchUOMAndPriceList = Entities.PurchasesUoMAndPriceRow.Fields;

                    //var oldList = Connection.List<Entities.PurchasesUoMAndPriceRow>(
                    //    purchUOMAndPriceList.ProductId == Row.ProductId.Value);

                    //new Common.DetailListSaveHandler<Entities.PurchasesUoMAndPriceRow>(oldList, Row.PurchasesUoMAndPriceList,
                    //    x => x.ProductId = Row.ProductId.Value).Process(this.UnitOfWork);
                    //Connection.Insert<Entities.StockRow>(new Entities.StockRow() { ProductId = Row.ProductId.Value, Quantity = 50, LocationId = 3 });

                if (IsCreate)
                {

                    //int locID = LocationsBizPrcs.GetLocationID(HttpContext.Current.Request);
                    int accountID = UserBizPrcs.GetAccountId();

                    //List<int> locIdList = null;
                    //if (Row.SupplierId != null)
                    //    locIdList = SuppliersBizPrcs.GetLocationIDs(Connection, accountID, Row.SupplierId.Value);
                    //else
                    //{
                    //    locIdList = new List<int>();
                    //    locIdList.Add(locID);
                    //}

                    PurchasesUOMAndPriceBizPrcs.CreateLeastUoM(Connection, Row.ProductId.Value, Row.LeastUnitName);
                    SalesUOMAndPriceBizPrcs.CreateLeastUoM(Connection, Row.ProductId.Value, Row.LeastUnitName);

                    StockBizPrcs.InitializeStockList(Connection, Row.LocationList, Row.ProductId.Value);
                    ReorderPointBizPrcs.InitializeReOrderPoint(Connection, Row.ProductId);

                    if(Row.SupplierId != null)
                    {
                        SuppliersBizPrcs.AddSupplierProduct(Connection, Row.SupplierId.Value, Row.ProductId.Value);
                    }

                    //int standardUOM = StandardUOMBizPrcs.CreateAStandardUOM(Connection, Row.ProductId.Value, Row.LeastUnitName);
                    
                    //ReorderPointBizPrcs.CreateAReorderPoint(Connection, Row.ProductId.Value);

                }

            }

        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {

            protected override void OnReturn()
            {
                base.OnReturn();

                //throw new Exception(Connection.List<Entities.PurchasesUoMAndPriceRow>().Count.ToString());
                //Row.PurchasesUoMAndPriceList = Connection.List<Entities.PurchasesUoMAndPriceRow>().Count;


            }
        }


        private class MyListHandler : ListRequestHandler<MyRow>
        {

            protected override void ApplyFilters(SqlQuery query)
            {

                base.ApplyFilters(query);
                var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
                var prodLocFlds = BusinessObjects.Entities.ProductLocationRow.Fields.As("prodLoc");

                var prodplier = Entities.ProductRow.Fields;
                var user = (UserDefinition)Authorization.UserDefinition;

                query
                    .Where(new Criteria(prodplier.ProductId).In(
                            query
                                .SubQuery()
                                .From(prodLocFlds)
                                .Select(prodLocFlds.ProductId)
                                .Where(new Criteria(prodLocFlds.LocationId).In(
                            query
                                .SubQuery()
                                .From(userLocFlds)
                                .Select(userLocFlds.LocationId)
                                .Where(userLocFlds.UserId == user.UserId))
                    )));

            }

        }




    }
}