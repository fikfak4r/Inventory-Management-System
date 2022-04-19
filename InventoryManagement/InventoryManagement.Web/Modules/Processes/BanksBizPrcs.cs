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
    /// Summary description for BanksBizPrcs
    /// </summary>
    public class BanksBizPrcs
    {
        public BanksBizPrcs()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public BankRow GetBank(IDbConnection  connection, int id)
        {
            return connection.ById<BankRow>(id);
        }

        public static void AddBank(IDbConnection connection, int locationID, int customerID)
        {

            ManyToManyManager.CreateManyToMany(connection, "BanksLocations",  
                                                       locationID,
                                                       "BankID",
                                                       customerID);

        }

        public static void AddBanks(IDbConnection connection,  List<int> locationIDs, List<int> customerIDs)
        {
            for (int i = 0; i < locationIDs.Count; i++)
            {
                for (int j = 0; j < customerIDs.Count; j++)
                {
                    ManyToManyManager.CreateManyToMany(connection, "BanksLocations", 
                                                               locationIDs[i],
                                                               "BankID",
                                                               customerIDs[j]);
                }

            }
        }



    }
}