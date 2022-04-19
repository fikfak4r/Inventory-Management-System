namespace InventoryManagement.BusinessObjects {
    export interface ProductCategoryLocationRow {
        ProdCatLoctnId?: number;
        ProductCategoryId?: number;
        LocationId?: number;
        AccountId?: number;
        ProductCategoryCategoryName?: string;
        ProductCategoryDescription?: string;
        ProductCategoryAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
    }

    export namespace ProductCategoryLocationRow {
        export const idProperty = 'ProdCatLoctnId';
        export const localTextPrefix = 'BusinessObjects.ProductCategoryLocation';
        export const lookupKey = 'BusinessObjects.ProductCategoryLocation';

        export function getLookup(): Q.Lookup<ProductCategoryLocationRow> {
            return Q.getLookup<ProductCategoryLocationRow>('BusinessObjects.ProductCategoryLocation');
        }

        export namespace Fields {
            export declare const ProdCatLoctnId: string;
            export declare const ProductCategoryId: string;
            export declare const LocationId: string;
            export declare const AccountId: string;
            export declare const ProductCategoryCategoryName: string;
            export declare const ProductCategoryDescription: string;
            export declare const ProductCategoryAccountId: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const LocationIsVisible: string;
            export declare const AccountDate: string;
            export declare const AccountCompanyName: string;
            export declare const AccountLogo: string;
            export declare const AccountAddress: string;
            export declare const AccountEmail: string;
            export declare const AccountPhoneNumber: string;
            export declare const AccountWebsiteAddress: string;
        }

        [
            'ProdCatLoctnId', 
            'ProductCategoryId', 
            'LocationId', 
            'AccountId', 
            'ProductCategoryCategoryName', 
            'ProductCategoryDescription', 
            'ProductCategoryAccountId', 
            'LocationAccountId', 
            'LocationDate', 
            'LocationPhoneNumber', 
            'LocationEmail', 
            'LocationWebsite', 
            'LocationLocationName', 
            'LocationAddress', 
            'LocationUserId', 
            'LocationIsVisible', 
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

