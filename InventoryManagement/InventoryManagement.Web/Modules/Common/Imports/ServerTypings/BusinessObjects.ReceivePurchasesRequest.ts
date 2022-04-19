namespace InventoryManagement.BusinessObjects {
    export interface ReceivePurchasesRequest extends Serenity.ServiceRequest {
        LocationId?: number;
        PurchaseId?: number;
    }
}

