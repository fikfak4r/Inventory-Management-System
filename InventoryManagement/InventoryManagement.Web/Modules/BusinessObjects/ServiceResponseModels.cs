using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Services;
using InventoryManagement.BusinessObjects.Entities;


namespace InventoryManagement.BusinessObjects
{
    public class ServiceResponseModels
    {
    }

    public class DefaultResponse : ServiceResponse
    {
        public String Status { get; set; }
   
    }
    public class PurchaseResponse : ServiceResponse
    {
        public int LocationId { get; set; }
        public int PurchaseId { get; set; }
    }


    public class SalesResponse : ServiceResponse
    {
        public int LocationId { get; set; }
        public int SalesId { get; set; }
    }


    public class GetNextNumberResponse : ServiceResponse
    {
        public long Number { get; set; }
        public string Serial { get; set; }
    }
        

    public class InvoiceResponse : ServiceResponse
    {
        public PurchasesRow Purchase { get; set; }
        public ListResponse<PurchasesDetailsRow> PurchasedGoods { get; set; }
        
        public ListResponse<ReceivePurchasesRow> ReceivedGoods { get; set; }




    }


}