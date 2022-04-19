using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;
using Serenity.Web;
using Serenity;
using Serenity.ComponentModel;
namespace InventoryManagement.BusinessObjects.Scripts
{
    [LookupScript("Administration.CustomerLookup", Permission = "?")]
    public class CustomerLookup : RowLookupScript<Entities.CustomerRow>
    {

        public CustomerLookup()
        {
            IdField = Entities.CustomerRow.Fields.CustomerId.PropertyName;
            TextField = Entities.CustomerRow.Fields.Name.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }



        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);

            var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
            var customerLocFlds = BusinessObjects.Entities.CustomerLocationRow.Fields.As("customerLoc");

            var customer = Entities.CustomerRow.Fields;
            var user = (UserDefinition)Authorization.UserDefinition;

            query
                .Where(new Criteria(customer.CustomerId).In(
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