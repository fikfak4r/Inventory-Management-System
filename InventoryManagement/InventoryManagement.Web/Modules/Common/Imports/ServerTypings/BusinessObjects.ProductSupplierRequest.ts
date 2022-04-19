namespace InventoryManagement.BusinessObjects {
    export interface ProductSupplierRequest extends Serenity.ServiceRequest {
        ProductId?: number;
        ProductIds?: number[];
        SupplierId?: number;
        SupplierIds?: number[];
        SupplierObjectsList?: ProductSupplierRow[];
    }
}

