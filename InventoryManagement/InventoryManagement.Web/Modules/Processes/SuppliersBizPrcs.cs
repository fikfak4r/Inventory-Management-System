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
    /// Summary description for SuppliersBizPrcs
    /// </summary>
    public class SuppliersBizPrcs
    {
        public SuppliersBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public static void AddSupplierProduct(IDbConnection connection, int supplierId, int productId)
        {
            
            ProductSupplierRow psr = new ProductSupplierRow();
            psr.SupplierId = supplierId;
            psr.ProductId = productId;

            connection.Insert<ProductSupplierRow>(psr);
        }

        public static bool IsSupplierInLocation(IDbConnection connection, int locationID, int supplierID)
        {

            bool inLoc = false;
            String query = String.Format("SELECT Count(SuppliersLocationsID) as Count FROM SuppliersLocations WHERE LocationID = {0} AND SupplierID = {1}", locationID, supplierID);
            SqlText sql = new SqlText(connection, query);


            if (Convert.ToInt32(sql.ExecuteScalar()) == 1)
            {
                inLoc = true;
            }


            return inLoc;

        }

        /// <summary>
        /// Adds to SuppliersLocations
        /// </summary>
        /// <param name="accountID"></param>
        /// <param name="locationID"></param>
        /// <param name="supplierID"></param>
        public static void AddSupplier(IDbConnection connection, int locationID, int supplierID)
        {

            ManyToManyManager.CreateManyToMany(connection, "SuppliersLocations",
                                                       locationID,
                                                       "SupplierID",
                                                       supplierID);

        }

        public static void AddSuppliers(IDbConnection connection, List<int> locationIDs, List<int> supplierIDs)
        {
            for (int i = 0; i < locationIDs.Count; i++)
            {
                for (int j = 0; j < supplierIDs.Count; j++)
                {
                    ManyToManyManager.CreateManyToMany(connection, "SuppliersLocations",
                                                               locationIDs[i],
                                                               "SupplierID",
                                                               supplierIDs[j]);
                }

            }
        }

        public static List<int> GetProductIDs(IDbConnection connection, int supplierID)
        {
            List<int> ids = new List<int>();
            SqlText sql = new SqlText(connection, String.Format("SELECT ProductID FROM Products WHERE SupplierID = {0}", supplierID));
            
            using (IDataReader reader = sql.ExecuteReader())
            {
                while (reader.Read())
                {
                    ids.Add(Convert.ToInt32(reader["ProductID"]));
                }
            }

            return ids;

        }

        public static List<int> GetLocationIDs(IDbConnection connection, int accountID, int supplierID)
        {
            List<int> ids = new List<int>();
            SqlText sql = new SqlText(connection, String.Format("SELECT LocationID FROM SuppliersLocations WHERE AccountID = {0} AND SupplierID = {1}", accountID, supplierID));
            
             using(   IDataReader reader = sql.ExecuteReader())
             {
                while (reader.Read())
                {
                    ids.Add(Convert.ToInt32(reader["LocationID"]));
                }
            }

            return ids;

        }

        public static List<int> GetNewLocationIDsAfterAnUpdate(List<int> locationIDListBeforeUpdate, List<int> locationIDListAfterUpdate)
        {

            List<int> locationIDList = new List<int>();

            bool isNew = true;
            for (int x = 0; x < locationIDListAfterUpdate.Count; x++)
            {
                isNew = true;
                for (int y = 0; y < locationIDListBeforeUpdate.Count; y++)
                {
                    if (locationIDListAfterUpdate[x] == locationIDListBeforeUpdate[y])
                    {
                        isNew = false;
                        break;
                    }
                }

                if (isNew)
                    locationIDList.Add(locationIDListAfterUpdate[x]);

            }

            return locationIDList;

        }

        public static List<int> GetDeletedLocationIDsAfterAnUpdate(List<int> locationIDListBeforeUpdate, List<int> locationIDListAfterUpdate)
        {

            List<int> locationIDList = new List<int>();

            bool isDeleted = true;

            for (int x = 0; x < locationIDListBeforeUpdate.Count; x++)
            {
                isDeleted = true;
                for (int y = 0; y < locationIDListAfterUpdate.Count; y++)
                {
                    if (locationIDListBeforeUpdate[x] == locationIDListAfterUpdate[y])
                    {
                        isDeleted = false;
                        break;
                    }
                }

                if (isDeleted)
                    locationIDList.Add(locationIDListAfterUpdate[x]);
            }

            return locationIDList;

        }

    }
}