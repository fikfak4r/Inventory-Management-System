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
    public class UserBizPrcs
    {

        public static int GetAccountId()
        {
            return GetUser().AccountId;
        }

        public static UserDefinition GetUser()
        {
            return (UserDefinition)Authorization.UserDefinition;
        }


    }
}