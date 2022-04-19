using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;

namespace InventoryManagement.Processes
{

    /// <summary>
    /// Summary description for ProductCategoryBizPrcs
    /// </summary>
    public class ProductCategoryBizPrcs
    {
        public ProductCategoryBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public static List<int> GetProductIDs(IDbConnection connection, int prodCatID)
        {
            List<int> ids = new List<int>();
            SqlText sql = new SqlText(connection, String.Format(@"SELECT ProductID FROM Products Prod INNER JOIN ProductCategory ProdCat ON 
                                                       ProdCat.ProductCategoryID = Prod.ProductCategoryID WHERE ProdCat.ProductCategoryID = {0}", prodCatID));

            using (IDataReader reader = sql.ExecuteReader())
            {
                while (reader.Read())
                {
                    ids.Add(Convert.ToInt32(reader["ProductID"]));
                }
            }

            return ids;

        }

        public static void AddProductCategory(IDbConnection connection, int locationID, int productCategoryID)
        {

            ManyToManyManager.CreateManyToMany(connection, "ProductsCategoriesLocations",
                                                       locationID,
                                                       "ProductCategoryID",
                                                       productCategoryID);

        }


    }
}