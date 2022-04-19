using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;

namespace InventoryManagement.Processes
{

    /// <summary>
    /// Summary description for RestockBizPrcs
    /// </summary>
    public class RestockBizPrcs
    {


        public RestockBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public static bool CheckRestockingQtyConstrain(IDbConnection connection, int locID, int returnInwardsDtsID, double qty)
        {
            bool rtnVal = false;
            ReturnInwardsDetailsRow rtnInDts = connection.Single<ReturnInwardsDetailsRow>(new Criteria("RtnInwardsDtlsId") == returnInwardsDtsID);
            if (rtnInDts != null)
            {

                double qty_1 = UnitOfMeasurementBizPrcs.CalcQuantity(connection, rtnInDts.UomAndPriceId.Value, rtnInDts.Quantity.Value, UnitOfMeasurement.SalesUOM);

                string query = String.Format("SELECT Quantity, UOMAndPriceID FROM Restock WHERE RtnInwardsDtlsID = {0}", returnInwardsDtsID);
                List<RestockRow> restockList = connection.List<RestockRow>(new Criteria("RtnInwardsDtlsId") == returnInwardsDtsID);

                foreach (RestockRow restock in restockList)
                {
                    double qty_2 = restock.Quantity.Value;
                    int uomAndPriceID = restock.UomAndPriceId.Value;
                    qty = qty + UnitOfMeasurementBizPrcs.CalcQuantity(connection, uomAndPriceID, qty_2, UnitOfMeasurement.SalesUOM);
                }


                if (qty <= qty_1)
                    rtnVal = true;

            }

            return rtnVal;

        }


        public static void AfterARestock(IDbConnection connection, int locationID, int salesID, int productID, int uOMAndPriceID, double quantity)
        {
            StockBizPrcs.InsertUpdateItem(connection, locationID,
                                   productID,
                                   uOMAndPriceID, quantity, UnitOfMeasurement.SalesUOM);

            PickSalesOrderRow pickSalesOrder = connection.Single<PickSalesOrderRow>((new Criteria("SalesId") == salesID) & (new Criteria("ProductId") == productID));
            if (pickSalesOrder != null)
            {
                double quantityRestocked = UnitOfMeasurementBizPrcs.CalcQuantity(connection, uOMAndPriceID, quantity, UnitOfMeasurement.SalesUOM);
                double actualQuantitySold = pickSalesOrder.QuantitySold.Value - quantityRestocked;
                pickSalesOrder.CostOfGoodsSold = (Convert.ToDecimal(actualQuantitySold) * pickSalesOrder.Cost);
                connection.UpdateById(pickSalesOrder);
                SalesBizPrcs.UpdateCostOfGoodsSold(connection, salesID);
            }

        }

        public static void WhenARestockIsUpdated(IDbConnection connection, int locationID, int salesID, int productID, FieldValue fvQuantity, FieldValue fvUnitOfMeasurement)
        {

            int oldUomID = 0, newUomID = 0; double oldQuantity = 0, newQuantity;

            if (fvUnitOfMeasurement.Modified)
            {
                newUomID = Convert.ToInt32(fvUnitOfMeasurement.NewValue);
                oldUomID = Convert.ToInt32(fvUnitOfMeasurement.OldValue);
            }
            else
            {
                newUomID = Convert.ToInt32(fvUnitOfMeasurement.Value);
                oldUomID = Convert.ToInt32(fvUnitOfMeasurement.Value);
            }

            if (fvQuantity.Modified)
            {
                newQuantity = Convert.ToDouble(fvQuantity.NewValue);
                oldQuantity = Convert.ToDouble(fvQuantity.OldValue);
            }
            else
            {
                newQuantity = Convert.ToDouble(fvQuantity.Value);
                oldQuantity = Convert.ToDouble(fvQuantity.Value);
            }


            //Quantities in Least Unit
            double oldQuantity_1 = UnitOfMeasurementBizPrcs.CalcQuantity(connection, oldUomID, oldQuantity, UnitOfMeasurement.SalesUOM);
            double newQuantity_1 = UnitOfMeasurementBizPrcs.CalcQuantity(connection, newUomID, newQuantity, UnitOfMeasurement.SalesUOM);

            if (oldQuantity_1 > newQuantity_1)
                StockBizPrcs.DeductItem(connection, locationID, productID, (oldQuantity_1 - newQuantity_1));
            else if (newQuantity_1 > oldQuantity_1)
                StockBizPrcs.InsertUpdateItemInLeastUnit(connection, locationID, productID, (newQuantity_1 - oldQuantity_1));


   PickSalesOrderRow pickSalesOrder = connection.Single<PickSalesOrderRow>(new Criteria("SalesId") == salesID & new Criteria("ProductId") == productID);
            if (pickSalesOrder != null)
            {

                double actualQuantitySold = 0;

                if (oldQuantity_1 > newQuantity_1)
                {
                    actualQuantitySold = pickSalesOrder.QuantitySold.Value - (oldQuantity_1 - newQuantity_1);
                    pickSalesOrder.CostOfGoodsSold = (Convert.ToDecimal(actualQuantitySold) * pickSalesOrder.Cost);
                    connection.UpdateById<PickSalesOrderRow>(pickSalesOrder);
                    SalesBizPrcs.UpdateCostOfGoodsSold(connection, salesID);
                }
                else if (newQuantity_1 > oldQuantity_1)
                {
                    actualQuantitySold = pickSalesOrder.QuantitySold.Value - (newQuantity_1 - oldQuantity_1);
                    pickSalesOrder.CostOfGoodsSold = (Convert.ToDecimal(actualQuantitySold) * pickSalesOrder.Cost);
                    connection.UpdateById<PickSalesOrderRow>(pickSalesOrder);
                    SalesBizPrcs.UpdateCostOfGoodsSold(connection, salesID);
                }


            }

        }

        public static void AfterARestockIsDeleted(IDbConnection connection, int locationID, int salesID, int productID, int uOMAndPriceID, double quantity)
        {

            StockBizPrcs.DeductItem(connection, locationID, productID, uOMAndPriceID, quantity, UnitOfMeasurement.SalesUOM);

            PickSalesOrderRow pickSalesOrder = connection.Single<PickSalesOrderRow>(new Criteria("SalesId") == salesID & new Criteria("ProductId") == productID);
            if (pickSalesOrder != null)
            {
                //pickSalesOrder.QuantitySold = pickSalesOrder.QuantitySold * pickSalesOrder.Cost;
                connection.UpdateById<PickSalesOrderRow>(pickSalesOrder);
                SalesBizPrcs.UpdateCostOfGoodsSold(connection, salesID);
            }
        }




    }

}