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
    [LookupScript("Administration.SupplierLookup", Permission = "?")]
    public class SupplierLookup : RowLookupScript<Entities.SupplierRow>
    {

        public SupplierLookup()
        {
            IdField = Entities.SupplierRow.Fields.SupplierId.PropertyName;
            TextField = Entities.SupplierRow.Fields.SupplierName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }



        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);

            var userLocFlds = Administration.Entities.UserLocationRow.Fields.As("userLoc");
            var supLocFlds = BusinessObjects.Entities.SupplierLocationRow.Fields.As("supLoc");

            var supplier = Entities.SupplierRow.Fields;
            var user = (UserDefinition)Authorization.UserDefinition;

            query
                .Where(new Criteria(supplier.SupplierId).In(
                        query
                            .SubQuery()
                            .From(supLocFlds)
                            .Select(supLocFlds.SupplierId)
                            .Where(new Criteria(supLocFlds.LocationId).In(
                        query
                            .SubQuery()
                            .From(userLocFlds)
                            .Select(userLocFlds.LocationId)
                            .Where(userLocFlds.UserId == user.UserId))
                )));

        }


    }

}