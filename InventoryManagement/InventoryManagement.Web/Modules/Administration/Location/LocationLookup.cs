using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;
using Serenity.Web;
using Serenity;
using Serenity.ComponentModel;
namespace InventoryManagement.Administration.Scripts
{
    [LookupScript("Administration.LocationLookup", Permission = "?")]
    public class LocationLookup : RowLookupScript<Entities.LocationRow>
    {

        public LocationLookup()
        {
            IdField = Entities.LocationRow.Fields.LocationId.PropertyName;
            TextField = Entities.LocationRow.Fields.LocationName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var userLoc = Entities.UserLocationRow.Fields.As("userLoc");
            var loc = Entities.LocationRow.Fields;
            UserDefinition user = (UserDefinition)Authorization.UserDefinition;

            query.Where( new Criteria(loc.LocationId).In(query
                .SubQuery()
                .From(userLoc)
                .Select(userLoc.LocationId)
                .Where(new Criteria(userLoc.UserId) == user.UserId)
                ));
        }

    }

}