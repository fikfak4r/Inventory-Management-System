namespace InventoryManagement.BusinessObjects {
    export interface PurchaseRequest extends Serenity.ServiceRequest {
        LocationId?: number;
        PurchasesId?: number;
    }
}

