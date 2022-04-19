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
    [LookupScript("Administration.ProductLookup", Permission = "?")]
    public class ProductLookup : RowLookupScript<Entities.ProductRow>
    {

        public ProductLookup()
        {
            IdField = Entities.ProductRow.Fields.ProductId.PropertyName;
            TextField = Entities.ProductRow.Fields.ProductName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }



        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);

            var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
            var ProductLocFlds = BusinessObjects.Entities.ProductLocationRow.Fields.As("ProductLoc");

            var Product = Entities.ProductRow.Fields;
            var user = (UserDefinition)Authorization.UserDefinition;

            query
                .Where(new Criteria(Product.ProductId).In(
                        query
                            .SubQuery()
                            .From(ProductLocFlds)
                            .Select(ProductLocFlds.ProductId)
                            .Where(new Criteria(ProductLocFlds.LocationId).In(
                        query
                            .SubQuery()
                            .From(userLocFlds)
                            .Select(userLocFlds.LocationId)
                            .Where(userLocFlds.UserId == user.UserId))
                )));

        }


    }

}