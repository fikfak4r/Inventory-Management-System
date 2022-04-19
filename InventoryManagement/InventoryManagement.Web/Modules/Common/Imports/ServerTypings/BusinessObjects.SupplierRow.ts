namespace InventoryManagement.BusinessObjects {
    export interface SupplierRow {
        SupplierId?: number;
        Date?: string;
        SupplierName?: string;
        PhoneNumber?: string;
        Fax?: string;
        Email?: string;
        Website?: string;
        Address?: string;
        Note?: string;
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

    export namespace SupplierRow {
        export const idProperty = 'SupplierId';
        export const nameProperty = 'SupplierName';
        export const localTextPrefix = 'BusinessObjects.Supplier';
        export const lookupKey = 'BusinessObjects.Supplier';

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('BusinessObjects.Supplier');
        }

        export namespace Fields {
            export declare const SupplierId: string;
            export declare const Date: string;
            export declare const SupplierName: string;
            export declare const PhoneNumber: string;
            export declare const Fax: string;
            export declare const Email: string;
            export declare const Website: string;
            export declare const Address: string;
            export declare const Note: string;
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
            'SupplierId', 
            'Date', 
            'SupplierName', 
            'PhoneNumber', 
            'Fax', 
            'Email', 
            'Website', 
            'Address', 
            'Note', 
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

