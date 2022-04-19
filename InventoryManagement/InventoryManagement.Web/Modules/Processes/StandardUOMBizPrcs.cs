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
    /// Summary description for StandardUOMBizPrcs
    /// </summary>
    public class StandardUOMBizPrcs
    {
        public StandardUOMBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }



        public static int CreateAStandardUOM(IDbConnection connection, int productID, string standardUnitName)
        {
            //String qry = String.Format("INSERT INTO StandardUOM (ProductID, StandardUOM, Discontinued) VALUES({0}, '{1}', 0)", productID, standardUnitName);
            //using (SqlText sql = new SqlText(qry))
            //{
            //    sql.ExecuteNonQuery();
            //}


            StandardUoMRow standardUoM = new StandardUoMRow();
            standardUoM.ProductId = productID;
            standardUoM.StandardUnitName = standardUnitName;
            standardUoM.Discontinued = false;
            return (int)connection.InsertAndGetID<StandardUoMRow>(standardUoM);


        }

        public static string GetStandardUOMName(IDbConnection connection, int productID, out int standardUOMID)
        {
            string standardUOMName = ""; standardUOMID = -1;

            var stdUOM = connection.Single<StandardUoMRow>(x => { x.Where(new Criteria("ProductId") == productID); });

            if (stdUOM != null)
            {
                standardUOMID = (int)stdUOM.StandardUomid;
                standardUOMName = stdUOM.StandardUnitName;
            }

            //String query = String.Format("SELECT StandardUOMID, StandardUnitName FROM StandardUOM WHERE ProductID = {0}", productID);
            //using (SqlText sql = new SqlText(query))
            //{

            //    SqlDataReader reader = (SqlDataReader)sql.ExecuteReader();

            //    if (reader.HasRows)
            //    {
            //        sql.Read();
            //        standardUOMName = reader["StandardUnitName"].ToString();
            //        standardUOMID = Convert.ToInt32(reader["StandardUOMID"]);

            //        reader.Close();
            //    }
            //}

            return standardUOMName;
        }

        public static int GetStandardUOMID(IDbConnection connection, int productID)
        {

            var stdUOM = connection.Single<StandardUoMRow>(x => { x.Where(new Criteria("ProductId") == productID); });

            //String query = String.Format("SELECT StandardUOMID FROM StandardUOM WHERE ProductID = {0}", productID);
            //using (SqlText sql = new SqlText(query))
            //{

            //    object obj = sql.ExecuteScalar();
            //    if (obj != null && !DBNull.Value.Equals(obj))
            //        standardUOMID = Convert.ToInt32(obj);
            //}

            return (int)stdUOM.StandardUomid;
        }

    }

}