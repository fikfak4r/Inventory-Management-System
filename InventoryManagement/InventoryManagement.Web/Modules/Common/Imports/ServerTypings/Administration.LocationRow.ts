namespace InventoryManagement.Administration {
    export interface LocationRow {
        LocationId?: number;
        AccountId?: number;
        Date?: string;
        PhoneNumber?: string;
        Email?: string;
        Website?: string;
        LocationName?: string;
        Address?: string;
        UserId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        IsVisible?: boolean;
    }

    export namespace LocationRow {
        export const idProperty = 'LocationId';
        export const nameProperty = 'LocationName';
        export const localTextPrefix = 'Administration.Location';
        export const lookupKey = 'Administration.Location';

        export function getLookup(): Q.Lookup<LocationRow> {
            return Q.getLookup<LocationRow>('Administration.Location');
        }

        export namespace Fields {
            export declare const LocationId: string;
            export declare const AccountId: string;
            export declare const Date: string;
            export declare const PhoneNumber: string;
            export declare const Email: string;
            export declare const Website: string;
            export declare const LocationName: string;
            export declare const Address: string;
            export declare const UserId: string;
            export declare const AccountDate: string;
            export declare const AccountCompanyName: string;
            export declare const AccountAddress: string;
            export declare const AccountEmail: string;
            export declare const AccountPhoneNumber: string;
            export declare const AccountWebsiteAddress: string;
            export declare const IsVisible: string;
        }

        [
            'LocationId', 
            'AccountId', 
            'Date', 
            'PhoneNumber', 
            'Email', 
            'Website', 
            'LocationName', 
            'Address', 
            'UserId', 
            'AccountDate', 
            'AccountCompanyName', 
            'AccountAddress', 
            'AccountEmail', 
            'AccountPhoneNumber', 
            'AccountWebsiteAddress', 
            'IsVisible'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

