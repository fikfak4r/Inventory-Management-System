namespace InventoryManagement.BusinessObjects {
    export interface StandardUoMRow {
        StandardUomid?: number;
        ProductId?: number;
        StandardUnitName?: string;
        Discontinued?: boolean;
        Cost?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
    }

    export namespace StandardUoMRow {
        export const idProperty = 'StandardUomid';
        export const nameProperty = 'StandardUnitName';
        export const localTextPrefix = 'BusinessObjects.StandardUoM';
        export const lookupKey = 'BusinessObjects.StandardUoM';

        export function getLookup(): Q.Lookup<StandardUoMRow> {
            return Q.getLookup<StandardUoMRow>('BusinessObjects.StandardUoM');
        }

        export namespace Fields {
            export declare const StandardUomid: string;
            export declare const ProductId: string;
            export declare const StandardUnitName: string;
            export declare const Discontinued: string;
            export declare const Cost: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductSupplierId: string;
            export declare const ProductLeastUnitName: string;
            export declare const ProductAccountId: string;
        }

        [
            'StandardUomid', 
            'ProductId', 
            'StandardUnitName', 
            'Discontinued', 
            'Cost', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'ProductProductCategoryId', 
            'ProductSupplierId', 
            'ProductLeastUnitName', 
            'ProductAccountId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

