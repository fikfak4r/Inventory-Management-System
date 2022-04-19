using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
using System.IO;
using System.Collections;
using System.Text.RegularExpressions;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;
using System.Linq;





namespace InventoryManagement.Processes
{

    /// <summary>
    /// 
    /// Summary description for Utilities
    /// </summary>
    public class Utilities
    {

        private static SqlConnection conn;
        private static SqlCommand comm;


        private static int loopControl = 0;
        private static String initGenVal;
        private static String initGenVal_2;

        public Utilities()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        /// <summary>
        /// Returns a random number generated from the min and max Value supplied
        /// </summary>
        /// <param name="minVal"></param>
        /// <param name="maxVal"></param>
        /// <returns></returns>

        public static String genRandNum(int minVal, int maxVal)
        {
            Random rand = new Random();

            int genVal = 0;

            genVal = rand.Next(minVal, maxVal);

            rand = null;

            return Convert.ToString(genVal);
        }

        /// <summary>
        /// Makes sure that a randomly generated number is unique within the column of a table. 
        /// Sometimes we may want to prepend a prerix to the id generated and if deemed not neccessary an empty string is appended.("")
        /// </summary>
        /// <param name="minVal"></param>
        /// <param name="maxVal"></param>
        /// <param name="connString"></param>
        /// <param name="tableName"></param>
        /// <param name="columnName"></param>
        /// <param name="id_Prefix">Sometime we may want to prepend a prefix to the id generated and if deemed not neccessary an empty string should be appended.("")</param>
        /// <returns></returns>

        public static String getRandNumIntegrity(int minVal, int maxVal, String connString, String tableName, String columnName, int maxLengthOfIDToGenerate)
        {



            loopControl = 0;
            //About connection.
            String connStr = ConfigurationManager.ConnectionStrings[connString].ConnectionString;
            conn = new SqlConnection(connStr);
            comm = new SqlCommand();
            comm.Connection = conn;
            conn.Open();

            String returnVal = "";

            //if (!refDb(comm, tableName, columnName, returnVal))
            //{//That is, id will not be unique in the said table column

            do
            {
                initGenVal = genRandNum(minVal, maxVal);
                initGenVal_2 = initGenVal;
                returnVal = initGenVal;

                ++loopControl;
                //returnVal = returnAppendix(initGenVal, loopControl) + id_Prefix + initGenVal_2;
                if (returnVal != "")
                    returnVal = returnAppendix(returnVal, loopControl, minVal, maxVal);
                else
                    returnVal = initGenVal;


                if (returnVal.Length > maxLengthOfIDToGenerate)
                {
                    string store = returnVal;
                    returnVal = returnVal.Substring(0, maxLengthOfIDToGenerate - 3);
                    returnVal = returnVal + genRandNum(7, Convert.ToInt32(store.Substring(0, 4)));
                    returnVal = returnVal.Substring(0, maxLengthOfIDToGenerate);
                }
                else if (returnVal.Length < maxLengthOfIDToGenerate)
                {
                    int val = 0;
                    do
                    {

                        try
                        {
                            returnVal = returnVal + genRandNum(7, Convert.ToInt32(returnVal));
                        }
                        catch (Exception e)
                        {

                            returnVal = returnVal + genRandNum(7, Convert.ToInt32(returnVal.Substring(0, 4)));
                        }

                    } while (returnVal.Length < maxLengthOfIDToGenerate);

                    returnVal = returnVal.Substring(0, maxLengthOfIDToGenerate);

                }


            } while (!refDb(comm, tableName, columnName, returnVal));
            //}




            conn.Close();

            return returnVal;
        }//Ends the getRandNumIntegrity


