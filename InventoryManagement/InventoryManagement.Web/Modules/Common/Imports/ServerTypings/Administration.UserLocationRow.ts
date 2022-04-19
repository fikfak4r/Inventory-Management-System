namespace InventoryManagement.Administration {
    export interface UserLocationRow {
        UserLocationId?: number;
        UserId?: number;
        LocationId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }

    export namespace UserLocationRow {
        export const idProperty = 'UserLocationId';
        export const localTextPrefix = 'Administration.UserLocation';
        export const lookupKey = 'Administration.UserLocation';

        export function getLookup(): Q.Lookup<UserLocationRow> {
            return Q.getLookup<UserLocationRow>('Administration.UserLocation');
        }

        export namespace Fields {
            export declare const UserLocationId: string;
            export declare const UserId: string;
            export declare const LocationId: string;
            export declare const UserUsername: string;
            export declare const UserDisplayName: string;
            export declare const UserEmail: string;
            export declare const UserSource: string;
            export declare const UserPasswordHash: string;
            export declare const UserPasswordSalt: string;
            export declare const UserInsertDate: string;
            export declare const UserInsertUserId: string;
            export declare const UserUpdateDate: string;
            export declare const UserUpdateUserId: string;
            export declare const UserIsActive: string;
            export declare const UserLastDirectoryUpdate: string;
            export declare const UserUserImage: string;
            export declare const UserAccountId: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
        }

        [
            'UserLocationId', 
            'UserId', 
            'LocationId', 
            'UserUsername', 
            'UserDisplayName', 
            'UserEmail', 
            'UserSource', 
            'UserPasswordHash', 
            'UserPasswordSalt', 
            'UserInsertDate', 
            'UserInsertUserId', 
            'UserUpdateDate', 
            'UserUpdateUserId', 
            'UserIsActive', 
            'UserLastDirectoryUpdate', 
            'UserUserImage', 
            'UserAccountId', 
            'LocationAccountId', 
            'LocationDate', 
            'LocationPhoneNumber', 
            'LocationEmail', 
            'LocationWebsite', 
            'LocationLocationName', 
            'LocationAddress', 
            'LocationUserId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

