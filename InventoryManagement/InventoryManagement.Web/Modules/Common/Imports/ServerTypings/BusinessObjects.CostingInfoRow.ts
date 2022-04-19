namespace InventoryManagement.BusinessObjects {
    export interface CostingInfoRow {
        CostingInfoId?: number;
        ProductId?: number;
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

    export namespace CostingInfoRow {
        export const idProperty = 'CostingInfoId';
        export const localTextPrefix = 'BusinessObjects.CostingInfo';
        export const lookupKey = 'BusinessObjects.CostingInfo';

        export function getLookup(): Q.Lookup<CostingInfoRow> {
            return Q.getLookup<CostingInfoRow>('BusinessObjects.CostingInfo');
        }

        export namespace Fields {
            export declare const CostingInfoId: string;
            export declare const ProductId: string;
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
            'CostingInfoId', 
            'ProductId', 
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

