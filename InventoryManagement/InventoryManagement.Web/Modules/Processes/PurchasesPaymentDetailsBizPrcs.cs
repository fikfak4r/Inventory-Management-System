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
    class PurchasesPaymentDetailsBizPrcs
    {

        //public static void OnItemInserted(int locID, int purchasesID, int purchPymntDetailsID)
        //{
        //    PurchasesBizPrcs.UpdateTotalAmountPaid(purchasesID, CalcTotalAmountPaid(purchasesID));
        //}


        //public static void OnItemUpdated(int locID, int purchasesID)
        //{
        //    PurchasesBizPrcs.UpdateTotalAmountPaid(purchasesID, CalcTotalAmountPaid(purchasesID));
        //}



        public static decimal GetAmountLeft(IDbConnection connection, int purchasesID, int? purchPaymentDltsID, FieldValue amountPaid)
        {

            decimal amountLeft = 0;

            //Here we want to get the last record that was entered for this Purchases thread
            decimal count = 0;
            //String query_1 = String.Format("SELECT Count(PurchPymntDetailsID) as count FROM PurchasesPaymentsDetails WHERE PurchasesID = {0}", purchasesID);
            count = connection.Count<PurchasesPaymentDetailsRow>(new Criteria("PurchasesId") == purchasesID);
            

            if (amountPaid.Modified && count == 2)
            {
                decimal ttlAmount = 0;
                //String query_2 = String.Format("SELECT TotalAmount FROM PurchasesPaymentsDetails WHERE PurchasesID = {0} AND IsTotalAmountRow = 1", purchasesID);
                PurchasesPaymentDetailsRow ppdr = connection.Single<PurchasesPaymentDetailsRow>(new Criteria("PurchasesId") == purchasesID & new Criteria("IsTotalAmountRow") == 1);

                if (ppdr != null)
                {
                    ttlAmount = ppdr.TotalAmount.Value;
                }

                amountLeft = ttlAmount - Convert.ToInt32(amountPaid.NewValue);
            }
            else if(amountPaid.Modified)
            {

                decimal ttlAmount = 0;
                String query_2 = String.Format("SELECT SUM(AmountPaid) FROM PurchasesPaymentsDetails WHERE PurchasesID = {0} AND PurchPymntDetailsID != {1}  AND IsTotalAmountRow != 1", purchasesID, purchPaymentDltsID.Value);
                SqlText sql_1 = new SqlText(connection, query_2);
                
                    ttlAmount = Convert.ToInt32(sql_1.ExecuteScalar());
                
                
                amountLeft = ReceivePurchasesBizPrcs.GetTotalAmount(connection, purchasesID).Value - (ttlAmount + Convert.ToInt32(amountPaid.NewValue));   
            }
            else
            {//Controll only comes in here when a new record is to be created
                String query = String.Format(@"SELECT TotalAmount, AmountLeft, IsTotalAmountRow FROM PurchasesPaymentsDetails WHERE PurchPymntDetailsID = 
                                          (SELECT Max(PurchPymntDetailsID) FROM PurchasesPaymentsDetails WHERE PurchasesID = {0})", purchasesID);

                SqlText sql = new SqlText(connection, query);
                
                    using (IDataReader reader = sql.ExecuteReader())
                    {
                    if (reader.Read())
                    {


                        if (reader.GetBoolean(2))
                        {//i.e this is the TotalAmountRow
                            amountLeft = reader.GetDecimal(0) - Convert.ToDecimal(amountPaid.Value);
                        }
                        else
                        {
                            amountLeft = reader.GetDecimal(1) - Convert.ToDecimal(amountPaid.Value);
                        }

                    }
                }
            }

            if (amountLeft == 0)
            {
                decimal? totalAmount = ReceivePurchasesBizPrcs.GetTotalAmount(connection, purchasesID);
                if (totalAmount != null)
                    amountLeft = totalAmount.Value - Convert.ToDecimal(amountPaid.Value);
            }

            return amountLeft;
        }



        public static decimal CalcTotalAmountPaid(IDbConnection connection, int purchasesID)
        {

            decimal totalAmount = 0;

            String query = String.Format("SELECT SUM(AmountPaid) as Amt FROM PurchasesPaymentsDetails WHERE PurchasesID = {0}", purchasesID);
            SqlText sql = new SqlText(connection, query);
            
                object obj = sql.ExecuteScalar();

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    totalAmount = Convert.ToDecimal(obj);
                }

            return totalAmount;
        }

        /// <summary>
        /// Returns the Aggregate of the AmountLeft for the PurchasesID
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <returns></returns>
        public static decimal GetSumTotalAmountLeft(IDbConnection connection, int purchasesID)
        {

            decimal totalAmount = 0;

            String query = String.Format("SELECT SUM(AmountLeft) as Amt FROM PurchasesPaymentsDetails WHERE PurchasesID = {0}", purchasesID);
            SqlText sql = new SqlText(connection, query);
            
                object obj = sql.ExecuteScalar();

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    totalAmount = Convert.ToDecimal(obj);
                }
            

            return totalAmount;

        }

        public static decimal GetAmountLeft(IDbConnection connection, int purchasesID)
        {
            return PurchasesDetailsBizPrcs.CalcPurchasesTotalAmount(connection, purchasesID) - CalcTotalAmountPaid(connection, purchasesID);
        }

        public static bool IsTotalAmountCreated(IDbConnection connection, int purchasesID)
        {
            String query = String.Format("SELECT Count(PurchasesID) as count FROM PurchasesPaymentsDetails WHERE PurchasesID = {0}", purchasesID);

            int count = connection.Count<PurchasesPaymentDetailsRow>(new Criteria("PurchasesId") == purchasesID);

            if (count != null && count >= 1)
            {
                return true;
            }

            return false;


        }

        public static int CreateTotalAmountRow(IDbConnection connection, int purchasesID, decimal totalAmount)
        {
            PurchasesPaymentDetailsRow ppd = new PurchasesPaymentDetailsRow();
            ppd.PurchasesId = purchasesID;
            ppd.TotalAmount = totalAmount;
            ppd.IsTotalAmountRow = true;
            ppd.Date = DateTime.Now;

            return (int)connection.InsertAndGetID<PurchasesPaymentDetailsRow>(ppd);

        }

        private static int CreatePurchasesPaymentDetailsRecord(IDbConnection connection, int purchasesID, decimal amountPaid, decimal totalAmountLeft)
        {
            PurchasesPaymentDetailsRow ppd = new PurchasesPaymentDetailsRow();
            ppd.PurchasesId = purchasesID;
            ppd.AmountPaid = amountPaid;
            ppd.AmountLeft = totalAmountLeft;
            ppd.IsTotalAmountRow = false;
            ppd.Date = DateTime.Now;


            return (int)connection.InsertAndGetID<PurchasesPaymentDetailsRow>(ppd);
        }
        /// <summary>
        /// This method get the TotalAmount in ReceivePurchases and sets it as that of PurchasesPaymentsDetails's TotalAmount column
        /// and the syncs(recalculculates) the AmountLeft for records of PurchasesPaymentsDetails for this Purchases accordingly
        /// It also creates the TotalAmount Row is has not yet been created
        /// </summary>
        /// <param name="purchasesID"></param>
        public static void SyncPayment(IDbConnection connection, int purchasesID)
        {
            decimal? totalAmount = ReceivePurchasesBizPrcs.GetTotalAmount(connection, purchasesID);

            if (!IsTotalAmountCreated(connection, purchasesID) && totalAmount != null)
                CreateTotalAmountRow(connection, purchasesID, totalAmount.Value);


            if (totalAmount != null)
            {

                PurchasesPaymentDetailsRow ppd = connection.Single<PurchasesPaymentDetailsRow>(new Criteria("PurchasesId") == purchasesID && new Criteria("IsTotalAmountRow") == 1);

                if (ppd != null)
                {
                    ppd.TotalAmount = totalAmount;
                    connection.UpdateById<PurchasesPaymentDetailsRow>(ppd);

                    string qry = String.Format("PurchasesID = {0} AND IsTotalAmountRow != 1", purchasesID);
                    var pplFlds = PurchasesPaymentDetailsRow.Fields;
                    List<PurchasesPaymentDetailsRow> ppdList = connection.List<PurchasesPaymentDetailsRow>(x =>
                    {
                        x.Where(new Criteria(pplFlds.PurchasesId) == purchasesID && new Criteria(pplFlds.IsTotalAmountRow) == 1)
                        .OrderBy(pplFlds.PurchPymntDetailsId);
                    });

                    SyncPayment(connection, ppdList, totalAmount);
                }

            }

        }



        /// <summary>
        /// The PreventDefault method must be called before calling this method.
        /// This method creates an object of PurchasesPaymentsDetails and Inserts it into the database and returns the ID.
        /// It will also create the TotalAmount Record if it happens to be the first payment for this Purchases.
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <param name="amountPaid"></param>
        public static int OnBeforeItemInserted(IDbConnection connection, int purchasesID, decimal amountPaid)
        {
            //Here we want to get the last record that was entered for this Purchases thread
            String query = String.Format(@"SELECT TotalAmount, AmountLeft, IsTotalAmountRow FROM PurchasesPaymentsDetails WHERE PurchPymntDetailsID = 
                                        (SELECT Max(PurchPymntDetailsID) FROM PurchasesPaymentsDetails WHERE PurchasesID = {0})", purchasesID);

            SqlText sql = new SqlText(connection, query);

            
                using(IDataReader reader  = sql.ExecuteReader())
                {
                if (reader.Read())
                {

                    decimal totalAmountLeft = 0;
                    if (reader.GetBoolean(2))
                    {//i.e this is the TotalAmountRow
                        totalAmountLeft = reader.GetDecimal(0) - amountPaid;
                    }
                    else
                    {
                        totalAmountLeft = reader.GetDecimal(1) - amountPaid;
                    }



                    return CreatePurchasesPaymentDetailsRecord(connection, purchasesID, amountPaid, totalAmountLeft);
                }
                else
                {

                    decimal? totalAmount = ReceivePurchasesBizPrcs.GetTotalAmount(connection, purchasesID);
                    if (totalAmount != null)
                    {
                        CreateTotalAmountRow(connection, purchasesID, totalAmount.Value);
                        return CreatePurchasesPaymentDetailsRecord(connection, purchasesID, amountPaid, (totalAmount.Value - amountPaid));
                    }
                    else
                    {
                        throw new Exception("There has not been any Purchases");
                    }

                }
                        
                
            }
        }

        /// <summary>
        /// Syncs payment
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <param name="purchPaymntDltID"></param>
        public static void OnItemUpdated(IDbConnection connection, int purchasesID, int purchPaymntDltID)
        {
            //
            var ppdDFlds = PurchasesPaymentDetailsRow.Fields;

            List<PurchasesPaymentDetailsRow> ppdList = connection.List<PurchasesPaymentDetailsRow>(
                x =>
                {
                    x.Where(new Criteria(ppdDFlds.PurchPymntDetailsId) >= purchPaymntDltID)
                        .OrderBy(ppdDFlds.PurchPymntDetailsId, desc: true);

                });

            String query = String.Format(@"SELECT Top 1 TotalAmount, AmountLeft, IsTotalAmountRow FROM PurchasesPaymentsDetails WHERE PurchPymntDetailsID < {0} ORDER BY PurchPymntDetailsID DESC", purchPaymntDltID);
                                                            
            decimal amountLeft = 0;
            SqlText sql = new SqlText(connection, query);
            

                using(IDataReader reader = sql.ExecuteReader())
                {
                reader.Read();
                if (!Convert.ToBoolean(reader["IsTotalAmountRow"]))
                {
                    amountLeft = Convert.ToDecimal(reader["AmountLeft"]);
                }
                else
                {
                    amountLeft = Convert.ToDecimal(reader["TotalAmount"]);
                }
            }

            SyncPayment(connection, ppdList, amountLeft);


        }

        private static void SyncPayment(IDbConnection connection, List<PurchasesPaymentDetailsRow> ppdList, decimal? totalAmount)
        {
            if (ppdList != null)
            {
                for (int i = 0; i < ppdList.Count; i++)
                {
                    //The result of this subtraction being AmountLeft
                    totalAmount = totalAmount - ppdList[i].AmountPaid.Value;
                    ppdList[i].AmountLeft = totalAmount;
                    connection.UpdateById<PurchasesPaymentDetailsRow>(ppdList[i]);
                }
            }
        }

    }
}