        public static String getRandIDIntegrity(int minVal, int maxVal, String connString, String tableName, String columnName, String id_Prefix)
        {



            initGenVal = genRandNum(minVal, maxVal);
            initGenVal_2 = initGenVal;
            String returnVal = id_Prefix + initGenVal;

            loopControl = 0;
            //About connection.
            String connStr = ConfigurationManager.ConnectionStrings[connString].ConnectionString;
            conn = new SqlConnection(connStr);
            comm = new SqlCommand();
            comm.Connection = conn;
            conn.Open();


            if (!refDb(comm, tableName, columnName, returnVal))
            {//That is, id will not be unique in the said table column

                do
                {
                    ++loopControl;
                    returnVal = returnAppendix(initGenVal, loopControl) + id_Prefix + initGenVal_2;
                } while (!refDb(comm, tableName, columnName, returnVal));
            }




            conn.Close();

            return returnVal;
        }//Ends the getRandNumIntegrity



        /// <summary>
        /// This method receives an SqlCommand object to handle the request
        /// </summary>
        /// <param name="minVal"></param>
        /// <param name="maxVal"></param>
        /// <param name="comm"></param>
        /// <param name="tableName"></param>
        /// <param name="columnName"></param>
        /// <param name="id_Prefix"></param>
        /// <returns></returns>
        /*
        public static String getRandNumIntegrity(int minVal, int maxVal, SqlCommand comm, String tableName, String columnName)

        {
            String id_Prefix = "";

            string returnVal_2 = "";

            initGenVal = genRandNum(minVal, maxVal);
            initGenVal_2 = initGenVal;
            //String returnVal = id_Prefix + initGenVal;
            String returnVal = "";

            loopControl = 0;

            //if (returnVal.Length >= maxLengthofIDtoGenerate)
            //    returnVal_2 = returnVal.Substring(0, (maxLengthofIDtoGenerate - 1));
            //else
            //    returnVal_2 = returnVal;

            //if (!refDb(comm, tableName, columnName, returnVal_2))
            //{//That is, id will not be unique in the said table column

                do
                {
                    //returnVal = returnAppendix(initGenVal, loopControl) + id_Prefix + initGenVal_2;
                    if (returnVal != "")
                        returnVal = id_Prefix + returnAppendix(returnVal, loopControl, minVal, maxVal);
                    else
                        returnVal = initGenVal;

                    //if (returnVal.Length >= maxLengthofIDtoGenerate)
                    //    returnVal = returnVal.Substring(0, (maxLengthofIDtoGenerate - 1));
                    //else
                    //    returnVal_2 = returnVal;

                } while (!refDb(comm, tableName, columnName, returnVal) );
            //}




            return returnVal;
        }//Ends the getRandNumIntegrity
        */


        private static bool refDb(SqlCommand comm, String tableName, String columnName, String returnVal)
        {
            bool retVal = true;
            comm.CommandText = "select " + columnName + " from " + tableName + " where " + columnName + " = '" + returnVal + "'";

            SqlDataReader reader = comm.ExecuteReader();
            if (reader.Read())
            {
                //Entering here means the generated number is not going to be 
                //unique in the said table column.
                retVal = false;
            }
            reader.Close();
            return retVal;
        }


        private static string returnAppendix(String seed, int loopControl, int minVal, int maxVal)
        {
            //String retVal = "";
            String str_1 = "";
            int chgN = 0;
            try
            {
                chgN = Convert.ToInt32(seed) * Convert.ToInt32(genRandNum(2, 9));
                //chgN = Convert.ToInt32(seed);

            }
            catch (Exception e)
            {
                str_1 = genRandNum(minVal, maxVal);
            }

            initGenVal = chgN.ToString();

            //String str_1 =
            // initGenVal.Replace("0", "W")
            //.Replace("1", "X")
            //.Replace("2", "Y")
            //.Replace("3", "Z")
            //.Replace("4", "A")
            //.Replace("5", "B")
            //.Replace("6", "C")
            //.Replace("7", "D")
            //.Replace("8", "E")
            //.Replace("9", "F");


            str_1 = initGenVal.Replace("0", "2")
             .Replace("1", "4")
             .Replace("2", "8")
             .Replace("3", "9")
             .Replace("4", "6")
             .Replace("5", "3")
             .Replace("6", "1")
             .Replace("7", "2")
             .Replace("8", "5")
             .Replace("9", "7");


            //for (int x = 0; x < str_1.Length && x < loopControl; x++)
            //{

            //    while (str_1.Length <= loopControl)
            //    {
            //        str_1 += str_1;
            //    }

            //    retVal = str_1.Substring(0, loopControl);
            //}


            //retVal += "_";

            return str_1.Replace("-", "");
        }

