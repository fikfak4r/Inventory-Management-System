using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Web;
using Serenity.Data;
using Serenity.ComponentModel;
using Serenity;

namespace InventoryManagement.Administration.Scripts
{
    [LookupScript("Administration.RoleLookup")]
    public class RoleLookup : RowLookupScript<Entities.RoleRow>
    {


        protected override void PrepareQuery(SqlQuery query)
        {
            
            base.PrepareQuery(query);

            var userLoc = Entities.UserLocationRow.Fields.As("userLoc");
            var roleLoc = Entities.RoleLocationRow.Fields.As("roleLoc");
            var role = Entities.RoleRow.Fields;
            var user = (UserDefinition)Authorization.UserDefinition;

            query.Where(
                role.RoleId.In(
                    query.SubQuery()
                         .From(roleLoc)
                         .Select(roleLoc.RoleId)
                         .Where(roleLoc.LocationId.In(
                    query.SubQuery()
                         .From(userLoc)
                         .Select(userLoc.LocationId)
                         .Where(new Criteria(userLoc.UserId) == user.UserId)
                )
                )) & new Criteria(role.RoleName).NotIn(Entities.RoleRow.AccountOwner, Entities.RoleRow.ClientOfClient));

        }


    }
}