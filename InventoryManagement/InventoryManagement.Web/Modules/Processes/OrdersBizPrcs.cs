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
    /// Summary description for OrdersBizPrcs
    /// </summary>
    public class OrdersBizPrcs
    {
        public OrdersBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public static string GenerateID(IDbConnection connection, string dbTableName, string dbColName, string prefix, int locationID)
        {

            String query = String.Format(@"SELECT {4} FROM {3} WHERE LocationID = {0} AND 
                                        {4} = (SELECT Max({4}) FROM {3} WHERE LocationID = {1} AND {4} LIKE '{2}-%' AND IsIntegerTrailingOrderIDWithPrefix{2} = 1)
                                        ",
                                           locationID, locationID, prefix, dbTableName, dbColName);

            SqlText sql = new SqlText(connection, query);

            object obj = sql.ExecuteScalar();
            if (obj == null)
            {
                return prefix + "-000001";
            }
            else
            {
                string orderID = Convert.ToString(obj);
                string[] orderArr = orderID.Split('-');
                int orderIDInt = Convert.ToInt32(orderArr[1]);
                ++orderIDInt;
                string rtnVal = "";
                switch (orderIDInt.ToString().ToCharArray().Length)
                {
                    case 1:
                        rtnVal = prefix + "-00000" + orderIDInt;
                        break;
                    case 2:
                        rtnVal = prefix + "-0000" + orderIDInt;
                        break;
                    case 3:
                        rtnVal = prefix + "-000" + orderIDInt;
                        break;
                    case 4:
                        rtnVal = prefix + "-00" + orderIDInt;
                        break;
                    case 5:
                        rtnVal = prefix + "-0" + orderIDInt;
                        break;
                    default:
                        rtnVal = prefix + "-" + orderIDInt;
                        break;

                }
                return rtnVal;
            }

        }


        /// <summary>
        /// This methods checks if the trailing data after the passed prefix delimited by '-' is actually an integer 
        /// </summary>
        /// <param name="orderID"></param>
        /// <returns></returns>
        public static bool CheckIsIntegerTrailingOrderIDPrefix(string prefix, string orderID)
        {
            string[] orderIDArr = orderID.Split('-');
            if (orderIDArr != null && orderIDArr.Length == 2)
            {
                try
                {
                    Convert.ToInt32(orderIDArr[1]);
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
            else
                return false;
        }

    }

}