using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace InventoryManagement
{
    public interface IMovementHistory
    {
        Int32? ProductIdField { get; }
        Int32? LocationIdField { get; }

        Int32? PurchaseIdField { get; }

        Double? QuantityField { get; }

        Int32? UomAndPriceIdField { get; }

        String TransactionType { get; }


    }
}