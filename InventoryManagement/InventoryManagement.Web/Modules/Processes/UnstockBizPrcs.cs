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
    class UnstockBizPrcs
    {

        public static bool CheckUnstockingQtyConstrainNew(IDbConnection connection, int purchasesId, int productId, double qtyInLeastUnit)
        {

            var rtnOutWrdsDtls = ReturnOutwardsDetailsRow.Fields;
            var unstockFlds = UnstockRow.Fields;

            ReturnOutwardsDetailsRow rtnOutWrdsDtlsObj = connection.TrySingle<ReturnOutwardsDetailsRow>(x => {
            x.Select("Sum(QuantityInLeastUnit)", "SumQuantity")
                .Where(new Criteria(rtnOutWrdsDtls.PurchasesId) == purchasesId & 
                new Criteria(rtnOutWrdsDtls.ProductId) == productId);
            });


            UnstockRow unstock = connection.TrySingle<UnstockRow>(x => {
                x.Select("Sum(QuantityInLeastUnit)", "SumQuantity")
                    .Where(new Criteria(unstockFlds.PurchasesId) == purchasesId &
                    new Criteria(unstockFlds.ProductId) == productId);
            });





            double purchasesDtlsSum = 0;

            if (rtnOutWrdsDtlsObj != null)
            {
                if (rtnOutWrdsDtlsObj.SumQuantity.HasValue)
                {
                    purchasesDtlsSum = rtnOutWrdsDtlsObj.SumQuantity.Value;
                }
            }



            if (unstock != null)
            {
                if (unstock.SumQuantity.HasValue)
                {
                    qtyInLeastUnit = (unstock.SumQuantity.Value + qtyInLeastUnit);
                }
            }



            return (purchasesDtlsSum < qtyInLeastUnit) ? false : true;





        }


        public static bool CheckUnstockingQtyConstrainForUpdate(IDbConnection connection, int purchasesId, int productId, int unstockId, double qtyInLeastUnit)
        {

            var rtnOutWrdsDtls = ReturnOutwardsDetailsRow.Fields;
            var unstockFlds = UnstockRow.Fields;

            ReturnOutwardsDetailsRow rtnOutWrdsDtlsObj = connection.TrySingle<ReturnOutwardsDetailsRow>(x => {
                x.Select("Sum(QuantityInLeastUnit)", "SumQuantity")
                    .Where(new Criteria(rtnOutWrdsDtls.PurchasesId) == purchasesId &
                    new Criteria(rtnOutWrdsDtls.ProductId) == productId);
            });


            UnstockRow unstock = connection.TrySingle<UnstockRow>(x => {
                x.Select("Sum(QuantityInLeastUnit)", "SumQuantity")
                    .Where(new Criteria(unstockFlds.PurchasesId) == purchasesId &
                    new Criteria(unstockFlds.ProductId) == productId &
                    new Criteria(unstockFlds.UnStockId) != unstockId);
            });



            double purchasesDtlsSum = 0;

            if (rtnOutWrdsDtlsObj != null)
            {
                if (rtnOutWrdsDtlsObj.SumQuantity.HasValue)
                {
                    purchasesDtlsSum = rtnOutWrdsDtlsObj.SumQuantity.Value;
                }
            }



            if (unstock != null)
            {
                if (unstock.SumQuantity.HasValue)
                {
                    qtyInLeastUnit = (unstock.SumQuantity.Value + qtyInLeastUnit);
                }
            }



            return (purchasesDtlsSum < qtyInLeastUnit) ? false : true;



        }


        /// <summary>
        /// This method is deprecated
        /// </summary>
        /// <param name="connection"></param>
        /// <param name="locID"></param>
        /// <param name="returnOutwardsDtsID"></param>
        /// <param name="qty"></param>
        /// <returns></returns>
        public static bool CheckUnstockingQtyConstrain(IDbConnection connection, int locID, int returnOutwardsDtsID, double qty)
        {

            bool rtnVal = false;
            ReturnOutwardsDetailsRow rtnOutDts = connection.TrySingle<ReturnOutwardsDetailsRow>(new Criteria("RtnOutwardsDtlsId") == returnOutwardsDtsID);

            if (rtnOutDts != null)
            {
                double qty_1 = UnitOfMeasurementBizPrcs.CalcQuantity(connection, rtnOutDts.UomAndPriceId.Value, rtnOutDts.Quantity.Value, UnitOfMeasurement.PurchasesUOM);

                //string query = String.Format("SELECT Quantity, UOMAndPriceID FROM Unstock WHERE RtnOutwardsDtlsID = {0}", );
                List<UnstockRow> unstockList = connection.List<UnstockRow>(new Criteria("RtnOutwardsDtlsId") == returnOutwardsDtsID);

                foreach (UnstockRow unstock in unstockList)
                {
                    double qty_2 = unstock.Quantity.Value;
                    int uomAndPriceID = unstock.UomAndPriceId.Value;
                    qty = qty + UnitOfMeasurementBizPrcs.CalcQuantity(connection, uomAndPriceID, qty_2, UnitOfMeasurement.PurchasesUOM);
                }


                if (qty <= qty_1)
                    rtnVal = true;
            }

            return rtnVal;

        }

    }
}
