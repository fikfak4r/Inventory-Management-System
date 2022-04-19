namespace InventoryManagement.BusinessObjects {
    export interface CustomerLocationRow {
        CustomersLocationsId?: number;
        CustomerId?: number;
        LocationId?: number;
        AccountId?: number;
        CustomerDate?: string;
        CustomerName?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerWebsite?: string;
        CustomerAddress?: string;
        CustomerAccountId?: number;
        CustomerAddress2?: string;
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

    export namespace CustomerLocationRow {
        export const idProperty = 'CustomersLocationsId';
        export const localTextPrefix = 'BusinessObjects.CustomerLocation';
        export const lookupKey = 'BusinessObjects.CustomerLocation';

        export function getLookup(): Q.Lookup<CustomerLocationRow> {
            return Q.getLookup<CustomerLocationRow>('BusinessObjects.CustomerLocation');
        }

        export namespace Fields {
            export declare const CustomersLocationsId: string;
            export declare const CustomerId: string;
            export declare const LocationId: string;
            export declare const AccountId: string;
            export declare const CustomerDate: string;
            export declare const CustomerName: string;
            export declare const CustomerPhoneNumber: string;
            export declare const CustomerEmail: string;
            export declare const CustomerWebsite: string;
            export declare const CustomerAddress: string;
            export declare const CustomerAccountId: string;
            export declare const CustomerAddress2: string;
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
            'CustomersLocationsId', 
            'CustomerId', 
            'LocationId', 
            'AccountId', 
            'CustomerDate', 
            'CustomerName', 
            'CustomerPhoneNumber', 
            'CustomerEmail', 
            'CustomerWebsite', 
            'CustomerAddress', 
            'CustomerAccountId', 
            'CustomerAddress2', 
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

