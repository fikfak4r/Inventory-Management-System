using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;

namespace InventoryManagement.Processes
{
    /// <summary>
    /// Summary description for SalesDetailsBizPrcs
    /// </summary>
    public class SalesDetailsBizPrcs
    {
        public SalesDetailsBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        /// <summary>
        /// Updates the TotalAmount by adding this amount to the Previous
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="salesID"></param>
        /// <param name="productID"></param>
        /// <param name="uomAndPriceID"></param>
        /// <param name="quantity"></param>
        public static void OnItemInserted(int locID, int salesID, int productID, int uomAndPriceID, decimal quantity)
        {

            //SalesObj sales = SalesObj.SelectSingle(salesID);
            //sales.HasSalesDetails = true;
            //sales.Update();

            //SalesBizPrcs.UpdateTotalAmount(salesID, CalcSalesTotalAmount(salesID).Value);
            //StockBizPrcs.InsertUpdateItem(locID, productID, UnitOfMeasurementBizPrcs.CalcQuantity(locID, uomAndPriceID, quantity, UnitOfMeasurement.SalesUOM));

        }


        public static void OnItemUpdated(int locID, int salesID, int productID, int uomAndPriceID, decimal quantity)
        {
            //OnItemInserted(locID, salesID, productID, uomAndPriceID, quantity);
        }


