namespace InventoryManagement.BusinessObjects {
    export interface RestockRow {
        ReStockId?: number;
        ProductId?: number;
        Date?: string;
        RtnInwardsDtlsId?: number;
        SalesId?: number;
        Quantity?: number;
        UomAndPriceId?: number;
        IsRestocked?: boolean;
        LocationId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }

    export namespace RestockRow {
        export const idProperty = 'ReStockId';
        export const localTextPrefix = 'BusinessObjects.Restock';
        export const lookupKey = 'BusinessObjects.Restock';

        export function getLookup(): Q.Lookup<RestockRow> {
            return Q.getLookup<RestockRow>('BusinessObjects.Restock');
        }

        export namespace Fields {
            export declare const ReStockId: string;
            export declare const ProductId: string;
            export declare const Date: string;
            export declare const RtnInwardsDtlsId: string;
            export declare const SalesId: string;
            export declare const Quantity: string;
            export declare const UomAndPriceId: string;
            export declare const IsRestocked: string;
            export declare const LocationId: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductSupplierId: string;
            export declare const ProductLeastUnitName: string;
            export declare const ProductAccountId: string;
            export declare const UomAndPriceProductId: string;
            export declare const UomAndPriceUnitName: string;
            export declare const UomAndPriceUnitMakeUp: string;
            export declare const UomAndPriceStandardUomid: string;
            export declare const UomAndPriceDiscontinued: string;
            export declare const UomAndPricePrice: string;
        }

        [
            'ReStockId', 
            'ProductId', 
            'Date', 
            'RtnInwardsDtlsId', 
            'SalesId', 
            'Quantity', 
            'UomAndPriceId', 
            'IsRestocked', 
            'LocationId', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'ProductProductCategoryId', 
            'ProductSupplierId', 
            'ProductLeastUnitName', 
            'ProductAccountId', 
            'UomAndPriceProductId', 
            'UomAndPriceUnitName', 
            'UomAndPriceUnitMakeUp', 
            'UomAndPriceStandardUomid', 
            'UomAndPriceDiscontinued', 
            'UomAndPricePrice'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

