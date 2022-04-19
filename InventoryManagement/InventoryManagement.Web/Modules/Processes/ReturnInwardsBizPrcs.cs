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
    /// Summary description for ReturnInwardsBizPrcs
    /// </summary>
    public class ReturnInwardsBizPrcs
    {
        public ReturnInwardsBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public static decimal CalcTotalAmountOfReturns(IDbConnection connection, int salesID)
        {

            decimal totalAmount = 0;
            String query = String.Format("SELECT SUM(Amount) as Amt FROM ReturnInwardsDetails WHERE SalesID = {0}", salesID);
            SqlText sql = new SqlText(connection, query);

            
                object obj = sql.ExecuteScalar();

                if (obj != null && !DBNull.Value.Equals(obj))
                {
                    totalAmount = Convert.ToDecimal(obj);
                }

            return totalAmount;
        }


    }

}