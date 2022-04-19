using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.Data;
using Serenity.Web;
using Serenity.ComponentModel;

namespace InventoryManagement.Administration.Scripts
{
    [LookupScript("Administration.UserLookup")]
    public class UserLookup : RowLookupScript<Entities.UserRow>
    {

        public UserLookup()
        {
            IdField = Entities.UserRow.Fields.UserId.PropertyName;
            TextField = Entities.UserRow.Fields.Username.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var userFlds = Entities.UserRow.Fields;
            var userLocFld = Entities.UserLocationRow.Fields.As("userLoc");
            var user = (UserDefinition)Authorization.UserDefinition;

            query.Where(new Criteria(userFlds.UserId).In(
                        query//Get the list of users in the Locations user belongs too
                        .SubQuery()
                        .From(userLocFld)
                        .Select(userLocFld.UserId)
                        .Where(new Criteria(userLocFld.LocationId).In(
                         query//Get the list of Locations user belogs too
                        .SubQuery()
                        .From(userLocFld)
                        .Select(userLocFld.LocationId)
                        .Where(new Criteria(userLocFld.UserId) == user.UserId)))));



        }

    }
}