namespace InventoryManagement.Administration {
    export interface AccountRow {
        AccountId?: number;
        Date?: string;
        CompanyName?: string;
        Address?: string;
        Email?: string;
        PhoneNumber?: string;
        WebsiteAddress?: string;
    }

    export namespace AccountRow {
        export const idProperty = 'AccountId';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Administration.Account';
        export const lookupKey = 'Administration.Account';

        export function getLookup(): Q.Lookup<AccountRow> {
            return Q.getLookup<AccountRow>('Administration.Account');
        }

        export namespace Fields {
            export declare const AccountId: string;
            export declare const Date: string;
            export declare const CompanyName: string;
            export declare const Address: string;
            export declare const Email: string;
            export declare const PhoneNumber: string;
            export declare const WebsiteAddress: string;
        }

        [
            'AccountId', 
            'Date', 
            'CompanyName', 
            'Address', 
            'Email', 
            'PhoneNumber', 
            'WebsiteAddress'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

