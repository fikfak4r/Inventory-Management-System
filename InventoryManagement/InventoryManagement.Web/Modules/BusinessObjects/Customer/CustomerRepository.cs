

namespace InventoryManagement.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CustomerRow;

    public class CustomerRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {

            protected override void ApplyFilters(SqlQuery query)
            {

                base.ApplyFilters(query);
                var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
                var customerLocFlds = BusinessObjects.Entities.CustomerLocationRow.Fields.As("customerLoc");

                var customerplier = Entities.CustomerRow.Fields;
                var user = (UserDefinition)Authorization.UserDefinition;

                query
                    .Where(new Criteria(customerplier.CustomerId).In(
                            query
                                .SubQuery()
                                .From(customerLocFlds)
                                .Select(customerLocFlds.CustomerId)
                                .Where(new Criteria(customerLocFlds.LocationId).In(
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