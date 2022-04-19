namespace InventoryManagement.BusinessObjects {
    export interface InvoiceResponse extends Serenity.ServiceResponse {
        Purchase?: PurchasesRow;
        PurchasedGoods?: Serenity.ListResponse<PurchasesDetailsRow>;
        ReceivedGoods?: Serenity.ListResponse<ReceivePurchasesRow>;
    }
}

