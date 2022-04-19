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
    class PurchasesBizPrcs
    {


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

        public static PurchasesRow OnTotalAmountChanged(PurchasesRow purchases)
        {
            purchases.TotalAmountLeft = 0;
            purchases.TotalAmountPaid = 0;
            return purchases;
        }

        public static PurchasesRow OnTotalAmountPaidChanged(PurchasesRow puchases)
        {
            puchases.TotalAmountLeft = CalcTotalAmountLeft(puchases.TotalAmount, puchases.TotalAmountPaid);
            return puchases;
        }


        //public Purchases OnTotalAmountPaidChanged(Purchases puchases)
        //{
        //    puchases.TotalAmountLeft = CalcTotalAmountLeft(puchases.TotalAmount, puchases.TotalAmountPaid);
        //    return puchases;
        //}


        /// <summary>
        /// Updates the TotalAmount and calculates the TotalAmountLeft and Updates it too
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <param name="amount"></param>
        public static void UpdateTotalAmount(IDbConnection connection, int purchasesID, decimal amount)
        {
            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);
            purch.TotalAmount = amount;
            purch.TotalAmountLeft = CalcTotalAmountLeft(amount, purch.TotalAmountPaid);
            connection.UpdateById(purch);
        }



        /// <summary>
        /// Updates the TotalAmountPaid and calculates the TotalAmountLeft and Updates it too
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <param name="totalAmtPaid"></param>
        public static void UpdateTotalAmountPaid(IDbConnection connection, int purchasesID, decimal totalAmtPaid)
        {
            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);
            purch.TotalAmountPaid = totalAmtPaid;
            purch.TotalAmountLeft = CalcTotalAmountLeft(purch.TotalAmount, totalAmtPaid);
            connection.UpdateById(purch);
        }

        public static void SyncAmounts(IDbConnection connection, int purchasesID)
        {
            decimal ttlAmt = PurchasesDetailsBizPrcs.CalcPurchasesTotalAmount(connection, purchasesID);
            decimal ttlAmtPaid = PurchasesPaymentDetailsBizPrcs.CalcTotalAmountPaid(connection, purchasesID);


            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);
            purch.TotalAmount = ttlAmt;
            purch.TotalAmountPaid = ttlAmtPaid;
            purch.TotalAmountLeft = ttlAmt - ttlAmtPaid;
            connection.UpdateById(purch);
        }






        public static void SetTotalAmountOnAllPurchasesReceived(IDbConnection connection, int purchasesID)
        {
            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);

            decimal totalAmount = ReceivePurchasesBizPrcs.GetTotalAmountOfReceived(connection, purchasesID).Value;

            if (totalAmount > purch.TotalAmount)
            {
                purch.TotalAmount = totalAmount;
                if (purch.TotalAmountPaid != 0)
                    purch.TotalAmountLeft = totalAmount - purch.TotalAmountPaid;
                else
                    purch.TotalAmountLeft = totalAmount;

                connection.UpdateById(purch);

            }
            else
            {
                decimal purchTotalAmount = PurchasesDetailsBizPrcs.CalcPurchasesTotalAmount(connection, purchasesID);
                purch.TotalAmount = purchTotalAmount;
                if (purch.TotalAmountPaid != 0)
                    purch.TotalAmountLeft = purchTotalAmount - purch.TotalAmountPaid;
                else
                    purch.TotalAmountLeft = purchTotalAmount;

                connection.UpdateById(purch);

            }
        }



        /// <summary>
        /// Actions include InProgress, FullyReceived, FullyPaid
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <param name="action">Actions include InProgress, FullyReceived, FullyPaid</param>
        public static void SetStatus(IDbConnection connection, int purchasesID, string action)
        {
            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);

            switch (action)
            {
                case "InProgress":
                    purch.IsFullyPaid = false;
                    purch.IsFullyReceived = false;
                    purch.IsOpen = false;
                    purch.IsInProgress = true;

                    purch.Status = "In Progress";
                    connection.UpdateById(purch);

                    break;
                case "FullyReceived":
                    if (purch.IsFullyPaid.Value)
                    {
                        purch.IsFullyReceived = true;
                        purch.IsOpen = false;
                        purch.IsInProgress = false;
                        purch.Status = "Paid";
                    }
                    else
                    {
                        purch.IsFullyReceived = true;
                        purch.IsOpen = false;
                        purch.IsInProgress = false;
                        purch.Status = "Fully Received";
                    }
                    connection.UpdateById(purch);
                    break;
                case "FullyPaid":
                    if (purch.IsFullyReceived.Value)
                    {
                        purch.IsOpen = false;
                        purch.IsInProgress = false;
                        purch.IsFullyPaid = true;
                        purch.Status = "Paid";
                    }
                    else
                    {
                        purch.IsOpen = false;
                        purch.IsInProgress = true;
                        purch.IsFullyPaid = true;
                        purch.Status = "In Progress";
                    }
                    connection.UpdateById(purch);
                    break;
                default:
                    throw new Exception("Incorrect Action was passed");

            }

        }


        /// <summary>
        /// Actions include InProgress, FullyReceived, FullyPaid; Pass a value of true to setFullyReceivedFalse to set it false
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <param name="action">Actions include InProgress, FullyReceived, FullyPaid</param>
        public static void SetStatus(IDbConnection connection, int purchasesID, string action, bool setFullyReceivedFalse)
        {
            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);
            switch (action)
            {
                case "InProgress":
                    purch.IsFullyPaid = false;
                    purch.IsFullyReceived = false;
                    purch.IsOpen = false;
                    purch.IsInProgress = true;
                    connection.UpdateById(purch);
                    purch.Status = "In Progress";
                    connection.UpdateById(purch);

                    break;
                case "FullyReceived":
                    if (purch.IsFullyPaid.Value && setFullyReceivedFalse != true)
                    {
                        purch.IsFullyReceived = true;
                        purch.IsOpen = false;
                        purch.IsInProgress = false;
                        purch.Status = "Paid";
                    }
                    else
                    {
                        purch.IsFullyReceived = true;
                        purch.IsOpen = false;
                        purch.IsInProgress = false;
                        purch.IsFullyPaid = false;
                        purch.Status = "Fully Received";
                    }
                    connection.UpdateById(purch);

                    break;
                case "FullyPaid":
                    if (purch.IsFullyReceived.Value)
                    {
                        purch.IsOpen = false;
                        purch.IsInProgress = false;
                        purch.IsFullyPaid = true;
                        purch.Status = "Paid";
                    }
                    else
                    {
                        purch.IsOpen = false;
                        purch.IsInProgress = true;
                        purch.IsFullyPaid = true;
                        purch.Status = "In Progress";
                    }
                    connection.UpdateById(purch);

                    break;
                default:
                    throw new Exception("Incorrect Action was passed");

            }

        }



        public static bool IsFullyReceived(IDbConnection connection, int purchasesID)
        {
            bool rtnVal = false;
            string query = String.Format("SELECT IsFullyReceived FROM Purchases WHERE PurchasesID = {0}", purchasesID);
            SqlText sql = new SqlText(connection, query);
            
                rtnVal = Convert.ToBoolean(sql.ExecuteScalar()); 
            

            return rtnVal;
        }

        public static bool IsFullyPaid(IDbConnection connection, int purchasesID)
        {
            bool rtnVal = false;
            string query = String.Format("SELECT IsFullyPaid FROM Purchases WHERE PurchasesID = {0}", purchasesID);
            SqlText sql = new SqlText(connection, query);
            
                rtnVal = Convert.ToBoolean(sql.ExecuteScalar());
            

            return rtnVal;
        }






        public static void SyncAmountsAfterAPurchasesOrderIsMade(IDbConnection connection, int purchID, decimal amountOfOrder)
        {


            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchID);
            decimal newTotalAmount = amountOfOrder + purch.TotalAmount.Value;

            purch.TotalAmount = newTotalAmount;

            if (purch.TotalAmountPaid.Value >= 0)
            {
                purch.TotalAmountLeft = (newTotalAmount - purch.TotalAmountPaid.Value);
            }
            else
            {//i.e a negative value

                purch.TotalAmountLeft = Decimal.Negate((newTotalAmount - purch.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById(purch);


        }

        public static void SyncAmountsAfterAPurchasesOrderIsUpdated(IDbConnection connection, int purchID, decimal oldPurchasesOrderAmount, decimal newPurchasesOrderAmount)
        {

            if (oldPurchasesOrderAmount != newPurchasesOrderAmount)
            {

                PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchID);

                decimal newTotalAmount = 0;


                if (oldPurchasesOrderAmount > newPurchasesOrderAmount)
                    newTotalAmount = purch.TotalAmount.Value - (oldPurchasesOrderAmount - newPurchasesOrderAmount);
                else if (newPurchasesOrderAmount > oldPurchasesOrderAmount)
                    newTotalAmount = purch.TotalAmount.Value + (newPurchasesOrderAmount - oldPurchasesOrderAmount);

                purch.TotalAmount = newTotalAmount;

                if (purch.TotalAmountPaid.Value >= 0)
                {
                    purch.TotalAmountLeft = newTotalAmount - purch.TotalAmountPaid.Value;
                }
                else
                {//i.e a negative value
                    purch.TotalAmountLeft = Decimal.Negate((newTotalAmount - purch.TotalAmountPaid.Value) * -1);
                }

                connection.UpdateById(purch);

            }



        }

        public static void SyncAmountsAfterAPurchasesOrderIsDeleted(IDbConnection connection, int purchID, decimal deletePurchasesOrderAmount)
        {

            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchID);

            decimal newTotalAmount = 0;

            newTotalAmount = purch.TotalAmount.Value - deletePurchasesOrderAmount;

            purch.TotalAmount = newTotalAmount;

            if (purch.TotalAmountPaid.Value >= 0)
            {
                purch.TotalAmountLeft = newTotalAmount - purch.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                purch.TotalAmountLeft = Decimal.Negate((newTotalAmount - purch.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById(purch);

        }



        public static void SyncAmountAfterAReturnIsMade(IDbConnection connection, int purchasesID, decimal amountOfReturnedGoods)
        {

            PurchasesRow purchases = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);

            decimal newTotalAmount = purchases.TotalAmount.Value - amountOfReturnedGoods;

            purchases.TotalAmount = newTotalAmount;

            if (purchases.TotalAmountPaid.Value >= 0)
            {
                purchases.TotalAmountLeft = newTotalAmount - purchases.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                purchases.TotalAmountLeft = Decimal.Negate((newTotalAmount - purchases.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById(purchases);

        }

        public static void SyncAmountAfterAReturnIsUpdated(IDbConnection connection, int purchasesID, decimal oldReturnedAmount, decimal newReturnedAmount)
        {

            if (oldReturnedAmount != newReturnedAmount)
            {
                PurchasesRow purchases = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);

                decimal newTotalAmount = 0;


                if (oldReturnedAmount > newReturnedAmount)
                    newTotalAmount = purchases.TotalAmount.Value + (oldReturnedAmount - newReturnedAmount);
                else if (newReturnedAmount > oldReturnedAmount)
                    newTotalAmount = purchases.TotalAmount.Value - (newReturnedAmount - oldReturnedAmount);

                purchases.TotalAmount = newTotalAmount;

                if (purchases.TotalAmountPaid.Value >= 0)
                {
                    purchases.TotalAmountLeft = newTotalAmount - purchases.TotalAmountPaid.Value;
                }
                else
                {//i.e a negative value
                    purchases.TotalAmountLeft = Decimal.Negate((newTotalAmount - purchases.TotalAmountPaid.Value) * -1);
                }

                connection.UpdateById(purchases);
            }

        }

        public static void SyncAmountAfterAReturnIsDeleted(IDbConnection connection, int purchasesID, decimal amountDeleted)
        {

            PurchasesRow purchases = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);

            decimal newTotalAmount = 0;

            newTotalAmount = purchases.TotalAmount.Value + amountDeleted;

            purchases.TotalAmount = newTotalAmount;

            if (purchases.TotalAmountPaid.Value >= 0)
            {
                purchases.TotalAmountLeft = newTotalAmount - purchases.TotalAmountPaid.Value;
            }
            else
            {//i.e a negative value
                purchases.TotalAmountLeft = Decimal.Negate((newTotalAmount - purchases.TotalAmountPaid.Value) * -1);
            }

            connection.UpdateById(purchases);

        }

        public static void SyncAmountAfterARefundIsMade(IDbConnection connection, int purchasesID, decimal amountRefunded)
        {

            PurchasesRow purchases = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);

            decimal newTotalAmountPaid = purchases.TotalAmountPaid.Value - amountRefunded;

            purchases.TotalAmountPaid = newTotalAmountPaid;


            if (newTotalAmountPaid >= 0)
            {
                purchases.TotalAmountLeft = purchases.TotalAmount - newTotalAmountPaid;
            }
            else
            {//i.e a negative value
                purchases.TotalAmountLeft = Decimal.Negate((purchases.TotalAmount.Value - newTotalAmountPaid) * -1);
            }

            connection.UpdateById(purchases);


        }

        public static void SyncAmountAfterARefundIsUpdated(IDbConnection connection, int purchasesID, decimal oldReturnedAmount, decimal newReturnedAmount)
        {

            

            PurchasesRow purchases = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);

            decimal newTotalAmountPaid = 0;


            if (oldReturnedAmount > newReturnedAmount)
                newTotalAmountPaid = purchases.TotalAmountPaid.Value - (oldReturnedAmount - newReturnedAmount);
            else if (newReturnedAmount > oldReturnedAmount)
                newTotalAmountPaid = purchases.TotalAmountPaid.Value + (newReturnedAmount - oldReturnedAmount);


            purchases.TotalAmountPaid = newTotalAmountPaid;


            if (newTotalAmountPaid >= 0)
            {
                purchases.TotalAmountLeft = purchases.TotalAmount - newTotalAmountPaid;
            }
            else
            {//i.e a negative value
                purchases.TotalAmountLeft = Decimal.Negate((purchases.TotalAmount.Value - newTotalAmountPaid) * -1);
            }

            connection.UpdateById(purchases);

        }

        public static void SyncAmountAfterARefundIsDeleted(IDbConnection connection, int purchasesID, decimal amountDeleted)
        {


            PurchasesRow purchases = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchasesID);

            decimal newTotalAmountPaid = 0;
            newTotalAmountPaid = purchases.TotalAmountPaid.Value + amountDeleted;

            purchases.TotalAmountPaid = newTotalAmountPaid;


            if (newTotalAmountPaid >= 0)
            {
                purchases.TotalAmountLeft = purchases.TotalAmount - newTotalAmountPaid;
            }
            else
            {//i.e a negative value
                purchases.TotalAmountLeft = Decimal.Negate((purchases.TotalAmount.Value - newTotalAmountPaid) * -1);
            }

            connection.UpdateById(purchases);

        }


        public static void SyncAmountsAfterAPaymentIsMade(IDbConnection connection, int purchID, decimal payment)
        {

            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchID);
            decimal newTtlAmtPaid = purch.TotalAmountPaid.Value + payment;

            purch.TotalAmountPaid = newTtlAmtPaid;

            if (newTtlAmtPaid >= 0)
            {
                //purch.TotalAmountLeft = purch.TotalAmount - newTtlAmtPaid;
                purch.TotalAmountLeft = UnitOfMeasurementBizPrcs.CalculateTotalAmountLeft(
                    purch.TotalAmount, newTtlAmtPaid, purch.Discount, purch.Tax);
                    
            }
            else
            {
                //purch.TotalAmountLeft = Decimal.Negate((purch.TotalAmount.Value - newTtlAmtPaid) * -1);
                purch.TotalAmountLeft = Decimal.Negate(UnitOfMeasurementBizPrcs.CalculateTotalAmountLeft(
                    purch.TotalAmount, newTtlAmtPaid, purch.Discount, purch.Tax).Value * -1);
            }

            connection.UpdateById(purch);
        }

        public static void SyncAmountsAfterAPaymentIsUpdated(IDbConnection connection, int purchID, decimal oldPayment, decimal newPayment)
        {

            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchID);

            decimal newTtlAmtPaid = 0;

            bool isUpdated = false;

            if (oldPayment > newPayment)
            {
                newTtlAmtPaid = purch.TotalAmountPaid.Value - (oldPayment - newPayment);
                isUpdated = true;
            }
            else if (newPayment > oldPayment)
            {
                newTtlAmtPaid = purch.TotalAmountPaid.Value + (newPayment - oldPayment);
                isUpdated = true;
            }

            if (isUpdated)
            {
                purch.TotalAmountPaid = newTtlAmtPaid;


                if (newTtlAmtPaid >= 0)
                {
                    //purch.TotalAmountLeft = purch.TotalAmount - newTtlAmtPaid;
                    purch.TotalAmountLeft = UnitOfMeasurementBizPrcs.CalculateTotalAmountLeft(
                        purch.TotalAmount, newTtlAmtPaid, purch.Discount, purch.Tax);

                }
                else
                {
                    //purch.TotalAmountLeft = Decimal.Negate((purch.TotalAmount.Value - newTtlAmtPaid) * -1);
                    purch.TotalAmountLeft = Decimal.Negate(UnitOfMeasurementBizPrcs.CalculateTotalAmountLeft(
                        purch.TotalAmount, newTtlAmtPaid, purch.Discount, purch.Tax).Value * -1);
                }

                connection.UpdateById(purch);
            }

        }

        public static void SyncAmountsAfterAPaymentIsDeleted(IDbConnection connection, int purchID, decimal paymentDeleted)
        {

            PurchasesRow purch = connection.Single<PurchasesRow>(new Criteria("PurchasesId") == purchID);

            decimal newTtlAmtPaid = 0;

            newTtlAmtPaid = purch.TotalAmountPaid.Value - paymentDeleted;

            purch.TotalAmountPaid = newTtlAmtPaid;

            if (newTtlAmtPaid >= 0)
            {
                purch.TotalAmountLeft = purch.TotalAmount - newTtlAmtPaid;
            }
            else
            {
                purch.TotalAmountLeft = Decimal.Negate((purch.TotalAmount.Value - newTtlAmtPaid) * -1);
            }

            connection.UpdateById(purch);

        }





        /*
        private static decimal GetUnstockQuantity(int locationID, int purchasesID, int productID)
        {
            decimal rtnVal = 0;

            String qry = String.Format("SELECT UOMAndPriceID, Quantity FROM Unstock WHERE PurchasesID = {0} AND ProductID = {1}", purchasesID, productID);
            using (SqlText sql = new SqlText(qry))
            {
                IDataReader reader = sql.ExecuteReader();
                while (reader.Read())
                {
                    rtnVal += UnitOfMeasurementBizPrcs.CalcQuantity(Convert.ToInt32(reader["UOMAndPriceID"]), Convert.ToDecimal(reader["Quantity"]), UnitOfMeasurement.PurchasesUOM);
                }
            }

            return rtnVal;
        }

        private static void UpdateStock(int locationID, int productID, decimal quantity)
        {

            decimal existingQuantity = 0;

            String query = String.Format("SELECT * FROM Stock WHERE ProductID = {0} AND LocationID = {1}", productID, locationID);
            using (SqlText sql = new SqlText(query))
            {
                IDataReader reader = sql.ExecuteReader();
                if (reader.Read())
                    existingQuantity = Convert.ToDecimal(reader["Quantity"]);
            }

            String query_1 = String.Format("UPDATE Stock SET Quantity = {2} WHERE ProductID = {0} AND LocationID = {1}", productID, locationID, ((existingQuantity) - (quantity)));
            using (SqlText sql = new SqlText(query_1))
            {
                sql.ExecuteNonQuery();
            }
        }

        private static void DeleteUnStock(int purchasesID, int productID)
        {
            String qry = String.Format("DELETE FROM Unstock WHERE PurchasesID = {0} AND ProductID = {1}", purchasesID, productID);
            using (SqlText sql = new SqlText(qry))
            {
                sql.ExecuteNonQuery();
            }
        }
        */
    }
}

