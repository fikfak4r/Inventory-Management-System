namespace InventoryManagement.BusinessObjects {
    export interface UnstockRow {
        UnStockId?: number;
        ProductId?: number;
        Date?: string;
        PurchasesId?: number;
        RtnOutwardsDtlsId?: number;
        Quantity?: number;
        QuantityInLeastUnit?: number;
        UomAndPriceId?: number;
        IsUnstocked?: boolean;
        LocationId?: number;
        SumQuantity?: number;
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

    export namespace UnstockRow {
        export const idProperty = 'UnStockId';
        export const localTextPrefix = 'BusinessObjects.Unstock';
        export const lookupKey = 'BusinessObjects.Unstock';

        export function getLookup(): Q.Lookup<UnstockRow> {
            return Q.getLookup<UnstockRow>('BusinessObjects.Unstock');
        }

        export namespace Fields {
            export declare const UnStockId: string;
            export declare const ProductId: string;
            export declare const Date: string;
            export declare const PurchasesId: string;
            export declare const RtnOutwardsDtlsId: string;
            export declare const Quantity: string;
            export declare const QuantityInLeastUnit: string;
            export declare const UomAndPriceId: string;
            export declare const IsUnstocked: string;
            export declare const LocationId: string;
            export declare const SumQuantity: string;
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
            'UnStockId', 
            'ProductId', 
            'Date', 
            'PurchasesId', 
            'RtnOutwardsDtlsId', 
            'Quantity', 
            'QuantityInLeastUnit', 
            'UomAndPriceId', 
            'IsUnstocked', 
            'LocationId', 
            'SumQuantity', 
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

