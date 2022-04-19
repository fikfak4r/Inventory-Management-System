using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using InventoryManagement.BusinessObjects.Entities;
using Serenity;
using Serenity.Data;


namespace InventoryManagement.Processes
{

    public enum UnitOfMeasurement
    {  
        PurchasesUOM = 1,
        SalesUOM = 2
    }

    class UnitOfMeasurementBizPrcs
    {
        /// <summary>
        /// Multiplies qty by unitMakeUp
        /// </summary>
        /// <param name="locationID"></param>
        /// <param name="uomAndPriceID"></param>
        /// <param name="qty"></param>
        /// <param name="uom"></param>
        /// <returns></returns>
        public static double  CalcQuantity(IDbConnection connection, int uomAndPriceID, Double qty, UnitOfMeasurement uom)
        {

            Int32 unitMakeUp = -1;

            if (uom.Equals(UnitOfMeasurement.PurchasesUOM))
            {
            	PurchasesUoMAndPriceRow purchUOMAndP = connection.Single<PurchasesUoMAndPriceRow>(new Criteria("UomAndPriceId") == uomAndPriceID);
                unitMakeUp = purchUOMAndP.UnitMakeUp.Value;
            }
            else if(uom.Equals(UnitOfMeasurement.SalesUOM))
            {
                SalesUoMAndPriceRow slsUOMAndP = connection.Single<SalesUoMAndPriceRow>(new Criteria("UomAndPriceId") == uomAndPriceID);
                unitMakeUp = slsUOMAndP.UnitMakeUp.Value;
            }

            if (unitMakeUp != -1)
            {
                return qty * unitMakeUp;
            }

            return unitMakeUp;

        }

        //public static string CalcQuantityWithUnitsDelimited(IDbConnection connection, int productID, decimal qty, UnitOfMeasurement uom)
        //{
        //    string val = "";
        //    if (uom.Equals(UnitOfMeasurement.PurchasesUOM))
        //    {
        //        var flds = PurchasesUoMAndPriceRow.Fields;

        //        List<PurchasesUoMAndPriceRow> purchUOMAndPList = connection.List<PurchasesUoMAndPriceRow>(x => {
        //            x.SelectTableFields()
        //            .Where(new Criteria(flds.ProductId) == productID)
        //                .OrderBy(flds.UnitMakeUp, desc:true);
        //            }); 

        //        decimal wholeValue = 0;
        //        decimal modulusValue = 0;
        //        for (int x = 0; x < purchUOMAndPList.Count; x++)
        //        {
        //            modulusValue = (qty % purchUOMAndPList[x].UnitMakeUp.Value);

        //            if (modulusValue == 0)
        //            {
        //                if (val == "")
        //                    val = (qty / purchUOMAndPList[x].UnitMakeUp.Value) + " " + purchUOMAndPList[x].UnitName;
        //                else
        //                    val = String.Format("{0}, {1}", val, qty + " " + purchUOMAndPList[x].UnitName);
        //                break;
        //            }
        //            else if (modulusValue > 0 && modulusValue != qty)
        //            {
        //                wholeValue = Math.Truncate((qty/purchUOMAndPList[x].UnitMakeUp.Value));
        //                qty = modulusValue;

        //                if (val == "")
        //                    val = wholeValue + " " + purchUOMAndPList[x].UnitName;
        //                else
        //                    val = String.Format("{0}, {1}", val, wholeValue + " " + purchUOMAndPList[x].UnitName);

        //            }
        //            else
        //            {
        //                //StandardUoMRow stdUOM = connection.Single<StandardUoMRow>(new Criteria("ProductID") == productID);

        //                //if (val == "")
        //                //    val = qty + " " + stdUOM.StandardUnitName + "(s)";
        //                //else
        //                //    val = String.Format("{0}, {1}", val, qty + " " + stdUOM.StandardUnitName + "(s)");
        //                //break;

        //                ProductRow prod = connection.ById<ProductRow>(productID);

        //                if (val == "")
        //                    val = qty + " " + prod.LeastUnitName + "(s)";
        //                else
        //                    val = String.Format("{0}, {1}", val, qty + " " + prod.LeastUnitName + "(s)");
        //                break;

        //            }

        //        }

        //    }
        //    else if (uom.Equals(UnitOfMeasurement.SalesUOM))
        //    {
        //        throw new NotImplementedException("SalesUOM not yet implemented #Fikoli");
        //    }

        //    return val;
        //}

