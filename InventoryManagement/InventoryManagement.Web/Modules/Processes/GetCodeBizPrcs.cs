using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.Web;
using Serenity.Data;
using System.Data;
using InventoryManagement.Administration.Entities;

namespace InventoryManagement.BusinessObjects.Repositories
{
    public class GetCodeBizPrcs
    {

        public static int CreateGetCode(IDbConnection connection, int accountID, int? locationID, bool isAllLocation)
        {
            return (int)connection.InsertAndGetID<GetCodeRow>(new GetCodeRow() 
            { 
                AccountId = accountID, 
                LocationId = locationID,
                LinkCode = GetLinkCode(accountID, locationID, isAllLocation),
                FormCode = GetFormCode(accountID, locationID, isAllLocation)
            });
        }

        public static string GetLinkCode(int accountID, int? locationID, bool isAllLocation)
        {
            return String.Format("<a href='{0}'>Contact us</a>", GetUrl(accountID, locationID, isAllLocation));

        }

        public static string GetFormCode(int accountID, int? locationID, bool isAllLocation)
        {
            return String.Format("<iframe src='{0}' style='width:auto;height:auto;border:1px solid #ccc'></iframe>", GetUrl(accountID, locationID, isAllLocation));
        }

        public static string GetUrl(int accountID, int? locationID, bool isAllLocation)
        {

            string url = "http://localhost:3348/Pages/Message.aspx";
            if (!isAllLocation)
                return String.Format(@"{0}?acct={1}&loc={2}", url, accountID, locationID);

            return String.Format(@"{0}?acct={1}", url, accountID);

        }

        public static void SetLoginPageNavViewBags(string acct, string loc, out string signUpUrl, out string loginUrl, out string forgetPasswordUrl)
        {

            string forgetPasswordUrl1 = "";
            string signUpUrl1 = "";
            string loginUrl1 = "";

            if (acct != null && loc != null)
            {
                forgetPasswordUrl1 = String.Format("~/Account/ForgotPassword?acct={0}&loc={1}", acct, loc);
                signUpUrl1 = String.Format("~/Account/SignUp?acct={0}&loc={1}", acct, loc);
                loginUrl1 = String.Format("~/?acct={0}&loc={1}", acct, loc);
            }
            else if (acct != null)
            {
                forgetPasswordUrl1 = String.Format("~/Account/ForgotPassword?acct={0}", acct);
                signUpUrl1 = String.Format("~/Account/SignUp?acct={0}", acct);
                loginUrl1 = String.Format("/?acct={0}", acct);
            }
            else
            {
                signUpUrl1 = String.Format("~/Account/SignUp");
                forgetPasswordUrl1 = String.Format("~/Account/ForgotPassword");
                loginUrl1 = String.Format("/Account/Login");
            }

            forgetPasswordUrl = forgetPasswordUrl1;
            signUpUrl = signUpUrl1;
            loginUrl = loginUrl1;

        }

    }


}