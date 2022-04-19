namespace InventoryManagement.BusinessObjects {
    export interface PurchaseResponse extends Serenity.ServiceResponse {
        LocationId?: number;
        PurchaseId?: number;
    }
}

