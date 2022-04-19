namespace InventoryManagement.BusinessObjects {
    export interface ProductSupplierRow {
        ProductSupplierId?: number;
        ProductId?: number;
        SupplierId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId1?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        SupplierDate?: string;
        SupplierSupplierName?: string;
        SupplierPhoneNumber?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierWebsite?: string;
        SupplierAddress?: string;
        SupplierNote?: string;
        SupplierAccountId?: number;
        SupplierList?: number[];
    }

    export namespace ProductSupplierRow {
        export const idProperty = 'ProductSupplierId';
        export const localTextPrefix = 'BusinessObjects.ProductSupplier';

        export namespace Fields {
            export declare const ProductSupplierId: string;
            export declare const ProductId: string;
            export declare const SupplierId: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductSupplierId1: string;
            export declare const ProductLeastUnitName: string;
            export declare const ProductAccountId: string;
            export declare const SupplierDate: string;
            export declare const SupplierSupplierName: string;
            export declare const SupplierPhoneNumber: string;
            export declare const SupplierFax: string;
            export declare const SupplierEmail: string;
            export declare const SupplierWebsite: string;
            export declare const SupplierAddress: string;
            export declare const SupplierNote: string;
            export declare const SupplierAccountId: string;
            export declare const SupplierList: string;
        }

        [
            'ProductSupplierId', 
            'ProductId', 
            'SupplierId', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'ProductProductCategoryId', 
            'ProductSupplierId1', 
            'ProductLeastUnitName', 
            'ProductAccountId', 
            'SupplierDate', 
            'SupplierSupplierName', 
            'SupplierPhoneNumber', 
            'SupplierFax', 
            'SupplierEmail', 
            'SupplierWebsite', 
            'SupplierAddress', 
            'SupplierNote', 
            'SupplierAccountId', 
            'SupplierList'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

