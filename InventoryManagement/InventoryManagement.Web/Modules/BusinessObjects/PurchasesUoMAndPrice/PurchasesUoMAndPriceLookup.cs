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
    [LookupScript("Administration.PurchasesUoMAndPriceLookup", Permission = "?")]
    public class PurchasesUoMAndPriceLookup : RowLookupScript<Entities.PurchasesUoMAndPriceRow>
    {

        public PurchasesUoMAndPriceLookup()
        {
            IdField = Entities.PurchasesUoMAndPriceRow.Fields.UomAndPriceId.PropertyName;
            TextField = Entities.PurchasesUoMAndPriceRow.Fields.UnitName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }





    }

}