        private static string returnAppendix(String seed, int loopControl)
        {
            //String retVal = "";

            int chgN = 0;
            try
            {
                chgN = Convert.ToInt32(seed) * 9;
            }
            catch (Exception e)
            {
                // chgN = Convert.ToInt32(seed) / 8;
            }

            initGenVal = chgN.ToString();

            //String str_1 =
            // initGenVal.Replace("0", "W")
            //.Replace("1", "X")
            //.Replace("2", "Y")
            //.Replace("3", "Z")
            //.Replace("4", "A")
            //.Replace("5", "B")
            //.Replace("6", "C")
            //.Replace("7", "D")
            //.Replace("8", "E")
            //.Replace("9", "F");

            String str_1 =
          initGenVal.Replace("0", "2")
         .Replace("1", "4")
         .Replace("2", "8")
         .Replace("3", "9")
         .Replace("4", "6")
         .Replace("5", "3")
         .Replace("6", "1")
         .Replace("7", "2")
         .Replace("8", "5")
         .Replace("9", "0");


            //for (int x = 0; x < str_1.Length && x < loopControl; x++)
            //{

            //    while (str_1.Length <= loopControl)
            //    {
            //        str_1 += str_1;
            //    }

            //    retVal = str_1.Substring(0, loopControl);
            //}


            //retVal += "_";

            return str_1.Replace("-", "");
        }

        /// <summary>
        /// Returns only File-Name -Apllies basically for Image files.
        /// </summary>
        /// <param name="originalFileName">This should be the file name of the of the file to upload.</param>
        /// <param name="absolute_OutPutDirectoryName">This is the full path to the directory where the file is to be stored.</param>
        /// <param name="maxLength_of_Output_FileName">Value must not be less than 5 or a max value of 25 must be set</param>
        /// <param name="min_Appended_Random_Number">Value must be between 1000 - 1000000</param>
        /// <param name="max_Appended_Random_Number">Value must be between 1000 - 1000000</param>
        /// <returns></returns>
        /// 
        public static String getFileNameIntegrity(String originalFileName, String absolute_OutPutDirectoryName, int maxLength_of_Output_FileName, int min_Appended_Random_Number, int max_Appended_Random_Number)
        {

            String retVal = "";
            loopControl = 0;

            String fileAbsolutePath = absolute_OutPutDirectoryName.ToString();



            String[] rtnFileNames = Directory.GetFiles(absolute_OutPutDirectoryName, "*.*");
            String[] rtnFileNames_2 = new String[rtnFileNames.Length];

            for (int x = 0; x < rtnFileNames_2.Length; x++)
            {
                rtnFileNames_2[x] = Path.GetFileName(rtnFileNames[x]);
            }

            String fileName = originalFileName;
            String proposedFileName = "";

            if (fileName.Length < maxLength_of_Output_FileName)
            {
                if (checkFileNameIntegrity(rtnFileNames_2, fileName) == false)
                {
                    //Entering here means name is not unique

                    if (originalFileName.Length > 5)
                    {//i.e when filename is greater than 5
                        String seed = genRandNum(min_Appended_Random_Number, max_Appended_Random_Number - 1);
                        String stripedName = originalFileName.Substring(0, 5);
                        do
                        {
                            ++loopControl;
                            proposedFileName = stripedName + returnAppendix(seed, loopControl) + seed + Path.GetExtension(originalFileName);
                            retVal = proposedFileName;
                        } while (!checkFileNameIntegrity(rtnFileNames_2, proposedFileName));

                    }
                    else
                    {//i.e when filename is less than 5.
                        String seed_1 = genRandNum(min_Appended_Random_Number, max_Appended_Random_Number);
                        do
                        {
                            ++loopControl;
                            proposedFileName = originalFileName + returnAppendix(seed_1, loopControl) + seed_1 + Path.GetExtension(originalFileName);
                            retVal = proposedFileName;
                        } while (!checkFileNameIntegrity(rtnFileNames_2, proposedFileName));
                    }

                    retVal = proposedFileName;

                }
                else
                {//Meaning name is unique.
                    retVal = fileName;
                }

            }
            else
            {//It came here because the filename is longer in length than what is expected.

                String seed_2 = genRandNum(min_Appended_Random_Number, max_Appended_Random_Number - 1);
                String stripedName_2 = originalFileName.Substring(0, 5);
                do
                {
                    ++loopControl;
                    proposedFileName = stripedName_2 + returnAppendix(seed_2, loopControl) + seed_2 + Path.GetExtension(originalFileName);
                    retVal = proposedFileName;
                } while (!checkFileNameIntegrity(rtnFileNames_2, proposedFileName));

            }

            return retVal;
        }//getFileNameIntegrity.

