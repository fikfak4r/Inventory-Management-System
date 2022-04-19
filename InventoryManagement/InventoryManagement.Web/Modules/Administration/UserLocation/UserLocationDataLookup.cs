using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace InventoryManagement.Administration.Scripts
{
  
    [LookupScript("Administration.UserLocationData")]
    public class UserLocationDataLookup : RowLookupScript<Entities.UserRow>
    {

        public UserLocationDataLookup()
        {
            IdField = TextField = "LocationId";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            var userLoc = Entities.UserLocationRow.Fields.As("userLoc");
            //var loc = Entities.LocationRow.Fields.As("loc");
            var usrRw = Entities.LocationRow.Fields.As("usrRw");
            var user = (UserDefinition)Authorization.UserDefinition;

            query.Where(usrRw.UserId.In(query.SubQuery()
                        .From(userLoc)
                        .Select(userLoc.LocationId)
                        .Where(userLoc.UserId == user.UserId)));

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }


    }
}