namespace InventoryManagement.Administration {
    export interface RoleLocationRow {
        RoleLocationId?: number;
        RoleId?: number;
        LocationId?: number;
        RoleRoleName?: string;
    }

    export namespace RoleLocationRow {
        export const idProperty = 'RoleId';
        export const localTextPrefix = 'Administration.RoleLocation';
        export const lookupKey = 'Administration.RoleLocationRow';

        export function getLookup(): Q.Lookup<RoleLocationRow> {
            return Q.getLookup<RoleLocationRow>('Administration.RoleLocationRow');
        }

        export namespace Fields {
            export declare const RoleLocationId: string;
            export declare const RoleId: string;
            export declare const LocationId: string;
            export declare const RoleRoleName: string;
        }

        [
            'RoleLocationId', 
            'RoleId', 
            'LocationId', 
            'RoleRoleName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

