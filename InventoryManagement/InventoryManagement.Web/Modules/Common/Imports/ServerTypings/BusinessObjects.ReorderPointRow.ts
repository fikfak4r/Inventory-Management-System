namespace InventoryManagement.BusinessObjects {
    export interface ReorderPointRow {
        ReorderPointId?: number;
        ProductId?: number;
        ReorderPointValue?: number;
        UOMAndPriceId?: number;
        QtyInLeastUnit?: number;
        LocationName?: string;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
    }

    export namespace ReorderPointRow {
        export const idProperty = 'ReorderPointId';
        export const localTextPrefix = 'BusinessObjects.ReorderPoint';
        export const lookupKey = 'BusinessObjects.ReorderPoint';

        export function getLookup(): Q.Lookup<ReorderPointRow> {
            return Q.getLookup<ReorderPointRow>('BusinessObjects.ReorderPoint');
        }

        export namespace Fields {
            export declare const ReorderPointId: string;
            export declare const ProductId: string;
            export declare const ReorderPointValue: string;
            export declare const UOMAndPriceId: string;
            export declare const QtyInLeastUnit: string;
            export declare const LocationName: string;
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
            'ReorderPointId', 
            'ProductId', 
            'ReorderPointValue', 
            'UOMAndPriceId', 
            'QtyInLeastUnit', 
            'LocationName', 
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

