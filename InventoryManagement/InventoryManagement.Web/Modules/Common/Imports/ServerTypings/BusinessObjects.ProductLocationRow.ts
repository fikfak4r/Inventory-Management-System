namespace InventoryManagement.BusinessObjects {
    export interface ProductLocationRow {
        ProductsLocationsId?: number;
        ProductId?: number;
        LocationId?: number;
        AccountId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
    }

    export namespace ProductLocationRow {
        export const idProperty = 'ProductsLocationsId';
        export const localTextPrefix = 'BusinessObjects.ProductLocation';
        export const lookupKey = 'BusinessObjects.ProductLocation';

        export function getLookup(): Q.Lookup<ProductLocationRow> {
            return Q.getLookup<ProductLocationRow>('BusinessObjects.ProductLocation');
        }

        export namespace Fields {
            export declare const ProductsLocationsId: string;
            export declare const ProductId: string;
            export declare const LocationId: string;
            export declare const AccountId: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductSupplierId: string;
            export declare const ProductLeastUnitName: string;
            export declare const ProductAccountId: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const AccountDate: string;
            export declare const AccountCompanyName: string;
            export declare const AccountLogo: string;
            export declare const AccountAddress: string;
            export declare const AccountEmail: string;
            export declare const AccountPhoneNumber: string;
            export declare const AccountWebsiteAddress: string;
        }

        [
            'ProductsLocationsId', 
            'ProductId', 
            'LocationId', 
            'AccountId', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'ProductProductCategoryId', 
            'ProductSupplierId', 
            'ProductLeastUnitName', 
            'ProductAccountId', 
            'LocationAccountId', 
            'LocationDate', 
            'LocationPhoneNumber', 
            'LocationEmail', 
            'LocationWebsite', 
            'LocationLocationName', 
            'LocationAddress', 
            'LocationUserId', 
            'AccountDate', 
            'AccountCompanyName', 
            'AccountLogo', 
            'AccountAddress', 
            'AccountEmail', 
            'AccountPhoneNumber', 
            'AccountWebsiteAddress'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

