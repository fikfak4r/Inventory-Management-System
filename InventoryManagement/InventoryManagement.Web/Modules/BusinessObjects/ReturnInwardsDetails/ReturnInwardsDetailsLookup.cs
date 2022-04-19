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
    [LookupScript("BusinessObjects.ReturnInwardsDetailsLookup", Permission = "?")]
    public class ReturnInwardsDetailsLookup : RowLookupScript<Entities.ReturnInwardsDetailsRow>
    {

        public ReturnInwardsDetailsLookup()
        {
            IdField = Entities.ReturnInwardsDetailsRow.Fields.ProductId.PropertyName;
            TextField = Entities.ReturnInwardsDetailsRow.Fields.ProductProductName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var flds = Entities.ReturnInwardsDetailsRow.Fields;
            

            query
                .Select(flds.RtnInwardsDtlsId)
                .Select(flds.LocationId)
                .Select(flds.SalesId);
        }
    }
}