        private static Boolean checkFileNameIntegrity(String[] filesInDir, String proposedFileName)
        {
            bool retVal = true;
            for (int x = 0; x < filesInDir.Length; x++)
            {
                if (filesInDir[x] == proposedFileName)
                {
                    retVal = false;
                    break;
                }
            }

            return retVal;
        }

        /// <summary>
        /// This method gets and encode HTML tags and some special characters 
        /// that will not be allowed for insertion
        /// into the database and encodes it in an informal format suitable for insertion 
        /// into the database.
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static String formatDBInput(String str)
        {
            string retVal = str.Replace(">", "ampgt;")//This applies when html tags are not allowed.
                    .Replace("<", "amplt;")//This applies when html tags are not allowed.
                    .Replace("<", "&lt;")//This applies when html tags are allowed and that is for the <a href> for now.
                    .Replace("\n", "lt;brgt;")
                    .Replace("&", "amp;")
                    .Replace("+", "pl;")
                    .Replace("#", "ash;");
            return retVal;

        }

        /// <summary>
        /// This method spits out the correct HTML tags and special characters
        /// that was encoded and stored in the Database 
        /// in an informal format
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string formatDBOutput(String str)
        {
            if (str == "" || str == null)
            {
                return null;
            }
            else
            {


                string retVal = str.Replace("lt;brgt;", "<br/>")
                    .Replace("lt;pgt;", "<p/>")
                    .Replace("amplt;", "<")//This applies when html tags are allowed and that is for the <a href> for now.
                    .Replace("ampgt;", ">")
                    .Replace("rvslt;", "&lt;")//This applies when html tags are not allowed.
                    .Replace("rvsgt;", "&gt;")//This applies when html tags are not allowed.
                    .Replace("amp;", "&")
                    .Replace("pl;", "+")
                    .Replace("ash;", "#");
                return retVal;
            }
        }

        public static string formatForTextArea(String str)
        {
            if (str == "" || str == null)
            {
                return null;
            }
            else
            {


                string retVal = str.Replace("lt;brgt;", "\n")
                    .Replace("lt;pgt;", "\n\n")
                    .Replace("amplt;", "")//This applies when html tags are allowed and that is for the <a href> for now.

                    //.Replace("ampgt;", "")//Addressed in a Regex below

                    .Replace("rvslt;", "<")//This applies when html tags are not allowed.
                    .Replace("rvsgt;", ">")//This applies when html tags are not allowed.
                    .Replace("amp;", "&")
                    .Replace("pl;", "+")
                    .Replace("ash;", "#");



                Regex regex = new Regex(@"a href=[\w\W]+ target='_blank' ampgt;");
                foreach (Match match in regex.Matches(retVal))
                {
                    retVal = retVal.Replace(match.ToString(), "");
                }

                regex = new Regex("/aampgt;"); //Addresses /a>
                foreach (Match match in regex.Matches(retVal))
                {
                    retVal = retVal.Replace(match.ToString(), "");
                }

                regex = new Regex("ampgt;"); //Addresses >
                foreach (Match match in regex.Matches(retVal))
                {
                    retVal = retVal.Replace(match.ToString(), "");
                }

                return retVal;

            }
        }

