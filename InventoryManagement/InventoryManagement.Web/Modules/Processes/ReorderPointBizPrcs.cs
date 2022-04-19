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
    /// Summary description for ReorderPointBizPrcs
    /// </summary>
    public class ReorderPointBizPrcs
    {
        public ReorderPointBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public static void InitializeReOrderPoint(IDbConnection connection, int? productID)
        {

            String qry = String.Format(@"INSERT INTO ReorderPoints (ProductID) 
                                    VALUES({0})", productID);
            connection.Execute(qry);
        }

    }

}