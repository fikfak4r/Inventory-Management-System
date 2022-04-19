using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InventoryManagement.BusinessObjects
{
    public class PermissionKeys
    {


        public class AdjustStock
        {
            public const string Read = "InventoryManagement:AdjustStock:Read";
            public const string Insert = "InventoryManagement:AdjustStock:Insert";
            public const string Update = "InventoryManagement:AdjustStock:Update";
            public const string Delete = "InventoryManagement:AdjustStock:Delete";
        }


        public class Bank
        {
            public const string Read = "InventoryManagement:Bank:Read";
            public const string Insert = "InventoryManagement:Bank:Insert";
            public const string Update = "InventoryManagement:Bank:Update";
            public const string Delete = "InventoryManagement:Bank:Delete";
        }

        public class BankTransaction
        {
            public const string Read = "InventoryManagement:BankTransaction:Read";
            public const string Insert = "InventoryManagement:BankTransaction:Insert";
            public const string Update = "InventoryManagement:BankTransaction:Update";
            public const string Delete = "InventoryManagement:BankTransaction:Delete";
        }


        public class CostingInfo
        {
            public const string Read = "InventoryManagement:CostingInfo:Read";
            public const string Insert = "InventoryManagement:CostingInfo:Insert";
            public const string Update = "InventoryManagement:CostingInfo:Update";
            public const string Delete = "InventoryManagement:CostingInfo:Delete";
        }

        public class Customer
        {
            public const string Read = "InventoryManagement:Customer:Read";
            public const string Insert = "InventoryManagement:Customer:Insert";
            public const string Update = "InventoryManagement:Customer:Update";
            public const string Delete = "InventoryManagement:Customer:Delete";
        }


        public class CustomerLocation
        {
            public const string Read = "InventoryManagement:CustomerLocation:Read";
            public const string Insert = "InventoryManagement:CustomerLocation:Insert";
            public const string Update = "InventoryManagement:CustomerLocation:Update";
            public const string Delete = "InventoryManagement:CustomerLocation:Delete";
        }


        public class PickSalesOrder
        {
            public const string Read = "InventoryManagement:PickSalesOrder:Read";
            public const string Insert = "InventoryManagement:PickSalesOrder:Insert";
            public const string Update = "InventoryManagement:PickSalesOrder:Update";
            public const string Delete = "InventoryManagement:PickSalesOrder:Delete";
        }

        public class Product
        {
            public const string Read = "InventoryManagement:Product:Read";
            public const string Insert = "InventoryManagement:Product:Insert";
            public const string Update = "InventoryManagement:Product:Update";
            public const string Delete = "InventoryManagement:Product:Delete";
        }

        public class ProductCategory
        {
            public const string Profile = "InventoryManagement:ProductCategory:Profile";
            public const string Read = "InventoryManagement:ProductCategory:Read";
            public const string Insert = "InventoryManagement:ProductCategory:Insert";
            public const string Update = "InventoryManagement:ProductCategory:Update";
            public const string Delete = "InventoryManagement:ProductCategory:Delete";
        }


        public class ProductCategoryLocation
        {
            public const string Profile = "InventoryManagement:ProductCategoryLocation:Profile";
            public const string Read = "InventoryManagement:ProductCategoryLocation:Read";
            public const string Insert = "InventoryManagement:ProductCategoryLocation:Insert";
            public const string Update = "InventoryManagement:ProductCategoryLocation:Update";
            public const string Delete = "InventoryManagement:ProductCategoryLocation:Delete";
        }


        public class ProductLocation
        {
            public const string Read = "InventoryManagement:ProductLocation:Read";
            public const string Insert = "InventoryManagement:ProductLocation:Insert";
            public const string Update = "InventoryManagement:ProductLocation:Update";
            public const string Delete = "InventoryManagement:ProductLocation:Delete";
        }


        public class Purchase
        {
            public const string Read = "InventoryManagement:Purchase:Read";
            public const string Insert = "InventoryManagement:Purchase:Insert";
            public const string Update = "InventoryManagement:Purchase:Update";
            public const string Delete = "InventoryManagement:Purchase:Delete";
        }

        public class PurchasesDetails
        {
            public const string Read = "InventoryManagement:PurchasesDetails:Read";
            public const string Insert = "InventoryManagement:PurchasesDetails:Insert";
            public const string Update = "InventoryManagement:PurchasesDetails:Update";
            public const string Delete = "InventoryManagement:PurchasesDetails:Delete";
        }


        public class PurchasesPaymentDetails
        {
            public const string Read = "InventoryManagement:PurchasesPaymentDetails:Read";
            public const string Insert = "InventoryManagement:PurchasesPaymentDetails:Insert";
            public const string Update = "InventoryManagement:PurchasesPaymentDetails:Update";
            public const string Delete = "InventoryManagement:PurchasesPaymentDetails:Delete";
        }


        public class PurchasesUoMAndPrice
        {
            public const string Read = "InventoryManagement:PurchasesUoMAndPrice:Read";
            public const string Insert = "InventoryManagement:PurchasesUoMAndPrice:Insert";
            public const string Update = "InventoryManagement:PurchasesUoMAndPrice:Update";
            public const string Delete = "InventoryManagement:PurchasesUoMAndPrice:Delete";
        }


        public class ReceivePurchases
        {
            public const string Read = "InventoryManagement:ReceivePurchases:Read";
            public const string Insert = "InventoryManagement:ReceivePurchases:Insert";
            public const string Update = "InventoryManagement:ReceivePurchases:Update";
            public const string Delete = "InventoryManagement:ReceivePurchases:Delete";
        }


        public class ReorderPoint
        {
            public const string Read = "InventoryManagement:ReorderPoint:Read";
            public const string Insert = "InventoryManagement:ReorderPoint:Insert";
            public const string Update = "InventoryManagement:ReorderPoint:Update";
            public const string Delete = "InventoryManagement:ReorderPoint:Delete";
        }


        public class Restock
        {
            public const string Read = "InventoryManagement:Restock:Read";
            public const string Insert = "InventoryManagement:Restock:Insert";
            public const string Update = "InventoryManagement:Restock:Update";
            public const string Delete = "InventoryManagement:Restock:Delete";
        }


        public class ReturnInwards
        {
            public const string Read = "InventoryManagement:ReturnInwards:Read";
            public const string Insert = "InventoryManagement:ReturnInwards:Insert";
            public const string Update = "InventoryManagement:ReturnInwards:Update";
            public const string Delete = "InventoryManagement:ReturnInwards:Delete";
        }

        public class ReturnInwardsDetails
        {
            public const string Read = "InventoryManagement:ReturnInwardsDetails:Read";
            public const string Insert = "InventoryManagement:ReturnInwardsDetails:Insert";
            public const string Update = "InventoryManagement:ReturnInwardsDetails:Update";
            public const string Delete = "InventoryManagement:ReturnInwardsDetails:Delete";
        }

        public class ReturnInwardsPayment
        {
            public const string Read = "InventoryManagement:ReturnInwardsPayment:Read";
            public const string Insert = "InventoryManagement:ReturnInwardsPayment:Insert";
            public const string Update = "InventoryManagement:ReturnInwardsPayment:Update";
            public const string Delete = "InventoryManagement:ReturnInwardsPayment:Delete";
        }

        public class ReturnOutwards
        {
            public const string Read = "InventoryManagement:ReturnOutwards:Read";
            public const string Insert = "InventoryManagement:ReturnOutwards:Insert";
            public const string Update = "InventoryManagement:ReturnOutwards:Update";
            public const string Delete = "InventoryManagement:ReturnOutwards:Delete";
        }

        public class ReturnOutwardsDetails
        {
            public const string Read = "InventoryManagement:ReturnOutwardsDetails:Read";
            public const string Insert = "InventoryManagement:ReturnOutwardsDetails:Insert";
            public const string Update = "InventoryManagement:ReturnOutwardsDetails:Update";
            public const string Delete = "InventoryManagement:ReturnOutwardsDetails:Delete";
        }

        public class ReturnOutwardsPayment
        {
            public const string Read = "InventoryManagement:ReturnOutwardsPayment:Read";
            public const string Insert = "InventoryManagement:ReturnOutwardsPayment:Insert";
            public const string Update = "InventoryManagement:ReturnOutwardsPayment:Update";
            public const string Delete = "InventoryManagement:ReturnOutwardsPayment:Delete";
        }


        public class Sale
        {
            public const string Read = "InventoryManagement:Sale:Read";
            public const string Insert = "InventoryManagement:Sale:Insert";
            public const string Update = "InventoryManagement:Sale:Update";
            public const string Delete = "InventoryManagement:Sale:Delete";
        }


        public class SalesDetails
        {
            public const string Read = "InventoryManagement:SalesDetails:Read";
            public const string Insert = "InventoryManagement:SalesDetails:Insert";
            public const string Update = "InventoryManagement:SalesDetails:Update";
            public const string Delete = "InventoryManagement:SalesDetails:Delete";
        }


        public class SalesInvoice
        {
            public const string Read = "InventoryManagement:SalesInvoice:Read";
            public const string Insert = "InventoryManagement:SalesInvoice:Insert";
            public const string Update = "InventoryManagement:SalesInvoice:Update";
            public const string Delete = "InventoryManagement:SalesInvoice:Delete";
        }


        public class SalesPaymentDetails
        {
            public const string Read = "InventoryManagement:SalesPaymentDetails:Read";
            public const string Insert = "InventoryManagement:SalesPaymentDetails:Insert";
            public const string Update = "InventoryManagement:SalesPaymentDetails:Update";
            public const string Delete = "InventoryManagement:SalesPaymentDetails:Delete";
        }


        public class SalesUoMAndPrice
        {
            public const string Read = "InventoryManagement:SalesUoMAndPrice:Read";
            public const string Insert = "InventoryManagement:SalesUoMAndPrice:Insert";
            public const string Update = "InventoryManagement:SalesUoMAndPrice:Update";
            public const string Delete = "InventoryManagement:SalesUoMAndPrice:Delete";
        }


        public class StandardUoM
        {
            public const string Read = "InventoryManagement:StandardUoM:Read";
            public const string Insert = "InventoryManagement:StandardUoM:Insert";
            public const string Update = "InventoryManagement:StandardUoM:Update";
            public const string Delete = "InventoryManagement:StandardUoM:Delete";
        }


        public class Stock
        {
            public const string Read = "InventoryManagement:Stock:Read";
            public const string Insert = "InventoryManagement:Stock:Insert";
            public const string Update = "InventoryManagement:Stock:Update";
            public const string Delete = "InventoryManagement:Stock:Delete";
        }


        public class Supplier
        {
            public const string Read = "InventoryManagement:Supplier:Read";
            public const string Insert = "InventoryManagement:Supplier:Insert";
            public const string Update = "InventoryManagement:Supplier:Update";
            public const string Delete = "InventoryManagement:Supplier:Delete";
        }


        public class SupplierLocation
        {
            public const string Read = "InventoryManagement:SupplierLocation:Read";
            public const string Insert = "InventoryManagement:SupplierLocation:Insert";
            public const string Update = "InventoryManagement:SupplierLocation:Update";
            public const string Delete = "InventoryManagement:SupplierLocation:Delete";
        }

        public class Unstock
        {
            public const string Read = "InventoryManagement:Unstock:Read";
            public const string Insert = "InventoryManagement:Unstock:Insert";
            public const string Update = "InventoryManagement:Unstock:Update";
            public const string Delete = "InventoryManagement:Unstock:Delete";
        }

        public class ProductSupplier
        {
            public const string Read = "InventoryManagement:ProductSupplier:Read";
            public const string Insert = "InventoryManagement:ProductSupplier:Insert";
            public const string Update = "InventoryManagement:ProductSupplier:Update";
            public const string Delete = "InventoryManagement:ProductSupplier:Delete";
        }

        public class MovementHistory
        {
            public const string Read = "InventoryManagement:MovementHistory:Read";
            public const string Insert = "InventoryManagement:MovementHistory:Insert";
            public const string Update = "InventoryManagement:MovementHistory:Update";
            public const string Delete = "InventoryManagement:MovementHistory:Delete";
        }

        public class BillOfMaterial
        {
            public const string Read = "InventoryManagement:BillOfMaterial:Read";
            public const string Insert = "InventoryManagement:BillOfMaterial:Insert";
            public const string Update = "InventoryManagement:BillOfMaterial:Update";
            public const string Delete = "InventoryManagement:BillOfMaterial:Delete";
        }


    }
}