        /// <summary>
        /// This method ensures that when an article or comment is sent out
        /// that the substring terminates at reasonable point ie a full stop or comma
        /// that occured first-backwards on the original string it received
        /// through its String parameter. This method is used when their is a request for read-more
        /// and when the characters gotten from database query is complete. i.e not to be used when 
        /// characters from a database query is lesser than than the max-number of charcaters explicitly defined.
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static String trimArticleComment(String str)
        {
            String retVal = str;
            int lgth = 1;


            if (str.LastIndexOf("amplt;a") != -1)
            {//For the <a href> link
                lgth = str.LastIndexOf("amplt;a");
                retVal = str.Substring(0, lgth);
                if (str.Contains("/aampgt;"))
                {
                    retVal = str.Substring(0, str.LastIndexOf("/aampgt;") + 8);
                }
            }
            else if (str.LastIndexOf(".") != -1)
            {
                lgth = str.LastIndexOf(".");
                retVal = str.Substring(0, lgth + 1);
            }
            else if (str.LastIndexOf(",") != -1)
            {
                lgth = str.LastIndexOf(",");
                retVal = str.Substring(0, lgth + 1);
            }

            else if (str.LastIndexOf(" ") != -1)
            {
                lgth = str.LastIndexOf(" ");
                retVal = str.Substring(0, lgth + 1);
            }

            else
            {
                retVal = str;

            }

            return retVal;
        }


        /// <summary>
        /// Returns object in order of Latency
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="dt"></param>
        /// <returns></returns>
        public static object[] arrange_Ascending(object[] obj, DateTime[] dt)
        {

            int counter_1 = 0;
            DateTime[] append_Val = new DateTime[dt.Length];
            object[] new_ObjRef = new object[dt.Length];


            //Represent an instance of the specific moment time
            DateTime dt_Now = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, DateTime.Now.Hour, DateTime.Now.Minute, DateTime.Now.Second);


            for (int x = 0; x < dt.Length; x++)
            {
                append_Val[x] = dt[x];//Get the integer equivalent
            }//Ends the for loop.

            int right_Pos_Ref = 0;

            for (int y = 0; y < append_Val.Length; y++)
            {

                if (append_Val[y] != dt_Now)
                {
                    if (evaluate_Val_1(y, append_Val, dt_Now))
                    {
                        new_ObjRef[right_Pos_Ref] = obj[y];
                        append_Val[y] = dt_Now;
                        ++counter_1;
                        ++right_Pos_Ref;
                    }
                }

                if (y == append_Val.Length - 1)
                {
                    if (counter_1 < append_Val.Length)
                    {
                        y = -1;
                    }
                    else { break; }
                }


            }//Ends the for loop.

            //if (new_ObjRef[0] == null) { new_ObjRef[0] = ""; }
            return new_ObjRef;
        }


        /// <summary>
        /// Returns object in order of Recency
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="dt"></param>
        /// <returns></returns>
        public static object[] arrange_Descending(object[] obj, DateTime[] dt)
        {

            int counter_1 = 0;
            DateTime[] append_Val = new DateTime[dt.Length];
            object[] new_ObjRef = new object[dt.Length];


            //Represent an instance of the specific moment time
            DateTime dt_Now = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, DateTime.Now.Hour, DateTime.Now.Minute, DateTime.Now.Second);


            for (int x = 0; x < dt.Length; x++)
            {
                append_Val[x] = dt[x];//Get the integer equivalent
            }//Ends the for loop.

            int right_Pos_Ref = 0;

            for (int y = 0; y < append_Val.Length; y++)
            {

                if (append_Val[y] != dt_Now)
                {
                    if (evaluate_Val(y, append_Val, dt_Now))
                    {
                        new_ObjRef[right_Pos_Ref] = obj[y];
                        append_Val[y] = dt_Now;
                        ++counter_1;
                        ++right_Pos_Ref;
                    }
                }

                if (y == append_Val.Length - 1)
                {
                    if (counter_1 < append_Val.Length)
                    {
                        y = -1;
                    }
                    else { break; }
                }


            }//Ends the for loop.

