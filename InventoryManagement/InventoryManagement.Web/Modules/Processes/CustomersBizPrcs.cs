using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Common;
using System.Data;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;

namespace InventoryManagement.Processes
{

    /// <summary>
    /// Summary description for CustomersBizPrcs
    /// </summary>
    public class CustomersBizPrcs
    {
        public CustomersBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        /// <summary>
        /// Adds to CustomersLocations
        /// </summary>
        /// <param name="accountID"></param>
        /// <param name="locationID"></param>
        /// <param name="customerID"></param>
        public static void AddCustomer(IDbConnection connection, int locationID, int customerID)
        {

            ManyToManyManager.CreateManyToMany(connection, "CustomersLocations",
                                                       locationID,
                                                       "CustomerID",
                                                       customerID);

        }

        public static void AddCustomers(IDbConnection connection, List<int> locationIDs, List<int> customerIDs)
        {
            for (int i = 0; i < locationIDs.Count; i++)
            {
                for (int j = 0; j < customerIDs.Count; j++)
                {
                    ManyToManyManager.CreateManyToMany(connection, "CustomersLocations",
                                                               locationIDs[i],
                                                               "CustomerID",
                                                               customerIDs[j]);
                }

            }
        }

        public static List<int> GetLocationIDs(IDbConnection connection, int accountID, int customerID)
        {
            List<int> ids = new List<int>();
            SqlText sql = new SqlText(connection, String.Format("SELECT LocationID FROM CustomersLocations WHERE AccountID = {0} AND CustomerID = {1}", accountID, customerID));
            
               using ( IDataReader reader = sql.ExecuteReader())
               {
                while (reader.Read())
                {
                    ids.Add(Convert.ToInt32(reader["LocationID"]));
                }
            }

            return ids;

        }


    }

}