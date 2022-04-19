using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using MyRepository = InventoryManagement.BusinessObjects.Repositories.ReceivePurchasesRepository;


namespace InventoryManagement.Processes
{
    class ReceivePurchasesBizPrcs
    {

        /// <summary>
        /// Creates a ReceivePurchases record
        /// </summary>
        /// <param name="purchasesDetailsID"></param>
        /// <param name="purchasesID"></param>
        /// <param name="isReceived"></param>
        /// <param name="amount"></param>
        /// <param name="uOMAndPriceID"></param>
        /// <param name="productID"></param>
        /// <param name="quantity"></param>
        public static void CreateItem(IUnitOfWork uow, ReceivePurchasesRow receive)
        {

            SaveRequest<ReceivePurchasesRow> saveRequest = new SaveRequest<ReceivePurchasesRow>();
            
            saveRequest.Entity = receive;

            new MyRepository().Create(uow, saveRequest);

        }

        public static void DeleteItem(IUnitOfWork uow, ReceivePurchasesRow receive)
        {
            
            DeleteRequest delRequest = new DeleteRequest();

            delRequest.EntityId = receive.ReceivePurchasesId;

            new MyRepository().Delete(uow, delRequest);

        }

        /// <summary>
        /// This method gets the TotalAmount of Received good for a Purchases
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <returns></returns>
        public static decimal? GetTotalAmountOfReceived(IDbConnection connection, int purchasesID)
        {
            String query = String.Format("SELECT SUM(Amount) FROM ReceivePurchases WHERE PurchasesID = {0} AND IsReceived = 1", purchasesID);
            SqlText sql = new SqlText(connection, query);
            
                object objectVar = sql.ExecuteScalar();
                if (objectVar != null && !DBNull.Value.Equals(objectVar))
                {
                    return Convert.ToDecimal(objectVar);
                }
                return null;
        }

        /// <summary>
        /// This method gets the TotalAmount of good in Purchases irrespective of wether it has been received or not
        /// </summary>
        /// <param name="purchasesID"></param>
        /// <returns></returns>
        public static decimal? GetTotalAmount(IDbConnection connection, int purchasesID)
        {
            
            String query = String.Format("SELECT SUM(Amount) FROM ReceivePurchases WHERE PurchasesID = {0}", purchasesID);
           SqlText sql = new SqlText(connection, query);
           
                object objectVar = sql.ExecuteScalar();
                if (objectVar != null && !DBNull.Value.Equals(objectVar))
                {
                    return Convert.ToDecimal(objectVar);
                }
                return null;
                
            
        }


        /// <summary>
        /// This method gets all orders on this purchases and set them as been received.
        /// It also adds them up in the stock accordingly.
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="purchasesID"></param>
        public static void SetAsFullyReceived(IDbConnection connection, int locID, int purchasesID)
        {

            List<ReceivePurchasesRow> recPurch = connection.List<ReceivePurchasesRow>(new Criteria("PurchasesId") == purchasesID);
            for (int i = 0; i < recPurch.Count; i++)
            {
                if (!recPurch[i].IsReceived.Value)
                {
                    //StockBizPrcs.InsertUpdateItem(locID, recPurch[i].ProductID.Value, recPurch[i].UOMAndPriceID.Value, recPurch[i].Quantity.Value, UnitOfMeasurement.PurchasesUOM);
                    recPurch[i].Date = DateTime.Now;
                    recPurch[i].IsReceived = true;
                    connection.UpdateById(recPurch[i]);
                }
            }

            PurchasesBizPrcs.SetStatus(connection, purchasesID, "FullyReceived");

        }



