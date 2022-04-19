using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.Data;
using Serenity.ComponentModel;
using Serenity.Web;

namespace InventoryManagement.Administration.Scripts
{
    [LookupScript("Administration.RoleLocationLookup", Permission = "?")]
    public class RoleLocationLookup : RowLookupScript<Entities.RoleLocationRow>
    {
        public RoleLocationLookup()
        {
            IdField = Entities.RoleLocationRow.Fields.RoleId.PropertyName;
            TextField = Entities.RoleLocationRow.Fields.RoleRoleName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {   

            base.PrepareQuery(query);

            var userLoc = Entities.UserLocationRow.Fields.As("userLoc");
            var roleLocation = Entities.RoleLocationRow.Fields;
            var user = (UserDefinition)Authorization.UserDefinition;

            query
                .Select(roleLocation.RoleLocationId)
                .Select(roleLocation.RoleId)
                .Select(roleLocation.LocationId)
                .Select(roleLocation.RoleRoleName)
                .Where(
                roleLocation.LocationId.In(
                    query.SubQuery()
                         .From(userLoc)
                         .Select(userLoc.LocationId)
                         .Where(new Criteria(userLoc.UserId) == user.UserId)
                ) & new Criteria(roleLocation.RoleRoleName).NotIn(Entities.RoleRow.AccountOwner, Entities.RoleRow.ClientOfClient));

        }

    }

}
