namespace InventoryManagement.BusinessObjects {
    export interface ReturnOutwardsDetailsRow {
        RtnOutwardsDtlsId?: number;
        Date?: string;
        ProductId?: number;
        RtnOutwardsId?: number;
        PurchasesDetailsId?: number;
        PurchasesId?: number;
        Quantity?: number;
        QuantityInLeastUnit?: number;
        UnitPrice?: number;
        Amount?: number;
        Discount?: number;
        UomAndPriceId?: number;
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
        RtnOutwardsDate?: string;
        RtnOutwardsPurchasesId?: number;
        RtnOutwardsTotalAmount?: number;
        RtnOutwardsTotalFee?: number;
        RtnOutwardsTotalAmountRefunded?: number;
        RtnOutwardsTotalCredit?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }

    export namespace ReturnOutwardsDetailsRow {
        export const idProperty = 'RtnOutwardsDtlsId';
        export const nameProperty = 'ProductProductName';
        export const localTextPrefix = 'BusinessObjects.ReturnOutwardsDetails';
        export const lookupKey = 'BusinessObjects.ReturnOutwardsDetails';

        export function getLookup(): Q.Lookup<ReturnOutwardsDetailsRow> {
            return Q.getLookup<ReturnOutwardsDetailsRow>('BusinessObjects.ReturnOutwardsDetails');
        }

        export namespace Fields {
            export declare const RtnOutwardsDtlsId: string;
            export declare const Date: string;
            export declare const ProductId: string;
            export declare const RtnOutwardsId: string;
            export declare const PurchasesDetailsId: string;
            export declare const PurchasesId: string;
            export declare const Quantity: string;
            export declare const QuantityInLeastUnit: string;
            export declare const UnitPrice: string;
            export declare const Amount: string;
            export declare const Discount: string;
            export declare const UomAndPriceId: string;
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
            export declare const RtnOutwardsDate: string;
            export declare const RtnOutwardsPurchasesId: string;
            export declare const RtnOutwardsTotalAmount: string;
            export declare const RtnOutwardsTotalFee: string;
            export declare const RtnOutwardsTotalAmountRefunded: string;
            export declare const RtnOutwardsTotalCredit: string;
            export declare const UomAndPriceProductId: string;
            export declare const UomAndPriceUnitName: string;
            export declare const UomAndPriceUnitMakeUp: string;
            export declare const UomAndPriceStandardUomid: string;
            export declare const UomAndPriceDiscontinued: string;
            export declare const UomAndPricePrice: string;
        }

        [
            'RtnOutwardsDtlsId', 
            'Date', 
            'ProductId', 
            'RtnOutwardsId', 
            'PurchasesDetailsId', 
            'PurchasesId', 
            'Quantity', 
            'QuantityInLeastUnit', 
            'UnitPrice', 
            'Amount', 
            'Discount', 
            'UomAndPriceId', 
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
            'RtnOutwardsDate', 
            'RtnOutwardsPurchasesId', 
            'RtnOutwardsTotalAmount', 
            'RtnOutwardsTotalFee', 
            'RtnOutwardsTotalAmountRefunded', 
            'RtnOutwardsTotalCredit', 
            'UomAndPriceProductId', 
            'UomAndPriceUnitName', 
            'UomAndPriceUnitMakeUp', 
            'UomAndPriceStandardUomid', 
            'UomAndPriceDiscontinued', 
            'UomAndPricePrice'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

