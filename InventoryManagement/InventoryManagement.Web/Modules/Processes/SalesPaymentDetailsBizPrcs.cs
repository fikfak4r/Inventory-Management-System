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
    public class SalesPaymentDetailsBizPrcs
    {

        //public static void OnItemInserted(int locID, int salesID, int purchPymntDetailsID)
        //{
        //    SalesBizPrcs.UpdateTotalAmountPaid(salesID, CalcTotalAmountPaid(salesID));
        //}


        //public static void OnItemUpdated(int locID, int salesID)
        //{
        //    SalesBizPrcs.UpdateTotalAmountPaid(salesID, CalcTotalAmountPaid(salesID));
        //}



        public static decimal GetAmountLeft(IDbConnection connection, int salesID, int? purchPaymentDltsID, FieldValue amountPaid)
        {
            decimal amountLeft = 0;

            //Here we want to get the last record that was entered for this SalesObj thread
            decimal count = 0;
            String query_1 = String.Format("SELECT Count(SalesPymntDetailsID) as count FROM SalesPaymentDetails WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query_1);

            count = Convert.ToInt32(sql.ExecuteScalar());


            if (amountPaid.Modified && count == 2)
            {
                decimal ttlAmount = 0;
                String query_2 = String.Format("SELECT TotalAmount FROM SalesPaymentDetails WHERE SalesID = {0} AND IsTotalAmountRow = 1", salesID);
                SqlText sql_1 = new SqlText(connection, query_2);

                ttlAmount = Convert.ToInt32(sql_1.ExecuteScalar());

                amountLeft = ttlAmount - Convert.ToInt32(amountPaid.NewValue);
            }
            else if (amountPaid.Modified)
            {

                decimal ttlAmount = 0;
                String query_2 = String.Format("SELECT SUM(AmountPaid) FROM SalesPaymentDetails WHERE SalesID = {0} AND SalesPymntDetailsID != {1}  AND IsTotalAmountRow != 1", salesID, purchPaymentDltsID.Value);
                SqlText sql_1 = new SqlText(connection, query_2);

                ttlAmount = Convert.ToInt32(sql_1.ExecuteScalar());


                amountLeft = PickSalesBizPrcs.GetTotalAmount(connection, salesID).Value - (ttlAmount + Convert.ToInt32(amountPaid.NewValue));
            }
            else
            {//Controll only comes in here when a new record is to be created
                String query = String.Format(@"SELECT TotalAmount, AmountLeft, IsTotalAmountRow FROM SalesPaymentDetails WHERE SalesPymntDetailsID = 
                                          (SELECT Max(SalesPymntDetailsID) FROM SalesPaymentDetails WHERE SalesID = {0})", salesID);

                sql = new SqlText(connection, query);

                IDataReader reader = sql.ExecuteReader();
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

            if (amountLeft == 0)
            {
                decimal? totalAmount = PickSalesBizPrcs.GetTotalAmount(connection, salesID);
                if (totalAmount != null)
                    amountLeft = totalAmount.Value - Convert.ToDecimal(amountPaid.Value);
            }

            return amountLeft;
        }



        public static decimal CalcTotalAmountPaid(IDbConnection connection, int salesID)
        {

            decimal totalAmount = 0;

            String query = String.Format("SELECT SUM(AmountPaid) as Amt FROM SalesPaymentDetails WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);

            object obj = sql.ExecuteScalar();

            if (obj != null && !DBNull.Value.Equals(obj))
            {
                totalAmount = Convert.ToDecimal(obj);
            }

            return totalAmount;
        }

        /// <summary>
        /// Returns the Aggregate of the AmountLeft for the SalesID
        /// </summary>
        /// <param name="salesID"></param>
        /// <returns></returns>
        public static decimal GetSumTotalAmountLeft(IDbConnection connection, int salesID)
        {

            decimal totalAmount = 0;

            String query = String.Format("SELECT SUM(AmountLeft) as Amt FROM SalesPaymentDetails WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);

            object obj = sql.ExecuteScalar();

            if (obj != null && !DBNull.Value.Equals(obj))
            {
                totalAmount = Convert.ToDecimal(obj);
            }

            return totalAmount;

        }

        public static decimal GetAmountLeft(IDbConnection connection, int salesID)
        {
            return SalesDetailsBizPrcs.CalcSalesTotalAmount(connection, salesID) - CalcTotalAmountPaid(connection, salesID);
        }

        public static bool IsTotalAmountCreated(IDbConnection connection, int salesID)
        {
            String query = String.Format("SELECT Count(SalesID) as count FROM SalesPaymentDetails WHERE SalesID = {0} AND IsTotalAmountRow = 1", salesID);
            SqlText sql = new SqlText(connection, query);

            try
            {
                object obj = sql.ExecuteScalar();
                if (obj != null && !DBNull.Value.Equals(obj) && Convert.ToInt32(obj) == 1)
                {
                    return true;
                }
                else
                    return false;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public static int CreateTotalAmountRow(IDbConnection connection, int salesID, decimal totalAmount)
        {
            SalesPaymentDetailsRow ppd = new SalesPaymentDetailsRow();
            ppd.SalesId = salesID;
            ppd.TotalAmount = totalAmount;
            ppd.AmountLeft = totalAmount;
            ppd.IsTotalAmountRow = true;
            ppd.Date = DateTime.Now;
            return (int)connection.InsertAndGetID<SalesPaymentDetailsRow>(ppd);

        }

        private static int CreateSalesPaymentDetailsRecord(IDbConnection connection, int salesID, decimal amountPaid, decimal totalAmountLeft)
        {
            SalesPaymentDetailsRow ppd = new SalesPaymentDetailsRow();
            ppd.SalesId = salesID;
            ppd.AmountPaid = amountPaid;
            ppd.AmountLeft = totalAmountLeft;
            ppd.IsTotalAmountRow = false;
            ppd.Date = DateTime.Now;
            return (int)connection.InsertAndGetID<SalesPaymentDetailsRow>(ppd);

        }
        /// <summary>
        /// This method get the TotalAmount in SalesInvoice and sets it as that of SalesPaymentDetails's TotalAmount column
        /// and the syncs(recalculculates) the AmountLeft for records of SalesPaymentDetails for this SalesObj accordingly. 
        /// It also creates the TotalAmount Row is has not yet been created
        /// </summary>
        /// <param name="salesID"></param>
        public static void SyncPayment(IDbConnection connection, int salesID)
        {
            decimal? totalAmount = SalesInvoiceBizPrcs.GetTotalAmount(connection, salesID);

            if (!IsTotalAmountCreated(connection, salesID) && totalAmount != null)
                CreateTotalAmountRow(connection, salesID, totalAmount.Value);


            if (totalAmount != null)
            {
                SalesPaymentDetailsRow ppd = connection.Single<SalesPaymentDetailsRow>(new Criteria("SalesId") == salesID & new Criteria("IsTotalAmountRow") == 1); //SalesPaymentDetails.SelectSingle(String.Format("SalesID = {0} AND IsTotalAmountRow = 1", salesID));

                if (ppd != null)
                {
                    ppd.TotalAmount = totalAmount;
                    connection.UpdateById(ppd);
                    var flds = SalesPaymentDetailsRow.Fields;

                    //string qry = String.Format("SalesID = {0} AND IsTotalAmountRow != 1", salesID);
                    List<SalesPaymentDetailsRow> ppdList = connection.List<SalesPaymentDetailsRow>(x =>
                    {
                        x.Where(new Criteria(flds.SalesId) == salesID & new Criteria(flds.IsTotalAmountRow) == 1)
                            .OrderBy(flds.SalesPymntDetailsId);
                    });

                    SyncPayment(connection, ppdList, totalAmount);
                }

            }

        }



        /// <summary>
        /// The PreventDefault method must be called before calling this method.
        /// This method creates an object of SalesPaymentDetails and Inserts it into the database and returns the ID.
        /// It will also create the TotalAmount Record if it happens to be the first payment for this SalesObj.
        /// </summary>
        /// <param name="salesID"></param>
        /// <param name="amountPaid"></param>
        public static int OnBeforeItemInserted(IDbConnection connection, int salesID, decimal amountPaid)
        {
            //Here we want to get the last record that was entered for this SalesObj thread
            String query = String.Format(@"SELECT TotalAmount, AmountLeft, IsTotalAmountRow FROM SalesPaymentDetails WHERE SalesPymntDetailsID = 
                                        (SELECT Max(SalesPymntDetailsID) FROM SalesPaymentDetails WHERE SalesID = {0})", salesID);

            SqlText sql = new SqlText(connection, query);

            using (IDataReader reader = sql.ExecuteReader())
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



                    return CreateSalesPaymentDetailsRecord(connection, salesID, amountPaid, totalAmountLeft);
                }
                else
                {

                    decimal? totalAmount = PickSalesBizPrcs.GetTotalAmount(connection, salesID);
                    if (totalAmount != null)
                    {
                        CreateTotalAmountRow(connection, salesID, totalAmount.Value);
                        return CreateSalesPaymentDetailsRecord(connection, salesID, amountPaid, (totalAmount.Value - amountPaid));
                    }
                    else
                    {
                        throw new Exception("There has not been any SalesObj");
                    }

                }


            }
        }

        /// <summary>
        /// Syncs payment
        /// </summary>
        /// <param name="salesID"></param>
        /// <param name="purchPaymntDltID"></param>
        public static void OnItemUpdated(IDbConnection connection, int salesID, int purchPaymntDltID)
        {
            var flds = SalesPaymentDetailsRow.Fields;
            List<SalesPaymentDetailsRow> ppdList = connection.List<SalesPaymentDetailsRow>(
                x =>
                {

                    x.Where(new Criteria(flds.SalesPymntDetailsId) >= purchPaymntDltID)
                        .OrderBy(flds.SalesPymntDetailsId);
                }); //SalesPaymentDetails.Select(String.Format("SalesPymntDetailsID >= {0}", purchPaymntDltID), "SalesPymntDetailsID ASC");

            String query = String.Format(@"SELECT Top 1 TotalAmount, AmountLeft, IsTotalAmountRow FROM SalesPaymentDetails WHERE SalesPymntDetailsID < {0} ORDER BY SalesPymntDetailsID DESC", purchPaymntDltID);

            decimal amountLeft = 0;
            SqlText sql = new SqlText(connection, query);

            using (IDataReader reader = sql.ExecuteReader())
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

        private static void SyncPayment(IDbConnection connection, List<SalesPaymentDetailsRow> ppdList, decimal? totalAmount)
        {
            if (ppdList != null)
            {
                for (int i = 0; i < ppdList.Count; i++)
                {
                    //The result of this subtraction being AmountLeft
                    totalAmount = totalAmount - ppdList[i].AmountPaid.Value;
                    ppdList[i].AmountLeft = totalAmount;
                    connection.UpdateById(ppdList[i]);
                }
            }
        }

    }




}