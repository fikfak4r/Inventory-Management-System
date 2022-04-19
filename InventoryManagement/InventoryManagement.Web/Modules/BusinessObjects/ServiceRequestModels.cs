using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;

namespace InventoryManagement.BusinessObjects
{
    public class ServiceRequestModels
    {
    }

    public class PurchaseRequest : ServiceRequest
    {

        public int LocationId { get; set; }
        public int PurchasesId { get; set; }

    }


    public class SalesRequest : ServiceRequest
    {

        public int LocationId { get; set; }
        public int SalesId { get; set; }

    }

    public class GetNextNumberRequest : ServiceRequest
    {
        public string Prefix { get; set; }
        public int Length { get; set; }
    }


    public class ProductSupplierRequest : ServiceRequest
    {
        public int ProductId { get; set; }

        public List<int> ProductIds { get; set; }

        public int SupplierId { get; set; }

        public List<int> SupplierIds { get; set; }
        public List<Entities.ProductSupplierRow> SupplierObjectsList { get; set; }


    }


    public class ReceivePurchasesRequest : ServiceRequest
    {
        public int LocationId { get; set; }
        public int PurchaseId { get; set; }
    }



}