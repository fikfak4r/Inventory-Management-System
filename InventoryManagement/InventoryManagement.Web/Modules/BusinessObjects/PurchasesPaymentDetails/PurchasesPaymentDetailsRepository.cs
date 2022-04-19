

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.PurchasesPaymentDetailsRow;
    using InventoryManagement.Processes;

    public class PurchasesPaymentDetailsRepository
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
            Entities.PurchasesPaymentDetailsRow purchasesPaymentDetailsObj;

            

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                //FieldValue fv = SelectFieldValueObject("AmountPaid");
                //fv.Value = fv.NewValue;
                //fv.Modified = false;

                //Row.AmountLeft = PurchasesPaymentDetailsBizPrcs.GetAmountLeft(Connection, Row.PurchasesId.Value, null, Row);
                //Row.LocationId = 

            }

            //protected override void BeforeSave()
            //{
            //    base.BeforeSave();
            //    var x = Row.AmountPaid;  
            //    purchasesPaymentDetailsObj = Connection.Single<Entities.PurchasesPaymentDetailsRow>(new Criteria(fld.PurchPymntDetailsId) == Row.PurchPymntDetailsId.Value);
            //}

        

            protected override void AfterSave()
            {
                base.AfterSave();
                if (IsCreate)
                {
                    PurchasesBizPrcs.SyncAmountsAfterAPaymentIsMade(Connection, Row.PurchasesId.Value, Row.AmountPaid.Value);
                }
                else if (IsUpdate)
                {
                    PurchasesBizPrcs.SyncAmountsAfterAPaymentIsUpdated(Connection, Row.PurchasesId.Value, Old.AmountPaid.Value, Row.AmountPaid.Value);
                }
            }
        
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {
            protected override void OnAfterDelete()
            {
                base.OnAfterDelete();
                PurchasesBizPrcs.SyncAmountsAfterAPaymentIsDeleted(Connection, Row.PurchasesId.Value, Row.AmountPaid.Value);


            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}