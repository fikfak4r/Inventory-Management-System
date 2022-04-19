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
    /// Summary description for SalesBizPrcs
    /// </summary>
    public class SalesBizPrcs
    {
        public SalesBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public static decimal CalcTotalAmount(decimal totalAmountPaid, decimal totalAmountLeft)
        {
            decimal calVal = totalAmountPaid + totalAmountLeft;
            return calVal;
        }

        public static decimal CalcTotalAmountLeft(decimal? totalAmount, decimal? totalAmountPaid)
        {
            decimal calVal = totalAmount.Value - totalAmountPaid.Value;
            return calVal;
        }

        public static SalesRow OnTotalAmountChanged(SalesRow sales)
        {
            sales.TotalAmountLeft = 0;
            sales.TotalAmountPaid = 0;
            return sales;
        }

        public static SalesRow OnTotalAmountPaidChanged(SalesRow puchases)
        {
            puchases.TotalAmountLeft = CalcTotalAmountLeft(puchases.TotalAmount, puchases.TotalAmountPaid);
            return puchases;
        }


        //public SalesObj OnTotalAmountPaidChanged(SalesObj puchases)
        //{
        //    puchases.TotalAmountLeft = CalcTotalAmountLeft(puchases.TotalAmount, puchases.TotalAmountPaid);
        //    return puchases;
        //}


        /// <summary>
        /// Updates the TotalAmount and calculates the TotalAmountLeft and Updates it too
        /// </summary>
        /// <param name="salesID"></param>
        /// <param name="amount"></param>
        public static void UpdateTotalAmount(IDbConnection connection, int salesID, decimal amount)
        {
            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);
            sales.TotalAmount = amount;
            sales.TotalAmountLeft = CalcTotalAmountLeft(amount, sales.TotalAmountPaid);
            connection.UpdateById(sales);
        }


        /// <summary>
        /// Updates the TotalAmountPaid and calculates the TotalAmountLeft and Updates it too
        /// </summary>
        /// <param name="salesID"></param>
        /// <param name="totalAmtPaid"></param>
        public static void UpdateTotalAmountPaid(IDbConnection connection, int salesID, decimal totalAmtPaid)
        {
            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);
            sales.TotalAmountPaid = totalAmtPaid;
            sales.TotalAmountLeft = CalcTotalAmountLeft(sales.TotalAmount, totalAmtPaid);
            connection.UpdateById(sales);
        }


        public static void SyncAmounts(IDbConnection connection, int salesID)
        {

            decimal ttlAmt = SalesDetailsBizPrcs.CalcSalesTotalAmount(connection, salesID);
            decimal ttlAmtPaid = SalesPaymentDetailsBizPrcs.CalcTotalAmountPaid(connection, salesID);

            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);
            sales.TotalAmount = ttlAmt;
            sales.TotalAmountPaid = ttlAmtPaid;
            sales.TotalAmountLeft = ttlAmt - ttlAmtPaid;
            connection.UpdateById(sales);

        }

        public static void SyncAmountsAfterASalesOrderIsMade(IDbConnection connection, int salesID, decimal amountOfOrder)
        {


            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);
            decimal newTotalAmount = amountOfOrder + sales.TotalAmount.Value;

            sales.TotalAmount = newTotalAmount;

            if (sales.TotalAmountPaid.Value >= 0)
            {
                sales.TotalAmountLeft = (newTotalAmount - sales.TotalAmountPaid.Value);
            }
            else
            {//i.e a negative value

                sales.TotalAmountLeft = Decimal.Negate((newTotalAmount - sales.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById(sales);


        }


        public static void SyncAmountsAfterASalesOrderIsUpdated(IDbConnection connection, int salesID, FieldValue fvSalesOrderAmountObject)
        {

            if (fvSalesOrderAmountObject.Modified)
            {

                SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

                decimal newTotalAmount = 0;
                decimal oldSalesOrderAmount = Convert.ToDecimal(fvSalesOrderAmountObject.OldValue);
                decimal newSalesOrderAmount = Convert.ToDecimal(fvSalesOrderAmountObject.NewValue);

                if (oldSalesOrderAmount > newSalesOrderAmount)
                    newTotalAmount = sales.TotalAmount.Value - (oldSalesOrderAmount - newSalesOrderAmount);
                else if (newSalesOrderAmount > oldSalesOrderAmount)
                    newTotalAmount = sales.TotalAmount.Value + (newSalesOrderAmount - oldSalesOrderAmount);

                sales.TotalAmount = newTotalAmount;

                if (sales.TotalAmountPaid.Value >= 0)
                {
                    sales.TotalAmountLeft = newTotalAmount - sales.TotalAmountPaid.Value;
                }
                else
                {//i.e a negative value
                    sales.TotalAmountLeft = Decimal.Negate((newTotalAmount - sales.TotalAmountPaid.Value) * -1);
                }

                connection.UpdateById(sales);

            }

        }



        public static void SyncAmountsAfterASalesOrderIsDeleted(IDbConnection connection, int salesID, decimal deleteSalesOrderAmount)
        {

            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

            decimal newTotalAmount = 0;

            newTotalAmount = sales.TotalAmount.Value - deleteSalesOrderAmount;

            sales.TotalAmount = newTotalAmount;

            if (sales.TotalAmountPaid.Value >= 0)
            {
                sales.TotalAmountLeft = newTotalAmount - sales.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                sales.TotalAmountLeft = Decimal.Negate((newTotalAmount - sales.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById(sales);
        }




        public static void SyncAmountsAfterAPaymentIsMade(IDbConnection connection, int salesID, decimal payment)
        {
            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);
            decimal newTtlAmtPaid = sales.TotalAmountPaid.Value + payment;

            sales.TotalAmountPaid = newTtlAmtPaid;

            if (newTtlAmtPaid >= 0)
            {
                sales.TotalAmountLeft = sales.TotalAmount - newTtlAmtPaid;
            }
            else
            {
                sales.TotalAmountLeft = Decimal.Negate((sales.TotalAmount.Value - newTtlAmtPaid) * -1);
            }

            connection.UpdateById(sales);
        }

        public static void SyncAmountsAfterAPaymentIsUpdated(IDbConnection connection, int salesID, FieldValue fvPamymentObject)
        {

            if (fvPamymentObject.Modified)
            {

                SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

                decimal newTtlAmtPaid = 0;
                decimal oldPayment = Convert.ToDecimal(fvPamymentObject.OldValue);
                decimal newPayment = Convert.ToDecimal(fvPamymentObject.NewValue);

                if (oldPayment > newPayment)
                    newTtlAmtPaid = sales.TotalAmountPaid.Value - (oldPayment - newPayment);
                else if (newPayment > oldPayment)
                    newTtlAmtPaid = sales.TotalAmountPaid.Value + (newPayment - oldPayment);

                sales.TotalAmountPaid = newTtlAmtPaid;

                if (newTtlAmtPaid >= 0)
                {
                    sales.TotalAmountLeft = sales.TotalAmount - newTtlAmtPaid;
                }
                else
                {
                    sales.TotalAmountLeft = Decimal.Negate((sales.TotalAmount.Value - newTtlAmtPaid) * -1);
                }

                connection.UpdateById(sales);
            }

        }

        public static void SyncAmountsAfterAPaymentIsDeleted(IDbConnection connection, int salesID, decimal paymentDeleted)
        {

            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

            decimal newTtlAmtPaid = 0;

            newTtlAmtPaid = sales.TotalAmountPaid.Value - paymentDeleted;

            sales.TotalAmountPaid = newTtlAmtPaid;

            if (newTtlAmtPaid >= 0)
            {
                sales.TotalAmountLeft = sales.TotalAmount - newTtlAmtPaid;
            }
            else
            {
                sales.TotalAmountLeft = Decimal.Negate((sales.TotalAmount.Value - newTtlAmtPaid) * -1);
            }

            connection.UpdateById(sales);

        }



        public static void SyncAmountAfterAReturnIsMade(IDbConnection connection, int salesID, decimal amountOfReturnedGoods)
        {

            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

            decimal newTotalAmount = sales.TotalAmount.Value - amountOfReturnedGoods;

            sales.TotalAmount = newTotalAmount;

            if (sales.TotalAmountPaid.Value >= 0)
            {
                sales.TotalAmountLeft = newTotalAmount - sales.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                sales.TotalAmountLeft = Decimal.Negate((newTotalAmount - sales.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById(sales);

        }


        public static void SyncAmountAfterAReturnIsUpdated(IDbConnection connection, int salesID, FieldValue fvAmountOfReturnedGoods)
        {

            if (fvAmountOfReturnedGoods.Modified)
            {
                SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

                decimal newTotalAmount = 0;
                decimal oldReturnedAmount = Convert.ToDecimal(fvAmountOfReturnedGoods.OldValue);
                decimal newReturnedAmount = Convert.ToDecimal(fvAmountOfReturnedGoods.NewValue);

                if (oldReturnedAmount > newReturnedAmount)
                    newTotalAmount = sales.TotalAmount.Value + (oldReturnedAmount - newReturnedAmount);
                else if (newReturnedAmount > oldReturnedAmount)
                    newTotalAmount = sales.TotalAmount.Value - (newReturnedAmount - oldReturnedAmount);

                sales.TotalAmount = newTotalAmount;

                if (sales.TotalAmountPaid.Value >= 0)
                {
                    sales.TotalAmountLeft = newTotalAmount - sales.TotalAmountPaid.Value;
                }
                else
                {//i.e a negative value
                    sales.TotalAmountLeft = Decimal.Negate((newTotalAmount - sales.TotalAmountPaid.Value) * -1);
                }

                connection.UpdateById(sales);
            }

        }

        public static void SyncAmountAfterAReturnIsDeleted(IDbConnection connection, int salesID, decimal amountDeleted)
        {

            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

            decimal newTotalAmount = 0;

            newTotalAmount = sales.TotalAmount.Value + amountDeleted;

            sales.TotalAmount = newTotalAmount;

            if (sales.TotalAmountPaid.Value >= 0)
            {
                sales.TotalAmountLeft = newTotalAmount - sales.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                sales.TotalAmountLeft = Decimal.Negate((newTotalAmount - sales.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById(sales);

        }



        public static void SyncAmountAfterARefundIsMade(IDbConnection connection, int salesID, decimal amountRefunded)
        {

            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

            decimal newTotalAmountPaid = sales.TotalAmountPaid.Value - amountRefunded;

            sales.TotalAmountPaid = newTotalAmountPaid;


            if (newTotalAmountPaid >= 0)
            {
                sales.TotalAmountLeft = sales.TotalAmount - newTotalAmountPaid;
            }
            else
            {//i.e a negative value
                sales.TotalAmountLeft = Decimal.Negate((sales.TotalAmount.Value - newTotalAmountPaid) * -1);
            }

            connection.UpdateById(sales);

        }


        public static void SyncAmountAfterARefundIsUpdated(IDbConnection connection, int salesID, FieldValue fvAmountRefunded)
        {

            if (fvAmountRefunded.Modified)
            {

                SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

                decimal newTotalAmountPaid = 0;

                decimal oldReturnedAmount = Convert.ToDecimal(fvAmountRefunded.OldValue);
                decimal newReturnedAmount = Convert.ToDecimal(fvAmountRefunded.NewValue);


                if (oldReturnedAmount > newReturnedAmount)
                    newTotalAmountPaid = sales.TotalAmountPaid.Value - (oldReturnedAmount - newReturnedAmount);
                else if (newReturnedAmount > oldReturnedAmount)
                    newTotalAmountPaid = sales.TotalAmountPaid.Value + (newReturnedAmount - oldReturnedAmount);


                sales.TotalAmountPaid = newTotalAmountPaid;


                if (newTotalAmountPaid >= 0)
                {
                    sales.TotalAmountLeft = sales.TotalAmount - newTotalAmountPaid;
                }
                else
                {//i.e a negative value
                    sales.TotalAmountLeft = Decimal.Negate((sales.TotalAmount.Value - newTotalAmountPaid) * -1);
                }

                connection.UpdateById(sales);

            }

        }


        public static void SyncAmountAfterARefundIsDeleted(IDbConnection connection, int salesID, decimal amountDeleted)
        {


            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

            decimal newTotalAmountPaid = 0;
            newTotalAmountPaid = sales.TotalAmountPaid.Value + amountDeleted;

            sales.TotalAmountPaid = newTotalAmountPaid;


            if (newTotalAmountPaid >= 0)
            {
                sales.TotalAmountLeft = sales.TotalAmount - newTotalAmountPaid;
            }
            else
            {//i.e a negative value
                sales.TotalAmountLeft = Decimal.Negate((sales.TotalAmount.Value - newTotalAmountPaid) * -1);
            }

            connection.UpdateById(sales);

        }


        public static void SetTotalAmountOnAllSalesPicked(IDbConnection connection, int salesID)
        {

            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

            decimal totalAmount = PickSalesBizPrcs.GetTotalAmountOfPicked(connection, salesID).Value;

            if (totalAmount > sales.TotalAmount)
            {
                sales.TotalAmount = totalAmount;
                if (sales.TotalAmountPaid != 0)
                    sales.TotalAmountLeft = totalAmount - sales.TotalAmountPaid;
                else
                    sales.TotalAmountLeft = totalAmount;

                connection.UpdateById(sales);
            }
            else
            {
                decimal purchTotalAmount = SalesDetailsBizPrcs.CalcSalesTotalAmount(connection, salesID);
                sales.TotalAmount = purchTotalAmount;
                if (sales.TotalAmountPaid != 0)
                    sales.TotalAmountLeft = purchTotalAmount - sales.TotalAmountPaid;
                else
                    sales.TotalAmountLeft = purchTotalAmount;
                connection.UpdateById(sales);
            }
        }


        public static void SyncAmountOnClosingSales(IDbConnection connection, int salesID)
        {

            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);

            if (sales.Status == "Fully Picked")
            {

                decimal? totalSalesAmount = SalesInvoiceBizPrcs.GetTotalAmount(connection, salesID);

                if (totalSalesAmount != null && totalSalesAmount.Value > 0)
                {
                    if (totalSalesAmount > sales.TotalAmount.Value)
                    {
                        sales.TotalAmount = totalSalesAmount;
                        sales.TotalAmountLeft = totalSalesAmount - sales.TotalAmountPaid;

                    }
                }

                sales.CostOfGoodsSold = PickSalesBizPrcs.GetTotalCostOfGoodsSold(connection, salesID);
                sales.GrossProfit = sales.TotalAmount - sales.CostOfGoodsSold;

                connection.UpdateById(sales);

            }
        }

        public static void UpdateCostOfGoodsSold(IDbConnection connection, int salesID)
        {
            string query = String.Format("UPDATE Sales SET CostofGoodsSold = {0} WHERE SalesID = {1}",
               PickSalesBizPrcs.GetTotalCostOfGoodsSold(connection, salesID), salesID);

            connection.Execute(query);
        }


        /// <summary>
        /// Actions include InProgress, FullyPicked, FullyPaid
        /// </summary>
        /// <param name="salesID"></param>
        /// <param name="action">Actions include InProgress, FullyPicked, FullyPaid</param>
        public static void SetStatus(IDbConnection connection, int salesID, string action)
        {
            //SalesObj sales = SalesObj.SelectSingle(salesID);
            SalesRow sales = connection.Single<SalesRow>(new Criteria("SalesId") == salesID);
            switch (action)
            {
                case "InProgress":
                    sales.IsFullyPaid = false;
                    sales.IsFullyPicked = false;
                    sales.IsInvoiced = false;
                    sales.IsOpen = false;
                    sales.IsInProgress = true;

                    sales.Status = "In Progress";
                    connection.UpdateById(sales);
                    break;
                case "FullyPicked":
                    if (sales.IsFullyPaid.Value)
                    {
                        sales.IsInvoiced = true;
                        sales.IsFullyPicked = true;
                        sales.IsOpen = false;
                        sales.IsInProgress = false;
                        sales.Status = "Paid";
                    }
                    else
                    {
                        sales.IsInvoiced = true;
                        sales.IsFullyPicked = true;
                        sales.IsOpen = false;
                        sales.IsInProgress = false;
                        sales.Status = "Fully Picked";
                    }
                    connection.UpdateById(sales);
                    break;
                case "FullyPaid":
                    if (sales.IsFullyPicked.Value)
                    {
                        sales.IsOpen = false;
                        sales.IsInProgress = false;
                        sales.IsFullyPaid = true;
                        sales.Status = "Paid";
                    }
                    else
                    {
                        sales.IsOpen = false;
                        sales.IsInProgress = true;
                        sales.IsFullyPaid = true;
                        sales.Status = "In Progress";
                    }
                    connection.UpdateById(sales);
                    break;
                default:
                    throw new Exception("Incorrect Action was passed");

            }

        }


        /// <summary>
        /// Actions include InProgress, FullyPicked, FullyPaid; Pass a value of true to setFullyPickedFalse to set it false
        /// </summary>
        /// <param name="salesID"></param>
        /// <param name="action">Actions include InProgress, FullyPicked, FullyPaid</param>
        //public static void SetStatus(int salesID, string action, bool setFullyPickedFalse)
        //{
        //    SalesObj sales = SalesObj.SelectSingle(salesID);
        //    switch (action)
        //    {
        //        case "InProgress":
        //            sales.IsFullyPaid = false;
        //            sales.IsInvoiced = false;
        //            sales.IsOpen = false;
        //            sales.IsInProgress = true;
        //            sales.Update();
        //            sales.Status = "In Progress";
        //            sales.Update();
        //            break;
        //        case "FullyPicked":
        //            if (sales.IsFullyPaid.Value && setFullyPickedFalse != true)
        //            {
        //                sales.IsInvoiced = true;
        //                sales.IsOpen = false;
        //                sales.IsInProgress = false;
        //                sales.Status = "Paid";
        //            }
        //            else
        //            {
        //                sales.IsInvoiced = true;
        //                sales.IsOpen = false;
        //                sales.IsInProgress = false;
        //                sales.IsFullyPaid = false;
        //                sales.Status = "Fully Picked";
        //            }
        //            sales.Update();
        //            break;
        //        case "FullyPaid":
        //            if (sales.IsInvoiced.Value)
        //            {
        //                sales.IsOpen = false;
        //                sales.IsInProgress = false;
        //                sales.IsFullyPaid = true;
        //                sales.Status = "Paid";
        //            }
        //            else
        //            {
        //                sales.IsOpen = false;
        //                sales.IsInProgress = true;
        //                sales.IsFullyPaid = true;
        //                sales.Status = "In Progress";
        //            }
        //            sales.Update();
        //            break;
        //        default:
        //            throw new Exception("Incorrect Action was passed from SalesBizPrcs.SetStatus()");

        //    }

        //}


        public static bool IsInvoiced(IDbConnection connection, int salesID)
        {
            bool rtnVal = false;
            string query = String.Format("SELECT IsInvoiced FROM Sales WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);
            
                rtnVal = Convert.ToBoolean(sql.ExecuteScalar());
            

            return rtnVal;
        }

        public static bool IsFullyPaid(IDbConnection connection, int salesID)
        {
            bool rtnVal = false;
            string query = String.Format("SELECT IsFullyPaid FROM Sales WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);
            
                rtnVal = Convert.ToBoolean(sql.ExecuteScalar());
            

            return rtnVal;
        }


        public static bool IsFullyPicked(IDbConnection connection, int salesID)
        {
            bool rtnVal = false;
            string query = String.Format("SELECT IsFullyPicked FROM Sales WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);
            
                rtnVal = Convert.ToBoolean(sql.ExecuteScalar());
            

            return rtnVal;
        }

 

    }
}