        public static void AfterAReceivedPurchasesIsUpdated(IDbConnection connection, int locationID, int purchasesID, int receivePurchasesID, FieldValue fvQuantity, FieldValue fvProduct, FieldValue fvUnitOfMeasurement)
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
                StockBizPrcs.DeductItem(connection, locationID, Convert.ToInt32(fvProduct.OldValue), oldUomID, oldQuantity, UnitOfMeasurement.PurchasesUOM);
                StockBizPrcs.InsertUpdateItem(connection, locationID, Convert.ToInt32(fvProduct.NewValue), newUomID, newQuantity, UnitOfMeasurement.PurchasesUOM);
            }
            else if (fvUnitOfMeasurement.Modified || fvQuantity.Modified)
            {
                //Quantities in Least Unit
                double oldQuantity_1 = UnitOfMeasurementBizPrcs.CalcQuantity(connection, oldUomID, oldQuantity, UnitOfMeasurement.PurchasesUOM);
                double newQuantity_1 = UnitOfMeasurementBizPrcs.CalcQuantity(connection, newUomID, newQuantity, UnitOfMeasurement.PurchasesUOM);

                if (oldQuantity_1 > newQuantity_1)
                    StockBizPrcs.DeductItem(connection, locationID, productID, (oldQuantity_1 - newQuantity_1));
                else if (newQuantity_1 > oldQuantity_1)
                    StockBizPrcs.InsertUpdateItemInLeastUnit(connection, locationID, productID, (newQuantity_1 - oldQuantity_1));
            }


        }

        public static void UpdateItem(IDbConnection connection, int receivedPurchasesID, int? purchasesDetailsID, int purchasesID, bool isReceived, decimal amount, int uOMAndPriceID, int productID, double quantity, decimal unitPrice, decimal? discount)
        {

            int isPickedInt = 0;
            if (isReceived)
            {
                isPickedInt = 1;
            }

            ReceivePurchasesRow receive = connection.TrySingle<ReceivePurchasesRow>(new Criteria("ReceivePurchasesId") == receivedPurchasesID);
            receive.PurchasesId = purchasesID;
            receive.ProductId = productID;
            receive.Quantity = quantity;
            receive.IsReceived = isReceived;
            receive.Amount = amount;
            receive.UomAndPriceId = uOMAndPriceID;
            receive.PurchasesDetailsId = purchasesDetailsID;
            receive.UnitPrice = unitPrice;
            receive.Discount = discount;
            connection.UpdateById<ReceivePurchasesRow>(receive);

        }


        /// <summary>
        /// It sums up a ReceivePurchasesRow fields like the Amount, Quantity for a product that has already been received
        /// </summary>
        /// <param name="uow"></param>
        /// <param name="purchasesId"></param>
        /// <param name="productId"></param>
        /// <param name="incomingReceivePurchase"></param>
        /// <returns></returns>
        public static ReceivePurchasesRow ConsolidateAReceivedProduct(IUnitOfWork uow, ReceivePurchasesRow incomingReceivePurchase)
        {
            ReceivePurchasesRow received = uow.Connection.TrySingle<ReceivePurchasesRow>(new Criteria("PurchasesId") == incomingReceivePurchase.PurchasesId.Value & new Criteria("ProductId") == incomingReceivePurchase.ProductId.Value);

            if (received != null)
            {
                incomingReceivePurchase.Quantity = (received.Quantity + incomingReceivePurchase.Quantity);
                incomingReceivePurchase.Discount = (received.Discount + incomingReceivePurchase.Discount);
                incomingReceivePurchase.Amount = UnitOfMeasurementBizPrcs.CalculateAmount(incomingReceivePurchase.Quantity, incomingReceivePurchase.UnitPrice, incomingReceivePurchase.Discount);

                return incomingReceivePurchase;

            }
            else
                return incomingReceivePurchase;


        }

        private static int purchasesDetailsID, productId;
        public static void AutoFill(IUnitOfWork uow, int purchasesID, int locationId)
        {

 
            List<PurchasesDetailsRow> purchasesDetailsList = PurchasesDetailsBizPrcs.GetPurchasesDetailsGroupByProduct(uow.Connection, purchasesID);

            List<ReceivePurchasesRow> receivedPurchasesList = GetReceivePurchasesDetailsGroupByProduct(uow.Connection, purchasesID);

            for (int x = 0; x < purchasesDetailsList.Count; x++)
            {

                purchasesDetailsID = purchasesDetailsList[x].PurchasesDetailsId.Value;
                productId = purchasesDetailsList[x].ProductId.Value;

                PurchasesDetailsRow theRealPurchasesDtlObj = uow.Connection.ById<PurchasesDetailsRow>(purchasesDetailsList[x].PurchasesDetailsId);

                ReceivePurchasesRow receivedPurchases = receivedPurchasesList.Find(new Predicate<ReceivePurchasesRow>(FindCorrespondingRecord));

                if (receivedPurchases != null)
                {

                    double remainingQtyInLeastUnit = purchasesDetailsList[x].TotalQuantityInLeastUnit.Value - receivedPurchases.TotalQuantityInLeastUnit.Value;

                    if(remainingQtyInLeastUnit != 0)
                    {

                        List<PurchasesDetailsRow> purchDtlLst = UnitOfMeasurementBizPrcs.GetPurchasesUoMAndPriceToPrecision(uow.Connection, productId, remainingQtyInLeastUnit, UnitOfMeasurement.PurchasesUOM);

                        foreach (PurchasesDetailsRow purchDtl in purchDtlLst)
                        {

                            ReceivePurchasesRow receive = new ReceivePurchasesRow();
                            receive.PurchasesId = purchasesID;
                            receive.ProductId = purchasesDetailsList[x].ProductId.Value;

                            receive.Quantity = purchDtl.Quantity.Value;

                            receive.IsReceived = true;
                            receive.IsFree = false;
                        receive.Amount = theRealPurchasesDtlObj.Amount.Value; //purchasesDetailsList[x].Amount.Value;
                            receive.UomAndPriceId = theRealPurchasesDtlObj.UomAndPriceId.Value;
                            receive.PurchasesDetailsId = purchasesDetailsList[x].PurchasesDetailsId.Value;
                            receive.UnitPrice = theRealPurchasesDtlObj.UnitPrice.Value; //purchasesDetailsList[x].UnitPrice.Value;
                            receive.Discount = (decimal)theRealPurchasesDtlObj.Discount; // (decimal)purchasesDetailsList[x].Discount;
                            receive.LocationId = locationId;
                            receive.Date = DateTime.Now;

                            CreateItem(uow, receive);

                        }

                    }

                    //if (purchasesDetailsList[x].ProductId.Value != receivedPurchases.ProductId.Value)
                    //{


                    //    UpdateItem(connection, receivedPurchases.ReceivePurchasesId.Value, purchasesDetailsList[x].PurchasesDetailsId.Value, purchasesID, true, purchasesDetailsList[x].Amount.Value, purchasesDetailsList[x].UomAndPriceId.Value, purchasesDetailsList[x].ProductId.Value, (decimal)purchasesDetailsList[x].Quantity.Value, purchasesDetailsList[x].UnitPrice.Value, (decimal)purchasesDetailsList[x].Discount);
                    //}
                    //else if (purchasesDetailsList[x].Quantity.Value != receivedPurchases.Quantity.Value || purchasesDetailsList[x].UomAndPriceId != receivedPurchases.UomAndPriceId)
                    //{
                    //    decimal purchasesDetailsRawQuantity = UnitOfMeasurementBizPrcs.CalcQuantity(connection, purchasesDetailsList[x].UomAndPriceId.Value, purchasesDetailsList[x].Quantity.Value, UnitOfMeasurement.PurchasesUOM);
                    //    decimal receivedPurchasesRawQuatity = UnitOfMeasurementBizPrcs.CalcQuantity(connection, receivedPurchases.UomAndPriceId.Value, receivedPurchases.Quantity.Value, UnitOfMeasurement.PurchasesUOM);

                    //    if (purchasesDetailsRawQuantity > receivedPurchasesRawQuatity)
                    //    {
                    //        UpdateItem(connection, receivedPurchases.ReceivePurchasesId.Value, purchasesDetailsList[x].PurchasesDetailsId.Value, purchasesID, true, purchasesDetailsList[x].Amount.Value, purchasesDetailsList[x].UomAndPriceId.Value, purchasesDetailsList[x].ProductId.Value, purchasesDetailsList[x].Quantity.Value, purchasesDetailsList[x].UnitPrice.Value, (decimal)purchasesDetailsList[x].Discount);
                    //    }

                    //}


                }
                else
                {
                    ReceivePurchasesRow receive = new ReceivePurchasesRow();
                    receive.PurchasesId = purchasesID;
                    receive.ProductId = theRealPurchasesDtlObj.ProductId.Value;
                    receive.Quantity = theRealPurchasesDtlObj.Quantity.Value;
                    receive.IsReceived = true;
                    receive.IsFree = false;
                    receive.Amount = theRealPurchasesDtlObj.Amount.Value;
                    receive.UomAndPriceId = theRealPurchasesDtlObj.UomAndPriceId.Value;
                    receive.PurchasesDetailsId = theRealPurchasesDtlObj.PurchasesDetailsId.Value;
                    receive.UnitPrice = theRealPurchasesDtlObj.UnitPrice.Value;
                    receive.Discount = (decimal)theRealPurchasesDtlObj.Discount;
                    receive.LocationId = locationId;
                    receive.Date = DateTime.Now;

                    CreateItem(uow, receive);
                }

                receivedPurchasesList.Remove(receivedPurchases);

            }//Ends the for loop








        }//Ends the AutoFill method

        public static bool FindCorrespondingRecord(ReceivePurchasesRow receivedPurchases)
        {

            if (receivedPurchases.PurchasesDetailsId == purchasesDetailsID && receivedPurchases.ProductId == productId)
                return true;
            else
                return false;

        }


        public static bool CheckReceiveQtyConstrainNew(IDbConnection connection, int purchasesId, int productId, double qtyInLeastUnit)
        {

            var purchasesDtls = PurchasesDetailsRow.Fields;
            var receivePurchFlds = ReceivePurchasesRow.Fields;

            PurchasesDetailsRow purchasesDtlsObj = connection.TrySingle<PurchasesDetailsRow>(x => {
                x.Select("Sum(QuantityInLeastUnit)", "TotalQuantityInLeastUnit")
                    .Where(new Criteria(purchasesDtls.PurchasesId) == purchasesId &
                    new Criteria(purchasesDtls.ProductId) == productId);
            });


            ReceivePurchasesRow receivePurch = connection.TrySingle<ReceivePurchasesRow>(x =>
            {
                x.Select("Sum(QuantityInLeastUnit)", "TotalQuantityInLeastUnit")
                    .Where(new Criteria(receivePurchFlds.PurchasesId) == purchasesId &
                    new Criteria(receivePurchFlds.ProductId) == productId);
            });



            double purchasesDtlsSum = 0;

            if (purchasesDtlsObj != null)
            {
                if (purchasesDtlsObj.TotalQuantityInLeastUnit.HasValue)
                {
                    purchasesDtlsSum = purchasesDtlsObj.TotalQuantityInLeastUnit.Value;
                }
            }



            if (receivePurch != null)
            {
                if (receivePurch.TotalQuantityInLeastUnit.HasValue)
                {
                    qtyInLeastUnit = (receivePurch.TotalQuantityInLeastUnit.Value + qtyInLeastUnit);
                }
            }



            return (purchasesDtlsSum < qtyInLeastUnit) ? false : true;


        }


        public static bool CheckReceiveQtyConstrainForUpdate(IDbConnection connection, int purchasesId, int productId, int receivePurchId, double qtyInLeastUnit)
        {

            var purchasesDtls = PurchasesDetailsRow.Fields;
            var receivePurchFlds = ReceivePurchasesRow.Fields;

            PurchasesDetailsRow purchasesDtlsObj = connection.TrySingle<PurchasesDetailsRow>(x => {
                x.Select("Sum(QuantityInLeastUnit)", "TotalQuantityInLeastUnit")
                    .Where(new Criteria(purchasesDtls.PurchasesId) == purchasesId &
                    new Criteria(purchasesDtls.ProductId) == productId);
            });


            ReceivePurchasesRow receivePurch = connection.TrySingle<ReceivePurchasesRow>(x => {
                x.Select("Sum(QuantityInLeastUnit)", "TotalQuantityInLeastUnit")
                    .Where(new Criteria(receivePurchFlds.PurchasesId) == purchasesId &
                    new Criteria(receivePurchFlds.ProductId) == productId &
                    new Criteria(receivePurchFlds.ReceivePurchasesId) != receivePurchId);
            });


            double purchasesDtlsSum = 0;

            if (purchasesDtlsObj != null)
            {
                if (purchasesDtlsObj.TotalQuantityInLeastUnit.HasValue)
                {
                    purchasesDtlsSum = purchasesDtlsObj.TotalQuantityInLeastUnit.Value;
                }
            }



            if (receivePurch != null)
            {
                if (receivePurch.TotalQuantityInLeastUnit.HasValue)
                {
                    qtyInLeastUnit = (receivePurch.TotalQuantityInLeastUnit.Value + qtyInLeastUnit);
                }
            }



            return (purchasesDtlsSum < qtyInLeastUnit) ? false : true;



        }


        /// <summary>
        /// Returns a list of ReceivePurchases details grouped by Product belonging to a particular Purchase. Fields includes: 
        /// PurchasesId, ProductId, TotalQuantityInLeastUnit
        /// </summary>
        /// <param name="connection"></param>
        /// <param name="purchasesId"></param>
        /// <param name="productId"></param>
        /// <returns></returns>
        public static List<ReceivePurchasesRow> GetReceivePurchasesDetailsGroupByProduct(IDbConnection connection, int purchasesId)
        {
            List<ReceivePurchasesRow> purchasesDetailsList = connection.List<ReceivePurchasesRow>(

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


        public static void AfterAReceivedPurchasesIsDeleted(IDbConnection connection, int locationId, int productId, int uomAndPriceId, double qty)
        {

            double qtyInLeastUnit = UnitOfMeasurementBizPrcs.CalcQuantity(connection, uomAndPriceId, qty, UnitOfMeasurement.PurchasesUOM);
            StockBizPrcs.DeductItem(connection, locationId, productId, qtyInLeastUnit);
            
        }



    }
}
