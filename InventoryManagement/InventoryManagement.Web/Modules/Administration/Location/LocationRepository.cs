

namespace InventoryManagement.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.LocationRow;
    using BizPrcs = InventoryManagement.BusinessObjects.Repositories;


    public class LocationRepository
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
                
                    Row.AccountId = ((UserDefinition)Authorization.UserDefinition).AccountId;
                    
                
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate)
                {
                    var user = ((UserDefinition)Authorization.UserDefinition);
                    Connection.Insert(new Entities.UserLocationRow()
                    {
                        UserId = user.UserId,
                        LocationId = Row.LocationId
                    });

                    //BizPrcs.GetCodeBizPrcs.CreateGetCode(Connection, Row.AccountId.Value, Row.LocationId.Value, false);
                }
                else
                {

                }


            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {  }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {
            
        }
        
        private class MyListHandler : ListRequestHandler<MyRow> {




            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                //var user = (UserDefinition)Authorization.UserDefinition;
                //query.Where(fld.UserId == user.UserId);

                var userLoc = Entities.UserLocationRow.Fields.As("userLoc");
                var user = (UserDefinition)Authorization.UserDefinition;
                var loc = Entities.LocationRow.Fields;

                query.Where(
                        new Criteria(loc.IsVisible) == 1 &
                               loc.LocationId.In(
                        query.SubQuery()
                             .From(userLoc)
                             .Select(userLoc.LocationId)
                             .Where(new Criteria(userLoc.UserId) == user.UserId))
                 
                            );
                   
            }
        
        }
    }
}