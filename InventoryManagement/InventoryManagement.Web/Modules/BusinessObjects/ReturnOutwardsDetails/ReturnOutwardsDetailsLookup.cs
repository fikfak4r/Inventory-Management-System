using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;
using Serenity;
using Serenity.Web;
using Serenity.Data;

namespace InventoryManagement.BusinessObjects.Scripts
{
    [LookupScript("BusinessObjects.ReturnOutwardsDetailsLookup", Permission = "?")]
    public class ReturnOutwardsDetailsLookup : RowLookupScript<Entities.ReturnOutwardsDetailsRow>
    {

        public ReturnOutwardsDetailsLookup()
        {
            IdField = Entities.ReturnOutwardsDetailsRow.Fields.ProductId.PropertyName;
            TextField = Entities.ReturnOutwardsDetailsRow.Fields.ProductProductName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var flds = Entities.ReturnOutwardsDetailsRow.Fields;
            base.PrepareQuery(query);

            query
                //.Select(flds.RtnOutwardsDtlsId)
                .Select(flds.LocationId)
                .Select(flds.PurchasesId)
                .Distinct(true);
        }
    }
}