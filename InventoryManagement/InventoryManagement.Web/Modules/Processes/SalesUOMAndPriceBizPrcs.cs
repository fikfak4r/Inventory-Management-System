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
    /// Summary description for SalesUOMAndPriceBizPrcs
    /// </summary>
    public class SalesUOMAndPriceBizPrcs
    {
        public SalesUOMAndPriceBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public static void DiscontinueItem(IDbConnection connection, int uomAndPriceID)
        {
            String query = String.Format("UPDATE SalesUOMAndPrice SET Discontinued = 1 WHERE UOMAndPriceID = {0}", uomAndPriceID);
            connection.Execute(query);
        }


        public static void CreateLeastUoM(IDbConnection connection, int productID, string leastUnitName)
        {

            String qry = String.Format(@"INSERT INTO SalesUOMAndPrice (ProductID, UnitName, UnitMakeUp, Discontinued, Price) 
                                         VALUES({0}, '{1}', 1, 0, 0)", productID, leastUnitName);
            connection.Execute(qry);

        }

    }

}