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
    /// Summary description for PickSalesBizPrcs
    /// </summary>
    public class PickSalesBizPrcs
    {

        public PickSalesBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public static void CreateItem(IDbConnection conn, int? salesDetailsID, int salesID, bool isPicked, decimal amount, int uOMAndPriceID, int productID, double quantity, decimal unitPrice, decimal? discount)
        {

            int isPickedInt = 0;
            if (isPicked)
            {
                isPickedInt = 1;
            }

            string salesDetailsID_Str = "NULL";

            //            if (salesDetailsID != null)
            //                salesDetailsID_Str = salesDetailsID.ToString();

            //            String query = String.Format(@"INSERT INTO PickSalesOrders 
            //                                        (SalesID, ProductID, Quantity, IsPicked, Amount, UOMAndPriceID, SalesDetailsID)
            //                                        VALUES({0}, {1}, {2}, {3}, {4}, {5}, {6})", salesID, productID, quantity, isPickedInt, amount, uOMAndPriceID, salesDetailsID_Str);
            //            using (SqlText sql = new SqlText(query))
            //            {
            //                sql.ExecuteNonQuery();
            //            }


            PickSalesOrderRow pick = new PickSalesOrderRow();
            pick.SalesId = salesID;
            pick.ProductId = productID;
            pick.Quantity = quantity;
            pick.IsPicked = isPicked;
            pick.Amount = amount;
            pick.UomAndPriceId = uOMAndPriceID;
            pick.SalesDetailsId = salesDetailsID;
            pick.UnitPrice = unitPrice;
            pick.Discount = discount;

            conn.Insert<PickSalesOrderRow>(pick);


        }


        public static void UpdateItem(IDbConnection connection, int pickedSalesID, int? salesDetailsID, int salesID, bool isPicked, decimal amount, int uOMAndPriceID, int productID, double quantity, decimal unitPrice, decimal? discount)
        {

            int isPickedInt = 0;
            if (isPicked)
            {
                isPickedInt = 1;
            }

            string salesDetailsID_Str = "NULL";

            //            if (salesDetailsID != null)
            //                salesDetailsID_Str = salesDetailsID.ToString();

            //            String query = String.Format(@"INSERT INTO PickSalesOrders 
            //                                        (SalesID, ProductID, Quantity, IsPicked, Amount, UOMAndPriceID, SalesDetailsID)
            //                                        VALUES({0}, {1}, {2}, {3}, {4}, {5}, {6})", salesID, productID, quantity, isPickedInt, amount, uOMAndPriceID, salesDetailsID_Str);
            //            using (SqlText sql = new SqlText(query))
            //            {
            //                sql.ExecuteNonQuery();
            //            }

            PickSalesOrderRow pick = connection.Single<PickSalesOrderRow>(new Criteria("PickSalesOrderId") == pickedSalesID);

            pick.SalesId = salesID;
            pick.ProductId = productID;
            pick.Quantity = quantity;
            pick.IsPicked = isPicked;
            pick.Amount = amount;
            pick.UomAndPriceId = uOMAndPriceID;
            pick.SalesDetailsId = salesDetailsID;
            pick.UnitPrice = unitPrice;
            pick.Discount = discount;

            pick.Cost = ProductsBizPrcs.GetCost(connection, productID);
            double quantitySold = UnitOfMeasurementBizPrcs.CalcQuantity(connection, uOMAndPriceID, quantity, UnitOfMeasurement.SalesUOM);
            pick.QuantitySold = quantitySold;
            pick.CostOfGoodsSold = Convert.ToDecimal(quantitySold) * pick.Cost;
            pick.SalesProfit = amount - pick.CostOfGoodsSold;

            connection.UpdateById<PickSalesOrderRow>(pick);

        }


        private static int salesDetailsID;
        public static void AutoFill(IDbConnection connection, int salesID)
        {

            List<SalesDetailsRow> salesDetailsList = connection.List<SalesDetailsRow>(new Criteria("SalesId") == salesID);

            List<PickSalesOrderRow> pickedSalesList = connection.List<PickSalesOrderRow>(new Criteria("SalesId") == salesID);

            for (int x = 0; x < salesDetailsList.Count; x++)
            {

                salesDetailsID = salesDetailsList[x].SalesDetailsId.Value;

                PickSalesOrderRow pickedSales = pickedSalesList.Find(new Predicate<PickSalesOrderRow>(FindCorrespondingRecord));

                if (pickedSales != null)
                {

                    if (salesDetailsList[x].ProductId.Value != pickedSales.ProductId.Value)
                    {
                        UpdateItem(connection, pickedSales.PickSalesOrderId.Value, salesDetailsList[x].SalesDetailsId.Value, salesID, true, salesDetailsList[x].Amount.Value, salesDetailsList[x].UomAndPriceId.Value, salesDetailsList[x].ProductId.Value, salesDetailsList[x].Quantity.Value, salesDetailsList[x].UnitPrice.Value, salesDetailsList[x].Discount);
                    }
                    else if (salesDetailsList[x].Quantity.Value != pickedSales.Quantity.Value || salesDetailsList[x].UomAndPriceId != pickedSales.UomAndPriceId)
                    {
                        double salesDetailsRawQuantity = UnitOfMeasurementBizPrcs.CalcQuantity(connection, salesDetailsList[x].UomAndPriceId.Value, salesDetailsList[x].Quantity.Value, UnitOfMeasurement.SalesUOM);
                        double pickedSalesRawQuatity = UnitOfMeasurementBizPrcs.CalcQuantity(connection, pickedSales.UomAndPriceId.Value, pickedSales.Quantity.Value, UnitOfMeasurement.SalesUOM);

                        if (salesDetailsRawQuantity > pickedSalesRawQuatity)
                        {
                            UpdateItem(connection, pickedSales.PickSalesOrderId.Value, salesDetailsList[x].SalesDetailsId.Value, salesID, true, salesDetailsList[x].Amount.Value, salesDetailsList[x].UomAndPriceId.Value, salesDetailsList[x].ProductId.Value, salesDetailsList[x].Quantity.Value, salesDetailsList[x].UnitPrice.Value, salesDetailsList[x].Discount);
                        }

                    }

                }
                else
                {
                    CreateItem(connection, salesDetailsList[x].SalesDetailsId.Value, salesID, true, salesDetailsList[x].Amount.Value, salesDetailsList[x].UomAndPriceId.Value, salesDetailsList[x].ProductId.Value, salesDetailsList[x].Quantity.Value, salesDetailsList[x].UnitPrice.Value, salesDetailsList[x].Discount);
                }

                pickedSalesList.Remove(pickedSales);

            }//Ends the for loop

        }


        public static bool FindCorrespondingRecord(PickSalesOrderRow pickedSales)
        {

            if (pickedSales.SalesDetailsId == salesDetailsID)
                return true;
            else
                return false;

        }


        public static void AfterAPickIsUpdated(IDbConnection connection, int locationID, int salesID, int pickedSaleID, FieldValue fvQuantity, FieldValue fvProduct, FieldValue fvUnitOfMeasurement)
        {

            int oldUomID = 0, newUomID = 0, productID = 0; double oldQuantity = 0, newQuantity;


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


            if (fvProduct.Modified)
                productID = Convert.ToInt32(fvProduct.NewValue);
            else
                productID = Convert.ToInt32(fvProduct.Value);


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


            if (fvProduct.Modified)
            {
                StockBizPrcs.InsertUpdateItem(connection, locationID, Convert.ToInt32(fvProduct.OldValue), oldUomID, oldQuantity, UnitOfMeasurement.SalesUOM);
                StockBizPrcs.DeductItem(connection, locationID, Convert.ToInt32(fvProduct.NewValue), newUomID, newQuantity, UnitOfMeasurement.SalesUOM);
            }
            else if (fvUnitOfMeasurement.Modified || fvQuantity.Modified)
            {
                //Quantities in Least Unit
                double oldQuantity_1 = UnitOfMeasurementBizPrcs.CalcQuantity(connection, oldUomID, oldQuantity, UnitOfMeasurement.SalesUOM);
                double newQuantity_1 = UnitOfMeasurementBizPrcs.CalcQuantity(connection, newUomID, newQuantity, UnitOfMeasurement.SalesUOM);

                if (oldQuantity_1 > newQuantity_1)
                    StockBizPrcs.InsertUpdateItemInLeastUnit(connection, locationID, productID, (oldQuantity_1 - newQuantity_1));
                else if (newQuantity_1 > oldQuantity_1)
                    StockBizPrcs.DeductItem(connection, locationID, productID, (newQuantity_1 - oldQuantity_1));
            }


        }

        /// <summary>
        /// This method gets the TotalAmount of Picked good for a SalesObj
        /// </summary>
        /// <param name="salesID"></param>
        /// <returns></returns>
        public static decimal? GetTotalAmountOfPicked(IDbConnection connection, int salesID)
        {
            String query = String.Format("SELECT SUM(Amount) FROM PickSalesOrders WHERE SalesID = {0} AND IsPicked = 1", salesID);
            SqlText sql = new SqlText(connection, query);
            
                object objectVar = sql.ExecuteScalar();
                if (objectVar != null && !DBNull.Value.Equals(objectVar))
                {
                    return Convert.ToDecimal(objectVar);
                }
                return null;
            
        }

        /// <summary>
        /// This method gets the TotalAmount of good in SalesObj irrespective of wether it has been received or not
        /// </summary>
        /// <param name="salesID"></param>
        /// <returns></returns>
        public static decimal? GetTotalAmount(IDbConnection connection, int salesID)
        {
            String query = String.Format("SELECT SUM(Amount) FROM PickSalesOrders WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);
            
                object objectVar = sql.ExecuteScalar();
                if (objectVar != null && !DBNull.Value.Equals(objectVar))
                {
                    return Convert.ToDecimal(objectVar);
                }
                return null;

        }


        public static void ReOpen(IDbConnection connection, int locationID, int salesID)
        {
            //UnitOfMeasurementBizPrcs.CalcQuantity(

            //String qry = String.Format("SELECT * FROM PickSalesOrders WHERE SalesID = {0}", salesID);

            List<PickSalesOrderRow> pickSalesOderList = connection.List<PickSalesOrderRow>(new Criteria("SalesId") == salesID);

            //using (SqlText sql = new SqlText(qry))
            //{
            //    DbDataReader reader = sql.ExecuteReader();
            //    while (reader.Read())
            //    {

            //        decimal pickedQty = UnitOfMeasurementBizPrcs.CalcQuantity(Convert.ToInt32(reader["UOMAndPriceID"]), Convert.ToDecimal(reader["Quantity"]), UnitOfMeasurement.SalesUOM);
            //        StockBizPrcs.InsertUpdateItemInLeastUnit(locationID, Convert.ToInt32(reader["ProductID"]), pickedQty);

            //    }
            //}

            foreach (PickSalesOrderRow psor in pickSalesOderList)
            {
                double pickedQty = UnitOfMeasurementBizPrcs.CalcQuantity(connection, Convert.ToInt32(psor.UomAndPriceId), Convert.ToDouble(psor.Quantity), UnitOfMeasurement.SalesUOM);
                StockBizPrcs.InsertUpdateItemInLeastUnit(connection, locationID, psor.ProductId.Value, pickedQty);
            }


            String qry = String.Format("DELETE FROM {0} WHERE SalesID = {1}", "PickSalesOrders", salesID);
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
                                    TotalAmountLeft = {1}, HasSalesDetails = 0, Status = 'Open',
                                    IsOpen = 1, IsInProgress = 0, IsInvoiced = 0, IsFullyPaid = 0, IsFullyPicked = 0 
                                    WHERE SalesID = {0}", salesID, totalAmount);
            connection.Execute(qry);


        }



        /// <summary>
        /// This method gets all orders on this sales and set them as been Picked and also the Cost Price.
        /// It also deduct them up in the stock accordingly.
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="salesID"></param>
        public static void SetAsFullyPicked(IDbConnection connection, int locID, int salesID)
        {
            //List<PickSalesOrdersObj> pickSalesOrders = PickSalesOrdersObj.Select(String.Format("SalesID = {0}", salesID));
            List<PickSalesOrderRow> pickSalesOrders = connection.List<PickSalesOrderRow>(new Criteria("SalesId") == salesID);
            for (int i = 0; i < pickSalesOrders.Count; i++)
            {
                //if (!pickSalesOrders[i].IsPicked.Value)
                //{
                StockBizPrcs.DeductItem(connection, locID, pickSalesOrders[i].ProductId.Value, pickSalesOrders[i].UomAndPriceId.Value, pickSalesOrders[i].Quantity.Value, UnitOfMeasurement.SalesUOM);

                pickSalesOrders[i].Date = DateTime.Now;

                decimal cost = ProductsBizPrcs.GetCost(connection, pickSalesOrders[i].ProductId.Value);
                pickSalesOrders[i].Cost = cost;

                double qtySoldInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(connection, pickSalesOrders[i].UomAndPriceId.Value, pickSalesOrders[i].Quantity.Value, UnitOfMeasurement.SalesUOM);

                pickSalesOrders[i].QuantitySold = qtySoldInLeastUnit;
                pickSalesOrders[i].CostOfGoodsSold = (Convert.ToDecimal(pickSalesOrders[i].Quantity) * cost);

                pickSalesOrders[i].SalesProfit = pickSalesOrders[i].Amount - pickSalesOrders[i].CostOfGoodsSold;

                pickSalesOrders[i].IsPicked = true;
                connection.UpdateById(pickSalesOrders[i]);

                //}
            }

            SalesBizPrcs.SetStatus(connection, salesID, "FullyPicked");
            SalesBizPrcs.SyncAmountOnClosingSales(connection, salesID);
        }

        public static decimal GetTotalCostOfGoodsSold(IDbConnection connection, int salesID)
        {
            decimal costOfGoodsSold = 0;

            string query = String.Format("SELECT SUM(CostOfGoodsSold) CGdSold FROM PickSalesOrders WHERE SalesID = {0}", salesID);

            SqlText sql = new SqlText(connection, query);
            
                object obj = sql.ExecuteScalar();
                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    costOfGoodsSold = Convert.ToDecimal(obj);
                }
            

            return costOfGoodsSold;


        }




    }

}