        public static string CalcQuantityWithUnitsDelimited(IDbConnection connection, int productID, double qtyInLeastUnit, UnitOfMeasurement uom)
        {
            string val = "";

            List<PurchasesDetailsRow> purchDtlLst = GetPurchasesUoMAndPriceToPrecision(connection, productID, qtyInLeastUnit, uom);

            foreach (PurchasesDetailsRow purchDtl in purchDtlLst)
            {
                if (val == "")
                {
                    val = String.Format("{0} {1}", purchDtl.Quantity, purchDtl.UomAndPriceUnitName);
                    //val = String.Format("{0} {1}", Math.Truncate((qty / purchUOMAndPList[x].UnitMakeUp.Value)), purchUOMAndPList[x].UnitName);
                }
                else
                {
                    val = String.Format("{0}, {1} {2}", val, purchDtl.Quantity, purchDtl.UomAndPriceUnitName);
                    //val = String.Format("{0}, {1} {2}", val, Math.Truncate((qty / purchUOMAndPList[x].UnitMakeUp.Value)), purchUOMAndPList[x].UnitName);
                }

            }


            return val;




            if (uom.Equals(UnitOfMeasurement.PurchasesUOM))
            {
                var flds = PurchasesUoMAndPriceRow.Fields;

                List<PurchasesUoMAndPriceRow> purchUOMAndPList = connection.List<PurchasesUoMAndPriceRow>(x =>
                {
                    x.SelectTableFields()
                    .Where(new Criteria(flds.ProductId) == productID)
                        .OrderBy(flds.UnitMakeUp, desc: true);
                });

                double wholeValue = 0;
                double modulusValue = 0;
                for (int x = 0; x < purchUOMAndPList.Count; x++)
                {

                    modulusValue = (qtyInLeastUnit % purchUOMAndPList[x].UnitMakeUp.Value);

                    if (modulusValue != qtyInLeastUnit)
                    {
                        if (val == "")
                        {
                            val = String.Format("{0} {1}", Math.Truncate((qtyInLeastUnit / purchUOMAndPList[x].UnitMakeUp.Value)), purchUOMAndPList[x].UnitName);
                        }
                        else
                        {
                            val = String.Format("{0}, {1} {2}", val, Math.Truncate((qtyInLeastUnit / purchUOMAndPList[x].UnitMakeUp.Value)), purchUOMAndPList[x].UnitName);
                        }

                    }

                    if (modulusValue == 0)
                        break;
                    else
                        qtyInLeastUnit = modulusValue;

                    //modulusValue = 0;

                }//Ends the for loop

                if (modulusValue != 0)
                {
                    ProductRow prod = connection.ById<ProductRow>(productID);
                    val = String.Format("{0}, {1} {2}", val, modulusValue, prod.LeastUnitName);
                }

            }

            return val;
        }





        public static List<PurchasesDetailsRow> GetPurchasesUoMAndPriceToPrecision(IDbConnection connection, int productID, double qtyInLeastUnit, UnitOfMeasurement uom)
        {
            string val = "";
            List<PurchasesDetailsRow> purchDltLst = new List<PurchasesDetailsRow>();
            if (uom.Equals(UnitOfMeasurement.PurchasesUOM))
            {

                var flds = PurchasesUoMAndPriceRow.Fields;

                List<PurchasesUoMAndPriceRow> purchUOMAndPList = connection.List<PurchasesUoMAndPriceRow>(x =>
                {
                    x.SelectTableFields()
                    .Where(new Criteria(flds.ProductId) == productID)
                        .OrderBy(flds.UnitMakeUp, desc: true);
                });


                //double wholeValue = 0;
                double modulusValue = 0;

                for (int x = 0; x < purchUOMAndPList.Count; x++)
                {

                        modulusValue = (qtyInLeastUnit % purchUOMAndPList[x].UnitMakeUp.Value);

                    if (modulusValue != qtyInLeastUnit)
                    {
                        //if (val == "")
                        //{
                        
                        //    val = String.Format("{0} {1}", Math.Truncate((qty / purchUOMAndPList[x].UnitMakeUp.Value)), purchUOMAndPList[x].UnitName);
                        //}
                        //else
                        //{
                        //    val = String.Format("{0}, {1} {2}", val, Math.Truncate((qty / purchUOMAndPList[x].UnitMakeUp.Value)), purchUOMAndPList[x].UnitName);
                        //}

                        purchDltLst.Add(new PurchasesDetailsRow()
                        {
                            Quantity = Math.Truncate((qtyInLeastUnit / purchUOMAndPList[x].UnitMakeUp.Value)),
                            UomAndPriceId = purchUOMAndPList[x].UomAndPriceId,
                            UomAndPriceUnitName = purchUOMAndPList[x].UnitName,
                            UnitPrice = purchUOMAndPList[x].Price
                        });

                    }

                    if (modulusValue == 0)
                        break;
                    else
                        qtyInLeastUnit = modulusValue;

                    //modulusValue = 0;

                }//Ends the for loop

                if (modulusValue != 0)
                {
                    
                    ProductRow prod = connection.ById<ProductRow>(productID);
                    val = String.Format("{0}, {1} {2}", val, modulusValue, prod.LeastUnitName);

                    throw new Exception("Create the Least UoM for this product");
                }

            }

            return purchDltLst;
        }





        public static decimal CalculateAmount(double? quantity, decimal? unitPrice, decimal? discount)
        {
            decimal amount;
            if (discount != null && discount != 0)
            {
                decimal amount1 = (Convert.ToDecimal(quantity.Value) * unitPrice.Value);
                decimal amount2 = (Convert.ToDecimal(quantity.Value) * unitPrice.Value) * discount.Value;
                amount = amount1 - amount2;
            }
            else
                amount = (Convert.ToDecimal(quantity.Value) * unitPrice.Value);

            return amount;
        }


        public static decimal? CalculateTotalAmountLeft(decimal? totalAmount, decimal? totalAmountPaid, decimal? discount, decimal? tax)
        {
            totalAmount = totalAmount - discount;

            totalAmount = totalAmount + tax;

            totalAmount = totalAmount - totalAmountPaid;

            return totalAmount;
        }


    }
}
