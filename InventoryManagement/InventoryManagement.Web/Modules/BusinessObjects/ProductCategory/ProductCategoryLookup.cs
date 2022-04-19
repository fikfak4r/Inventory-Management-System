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
    [LookupScript("Administration.ProductCategoryLookup", Permission = "?")]
    public class ProductCategoryLookup : RowLookupScript<Entities.ProductCategoryRow>
    {

        public ProductCategoryLookup()
        {
            IdField = Entities.ProductCategoryRow.Fields.ProductCategoryId.PropertyName;
            TextField = Entities.ProductCategoryRow.Fields.CategoryName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }



        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);

            var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
            var prodcatFlds = BusinessObjects.Entities.ProductCategoryLocationRow.Fields.As("prodcat");

            var prodcategory = Entities.ProductCategoryRow.Fields;
            var user = (UserDefinition)Authorization.UserDefinition;

            query
                .Where(new Criteria(prodcategory.ProductCategoryId).In(
                        query
                            .SubQuery()
                            .From(prodcatFlds)
                            .Select(prodcatFlds.ProductCategoryId)
                            .Where(new Criteria(prodcatFlds.LocationId).In(
                        query
                            .SubQuery()
                            .From(userLocFlds)
                            .Select(userLocFlds.LocationId)
                            .Where(userLocFlds.UserId == user.UserId))
                )));

        }





    }

}