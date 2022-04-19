/// <reference path="../../../Content/js/Kendo/typescript/kendo.all.d.ts" />
/// <reference path="../../../Content/js/Kendo/typescript/jquery.d.ts" />
namespace InventoryManagement.BusinessObjects {



    export class PurchaseInvoice {

        //JSON.parse(Q.replaceAll(Q.replaceAll(JSON.stringify(Q.getLookup("Administration.CustomerLocationLookup").items), "LocationId", "value"), "LocationName", "text")),
        protected invoice: kendo.data.ObservableObject;


        constructor() {

            this.invoice = kendo.observable({
                date: new Date(),
            })//Ends this.ticketList

            kendo.bind($("#invoice-section"), this.invoice)

        }






    }
}