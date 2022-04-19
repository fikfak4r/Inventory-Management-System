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
    public class ManyToManyManager
    {


        public static bool IsPresent(IDbConnection connection, string tableName, int locationID, string uniqueColumnName, int uniqueColumnID)
        {

            bool isPresent = false;

            String query = String.Format("SELECT {1} FROM {0} WHERE LocationID = {2} AND {1} = {3}", tableName, uniqueColumnName, locationID, uniqueColumnID);
            SqlText sql = new SqlText(connection, query);

            object obj = sql.ExecuteScalar();
            if (obj != null && !DBNull.Value.Equals(obj))
                isPresent = true;

            return isPresent;

        }




        /// <summary>
        /// Creates a Many-to-Many record. To ensure records are not duplicated, call the IsPresent method to check.s
        /// </summary>
        /// <param name="tableName"></param>
        /// <param name="accountID"></param>
        /// <param name="locationID"></param>
        /// <param name="uniqueColumnName"></param>
        /// <param name="uniqueColumnID"></param>
        public static void CreateManyToMany(IDbConnection connection, string tableName, int locationID, string uniqueColumnName, int uniqueColumnID)
        {
                String query_1 = String.Format("INSERT INTO {0} (LocationID, {1}) VALUES({2}, {3})", tableName, uniqueColumnName, locationID, uniqueColumnID);
                SqlText sql = new SqlText(connection, query_1);
                
                sql.ExecuteNonQuery();
        }


        public static bool CheckAndCreateManyToMany(IDbConnection connection, string tableName, int locationID, string uniqueColumnName, int uniqueColumnID)
        {
            bool created = false;
            if (!IsPresent(connection, tableName, locationID, uniqueColumnName, uniqueColumnID))
            {
                //String query_1 = String.Format("INSERT INTO {0} (LocationID, {1}) VALUES({2}, {3})", tableName, uniqueColumnName, locationID, uniqueColumnID);
                //SqlText sql = new SqlText(connection, query_1);

                //sql.ExecuteNonQuery();
                CreateManyToMany(connection, tableName, locationID, uniqueColumnName, uniqueColumnID);
                created = true;

            }

            return created;

        }


    }
}
