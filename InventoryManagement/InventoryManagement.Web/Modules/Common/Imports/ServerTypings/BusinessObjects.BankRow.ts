namespace InventoryManagement.BusinessObjects {
    export interface BankRow {
        BankId?: number;
        Date?: string;
        BankName?: string;
        AccountId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
    }

    export namespace BankRow {
        export const idProperty = 'BankId';
        export const nameProperty = 'BankName';
        export const localTextPrefix = 'BusinessObjects.Bank';
        export const lookupKey = 'BusinessObjects.Bank';

        export function getLookup(): Q.Lookup<BankRow> {
            return Q.getLookup<BankRow>('BusinessObjects.Bank');
        }

        export namespace Fields {
            export declare const BankId: string;
            export declare const Date: string;
            export declare const BankName: string;
            export declare const AccountId: string;
            export declare const AccountDate: string;
            export declare const AccountCompanyName: string;
            export declare const AccountLogo: string;
            export declare const AccountAddress: string;
            export declare const AccountEmail: string;
            export declare const AccountPhoneNumber: string;
            export declare const AccountWebsiteAddress: string;
        }

        [
            'BankId', 
            'Date', 
            'BankName', 
            'AccountId', 
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

