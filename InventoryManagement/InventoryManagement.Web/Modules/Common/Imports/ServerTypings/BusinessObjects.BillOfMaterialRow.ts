namespace InventoryManagement.BusinessObjects {
    export interface BillOfMaterialRow {
        BillOfMaterialId?: number;
        ProductId?: number;
        ComponentItem?: string;
        Description?: string;
        Quantity?: number;
        Cost?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductBarcode?: string;
        ProductReorderPoint?: number;
        ProductReorderQuantity?: number;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
    }

    export namespace BillOfMaterialRow {
        export const idProperty = 'BillOfMaterialId';
        export const nameProperty = 'ComponentItem';
        export const localTextPrefix = 'BusinessObjects.BillOfMaterial2';

        export namespace Fields {
            export declare const BillOfMaterialId: string;
            export declare const ProductId: string;
            export declare const ComponentItem: string;
            export declare const Description: string;
            export declare const Quantity: string;
            export declare const Cost: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const ProductBarcode: string;
            export declare const ProductReorderPoint: string;
            export declare const ProductReorderQuantity: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductSupplierId: string;
            export declare const ProductLeastUnitName: string;
            export declare const ProductAccountId: string;
        }

        [
            'BillOfMaterialId', 
            'ProductId', 
            'ComponentItem', 
            'Description', 
            'Quantity', 
            'Cost', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'ProductBarcode', 
            'ProductReorderPoint', 
            'ProductReorderQuantity', 
            'ProductProductCategoryId', 
            'ProductSupplierId', 
            'ProductLeastUnitName', 
            'ProductAccountId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

