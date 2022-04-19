

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.UnstockRow;
    using InventoryManagement.Processes;

    public class UnstockRepository
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
                //The value of (Row.RtnOutwardsDtlsId.Value) is the ProductID
                Row.ProductId = Row.RtnOutwardsDtlsId;

                Row.QuantityInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM);

            }

            protected override void BeforeSave()
            {
                base.BeforeSave();

                if (IsCreate)
                {
                    if (!UnstockBizPrcs.CheckUnstockingQtyConstrainNew(Connection, Row.PurchasesId.Value, Row.ProductId.Value,
                        (UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM))))
                        throw new Exception("Quantity to unstock can not be greater than quantity returned");

                }
                else if(IsUpdate)
                {
                    if (!UnstockBizPrcs.CheckUnstockingQtyConstrainForUpdate(Connection, Row.PurchasesId.Value, Row.ProductId.Value, Row.UnStockId.Value,
                      (UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM))))
                        throw new Exception("Quantity to unstock can not be greater than quantity returned");

                }

            }

            protected override void AfterSave()
            {
                base.AfterSave();
                
                if (IsCreate)
                {//The value of (Row.RtnOutwardsDtlsId.Value) is the ProductID
                    StockBizPrcs.DeductItem(Connection, Row.LocationId.Value,
                           Row.RtnOutwardsDtlsId.Value, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM);
                }
  
            }
        
        }


        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {

            protected override void OnAfterDelete()
            {
                base.OnAfterDelete();

                StockBizPrcs.InsertUpdateItem(Connection, Row.LocationId.Value,
             Row.ProductId.Value,
             Row.UomAndPriceId.Value, Row.UomAndPriceId.Value, UnitOfMeasurement.PurchasesUOM);

          
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}