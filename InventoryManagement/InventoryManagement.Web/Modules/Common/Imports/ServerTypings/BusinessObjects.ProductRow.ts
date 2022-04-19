namespace InventoryManagement.BusinessObjects {
    export interface ProductRow {
        ProductId?: number;
        Date?: string;
        ProductCode?: string;
        ProductName?: string;
        BrandName?: string;
        Barcode?: string;
        ReorderPoint?: number;
        ReorderQuantity?: number;
        ProductCategoryId?: number;
        SupplierId?: number;
        LeastUnitName?: string;
        AccountId?: number;
        ProductCategoryCategoryName?: string;
        ProductCategoryDescription?: string;
        ProductCategoryAccountId?: number;
        SupplierDate?: string;
        SupplierSupplierName?: string;
        SupplierPhoneNumber?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierWebsite?: string;
        SupplierAddress?: string;
        SupplierNote?: string;
        SupplierAccountId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        PurchasesUoMAndPriceList?: PurchasesUoMAndPriceRow[];
        SalesUoMAndPriceList?: SalesUoMAndPriceRow[];
        ProductSupplierList?: ProductSupplierRow[];
        Pricing?: string;
        LocationList?: number[];
    }

    export namespace ProductRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'BusinessObjects.Product';
        export const lookupKey = 'BusinessObjects.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('BusinessObjects.Product');
        }

        export namespace Fields {
            export declare const ProductId: string;
            export declare const Date: string;
            export declare const ProductCode: string;
            export declare const ProductName: string;
            export declare const BrandName: string;
            export declare const Barcode: string;
            export declare const ReorderPoint: string;
            export declare const ReorderQuantity: string;
            export declare const ProductCategoryId: string;
            export declare const SupplierId: string;
            export declare const LeastUnitName: string;
            export declare const AccountId: string;
            export declare const ProductCategoryCategoryName: string;
            export declare const ProductCategoryDescription: string;
            export declare const ProductCategoryAccountId: string;
            export declare const SupplierDate: string;
            export declare const SupplierSupplierName: string;
            export declare const SupplierPhoneNumber: string;
            export declare const SupplierFax: string;
            export declare const SupplierEmail: string;
            export declare const SupplierWebsite: string;
            export declare const SupplierAddress: string;
            export declare const SupplierNote: string;
            export declare const SupplierAccountId: string;
            export declare const AccountDate: string;
            export declare const AccountCompanyName: string;
            export declare const AccountLogo: string;
            export declare const AccountAddress: string;
            export declare const AccountEmail: string;
            export declare const AccountPhoneNumber: string;
            export declare const AccountWebsiteAddress: string;
            export declare const PurchasesUoMAndPriceList: string;
            export declare const SalesUoMAndPriceList: string;
            export declare const ProductSupplierList: string;
            export declare const Pricing: string;
            export declare const LocationList: string;
        }

        [
            'ProductId', 
            'Date', 
            'ProductCode', 
            'ProductName', 
            'BrandName', 
            'Barcode', 
            'ReorderPoint', 
            'ReorderQuantity', 
            'ProductCategoryId', 
            'SupplierId', 
            'LeastUnitName', 
            'AccountId', 
            'ProductCategoryCategoryName', 
            'ProductCategoryDescription', 
            'ProductCategoryAccountId', 
            'SupplierDate', 
            'SupplierSupplierName', 
            'SupplierPhoneNumber', 
            'SupplierFax', 
            'SupplierEmail', 
            'SupplierWebsite', 
            'SupplierAddress', 
            'SupplierNote', 
            'SupplierAccountId', 
            'AccountDate', 
            'AccountCompanyName', 
            'AccountLogo', 
            'AccountAddress', 
            'AccountEmail', 
            'AccountPhoneNumber', 
            'AccountWebsiteAddress', 
            'PurchasesUoMAndPriceList', 
            'SalesUoMAndPriceList', 
            'ProductSupplierList', 
            'Pricing', 
            'LocationList'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

