namespace InventoryManagement.BusinessObjects {
    export interface ProductCategoryRow {
        ProductCategoryId?: number;
        CategoryName?: string;
        Description?: string;
        AccountId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        LocationList?: number[];
    }

    export namespace ProductCategoryRow {
        export const idProperty = 'ProductCategoryId';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'BusinessObjects.ProductCategory';
        export const lookupKey = 'BusinessObjects.ProductCategory';

        export function getLookup(): Q.Lookup<ProductCategoryRow> {
            return Q.getLookup<ProductCategoryRow>('BusinessObjects.ProductCategory');
        }

        export namespace Fields {
            export declare const ProductCategoryId: string;
            export declare const CategoryName: string;
            export declare const Description: string;
            export declare const AccountId: string;
            export declare const AccountDate: string;
            export declare const AccountCompanyName: string;
            export declare const AccountLogo: string;
            export declare const AccountAddress: string;
            export declare const AccountEmail: string;
            export declare const AccountPhoneNumber: string;
            export declare const AccountWebsiteAddress: string;
            export declare const LocationList: string;
        }

        [
            'ProductCategoryId', 
            'CategoryName', 
            'Description', 
            'AccountId', 
            'AccountDate', 
            'AccountCompanyName', 
            'AccountLogo', 
            'AccountAddress', 
            'AccountEmail', 
            'AccountPhoneNumber', 
            'AccountWebsiteAddress', 
            'LocationList'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

