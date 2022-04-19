

namespace InventoryManagement.Processes
{
  


    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Data;
    using InventoryManagement.BusinessObjects.Entities;
    using Serenity;
    using Serenity.Data;
    

    public class StockBizPrcs 
    {


        /// <summary>
        /// This method adds up an already existing stock for a Product in a Location or
        /// create a new record of stock for the Product in a Location if it does not exist before.
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="productID"></param>
        /// <param name="uomAndPriceID"></param>
        /// <param name="quantity"></param>
        /// <param name="unitOfMeasurement"></param>
        public static void InsertUpdateItem(IDbConnection connection, int locID, int productID, int uomAndPriceID, double quantity, UnitOfMeasurement unitOfMeasurement)
        {

            //String query = String.Format("SELECT * FROM Stocks WHERE ProductID = {0} AND LocationID = {1}", productID, locID);
            //StockRow stock = connection.TrySingle<StockRow>(new Criteria("ProductId") == productID & new Criteria("LocationId") == locID);
            var stkFlds = StockRow.Fields;
            StockRow stock = connection.TrySingle<StockRow>(x =>
            {
                x.SelectTableFields(new StockRow())
                //.Where(new Criteria(stkFlds.Quantity) == productID && new Criteria(stkFlds.QuantityInUnit) == locID);

                .Where(new Criteria(stkFlds.ProductId) == productID && new Criteria(stkFlds.LocationId) == locID);
            });


                
            if (stock != null)
            {
                double existingQuantity = stock.Quantity.Value;

                //decimal quantitytoTransfer = ((existingQuantity) + (quantity));
                
                quantity = existingQuantity + UnitOfMeasurementBizPrcs.CalcQuantity(connection, uomAndPriceID, quantity, unitOfMeasurement);
                String query_1 = String.Format("UPDATE Stocks SET Quantity = {2}, QuantityInUnit = '{3}' WHERE ProductID = {0} AND LocationID = {1}", productID, locID, quantity, UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, quantity, UnitOfMeasurement.PurchasesUOM));
                connection.Execute(query_1);
            }
            else
            {

                quantity = UnitOfMeasurementBizPrcs.CalcQuantity(connection, uomAndPriceID, quantity, unitOfMeasurement);

                StockRow stock_1 = new StockRow();
                stock_1.ProductId = productID;
                stock_1.LocationId = locID;
                stock_1.Quantity = quantity;
                stock_1.QuantityInUnit = UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, quantity, UnitOfMeasurement.PurchasesUOM);

