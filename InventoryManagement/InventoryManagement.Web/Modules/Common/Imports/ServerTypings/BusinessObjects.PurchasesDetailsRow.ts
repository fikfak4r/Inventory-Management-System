namespace InventoryManagement.BusinessObjects {
    export interface PurchasesDetailsRow {
        PurchasesDetailsId?: number;
        PurchasesId?: number;
        Date?: string;
        ProductId?: number;
        Quantity?: number;
        QuantityInLeastUnit?: number;
        UomAndPriceId?: number;
        UnitPrice?: number;
        Discount?: number;
        Amount?: number;
        LocationId?: number;
        IsReceived?: boolean;
        TotalQuantityInLeastUnit?: number;
        PurchasesOrderId?: string;
        PurchasesDate?: string;
        PurchasesSupplierId?: number;
        PurchasesTotalAmount?: number;
        PurchasesTotalAmountPaid?: number;
        PurchasesTotalAmountLeft?: number;
        PurchasesHasPurchasesDetails?: boolean;
        PurchasesLocationId?: number;
        PurchasesIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        PurchasesStatus?: string;
        PurchasesIsOpen?: boolean;
        PurchasesIsInProgress?: boolean;
        PurchasesIsFullyReceived?: boolean;
        PurchasesIsFullyPaid?: boolean;
        PurchasesIsAdvanced?: boolean;
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

    export namespace PurchasesDetailsRow {
        export const idProperty = 'PurchasesDetailsId';
        export const localTextPrefix = 'BusinessObjects.PurchasesDetails';
        export const lookupKey = 'BusinessObjects.PurchasesDetails';

        export function getLookup(): Q.Lookup<PurchasesDetailsRow> {
            return Q.getLookup<PurchasesDetailsRow>('BusinessObjects.PurchasesDetails');
        }

        export namespace Fields {
            export declare const PurchasesDetailsId: string;
            export declare const PurchasesId: string;
            export declare const Date: string;
            export declare const ProductId: string;
            export declare const Quantity: string;
            export declare const QuantityInLeastUnit: string;
            export declare const UomAndPriceId: string;
            export declare const UnitPrice: string;
            export declare const Discount: string;
            export declare const Amount: string;
            export declare const LocationId: string;
            export declare const IsReceived: string;
            export declare const TotalQuantityInLeastUnit: string;
            export declare const PurchasesOrderId: string;
            export declare const PurchasesDate: string;
            export declare const PurchasesSupplierId: string;
            export declare const PurchasesTotalAmount: string;
            export declare const PurchasesTotalAmountPaid: string;
            export declare const PurchasesTotalAmountLeft: string;
            export declare const PurchasesHasPurchasesDetails: string;
            export declare const PurchasesLocationId: string;
            export declare const PurchasesIsIntegerTrailingOrderIdWithPrefixPo: string;
            export declare const PurchasesStatus: string;
            export declare const PurchasesIsOpen: string;
            export declare const PurchasesIsInProgress: string;
            export declare const PurchasesIsFullyReceived: string;
            export declare const PurchasesIsFullyPaid: string;
            export declare const PurchasesIsAdvanced: string;
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
            'PurchasesDetailsId', 
            'PurchasesId', 
            'Date', 
            'ProductId', 
            'Quantity', 
            'QuantityInLeastUnit', 
            'UomAndPriceId', 
            'UnitPrice', 
            'Discount', 
            'Amount', 
            'LocationId', 
            'IsReceived', 
            'TotalQuantityInLeastUnit', 
            'PurchasesOrderId', 
            'PurchasesDate', 
            'PurchasesSupplierId', 
            'PurchasesTotalAmount', 
            'PurchasesTotalAmountPaid', 
            'PurchasesTotalAmountLeft', 
            'PurchasesHasPurchasesDetails', 
            'PurchasesLocationId', 
            'PurchasesIsIntegerTrailingOrderIdWithPrefixPo', 
            'PurchasesStatus', 
            'PurchasesIsOpen', 
            'PurchasesIsInProgress', 
            'PurchasesIsFullyReceived', 
            'PurchasesIsFullyPaid', 
            'PurchasesIsAdvanced', 
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

