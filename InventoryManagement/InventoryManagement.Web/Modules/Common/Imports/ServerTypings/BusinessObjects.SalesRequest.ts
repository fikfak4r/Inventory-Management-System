namespace InventoryManagement.BusinessObjects {
    export interface SalesRequest extends Serenity.ServiceRequest {
        LocationId?: number;
        SalesId?: number;
    }
}