                connection.Insert<StockRow>(stock_1);

            }


        }

        public static void InsertUpdateItemInLeastUnit(IDbConnection connection, int locID, int productID, double quantityInLeastUnit)
        {
            double? existingQuantity = null;

            //String query = String.Format("SELECT * FROM Stocks WHERE ProductID = {0} AND LocationID = {1}", productID, locID);
            StockRow stock = connection.TrySingle<StockRow>(new Criteria("ProductId") == productID & new Criteria("LocationId") == locID);

            if (stock != null)
                existingQuantity = stock.Quantity.Value;
        

            if (existingQuantity != null)
            {

                double totalQuantity = (existingQuantity.Value + quantityInLeastUnit);
                String query_1 = String.Format("UPDATE Stocks SET Quantity = {2}, QuantityInUnit = '{3}' WHERE ProductID = {0} AND LocationID = {1}", productID, locID, totalQuantity,
                                 UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, totalQuantity, UnitOfMeasurement.PurchasesUOM));

                connection.Execute(query_1);

            }
            else
            {

                StockRow stock_1 = new StockRow();
                stock_1.ProductId = productID;
                stock_1.LocationId = locID;
                stock_1.Quantity = quantityInLeastUnit;
                stock_1.QuantityInUnit = UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, quantityInLeastUnit, UnitOfMeasurement.PurchasesUOM);
                connection.Insert<StockRow>(stock_1);

            }


        }



        /// <summary>
        /// USED BASICALLY FOR TRANSFOR OF STOCK. This method adds up an already existing stock for a Product in a Location or
        /// create a new record of stock for the Product in a Location if it does not exist before.
        /// </summary>
        /// <param name="locID"></param>
        /// <param name="productID"></param>
        /// <param name="uomAndPriceID"></param>
        /// <param name="quantitytoTransfer"></param>
        /// <param name="unitOfMeasurement"></param>
        public static void InsertUpdateItem(IDbConnection connection, int locID, int productID, double quantitytoTransfer)
        {

            //String query = String.Format("SELECT * FROM Stocks WHERE ProductID = {0} AND LocationID = {1}", productID, locID);
            StockRow stock = connection.TrySingle<StockRow>(new Criteria("ProductId") == productID & new Criteria("LocationId") == locID);

            if (stock != null)
            {
                double  existingQuantity = stock.Quantity.Value;

                quantitytoTransfer = ((existingQuantity) + (quantitytoTransfer));
                String query_1 = String.Format("UPDATE Stocks SET Quantity = {2}, QuantityInUnit = '{3}' WHERE ProductID = {0} AND LocationID = {1}", productID, locID, quantitytoTransfer, UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, quantitytoTransfer, UnitOfMeasurement.PurchasesUOM));
                connection.Execute(query_1);
            }
            else
            {
                StockRow stock_1 = new StockRow();
                stock_1.ProductId = productID;
                stock_1.LocationId = locID;
                stock_1.Quantity = quantitytoTransfer;
                stock_1.QuantityInUnit = UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, quantitytoTransfer, UnitOfMeasurement.PurchasesUOM);
            
                connection.Insert<StockRow>(stock_1);
            }

        }

        public static void DeductItem(IDbConnection connection, int locationID, int productID, int uOMAndPriceID, double quantityToDeduct, UnitOfMeasurement unitOfMeasurement)
        {
            //Stocks stock = Stocks.SelectSingle(String.Format("ProductID = {0} AND LocationID = {1}", productID, locationID));
            //if (stock != null)
            //{
            //    stock.Quantity = stock.Quantity.Value - UnitOfMeasurementBizPrcs.CalcQuantity(locationID, uOMAndPriceID, quantity, unitOfMeasurement);
            //    stock.Update();
            //}
            //StockBizPrcs.g
            StockRow stock = connection.TrySingle<StockRow>(new Criteria("ProductId") == productID & new Criteria("LocationId") == locationID);

            if (stock != null)
            {
                double existingQuantity = stock.Quantity.Value;
                quantityToDeduct = UnitOfMeasurementBizPrcs.CalcQuantity(connection, uOMAndPriceID, quantityToDeduct, unitOfMeasurement);
                double quantity = (existingQuantity - quantityToDeduct);
                String query_1 = String.Format("UPDATE Stocks SET Quantity = {2}, QuantityInUnit = '{3}' WHERE ProductID = {0} AND LocationID = {1}", productID, locationID, quantity,
                                 UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, quantity, UnitOfMeasurement.PurchasesUOM));
                connection.Execute(query_1);
            }

        }

        public static void DeductItem(IDbConnection connection, int locationID, int productID, double quantityToDeductInLeastUnit)
        {

            //Stocks stock = Stocks.SelectSingle(String.Format("ProductID = {0} AND LocationID = {1}", productID, locationID));
            //if (stock != null)
            //{
            //    stock.Quantity = stock.Quantity.Value - UnitOfMeasurementBizPrcs.CalcQuantity(locationID, uOMAndPriceID, quantity, unitOfMeasurement);
            //    stock.Update();
            //}

            String query = String.Format("SELECT * FROM Stocks WHERE ProductID = {0} AND LocationID = {1}", productID, locationID);
            StockRow stock = connection.TrySingle<StockRow>(new Criteria("ProductId") == productID & new Criteria("LocationId") == locationID);

            if (stock != null)
            {
                double existingQuantity = stock.Quantity.Value;
                double quantity = (existingQuantity - quantityToDeductInLeastUnit);
                String query_1 = String.Format("UPDATE Stocks SET Quantity = {2}, QuantityInUnit = '{3}' WHERE ProductID = {0} AND LocationID = {1}", productID, locationID, quantity,
                    UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, quantity, UnitOfMeasurement.PurchasesUOM));
                connection.Execute(query_1);
            }


        }


        public static void AdjustStock(IDbConnection connection, int locID, int productID, int uomAndPriceID, double quantity, UnitOfMeasurement unitOfMeasurement)
        {

            quantity = UnitOfMeasurementBizPrcs.CalcQuantity(connection, uomAndPriceID, quantity, unitOfMeasurement);
            String query_1 = String.Format("UPDATE Stocks SET Quantity = {2}, QuantityInUnit = '{3}' WHERE ProductID = {0} AND LocationID = {1}", productID, locID, quantity, UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, quantity, UnitOfMeasurement.PurchasesUOM));
            connection.Execute(query_1);

        }
        /// <summary>
        /// Gets the stock as it is in the DB(Least UoM)
        /// </summary>
        /// <param name="connection"></param>
        /// <param name="locationID"></param>
        /// <param name="productID"></param>
        /// <returns></returns>
        public static double GetRawStock(IDbConnection connection, int locationID, int productID)
        {
            double rawStock = 0;
            StockRow stock = connection.TrySingle<StockRow>(new Criteria("ProductId") == productID & new Criteria("LocationId") == locationID);

            if (stock != null)
                rawStock = stock.Quantity.Value;

            return rawStock;

        }


        //public static string GetCurrentStockWithDelimitedUnit(IDbConnection connection, int locationID, int productID, UnitOfMeasurement uom)
        //{
        //    return UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(connection, productID, GetRawStock(connection, locationID, productID), uom);
        //}


        public static string GetCurrentStockWithDelimitedUnit(IDbConnection connection, int locationID, int productID, UnitOfMeasurement uom)
        {
            var stk = StockRow.Fields.As("stk");
            SqlQuery sql = new SqlQuery();
            sql.From(stk)
                .Select(stk.QuantityInUnit)
                 .Where(new Criteria("ProductId") == productID & new Criteria("LocationId") == locationID);

            return connection.Query<string>(sql).Single();

        }


        /// <summary>
        /// Deletes previously existing record if it exist and re-initializes it with a Quantity of 0
        /// </summary>
        /// <param name="locationID"></param>
        /// <param name="productID"></param>
        public static void InitializeStock(IDbConnection connection, int locationID, int productID)
        {
            
            connection.Execute(String.Format("DELETE FROM Stocks WHERE LocationID = {0} AND ProductID = {1}", locationID, productID));
            connection.Execute(String.Format("INSERT INTO Stocks (LocationID, ProductID, Quantity) VALUES({0},{1},0)", locationID, productID));
      
            //using (var connection = SqlConnections.NewFor<Entities.CustomerRow>())
            //{
            //    connection.Execute("");
            //}

            //String query = "";
            //query = String.Format("DELETE FROM Stocks WHERE LocationID = {0} AND ProductID = {1}", locationID, productID);
            //using (SqlText sql = new SqlText(query))
            //{
            //    sql.ExecuteNonQuery();
            //}

            

            //query = String.Format("INSERT INTO Stocks (LocationID, ProductID, Quantity) VALUES({0},{1},0)", locationID, productID);
            //using (SqlText sql = new SqlText(query))
            //{
            //    sql.ExecuteNonQuery();
            //}

        }

        public static void InitializeStockList(IDbConnection connection, List<int> locationList, int productID)
        {

            foreach (int locationId in locationList)
            {
                connection.Execute(String.Format("DELETE FROM Stocks WHERE LocationID = {0} AND ProductID = {1}", locationId, productID));
                connection.Execute(String.Format("INSERT INTO Stocks (LocationID, ProductID, Quantity) VALUES({0},{1},0)", locationId, productID));
            }
            //using (var connection = SqlConnections.NewFor<Entities.CustomerRow>())
            //{
            //    connection.Execute("");
            //}

            //String query = "";
            //query = String.Format("DELETE FROM Stocks WHERE LocationID = {0} AND ProductID = {1}", locationID, productID);
            //using (SqlText sql = new SqlText(query))
            //{
            //    sql.ExecuteNonQuery();
            //}



            //query = String.Format("INSERT INTO Stocks (LocationID, ProductID, Quantity) VALUES({0},{1},0)", locationID, productID);
            //using (SqlText sql = new SqlText(query))
            //{
            //    sql.ExecuteNonQuery();
            //}

        }


    }
}