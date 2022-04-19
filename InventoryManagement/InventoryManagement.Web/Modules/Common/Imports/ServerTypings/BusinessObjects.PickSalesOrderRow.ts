namespace InventoryManagement.BusinessObjects {
    export interface PickSalesOrderRow {
        PickSalesOrderId?: number;
        SalesId?: number;
        ProductId?: number;
        SalesDetailsId?: number;
        Quantity?: number;
        Date?: string;
        IsPicked?: boolean;
        Amount?: number;
        UomAndPriceId?: number;
        UnitPrice?: number;
        Discount?: number;
        Cost?: number;
        QuantitySold?: number;
        CostOfGoodsSold?: number;
        LocationId?: number;
        SalesProfit?: number;
        SalesOrderId?: string;
        SalesDate?: string;
        SalesCustomerId?: number;
        SalesTotalAmount?: number;
        SalesTotalAmountPaid?: number;
        SalesTotalAmountLeft?: number;
        SalesCostOfGoodsSold?: number;
        SalesGrossProfit?: number;
        SalesHasSalesDetails?: boolean;
        SalesLocationId?: number;
        SalesIsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        SalesStatus?: string;
        SalesIsOpen?: boolean;
        SalesIsInProgress?: boolean;
        SalesIsFullyPicked?: boolean;
        SalesIsFullyPaid?: boolean;
        SalesIsInvoiced?: boolean;
        SalesIsAdvanced?: boolean;
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

    export namespace PickSalesOrderRow {
        export const idProperty = 'PickSalesOrderId';
        export const localTextPrefix = 'BusinessObjects.PickSalesOrder';
        export const lookupKey = 'BusinessObjects.PickSalesOrderRow';

        export function getLookup(): Q.Lookup<PickSalesOrderRow> {
            return Q.getLookup<PickSalesOrderRow>('BusinessObjects.PickSalesOrderRow');
        }

        export namespace Fields {
            export declare const PickSalesOrderId: string;
            export declare const SalesId: string;
            export declare const ProductId: string;
            export declare const SalesDetailsId: string;
            export declare const Quantity: string;
            export declare const Date: string;
            export declare const IsPicked: string;
            export declare const Amount: string;
            export declare const UomAndPriceId: string;
            export declare const UnitPrice: string;
            export declare const Discount: string;
            export declare const Cost: string;
            export declare const QuantitySold: string;
            export declare const CostOfGoodsSold: string;
            export declare const LocationId: string;
            export declare const SalesProfit: string;
            export declare const SalesOrderId: string;
            export declare const SalesDate: string;
            export declare const SalesCustomerId: string;
            export declare const SalesTotalAmount: string;
            export declare const SalesTotalAmountPaid: string;
            export declare const SalesTotalAmountLeft: string;
            export declare const SalesCostOfGoodsSold: string;
            export declare const SalesGrossProfit: string;
            export declare const SalesHasSalesDetails: string;
            export declare const SalesLocationId: string;
            export declare const SalesIsIntegerTrailingOrderIdWithPrefixSo: string;
            export declare const SalesStatus: string;
            export declare const SalesIsOpen: string;
            export declare const SalesIsInProgress: string;
            export declare const SalesIsFullyPicked: string;
            export declare const SalesIsFullyPaid: string;
            export declare const SalesIsInvoiced: string;
            export declare const SalesIsAdvanced: string;
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
            'PickSalesOrderId', 
            'SalesId', 
            'ProductId', 
            'SalesDetailsId', 
            'Quantity', 
            'Date', 
            'IsPicked', 
            'Amount', 
            'UomAndPriceId', 
            'UnitPrice', 
            'Discount', 
            'Cost', 
            'QuantitySold', 
            'CostOfGoodsSold', 
            'LocationId', 
            'SalesProfit', 
            'SalesOrderId', 
            'SalesDate', 
            'SalesCustomerId', 
            'SalesTotalAmount', 
            'SalesTotalAmountPaid', 
            'SalesTotalAmountLeft', 
            'SalesCostOfGoodsSold', 
            'SalesGrossProfit', 
            'SalesHasSalesDetails', 
            'SalesLocationId', 
            'SalesIsIntegerTrailingOrderIdWithPrefixSo', 
            'SalesStatus', 
            'SalesIsOpen', 
            'SalesIsInProgress', 
            'SalesIsFullyPicked', 
            'SalesIsFullyPaid', 
            'SalesIsInvoiced', 
            'SalesIsAdvanced', 
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

