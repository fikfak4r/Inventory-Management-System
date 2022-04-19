using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using InventoryManagement.BusinessObjects.Entities;


namespace InventoryManagement
{
    public class MovementHistoryBehavior : IImplicitBehavior, ISaveBehavior, IDeleteBehavior,
        IListBehavior, IRetrieveBehavior
    {


        private double leastUnitQtyBefore;
        private string qtyBeforeWithUnit;
      

        public bool ActivateFor(Row row)
        {

            var mt = row as IMovementHistory;

            if (mt == null)
                return false;
   

            return true;

        }

        

        public void OnAfterDelete(IDeleteRequestHandler handler)
        {
            
        }

        public void OnAfterExecuteQuery(IRetrieveRequestHandler handler)
        {
            
        }

        public void OnAfterExecuteQuery(IListRequestHandler handler)
        {
            
        }

        public void OnAfterSave(ISaveRequestHandler handler)
        {
            IMovementHistory imh = (IMovementHistory)handler.Row;
            double qty = Processes.UnitOfMeasurementBizPrcs.CalcQuantity(handler.Connection, imh.UomAndPriceIdField.Value, imh.QuantityField.Value, Processes.UnitOfMeasurement.PurchasesUOM);

            MovementHistoryRow mhr = new MovementHistoryRow();
            mhr.ProductId = imh.ProductIdField;
            mhr.PurchaseId = imh.PurchaseIdField;
            mhr.Date = DateTime.Now;
            mhr.Quantity = Processes.UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(handler.Connection, imh.ProductIdField.Value,
                           qty, Processes.UnitOfMeasurement.PurchasesUOM);
            mhr.QuantityBefore = qtyBeforeWithUnit;
            mhr.QuantityAfter = Processes.UnitOfMeasurementBizPrcs.CalcQuantityWithUnitsDelimited(handler.Connection, imh.ProductIdField.Value,
                                (qty + leastUnitQtyBefore), Processes.UnitOfMeasurement.PurchasesUOM);

            mhr.TransactionType = imh.TransactionType;

            handler.Connection.Insert<MovementHistoryRow>(mhr);


        }

        public void OnApplyFilters(IListRequestHandler handler, SqlQuery query)
        {
            
        }

        public void OnAudit(IDeleteRequestHandler handler)
        {
            
        }



        public void OnAudit(ISaveRequestHandler handler)
        {
            
        }

        public void OnBeforeDelete(IDeleteRequestHandler handler)
        {
            
        }

        public void OnBeforeExecuteQuery(IRetrieveRequestHandler handler)
        {
            
        }

        public void OnBeforeExecuteQuery(IListRequestHandler handler)
        {
            
        }

        public void OnBeforeSave(ISaveRequestHandler handler)
        {
            IMovementHistory imh = (IMovementHistory)handler.Row;

            StockRow stock = handler.Connection.Single<StockRow>(new Criteria("LocationId") == imh.LocationIdField.Value &&
                new Criteria("ProductId") == imh.ProductIdField.Value);

            leastUnitQtyBefore = stock.Quantity.Value;
            qtyBeforeWithUnit = stock.QuantityInUnit;


        }

        public void OnPrepareQuery(IDeleteRequestHandler handler, SqlQuery query)
        {
            
        }

        public void OnPrepareQuery(IListRequestHandler handler, SqlQuery query)
        {
            
        }

        public void OnPrepareQuery(IRetrieveRequestHandler handler, SqlQuery query)
        {
            
        }

        public void OnPrepareQuery(ISaveRequestHandler handler, SqlQuery query)
        {
            
        }

        public void OnReturn(IListRequestHandler handler)
        {
            
        }

        public void OnReturn(IRetrieveRequestHandler handler)
        {
            
        }

        public void OnReturn(IDeleteRequestHandler handler)
        {
            
        }

        public void OnReturn(ISaveRequestHandler handler)
        {
            
        }

        public void OnSetInternalFields(ISaveRequestHandler handler)
        {
            
        }

        public void OnValidateRequest(IRetrieveRequestHandler handler)
        {
            
        }

        public void OnValidateRequest(IListRequestHandler handler)
        {
            
        }

        public void OnValidateRequest(IDeleteRequestHandler handler)
        {
            
        }

        public void OnValidateRequest(ISaveRequestHandler handler)
        {
            
        }




  



    }
}