            //if (new_ObjRef[0] == null) { new_ObjRef[0] = ""; }
            return new_ObjRef;
        }


        private static bool evaluate_Val(int ref_Guy, DateTime[] append_Val, DateTime dt_Now)
        {
            bool retVal = true;


            for (int y = 0; y < append_Val.Length; y++)
            {
                if (append_Val[y] != dt_Now)
                {
                    if (append_Val[ref_Guy] >= append_Val[y])
                    {
                        retVal = true;
                    }
                    else
                    {
                        retVal = false;
                        break;
                    }
                }
            }//Ends the for loop.

            return retVal;
        }

        private static bool evaluate_Val_1(int ref_Guy, DateTime[] append_Val, DateTime dt_Now)
        {
            bool retVal = true;


            for (int y = 0; y < append_Val.Length; y++)
            {
                if (append_Val[y] != dt_Now)
                {
                    if (append_Val[ref_Guy] <= append_Val[y])
                    {
                        retVal = true;
                    }
                    else
                    {
                        retVal = false;
                        break;
                    }
                }
            }//Ends the for loop.

            return retVal;
        }

        /// <summary>
        /// String passed to the parameter name and value must be in this sequence: "value_1(0)value_2(0)value_3(0) . . . . ."
        /// </summary>
        /// <param name="ddl"></param>
        /// <param name="name">String must be in this sequence "value_1(0)value_2(0)value_3(0) . . . . ."</param>
        /// <param name="value"></param>
        public static void appendListItem(DropDownList ddl, string name, string value)
        {
            string[] str = new string[1];
            str[0] = "(0)";
            string[] str_1 = name.Split(str, StringSplitOptions.None);
            string[] str_2 = value.Split(str, StringSplitOptions.None);

            ListItemCollection lic = new ListItemCollection();
            ListItem[] li = new ListItem[str_2.Length];

            for (int x = 0; x < str_2.Length; x++)
            {
                li[x] = new ListItem(str_1[x], str_2[x]);
            }//Ends the for loop.
            lic.AddRange(li);
            ddl.DataSource = lic;
            ddl.DataTextField = "Text";
            ddl.DataValueField = "Value";
            ddl.DataBind();


            //BizUnitName.
        }


        /// <summary>
        /// Returns the value for a control that was created dynamically by the
        /// code behind and returns a N/A value if no value was entered in the control
        /// </summary>
        /// <param name="request"></param>
        /// <param name="key"></param>
        /// <returns></returns>
        public static string getControl_TextBoxValue(HttpRequest request, string key)
        {
            string rtnVal = "";

            string[] rtnKeys = request.Form.AllKeys;

            for (int x = 0; x < rtnKeys.Length; x++)
            {
                if (rtnKeys[x].Contains(key))
                {
                    rtnVal = request.Form.Get(x);
                    break;
                }
            }//Ends the loop


            if (rtnVal == "")
                rtnVal = "N/A";

            return rtnVal;
        }



        public static string getControl_TextBoxValue_ForScores(HttpRequest request, string key)
        {
            string rtnVal = "";

            string[] rtnKeys = request.Form.AllKeys;

            for (int x = 0; x < rtnKeys.Length; x++)
            {
                if (rtnKeys[x].Contains(key))
                {
                    rtnVal = request.Form.Get(x);
                    break;
                }
            }//Ends the loop


            if (rtnVal == "")
                rtnVal = "0";

            return rtnVal;
        }

        /// <summary>
        /// Returns the value of a Key and returns N/A if not found or contains an empty value.
        /// </summary>
        /// <param name="request"></param>
        /// <param name="key"></param>
        /// <returns></returns>
        public static string getControl_Value(HttpRequest request, string key)
        {
            string rtnVal = "";

            string[] rtnKeys = request.Form.AllKeys;

            for (int x = 0; x < rtnKeys.Length; x++)
            {
                if (rtnKeys[x].Contains(key))
                {
                    rtnVal = request.Form.Get(x);
                    break;
                }
            }//Ends the loop


            if (rtnVal == "")
                rtnVal = "N/A";

            return rtnVal;
        }

        public static string msg(string infoMsg, string style)
        {
            return "<div style='width:450px;font-weight:bold;color:#000;border-bottom:1px solid #CCCCCC;margin-bottom:8px;" + style + "'>" + infoMsg + "</div>";
        }

        public static string infoMsg(string infoMsg, string style)
        {
            return "<div style='width:450px;font-weight:bold;color:Maroon;border-bottom:1px solid #CCCCCC;margin-bottom:6px;" + style + "'><img src='../images/info.ico' width='28' alt='' style='margin-right:8px'/>" + infoMsg + "</div>";
        }

        public static string successMsg(string infoMsg, string style)
        {
            return "<div style='width:450px;font-weight:bold;color:#003399;border-bottom:1px solid #CCCCCC;margin-bottom:6px;" + style + "'><img src='../images/check.ico' width='28' alt='' style='margin-right:8px' />" + infoMsg + "</div>";
        }


        public static String getSuccessMessageTemplate(String message, String style)
        {

            String str = "";
            str += "<div style='border-left: 6px solid #36c;padding:3px;padding-left:6px;background: #e5ecf9;color:#333;" + style + "'>";
            str += message;
            str += "</div>";

            return str;

        }

        public static String getInfoMessageTemplate(String message, String style)
        {

            String str = "";
            str += "<div style='border-left: 6px solid Maroon;padding:3px;padding-left:6px;background:Orange;color:#333;" + style + "'>";
            str += message;
            str += "</div>";

            return str;

        }



        public static String formatName(String name)
        {
            if (String.IsNullOrEmpty(name))
                return "";
            else
                if (String.IsNullOrEmpty(name.Trim()))
                    return "";


            name = name.ToLower();
            String firstChar = name.Substring(0, 1);
            String remainingXters = "";

            if (name.Length > 1)
                remainingXters = name.Substring(1, name.Length - 1);

            return firstChar.ToUpper() + remainingXters;
        }


        public static void saveIntent(SqlCommand comm, String userID, String intent)
        {
            comm.CommandText = "INSERT INTO AuditTrail (DateTime, UserID, Intent) VALUES(getDate(), '" + userID + "', '" + intent + "')";
            comm.ExecuteNonQuery();
        }

        public static String AccessDeniedMessage()
        {
            String str = "";
            str = getInfoMessageTemplate("Access Denied.", "margin-top:8px;margin-bottom:8px");
            return str;
        }

        /// <summary>
        /// Formats the decimal value into Nigerian Naira money Culture
        /// </summary>
        /// <param name="money"></param>
        /// <returns></returns>
        public static string GetMoney(decimal money)
        {
            return String.Format("&#x20A6; {0:#,#.00###;(#,#.00###);0.00}", money);
        }


        public static IDataReader GetIDataReader(IDbCommand command, string query)
        {
            comm.CommandText = query;
            return command.ExecuteReader();
        }

        //2017-02-16
        public static class GetNextNumberHelper
        {
            public static BusinessObjects.GetNextNumberResponse GetNextNumber(IDbConnection connection, BusinessObjects.GetNextNumberRequest request,
                Field field)
            {
                var prefix = request.Prefix ?? "";

                var max = connection.Query<string>(new SqlQuery()
                    .From(field.Fields)
                    .Select(Sql.Max(field.Expression))
                    .Where(
                        field.StartsWith(prefix) &&
                        field >= prefix.PadRight(request.Length, '0') &&
                        field <= prefix.PadRight(request.Length, '9')))
                    .FirstOrDefault();

                var response = new BusinessObjects.GetNextNumberResponse();

                long l;
                response.Number = max == null ||
                    !long.TryParse(max.Substring(prefix.Length), out l) ? 1 : l + 1;

                response.Serial = prefix + response.Number.ToString()
                    .PadLeft(request.Length - prefix.Length, '0');

                return response;
            }
        }

    }
}
