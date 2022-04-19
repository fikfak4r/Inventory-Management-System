

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ReturnInwardsDetailsRow;
    using InventoryManagement.Processes;

    public class ReturnInwardsDetailsRepository
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
                //UpdateFieldValue("Amount", (unitPrice.Value * quantity.Value));
                Row.Amount = (Row.UnitPrice.Value * Convert.ToDecimal(Row.Quantity.Value));
            }

            protected override void BeforeSave()
            {
                base.BeforeSave();

                ProductsBizPrcs.CheckAndInsertProduct(Connection, Row.LocationId.Value, Row.ProductId.Value);
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {
                    SalesBizPrcs.SyncAmountAfterAReturnIsMade(Connection, Row.SalesId.Value, Row.Amount.Value);
                    ReturnBizPrcs.AfterAReturn(Connection, Row.SalesId.Value, Row.ProductId.Value, Row.Quantity.Value, Row.UomAndPriceId.Value);
                }
                else
                {
                    //Update
                    SalesBizPrcs.SyncAmountAfterAReturnIsUpdated(Connection, Row.SalesId.Value, new FieldValue(Old.Amount.Value, Row.Amount.Value));
                    ReturnBizPrcs.AfterAReturnIsDeleted(Connection, Row.SalesId.Value, Row.ProductId.Value);
                }
            }


        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}