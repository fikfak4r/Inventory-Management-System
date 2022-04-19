using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;

namespace InventoryManagement.Processes
{
    public class ReturnOutwardsBizPrcs
    {

        public static bool CheckReturnOutwardsConstrainForUpdate(IDbConnection connection, int purchasesId, int productId, int rtnOutwrdsDtlId, double qtyInLeastUnit)
        {

            var rtnOutWrdsDtls = ReturnOutwardsDetailsRow.Fields;
            var unstockFlds = UnstockRow.Fields;

            ReturnOutwardsDetailsRow rtnOutWrdsDtlsObj = connection.TrySingle<ReturnOutwardsDetailsRow>(x =>
            {
                x.Select("Sum(QuantityInLeastUnit)", "SumQuantity")
                    .Where(new Criteria(rtnOutWrdsDtls.PurchasesId) == purchasesId &
                    new Criteria(rtnOutWrdsDtls.ProductId) == productId &
                    new Criteria(rtnOutWrdsDtls.RtnOutwardsDtlsId) != rtnOutwrdsDtlId);
            });


            UnstockRow unstock = connection.TrySingle<UnstockRow>(x =>
            {
                x.Select("Sum(QuantityInLeastUnit)", "SumQuantity")
                    .Where(new Criteria(unstockFlds.PurchasesId) == purchasesId &
                    new Criteria(unstockFlds.ProductId) == productId);
            });


            bool rtnVals = true;


            if (unstock != null)
            {
                if (unstock.SumQuantity.HasValue)
                {
                    rtnVals = (rtnOutWrdsDtlsObj.SumQuantity.Value + qtyInLeastUnit) < (unstock.SumQuantity.Value) ? false : true;
                }
            }



            return rtnVals;

        }


    }
}