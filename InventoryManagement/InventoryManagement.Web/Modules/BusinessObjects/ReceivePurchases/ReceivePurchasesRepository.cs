

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ReceivePurchasesRow;
    using InventoryManagement.Processes;


    public class ReceivePurchasesRepository
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
                //For Insert and Update
                if (!Row.IsFree.Value)
                {
                    Row.Amount = UnitOfMeasurementBizPrcs.CalculateAmount(Row.Quantity, Row.UnitPrice, Row.Discount);
                    Row.QuantityInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM);
                }
                else
                    Row.Amount = 0;
            }


            protected override void BeforeSave()
            {
                base.BeforeSave();

                if (!Row.IsFree.Value)
                {
                    //Row = ReceivePurchasesBizPrcs.ConsolidateAReceivedProduct(this.UnitOfWork, Row);

                    if (IsCreate)
                    {
                      
                        if (!ReceivePurchasesBizPrcs.CheckReceiveQtyConstrainNew(Connection, Row.PurchasesId.Value, Row.ProductId.Value,
                            (UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM))))
                            throw new Exception("Quantity to receive can not be greater than quantity ordered");

                    }
                    else if (IsUpdate)
                    {
                        if (!ReceivePurchasesBizPrcs.CheckReceiveQtyConstrainForUpdate(Connection, Row.PurchasesId.Value, Row.ProductId.Value, Row.ReceivePurchasesId.Value,
                          (UnitOfMeasurementBizPrcs.CalcQuantity(Connection, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM))))
                            throw new Exception("Quantity to receive can not be greater than quantity ordered");
                    }
                }

                if (ManyToManyManager.CheckAndCreateManyToMany(Connection, "ProductsLocations", Row.LocationId.Value, "ProductID", Row.ProductId.Value))
                    StockBizPrcs.InitializeStock(Connection, Row.LocationId.Value, Row.ProductId.Value);
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {
                    StockBizPrcs.InsertUpdateItem(Connection, Row.LocationId.Value, Row.ProductId.Value, Row.UomAndPriceId.Value, Row.Quantity.Value, UnitOfMeasurement.PurchasesUOM);
                    PurchasesBizPrcs.SetStatus(Connection, Row.PurchasesId.Value, "InProgress");
                }
                else if (IsUpdate)
                {
                    ReceivePurchasesBizPrcs.AfterAReceivedPurchasesIsUpdated(Connection, Row.LocationId.Value, Row.PurchasesId.Value, Row.ReceivePurchasesId.Value,
                        new FieldValue(Old.Quantity.Value, Row.Quantity.Value),
                        new FieldValue(Old.ProductId.Value, Row.ProductId.Value),
                        new FieldValue(Old.UomAndPriceId.Value, Row.UomAndPriceId.Value));
                }
            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {
            protected override void OnAfterDelete()
            {
                base.OnAfterDelete();
                ReceivePurchasesBizPrcs.AfterAReceivedPurchasesIsDeleted(Connection, Row.LocationId.Value, Row.ProductId.Value, Row.UomAndPriceId.Value, Row.Quantity.Value);
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}