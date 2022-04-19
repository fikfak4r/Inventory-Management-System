using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using Serenity;
using Serenity.Web;
using Serenity.Data;

namespace InventoryManagement.Administration.Scripts
{
    [LookupScript("Administration.UserRoleLookup", Permission = "?")]
    public class UserRoleLookup : RowLookupScript<Entities.UserRoleRow>
    {


        public UserRoleLookup()
        {
            IdField = Entities.UserRoleRow.Fields.UserId.PropertyName;
            TextField = Entities.UserRoleRow.Fields.Username.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);

            var userLoc = Entities.UserLocationRow.Fields.As("userLoc");
            var roleLocation = Entities.RoleLocationRow.Fields.As("roleLocation");
            var userRole = Entities.UserRoleRow.Fields;
            var user = (UserDefinition)Authorization.UserDefinition;


            query
                .Select()
                .Select(userRole.RoleId)
                .Select(userRole.Username)
                .Where(new Criteria(userRole.UserId).In(
                query
                .SubQuery()
                .From(userLoc)
                .Select(userLoc.UserId)
                .Where(
                userLoc.LocationId.In(
                    query.SubQuery()
                         .From(userLoc)
                         .Select(userLoc.LocationId)
                         .Where(new Criteria(userLoc.UserId) == user.UserId)
                ))));

        }


    }
}