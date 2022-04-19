using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;
using Serenity.Reporting;

namespace InventoryManagement.Processes
{

    /// <summary>
    /// Summary description for ProductsBizPrcs
    /// </summary>
    public class ProductsBizPrcs
    {
        public ProductsBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public static PurchasesRow GetPurchases(IDbConnection connection, int id)
        {
            return connection.ById<PurchasesRow>(id);
        }


        public static void AddProducts(IDbConnection connection, List<int> locationIDs, List<int> productIDs)
        {
            
            for (int i = 0; i < locationIDs.Count; i++)
            {
                for (int j = 0; j < productIDs.Count; j++)
                {
                    ManyToManyManager.CreateManyToMany(connection, "ProductsLocations",
                                                               locationIDs[i],
                                                               "ProductID",
                                                               productIDs[j]);
                }

            }
        }

        /// <summary>
        /// Creates a Many to many
        /// </summary>
        /// <param name="accountID"></param>
        /// <param name="locationID"></param>
        /// <param name="productID"></param>
        public static void AddProduct(IDbConnection connection, int locationID, int productID)
        {

            ManyToManyManager.CreateManyToMany(connection, "ProductsLocations",
                                                       locationID,
                                                       "ProductID",
                                                       productID);

        }

        public static bool IsProductInLocation(IDbConnection connection, int locationID, int productID)
        {

            bool inLoc = false;
            String query = String.Format("SELECT Count(ProductsLocationsID) as Count FROM ProductsLocations WHERE LocationID = {0} AND ProductID = {1}", locationID, productID);
            SqlText sql = new SqlText(connection, query);

            if (Convert.ToInt32(sql.ExecuteScalar()) == 1)
            {
                inLoc = true;
            }

            return inLoc;
        }

        public static int? GetSupplierID(IDbConnection connection, int productID)
        {
            int? supplierID = null;
            SqlText sql = new SqlText(connection, String.Format("SELECT SupplierID FROM Products WHERE ProductID = {0}", productID));

            object obj = sql.ExecuteScalar();

            if (obj != null && !DBNull.Value.Equals(obj))
                supplierID = Convert.ToInt32(obj);


            return supplierID;

        }

        public static int? GetProductCategoryID(IDbConnection connection, int productID)
        {
            int? productCategoryID = null;
            SqlText sql = new SqlText(connection, String.Format("SELECT ProductCategoryID FROM Products WHERE ProductID = {0}", productID));

            object obj = sql.ExecuteScalar();

            if (obj != null && !DBNull.Value.Equals(obj))
                productCategoryID = Convert.ToInt32(obj);

            return productCategoryID;

        }

        public static String GetProductName(IDbConnection connection, int productID)
        {
            string productName = "";
            SqlText sql = new SqlText(connection, String.Format("SELECT ProductName FROM Products WHERE ProductID = {0}", productID));

            object obj = sql.ExecuteScalar();
            if (obj != null && !DBNull.Value.Equals(obj))
                productName = obj.ToString();

            return productName;

        }

        public static decimal GetCost(IDbConnection connection, int productID)
        {

            decimal cost = 0;

            SqlText sql = new SqlText(connection, String.Format("SELECT Cost FROM StandardUOMs WHERE ProductID = {0}", productID));

            object obj = sql.ExecuteScalar();
            if (obj != null && !DBNull.Value.Equals(obj))
            {
                cost = Convert.ToDecimal(obj);
            }

            return cost;

        }

        /// <summary>
        /// Checks if a Product exist in a Location and if it doesn't, it creates it. Then initializes the stock.
        /// </summary>
        /// <param name="Connection"></param>
        /// <param name="locationId"></param>
        /// <param name="productId"></param>
        public static void CheckAndInsertProduct(IDbConnection Connection, int locationId, int productId)
        {
            if (!ProductsBizPrcs.IsProductInLocation(Connection, locationId, productId))
            {

                int? productCatID = ProductsBizPrcs.GetProductCategoryID(Connection, productId);

                if (productCatID != null)
                    ProductCategoryBizPrcs.AddProductCategory(Connection, locationId, Convert.ToInt32(productCatID));

                int? supplierID = ProductsBizPrcs.GetSupplierID(Connection, productId);

                if (supplierID != null)
                    SuppliersBizPrcs.AddSupplier(Connection, locationId, supplierID.Value);

                ProductsBizPrcs.AddProduct(Connection, locationId, productId);

                StockBizPrcs.InitializeStock(Connection, locationId, productId);

            }
        }


    }

}