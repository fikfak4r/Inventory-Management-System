namespace InventoryManagement.BusinessObjects {
    export interface CustomerRow {
        Date?: string;
        CustomerId?: number;
        Name?: string;
        FullName?: string;
        PhoneNumber?: string;
        Email?: string;
        Website?: string;
        Address?: string;
        AccountId?: number;
        Address2?: string;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        LocationList?: number[];
    }

    export namespace CustomerRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'BusinessObjects.Customer';
        export const lookupKey = 'BusinessObjects.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('BusinessObjects.Customer');
        }

        export namespace Fields {
            export declare const Date: string;
            export declare const CustomerId: string;
            export declare const Name: string;
            export declare const FullName: string;
            export declare const PhoneNumber: string;
            export declare const Email: string;
            export declare const Website: string;
            export declare const Address: string;
            export declare const AccountId: string;
            export declare const Address2: string;
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
            'Date', 
            'CustomerId', 
            'Name', 
            'FullName', 
            'PhoneNumber', 
            'Email', 
            'Website', 
            'Address', 
            'AccountId', 
            'Address2', 
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

