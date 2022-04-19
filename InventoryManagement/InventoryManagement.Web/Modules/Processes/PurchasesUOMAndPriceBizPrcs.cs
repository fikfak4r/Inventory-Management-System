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
    class PurchasesUOMAndPriceBizPrcs
    {


        /// <summary>
        /// The PreventDefault method must be called before calling this method.
        /// </summary>
        /// <param name="locationID"></param>
        /// <param name="purchUOMAndPrice"></param>
        public static void OnBeforeItemUpdated(IDbConnection connection, int locationID, bool discontinued, PurchasesUoMAndPriceRow purchUOMAndPrice)
        {

            //Set the Current PurchasesUOMAndPrice to Discontinue and Update
            var purchUOMAndPrice_1 = connection.Single<PurchasesUoMAndPriceRow>(x => { x.Where(new Criteria("UomAndPriceId") == purchUOMAndPrice.UomAndPriceId.Value); });
            //PurchasesUOMAndPrice purchUOMAndPrice_1 = PurchasesUOMAndPrice.SelectSingle(purchUOMAndPrice.UomAndPriceId);
            purchUOMAndPrice_1.Discontinued = true;
            connection.UpdateById<PurchasesUoMAndPriceRow>(purchUOMAndPrice);

            //Duplicate and insert as a new record.
            PurchasesUoMAndPriceRow purchasesUOMAndPrice = new PurchasesUoMAndPriceRow();
            purchasesUOMAndPrice.ProductId = purchUOMAndPrice.ProductId;
            purchasesUOMAndPrice.UnitName = purchUOMAndPrice.UnitName;
            purchasesUOMAndPrice.UnitMakeUp = purchUOMAndPrice.UnitMakeUp;
            purchasesUOMAndPrice.StandardUomid = purchUOMAndPrice.StandardUomid;
            purchasesUOMAndPrice.Discontinued = false;
            purchasesUOMAndPrice.Price = purchUOMAndPrice.Price;
            connection.Insert<PurchasesUoMAndPriceRow>(purchUOMAndPrice);

        }


        public static void CreateLeastUoM(IDbConnection connection, int productID, string leastUnitName)
        {

            String qry = String.Format(@"INSERT INTO PurchasesUOMAndPrice (ProductID, UnitName, UnitMakeUp, Discontinued, Price) 
                                         VALUES({0}, '{1}', 1, 0, 0)", productID, leastUnitName);

            connection.Execute(qry);
        }


        public static void DiscontinueItem(IDbConnection connection, int uomAndPriceID)
        {
            String query = String.Format("UPDATE PurchasesUOMAndPrice SET Discontinued = 1 WHERE UOMAndPriceID = {0}", uomAndPriceID);
            connection.Execute(query);
        }

        public static void ContinueItem(IDbConnection connection, int uomAndPriceID)
        {
            String query = String.Format("UPDATE PurchasesUOMAndPrice SET Discontinued = 0 WHERE UOMAndPriceID = {0}", uomAndPriceID);
            connection.Execute(query);
        }

    }
}