        /// <summary>
        /// This methods checks
        /// if the SalesDetail deleted happens to be the Last. If it is, it then Deletes the record it refrences 
        /// in the SalesObj Table and returns a true value. Otherwise, it returns a false.
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="salesID"></param>
        /// <param name="productID"></param>
        /// <param name="uomAndPriceID"></param>
        public static bool OnItemDeleted(IDbConnection connection, int locID, int salesDetailsID, int salesID, int productID, int uomAndPriceID)
        {

            PickSalesOrderRow recSales = connection.Single<PickSalesOrderRow>(new Criteria("SalesDetailsId") == salesDetailsID);
            if (!recSales.IsPicked.Value)
                connection.DeleteById<PickSalesOrderRow>(recSales);

            bool boolVar = false;
            object obj = null;
            String query = String.Format("SELECT Count(SalesID) as count FROM SalesDetails WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);

            obj = sql.ExecuteScalar();



            if (obj == null || obj != null && Convert.ToInt32(obj) == 0)
            {
                int salesPymentsDtlsCount = 0, recSalesCount = 0, rtnInwardsCount = 0, restockCount = 0;

                String query_1 = String.Format("SELECT Count(SalesID) as count FROM SalesPaymentDetails WHERE SalesID = {0}", salesID);
                sql = new SqlText(connection, query_1);
                salesPymentsDtlsCount = Convert.ToInt32(sql.ExecuteScalar());



                query_1 = String.Format("SELECT Count(SalesID) as count FROM PickSalesOrders WHERE SalesID = {0}", salesID);
                sql = new SqlText(connection, query_1);

                recSalesCount = Convert.ToInt32(sql.ExecuteScalar());


                query_1 = String.Format("SELECT Count(SalesID) as count FROM ReturnInwardsDetails WHERE SalesID = {0}", salesID);
                sql = new SqlText(connection, query_1);

                rtnInwardsCount = Convert.ToInt32(sql.ExecuteScalar());


                query_1 = String.Format("SELECT Count(SalesID) as count FROM Restock WHERE SalesID = {0}", salesID);
                sql = new SqlText(connection, query_1);

                restockCount = Convert.ToInt32(sql.ExecuteScalar());



                if (salesPymentsDtlsCount == 1 && recSalesCount == 0)
                {

                    query_1 = String.Format("DELETE FROM SalesPaymentDetails WHERE SalesID = {0}", salesID);

                    sql = new SqlText(connection, query_1);

                    sql.ExecuteNonQuery();

                }

                if (salesPymentsDtlsCount == 1 && recSalesCount == 0 && rtnInwardsCount == 0 && restockCount == 0)
                {

                    String query_2 = String.Format("DELETE FROM Sales WHERE SalesID = {0}", salesID);
                    sql = new SqlText(connection, query_2);

                    sql.ExecuteNonQuery();


                    boolVar = true;
                }

            }



            return boolVar;

        }


        public decimal CalCAmount(decimal amount, decimal quantity)
        {
            return quantity * amount;
        }

        public static decimal CalcSalesTotalAmount(IDbConnection connection, int salesID)
        {

            decimal totalAmount = 0;
            String query = String.Format("SELECT SUM(Amount) as Amt FROM SalesDetails WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);
            
                object obj = sql.ExecuteScalar();

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    totalAmount = Convert.ToDecimal(obj);
                }


            return totalAmount;
        }


        /// <summary>
        /// This methods gets all SalesOrderDetailsRecord and Deduct it from Stock and sets the sales as FullyPicked
        /// </summary>
        /// <param name="locationID"></param>
        /// <param name="salesID"></param>
        public static void CompleteSales(IDbConnection connection, int locationID, int salesID)
        {
            //List<SalesDetails> sDList = SalesDetails.Select(String.Format("SalesID = {0} AND IsPicked = 0", salesID));
            List<SalesDetailsRow> sDList = connection.List<SalesDetailsRow>(new Criteria("SalesId") == salesID);
            for (int x = 0; x < sDList.Count; x++)
            {
                //Creates the PickSalesOrders records and Deducts from the Inventory
                PickSalesBizPrcs.CreateItem(connection, sDList[x].SalesDetailsId, salesID, true, sDList[x].Amount.Value, sDList[x].UomAndPriceId.Value, sDList[x].ProductId.Value, sDList[x].Quantity.Value, sDList[x].UnitPrice.Value, sDList[x].Discount);
            }

            PickSalesBizPrcs.SetAsFullyPicked(connection, locationID, salesID);

        }

        public static void ReOpen(IDbConnection connection, int locationID, int salesID)
        {
            //UnitOfMeasurementBizPrcs.CalcQuantity(

            //String qry = String.Format("SELECT * FROM SalesDetails WHERE SalesID = {0} AND IsPicked = 1", salesID);
            String qry = String.Format("SELECT * FROM PickSalesOrders WHERE SalesID = {0}", salesID);
            List<PickSalesOrderRow> pickSalesList = connection.List<PickSalesOrderRow>(new Criteria("SalesId") == salesID);

            foreach (PickSalesOrderRow psor in pickSalesList)
            {
                object quantitySold = psor.QuantitySold.Value;
                if (quantitySold != null && !DBNull.Value.Equals(quantitySold))
                {
                    double pickedQty = UnitOfMeasurementBizPrcs.CalcQuantity(connection, Convert.ToInt32(psor.UomAndPriceId), Convert.ToDouble(quantitySold), UnitOfMeasurement.SalesUOM);
                    StockBizPrcs.InsertUpdateItemInLeastUnit(connection, locationID, Convert.ToInt32(psor.ProductId), pickedQty);
                }
            }



            //qry = String.Format("UPDATE SalesDetails SET IsPicked = 0 WHERE SalesID = {0}", salesID);
            //using (SqlText sql = new SqlText(qry))
            //{
            //    sql.ExecuteNonQuery();
            //}

            qry = String.Format("DELETE FROM {0} WHERE SalesID = {1}", "PickSalesOrders", salesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE SalesID = {1}", "SalesInvoice", salesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE SalesID = {1}", "SalesPaymentsDetails", salesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE SalesID = {1}", "ReturnInwardsDetails", salesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE SalesID = {1}", "ReturnInwardsPayments", salesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE SalesID = {1}", "Restock", salesID);
            connection.Execute(qry);

            decimal totalAmount = SalesDetailsBizPrcs.CalcSalesTotalAmount(connection, salesID);

            qry = String.Format(@"UPDATE Sales SET TotalAmount = {1}, TotalAmountPaid = 0,
                                    TotalAmountLeft = {1}, Status = 'Open',
                                    IsOpen = 1, IsInProgress = 0, IsInvoiced = 0, IsFullyPaid = 0, IsFullyPicked = 0 
                                    WHERE SalesID = {0}", salesID, totalAmount);
            connection.Execute(qry);


        }


    }
}