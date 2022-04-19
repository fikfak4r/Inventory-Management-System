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
    class PurchasesDetailsBizPrcs 
    {


        public static PurchasesDetailsRow GetPurchasesDetails(IDbConnection connection, int id)
        {
            return connection.ById<PurchasesDetailsRow>(id);
        }


        /// <summary>
        /// Updates the TotalAmount by adding this amount to the Previous
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="purchasesID"></param>
        /// <param name="productID"></param>
        /// <param name="uomAndPriceID"></param>
        /// <param name="quantity"></param>
        public static void OnItemInserted(IDbConnection connection, int locID, int purchasesID, int productID, int uomAndPriceID, decimal quantity)
        {

            //Purchases purchases = Purchases.SelectSingle(purchasesID);
            //purchases.HasPurchasesDetails = true;
            //purchases.Update();

            //PurchasesBizPrcs.UpdateTotalAmount(purchasesID, CalcPurchasesTotalAmount(purchasesID).Value);
            //StockBizPrcs.InsertUpdateItem(locID, productID, UnitOfMeasurementBizPrcs.CalcQuantity(locID, uomAndPriceID, quantity, UnitOfMeasurement.PurchasesUOM));

        }


        public static void OnItemUpdated(IDbConnection connection, int locID, int purchasesID, int productID, int uomAndPriceID, decimal quantity)
        {
            //OnItemInserted(locID, purchasesID, productID, uomAndPriceID, quantity);
        }


        public static bool CheckPurchasesDetailConstrainForUpdate(IDbConnection connection, int purchasesId, int productId, int purchasesDtlsId, double qtyInLeastUnit)
        {

            var purchDtls = PurchasesDetailsRow.Fields;
            var recPurchFlds = ReceivePurchasesRow.Fields;

            PurchasesDetailsRow purchDtlsObj = connection.TrySingle<PurchasesDetailsRow>(x =>
            {
                x.Select("Sum(QuantityInLeastUnit)", "TotalQuantityInLeastUnit")
                    .Where(new Criteria(purchDtls.PurchasesId) == purchasesId &
                    new Criteria(purchDtls.ProductId) == productId &
                    new Criteria(purchDtls.PurchasesDetailsId) != purchasesDtlsId);
            });


            ReceivePurchasesRow recPurch = connection.TrySingle<ReceivePurchasesRow>(x =>
            {
                x.Select("Sum(QuantityInLeastUnit)", "TotalQuantityInLeastUnit")
                 .Where(new Criteria(recPurchFlds.PurchasesId) == purchasesId &
                    new Criteria(recPurchFlds.ProductId) == productId);
            });


            bool rtnVals = true;


            if (recPurch != null)
            {
                if (recPurch.TotalQuantityInLeastUnit.HasValue)
                {
                    rtnVals = (purchDtlsObj.TotalQuantityInLeastUnit.Value + qtyInLeastUnit) < (recPurch.TotalQuantityInLeastUnit.Value) ? false : true;
                }
            }

            return rtnVals;

        }



        /// <summary>
        /// This methods checks
        /// if the PurchasesDetail deleted happens to be the Last. If it is, it then Deletes the record it refrences 
        /// in the Purchases Table and returns a true value. Otherwise, it returns a false.
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="purchasesID"></param>
        /// <param name="productID"></param>
        /// <param name="uomAndPriceID"></param>
        public static bool OnItemDeleted(IDbConnection connection, int locID, int purchasesDetailsID, int purchasesID, int productID, int uomAndPriceID)
        {

            ReceivePurchasesRow recPurchases = connection.TrySingle<ReceivePurchasesRow>(new Criteria("PurchasesDetailsID") == purchasesDetailsID);

            //ReceivePurchases recPurchases = ReceivePurchases.SelectSingle(string.Format("PurchasesDetailsID = {0}", purchasesDetailsID));
            if (!recPurchases.IsReceived.Value)
                //recPurchases.Delete();
                connection.DeleteById<ReceivePurchasesRow>(recPurchases);


            bool boolVar = false;
            object obj = null;

            obj = connection.Count<PurchasesDetailsRow>(new Criteria("PurchasesId") == purchasesID);


            if (obj == null || obj != null && Convert.ToInt32(obj) == 0)
            {

                int purchasesPymentsDtlsCount = 0, recPurchsCount = 0, rtnOutwardsCount = 0, unstockCount = 0;

                purchasesPymentsDtlsCount = connection.Count<PurchasesPaymentDetailsRow>(new Criteria("PurchasesId") == purchasesID);


                recPurchsCount = connection.Count<ReceivePurchasesRow>(new Criteria("PurchasesId") == purchasesID);


                rtnOutwardsCount = connection.Count<ReturnOutwardsDetailsRow>(new Criteria("PurchasesId") == purchasesID);


                unstockCount = connection.Count<UnstockRow>(new Criteria("PurchasesId") == purchasesID);



                if (purchasesPymentsDtlsCount == 1 && recPurchsCount == 0)
                {

                    string query_1 = String.Format("DELETE FROM PurchasesPaymentsDetails WHERE PurchasesID = {0}", purchasesID);

                    connection.Execute(query_1);
                }

                if (purchasesPymentsDtlsCount == 1 && recPurchsCount == 0 && rtnOutwardsCount == 0 && unstockCount == 0)
                {

                    String query_2 = String.Format("DELETE FROM Purchases WHERE PurchasesID = {0}", purchasesID);
                    connection.Execute(query_2);

                    boolVar = true;

                }

            }

            return boolVar;

        }


        public decimal CalCAmount(decimal amount, decimal quantity)
        {
            return quantity * amount;
        }

        public static decimal CalcPurchasesTotalAmount(IDbConnection connection, int purchasesID)
        {

            decimal totalAmount = 0;

            String query = String.Format("SELECT SUM(Amount) as Amt FROM PurchasesDetails WHERE PurchasesID = {0}", purchasesID);
            SqlText sql = new SqlText(connection, query);
            
                object obj = sql.ExecuteScalar();

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    totalAmount = Convert.ToDecimal(obj);
                }

            return totalAmount;

        }


        /// <summary>
        /// This methods gets all PurchaseDetails record and add it to Stock and sets the Purchase as FullyReceived
        /// </summary>
        /// <param name="locationID"></param>
        /// <param name="salesID"></param>
        public static void CompletePurchase(IUnitOfWork uow, int locationID, int purchaseID)
        {
            //List<PurchasesDetails> purchList = PurchasesDetails.Select(String.Format("PurchasesID = {0} AND IsReceived = 0", purchaseID));

            List<PurchasesDetailsRow> purchList = uow.Connection.List<PurchasesDetailsRow>(new Criteria("PurchasesId") == purchaseID);

            for (int x = 0; x < purchList.Count; x++)
            {

                ReceivePurchasesRow receive = new ReceivePurchasesRow();
                receive.PurchasesId = purchList[x].PurchasesId.Value;
                receive.ProductId = purchList[x].ProductId.Value;
                receive.Quantity = purchList[x].Quantity.Value;
                receive.IsReceived = true;
                receive.IsFree = false;
                receive.Amount = purchList[x].Amount.Value;
                receive.UomAndPriceId = purchList[x].UomAndPriceId.Value;
                receive.PurchasesDetailsId = purchList[x].PurchasesDetailsId.Value;
                receive.UnitPrice = purchList[x].UnitPrice.Value;
                receive.Discount = (decimal)purchList[x].Discount.Value;
                receive.LocationId = locationID;
                receive.Date = DateTime.Now;

                ReceivePurchasesBizPrcs.CreateItem(uow, receive);

            }

            ReceivePurchasesBizPrcs.SetAsFullyReceived(uow.Connection, locationID, purchaseID);

        }


        public static void ReOpen(IDbConnection connection, int locationID, int purchasesID)
        {
            //String qry = String.Format("SELECT * FROM PurchasesDetails WHERE PurchasesID = {0} AND IsReceived = 1", purchasesID);
            String qry = String.Format("SELECT * FROM ReceivePurchases WHERE PurchasesID = {0}", purchasesID);
            List<ReceivePurchasesRow> rpRowList = connection.List<ReceivePurchasesRow>(new Criteria("PurchasesId") == purchasesID);

            foreach (ReceivePurchasesRow rpRow in rpRowList)
            {
                double recvQty = UnitOfMeasurementBizPrcs.CalcQuantity(connection, rpRow.UomAndPriceId.Value, rpRow.Quantity.Value, UnitOfMeasurement.PurchasesUOM);
                StockBizPrcs.DeductItem(connection, locationID, rpRow.ProductId.Value, recvQty);
            }



            //qry = String.Format("UPDATE PurchasesDetails SET IsReceived = 0 WHERE PurchasesID = {0}", purchasesID);
            //using (SqlText sql = new SqlText(qry))
            //{
            //    sql.ExecuteNonQuery();
            //}

            qry = String.Format("DELETE FROM {0} WHERE PurchasesID = {1}", "ReceivePurchases", purchasesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE PurchasesID = {1}", "PurchasesPaymentsDetails", purchasesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE PurchasesID = {1}", "ReturnOutwardsDetails", purchasesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE PurchasesID = {1}", "ReturnOutwardsPayments", purchasesID);
            connection.Execute(qry);

            qry = String.Format("DELETE FROM {0} WHERE PurchasesID = {1}", "Unstock", purchasesID);
            connection.Execute(qry);

            decimal totalAmount = PurchasesDetailsBizPrcs.CalcPurchasesTotalAmount(connection, purchasesID);

            qry = String.Format(@"UPDATE Purchases SET TotalAmount = {1}, TotalAmountPaid = 0,
                                    TotalAmountLeft = {1}, HasPurchasesDetails = 0, Status = 'Open',
                                    IsOpen = 1, IsInProgress = 0, IsFullyReceived = 0, IsFullyPaid = 0, Discount = 0, Tax = 0
                                    WHERE PurchasesID = {0}", purchasesID, totalAmount);
            connection.Execute(qry);

        }

        /// <summary>
        /// Returns a list of PurchasesDetailsRow grouped by Product belonging to a particular Purchase. Fields includes: 
        /// PurchasesId, ProductId, TotalQuantityInLeastUnit
        /// </summary>
        /// <param name="connection"></param>
        /// <param name="purchasesId"></param>
        /// <returns></returns>
        public static List<PurchasesDetailsRow> GetPurchasesDetailsGroupByProduct(IDbConnection connection, int purchasesId)
        {
            List<PurchasesDetailsRow> purchasesDetailsList = connection.List<PurchasesDetailsRow>(

           x => {
               x.Select("PurchasesId")
               .Select("ProductId")
               .Select("PurchasesDetailsId")
                     .Select("Sum(QuantityInLeastUnit)", "TotalQuantityInLeastUnit")
                         .Where(new Criteria("PurchasesId") == purchasesId)
                         .GroupBy("PurchasesId, ProductId, PurchasesDetailsId");
           });

            return purchasesDetailsList;
        }

    }
}
