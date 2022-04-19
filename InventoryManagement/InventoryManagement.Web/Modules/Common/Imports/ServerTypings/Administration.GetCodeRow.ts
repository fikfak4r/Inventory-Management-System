namespace InventoryManagement.Administration {
    export interface GetCodeRow {
        GetCodeId?: number;
        AccountId?: number;
        LocationId?: number;
        LinkCode?: string;
        FormCode?: string;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
    }

    export namespace GetCodeRow {
        export const idProperty = 'GetCodeId';
        export const nameProperty = 'LocationLocationName';
        export const localTextPrefix = 'Administration.GetCode';
        export const lookupKey = 'Administration.GetCode';

        export function getLookup(): Q.Lookup<GetCodeRow> {
            return Q.getLookup<GetCodeRow>('Administration.GetCode');
        }

        export namespace Fields {
            export declare const GetCodeId: string;
            export declare const AccountId: string;
            export declare const LocationId: string;
            export declare const LinkCode: string;
            export declare const FormCode: string;
            export declare const AccountDate: string;
            export declare const AccountCompanyName: string;
            export declare const AccountLogo: string;
            export declare const AccountAddress: string;
            export declare const AccountEmail: string;
            export declare const AccountPhoneNumber: string;
            export declare const AccountWebsiteAddress: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const LocationIsVisible: string;
        }

        [
            'GetCodeId', 
            'AccountId', 
            'LocationId', 
            'LinkCode', 
            'FormCode', 
            'AccountDate', 
            'AccountCompanyName', 
            'AccountLogo', 
            'AccountAddress', 
            'AccountEmail', 
            'AccountPhoneNumber', 
            'AccountWebsiteAddress', 
            'LocationAccountId', 
            'LocationDate', 
            'LocationPhoneNumber', 
            'LocationEmail', 
            'LocationWebsite', 
            'LocationLocationName', 
            'LocationAddress', 
            'LocationUserId', 
            'LocationIsVisible'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

