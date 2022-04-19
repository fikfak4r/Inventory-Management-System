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
    /// Summary description for SalesInvoiceBizPrcs
    /// </summary>
    public class SalesInvoiceBizPrcs
    {
        public SalesInvoiceBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public static void CreateItem(IDbConnection connection, int? salesDetailsID, int salesID, bool isPicked, decimal amount, int uOMAndPriceID, int productID, double quantity, int pickSalesOrderID, decimal unitPrice)
        {

            int isPickedInt = 0;
            if (isPicked)
            {
                isPickedInt = 1;
            }

            string salesDetailsID_Str = (salesDetailsID != null) ? salesDetailsID.Value.ToString() : "Null";

            String query = String.Format(@"INSERT INTO SalesInvoice  
                                        (SalesID, ProductID, Quantity, IsPicked, Amount, UOMAndPriceID, SalesDetailsID, PickSalesOrderID, UnitPrice)
                                        VALUES({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8})", salesID, productID, quantity, isPickedInt, amount, uOMAndPriceID, salesDetailsID_Str, pickSalesOrderID, unitPrice);
            connection.Execute(query);

        }

        public static void UpdateItem(IDbConnection connection, SalesInvoiceRow salesInvoice, int salesDetailsID, int salesID, bool isPicked, decimal amount, int uOMAndPriceID, int productID, double quantity, decimal unitPrice)
        {

            int isPickedInt = 0;
            if (isPicked)
            {
                isPickedInt = 1;
            }

            salesInvoice.ProductId = productID;
            salesInvoice.SalesId = salesID;
            salesInvoice.IsPicked = isPicked;
            salesInvoice.Amount = amount;
            salesInvoice.UomAndPriceId = uOMAndPriceID;
            salesInvoice.Quantity = quantity;
            salesInvoice.UnitPrice = unitPrice;
            connection.UpdateById<SalesInvoiceRow>(salesInvoice);


            //        String query = String.Format(@"INSERT INTO SalesInvoice  
            //                                        (SalesID, ProductID, Quantity, IsPicked, Amount, UOMAndPriceID, SalesDetailsID)
            //                                        VALUES({0}, {1}, {2}, {3}, {4}, {5}, {6})", salesID, productID, quantity, isPickedInt, amount, uOMAndPriceID, salesDetailsID);
            //        using (SqlText sql = new SqlText(query))
            //        {
            //            sql.ExecuteNonQuery();
            //        }

        }


        private static int salesDetailsID;
        public static void AutoFill(IDbConnection connection, int salesID)
        {

            List<PickSalesOrderRow> pickedSalesList = connection.List<PickSalesOrderRow>(new Criteria("SalesId") == salesID);

            List<SalesInvoiceRow> salesInvoiceList = connection.List<SalesInvoiceRow>(new Criteria("SalesId") == salesID);

            for (int x = 0; x < pickedSalesList.Count; x++)
            {

                if (pickedSalesList[x].SalesDetailsId != null)
                {

                    salesDetailsID = pickedSalesList[x].SalesDetailsId.Value;

                    SalesInvoiceRow invoiced = salesInvoiceList.Find(new Predicate<SalesInvoiceRow>(FindCorrespondingRecord));

                    if (invoiced != null)
                    {

                        if (pickedSalesList[x].ProductId.Value != invoiced.ProductId.Value)
                        {
                            //invoiced.Delete();
                            UpdateItem(connection, invoiced, pickedSalesList[x].SalesDetailsId.Value, salesID, true, pickedSalesList[x].Amount.Value, pickedSalesList[x].UomAndPriceId.Value, pickedSalesList[x].ProductId.Value, pickedSalesList[x].Quantity.Value, pickedSalesList[x].UnitPrice.Value);
                        }
                        else if (pickedSalesList[x].Quantity.Value != invoiced.Quantity.Value || pickedSalesList[x].UomAndPriceId != invoiced.UomAndPriceId)
                        {

                            double pickedRawQuantity = UnitOfMeasurementBizPrcs.CalcQuantity(connection, pickedSalesList[x].UomAndPriceId.Value, pickedSalesList[x].Quantity.Value, UnitOfMeasurement.SalesUOM);
                            double invoicedRawQuatity = UnitOfMeasurementBizPrcs.CalcQuantity(connection, invoiced.UomAndPriceId.Value, invoiced.Quantity.Value, UnitOfMeasurement.SalesUOM);

                            if (pickedRawQuantity > invoicedRawQuatity)
                            {
                                UpdateItem(connection, invoiced, pickedSalesList[x].SalesDetailsId.Value, salesID, true, pickedSalesList[x].Amount.Value, pickedSalesList[x].UomAndPriceId.Value, pickedSalesList[x].ProductId.Value, pickedSalesList[x].Quantity.Value, pickedSalesList[x].UnitPrice.Value);
                            }

                        }


                    }
                    else
                    {
                        CreateItem(connection, pickedSalesList[x].SalesDetailsId.Value, salesID, true, pickedSalesList[x].Amount.Value, pickedSalesList[x].UomAndPriceId.Value, pickedSalesList[x].ProductId.Value, pickedSalesList[x].Quantity.Value, pickedSalesList[x].PickSalesOrderId.Value, pickedSalesList[x].UnitPrice.Value);
                    }

                    salesInvoiceList.Remove(invoiced);

                }
                else
                {
                    SalesInvoiceRow invoiced_1 = connection.Single<SalesInvoiceRow>(new Criteria("PickSalesOrderId") == pickedSalesList[x].PickSalesOrderId.Value);
                    if (invoiced_1 != null)
                    {
                        connection.DeleteById<SalesInvoiceRow>(invoiced_1);
                    }
                    CreateItem(connection, null, salesID, true, pickedSalesList[x].Amount.Value, pickedSalesList[x].UomAndPriceId.Value, pickedSalesList[x].ProductId.Value, pickedSalesList[x].Quantity.Value, pickedSalesList[x].PickSalesOrderId.Value, pickedSalesList[x].UnitPrice.Value);
                }


            }//Ends the for loop

        }

        /// <summary>
        /// This method gets the TotalAmount of good in SalesInvoice
        /// </summary>
        /// <param name="salesID"></param>
        /// <returns></returns>
        public static decimal? GetTotalAmount(IDbConnection connection, int salesID)
        {
            String query = String.Format("SELECT SUM(Amount) FROM SalesInvoice WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);

            object objectVar = sql.ExecuteScalar();
            if (objectVar != null && !DBNull.Value.Equals(objectVar))
            {
                return Convert.ToDecimal(objectVar);
            }
            return null;
        }

        public static bool FindCorrespondingRecord(SalesInvoiceRow salesInvoice)
        {
            if (salesInvoice.SalesDetailsId == salesDetailsID)
                return true;
            else
                return false;
        }

    }

}