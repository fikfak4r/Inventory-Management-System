namespace InventoryManagement.BusinessObjects {
    export interface SupplierLocationRow {
        SuppliersLocationsId?: number;
        SupplierId?: number;
        LocationId?: number;
        AccountId?: number;
        SupplierDate?: string;
        SupplierSupplierName?: string;
        SupplierPhoneNumber?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierWebsite?: string;
        SupplierAddress?: string;
        SupplierNote?: string;
        SupplierAccountId?: number;
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

    export namespace SupplierLocationRow {
        export const idProperty = 'SuppliersLocationsId';
        export const localTextPrefix = 'BusinessObjects.SupplierLocation';
        export const lookupKey = 'BusinessObjects.SupplierLocation';

        export function getLookup(): Q.Lookup<SupplierLocationRow> {
            return Q.getLookup<SupplierLocationRow>('BusinessObjects.SupplierLocation');
        }

        export namespace Fields {
            export declare const SuppliersLocationsId: string;
            export declare const SupplierId: string;
            export declare const LocationId: string;
            export declare const AccountId: string;
            export declare const SupplierDate: string;
            export declare const SupplierSupplierName: string;
            export declare const SupplierPhoneNumber: string;
            export declare const SupplierFax: string;
            export declare const SupplierEmail: string;
            export declare const SupplierWebsite: string;
            export declare const SupplierAddress: string;
            export declare const SupplierNote: string;
            export declare const SupplierAccountId: string;
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
            'SuppliersLocationsId', 
            'SupplierId', 
            'LocationId', 
            'AccountId', 
            'SupplierDate', 
            'SupplierSupplierName', 
            'SupplierPhoneNumber', 
            'SupplierFax', 
            'SupplierEmail', 
            'SupplierWebsite', 
            'SupplierAddress', 
            'SupplierNote', 
            'SupplierAccountId', 
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

