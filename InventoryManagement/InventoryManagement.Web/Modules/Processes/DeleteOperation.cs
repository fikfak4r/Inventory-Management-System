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
    /// Summary description for DeleteOperation
    /// </summary>
    public class DeleteOperation
    {
        public DeleteOperation()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public static void DeleteChildren(IDbConnection connection, int parentID, string parentColumnName, string[] childrenTableSchemas)
        {
            DeleteChildrenOperation_1 dco = new DeleteChildrenOperation_1(parentID, parentColumnName, childrenTableSchemas);
            dco.Delete(connection);
        }


        public static void OnBeforeProductDelete(IDbConnection connection, int productID, int locationID)
        {

            string[] children = new string[]{
                String.Format("ProductsLocations:ProductsLocationsID:AND LocationID = {0}", locationID),
                };
            DeleteChildren(connection, productID, "ProductID", children);
            // DeleteWithClause("ProductsLocations", "ProductID", productID, locationID);
        }

        public static void OnBeforeSupplierDelete(IDbConnection connection, int supplierID, int locationID)
        {
            List<int> productIDList = SuppliersBizPrcs.GetProductIDs(connection, supplierID);

            //Deletes ProductsLocations
            for (int x = 0; x < productIDList.Count; x++)
            {
                OnBeforeProductDelete(connection, productIDList[x], locationID);
            }//Ends the for loop

            string[] children = new string[]{
                String.Format("SuppliersLocations:SuppliersLocationsID:AND LocationID = {0}", locationID),
                };
            DeleteChildren(connection, supplierID, "SupplierID", children);
        }

        public static void OnBeforeCustomerDelete(IDbConnection connection, int customerID, int locationID)
        {
            string[] children = new string[]{
                String.Format("CustomersLocations:CustomersLocationsID:AND LocationID = {0}", locationID),
                };
            DeleteChildren(connection, customerID, "CustomerID", children);
        }

        public static void OnBeforeBankDelete(IDbConnection connection, int bankID, int locationID)
        {
            string[] children = new string[]{
                String.Format("BanksLocations:BankLocationID:AND LocationID = {0}", locationID),
                };
            DeleteChildren(connection, bankID, "BankID", children);
        }

        public static void OnBeforePurchaseDelete(IDbConnection connection, int purchasesID)
        {
            string[] child = new string[]{
                String.Format("PurchasesDetails:PurchasesDetailsID"),
                };
            DeleteChildren(connection, purchasesID, "PurchasesID", child);

            child = new string[]{
                String.Format("ReceivePurchases:ReceivePurchasesID"),
                };
            DeleteChildren(connection, purchasesID, "PurchasesID", child);

            child = new string[]{
                String.Format("ReturnOutwardsDetails:RtnOutwardsDtlsID"),
                };
            DeleteChildren(connection, purchasesID, "PurchasesID", child);

            child = new string[]{
                String.Format("Unstock:UnStockID"),
                };
            DeleteChildren(connection, purchasesID, "PurchasesID", child);

            child = new string[]{
                String.Format("PurchasesDetails:PurchasesDetailsID"),
                };
            DeleteChildren(connection, purchasesID, "PurchasesID", child);

            child = new string[]{
                String.Format("PurchasesPaymentsDetails:PurchPymntDetailsID"),
                };
            DeleteChildren(connection, purchasesID, "PurchasesID", child);

            child = new string[]{
                String.Format("ReturnOutwardsPayments:RtnOutwardsPaymentID"),
                };
            DeleteChildren(connection, purchasesID, "PurchasesID", child);

        }

        public static void OnBeforeSalesDelete(IDbConnection connection, int salesID)
        {
            string[] child = new string[]{
                String.Format("SalesDetails:SalesDetailsID"),
                };
            DeleteChildren(connection,salesID, "SalesID", child);

            child = new string[]{
                String.Format("PickSalesOrders:PickSalesOrderID"),
                };
            DeleteChildren(connection,salesID, "SalesID", child);

            child = new string[]{
                String.Format("SalesInvoice:SalesInvoiceID"),
                };
            DeleteChildren(connection,salesID, "SalesID", child);

            child = new string[]{
                String.Format("ReturnInwardsDetails:RtnInwardsDtlsID"),
                };
            DeleteChildren(connection,salesID, "SalesID", child);

            child = new string[]{
                String.Format("Restock:RestockID"),
                };
            DeleteChildren(connection,salesID, "SalesID", child);

            child = new string[]{
                String.Format("SalesPaymentDetails:SalesPymntDetailsID"),
                };
            DeleteChildren(connection,salesID, "SalesID", child);

            child = new string[]{
                String.Format("ReturnInwardsPayment:RtnInwardsPaymentID"),
                };
            DeleteChildren(connection,salesID, "SalesID", child);

            child = new string[]{
                String.Format("BankTransactions:BankTransactionID"),
                };
            DeleteChildren(connection,salesID, "SalesID", child);

        }


        public static void OnBeforeProductCategoryDelete(IDbConnection connection, int productCategoryID, int locationID)
        {
            List<int> productIDList = ProductCategoryBizPrcs.GetProductIDs(connection, productCategoryID);

            for (int x = 0; x < productIDList.Count; x++)
            {
                OnBeforeProductDelete(connection, productIDList[x], locationID);
            }

            string[] children = new string[]{
                String.Format("ProductCategoryLocations:ProdCatLoctnID:AND LocationID = {0}", locationID),
                };
            DeleteChildren(connection, productCategoryID, "ProductCategoryID", children);
        }

        private static void DeleteWithClause(IDbConnection connection, string tableName, string columnName, int columnValue, int locationID)
        {
            String qry = String.Format("DELETE FROM {0} WHERE {1} = {2} AND LocationID = {3}", tableName, columnName, columnValue, locationID);
            SqlText sql = new SqlText(connection, qry);

            sql.ExecuteNonQuery();

        }

        private class DeleteChildrenOperation_1
        {

            List<string> deletables = new List<string>();

            private string parentColumnName;
            private string[] schemas;

            public DeleteChildrenOperation_1(int parentID, string parentColumnName, string[] schemas)
            {
                deletables.Add(parentID.ToString());
                this.parentColumnName = parentColumnName;
                this.schemas = schemas;
            }

            public void Delete(IDbConnection connection)
            {
                //Note the deletables variable will always be 1 greater than 
                //the schemas variable because of the parentID that was added to it in the constructor

                for (int x = 0; x < schemas.Length; x++)
                {
                    string[] schema = schemas[x].Split(':');

                    if (x > 0)
                        parentColumnName = schemas[x - 1].Split(':')[1];

                    string deletables_2 = "";

                    if (schema.Length == 2)//i.e having a clause
                        deletables_2 = GetDeletables(connection, deletables[x], schema[0], schema[1], parentColumnName, "");
                    else
                        deletables_2 = GetDeletables(connection, deletables[x], schema[0], schema[1], parentColumnName, schema[2]);

                    if (!String.IsNullOrEmpty(deletables_2))
                        deletables.Add(deletables_2);
                    else
                        break;

                }

                if (deletables.Count >= 2)
                {
                    int length = deletables.Count - 1;

                    for (int x = length; x > 0; x--)
                    {
                        string[] schema = schemas[x - 1].Split(':');
                        string query = String.Format("DELETE FROM {0} WHERE {1} IN ({2})",
                                                     schema[0], schema[1], deletables[x]);
                        SqlText sql = new SqlText(connection, query);

                        sql.ExecuteNonQuery();

                    }
                }
            }

            public string GetDeletables(IDbConnection connection, string idList, string tableName, string columnID, string referenceColumnID, string clause)
            {
                string deletables = "", deletables_1 = "";

                string query = "";
                if (string.IsNullOrEmpty(clause))
                {
                    query = String.Format("SELECT {0} FROM {1} WHERE {2} IN ({3})",
                                                  columnID, tableName, referenceColumnID, idList);
                }
                else
                {
                    query = String.Format("SELECT {0} FROM {1} WHERE {2} IN ({3}) {4}",
                                  columnID, tableName, referenceColumnID, idList, clause);
                }

                SqlText sql = new SqlText(connection, query);

                using (IDataReader reader = sql.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        deletables_1 = reader[columnID].ToString();
                        if (deletables != "")
                            deletables = String.Format("{0},{1}", deletables, deletables_1);
                        else
                            deletables = deletables_1;
                    }
                }

                return deletables;
            }

        }


    }

}