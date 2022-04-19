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
    /// Summary description for ReturnBizPrcs
    /// </summary>
    public class ReturnBizPrcs
    {
        public ReturnBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public static void AfterAReturn(IDbConnection connection, int salesID, int productID, double quantityReturned, int uomAndPriceID)
        {



            PickSalesOrderRow pickSalesOrder = connection.Single<PickSalesOrderRow>(new Criteria("SalesId") == salesID & new Criteria("ProductId") == productID);
            if (pickSalesOrder != null)
            {
                double quantityReturnedInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(connection, uomAndPriceID, quantityReturned, UnitOfMeasurement.SalesUOM);
                double quantityPicked = UnitOfMeasurementBizPrcs.CalcQuantity(connection, pickSalesOrder.UomAndPriceId.Value, pickSalesOrder.Quantity.Value, UnitOfMeasurement.SalesUOM);
                pickSalesOrder.QuantitySold = quantityPicked - quantityReturnedInLeastUnit;
                connection.UpdateById(pickSalesOrder);
            }

            //List<PickSalesOrdersObj> pickSalesOrders = PickSalesOrdersObj.Select(String.Format("SalesID = {0} AND ProductID = {1}", salesID, productID), "Quantity DESC");

            //if(pickSalesOrders != null)
            //    if (pickSalesOrders.Count == 1)
            //    {
            //        pickSalesOrders[0].QuantitySold = pickSalesOrders[0].QuantitySold - quantityReturnedInLeastUnit;
            //        pickSalesOrders[0].Update();
            //    }

        }


        public static void AfterAReturnIsUpdated(IDbConnection connection, int salesID, int productID, FieldValue fvQuantity, FieldValue fvUnitOfMeasurement)
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


            PickSalesOrderRow pickSalesOrder = connection.Single<PickSalesOrderRow>(new Criteria("SalesId") == salesID & new Criteria("ProductId") == productID);
            if (pickSalesOrder != null)
            {

                if (oldQuantity_1 > newQuantity_1)
                {
                    pickSalesOrder.QuantitySold = pickSalesOrder.QuantitySold - (oldQuantity_1 - newQuantity_1);
                    connection.UpdateById<PickSalesOrderRow>(pickSalesOrder);
                }
                else if (newQuantity_1 > oldQuantity_1)
                {
                    pickSalesOrder.QuantitySold = pickSalesOrder.QuantitySold - (newQuantity_1 - oldQuantity_1);
                    connection.UpdateById<PickSalesOrderRow>(pickSalesOrder);
                }

            }




        }


        public static void AfterAReturnIsDeleted(IDbConnection connection, int salesID, int productID)
        {
            PickSalesOrderRow pickSalesOrder = connection.Single<PickSalesOrderRow>(new Criteria("SalesId") == salesID & new Criteria("ProductId") == productID);
            if (pickSalesOrder != null)
            {
                double qtySoldInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(connection, pickSalesOrder.UomAndPriceId.Value,
                        pickSalesOrder.Quantity.Value, UnitOfMeasurement.SalesUOM);
                pickSalesOrder.QuantitySold = qtySoldInLeastUnit;
                connection.UpdateById<PickSalesOrderRow>(pickSalesOrder);
            }
        }

    }

}