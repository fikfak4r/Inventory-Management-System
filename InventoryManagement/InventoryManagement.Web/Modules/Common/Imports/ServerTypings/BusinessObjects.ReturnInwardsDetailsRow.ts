namespace InventoryManagement.BusinessObjects {
    export interface ReturnInwardsDetailsRow {
        RtnInwardsDtlsId?: number;
        Date?: string;
        ProductId?: number;
        RtnInwardsId?: number;
        SalesDetailsId?: number;
        SalesId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Amount?: number;
        Discount?: number;
        UomAndPriceId?: number;
        LocationId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        RtnInwardsDate?: string;
        RtnInwardsSalesId?: number;
        RtnInwardsTotalAmount?: number;
        RtnInwardsTotalFee?: number;
        RtnInwardsTotalAmountRefunded?: number;
        RtnInwardsTotalCredit?: number;
        SalesDetailsSalesId?: number;
        SalesDetailsDate?: string;
        SalesDetailsProductId?: number;
        SalesDetailsUomAndPriceId?: number;
        SalesDetailsUnitPrice?: number;
        SalesDetailsDiscount?: number;
        SalesDetailsAmount?: number;
        SalesDetailsQuantity?: number;
        SalesDetailsLocationId?: number;
        SalesDetailsCost?: number;
        SalesDetailsIsPicked?: boolean;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }

    export namespace ReturnInwardsDetailsRow {
        export const idProperty = 'RtnInwardsDtlsId';
        export const localTextPrefix = 'BusinessObjects.ReturnInwardsDetails';
        export const lookupKey = 'BusinessObjects.ReturnInwardsDetails';

        export function getLookup(): Q.Lookup<ReturnInwardsDetailsRow> {
            return Q.getLookup<ReturnInwardsDetailsRow>('BusinessObjects.ReturnInwardsDetails');
        }

        export namespace Fields {
            export declare const RtnInwardsDtlsId: string;
            export declare const Date: string;
            export declare const ProductId: string;
            export declare const RtnInwardsId: string;
            export declare const SalesDetailsId: string;
            export declare const SalesId: string;
            export declare const Quantity: string;
            export declare const UnitPrice: string;
            export declare const Amount: string;
            export declare const Discount: string;
            export declare const UomAndPriceId: string;
            export declare const LocationId: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductSupplierId: string;
            export declare const ProductLeastUnitName: string;
            export declare const ProductAccountId: string;
            export declare const RtnInwardsDate: string;
            export declare const RtnInwardsSalesId: string;
            export declare const RtnInwardsTotalAmount: string;
            export declare const RtnInwardsTotalFee: string;
            export declare const RtnInwardsTotalAmountRefunded: string;
            export declare const RtnInwardsTotalCredit: string;
            export declare const SalesDetailsSalesId: string;
            export declare const SalesDetailsDate: string;
            export declare const SalesDetailsProductId: string;
            export declare const SalesDetailsUomAndPriceId: string;
            export declare const SalesDetailsUnitPrice: string;
            export declare const SalesDetailsDiscount: string;
            export declare const SalesDetailsAmount: string;
            export declare const SalesDetailsQuantity: string;
            export declare const SalesDetailsLocationId: string;
            export declare const SalesDetailsCost: string;
            export declare const SalesDetailsIsPicked: string;
            export declare const UomAndPriceProductId: string;
            export declare const UomAndPriceUnitName: string;
            export declare const UomAndPriceUnitMakeUp: string;
            export declare const UomAndPriceStandardUomid: string;
            export declare const UomAndPriceDiscontinued: string;
            export declare const UomAndPricePrice: string;
        }

        [
            'RtnInwardsDtlsId', 
            'Date', 
            'ProductId', 
            'RtnInwardsId', 
            'SalesDetailsId', 
            'SalesId', 
            'Quantity', 
            'UnitPrice', 
            'Amount', 
            'Discount', 
            'UomAndPriceId', 
            'LocationId', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'ProductProductCategoryId', 
            'ProductSupplierId', 
            'ProductLeastUnitName', 
            'ProductAccountId', 
            'RtnInwardsDate', 
            'RtnInwardsSalesId', 
            'RtnInwardsTotalAmount', 
            'RtnInwardsTotalFee', 
            'RtnInwardsTotalAmountRefunded', 
            'RtnInwardsTotalCredit', 
            'SalesDetailsSalesId', 
            'SalesDetailsDate', 
            'SalesDetailsProductId', 
            'SalesDetailsUomAndPriceId', 
            'SalesDetailsUnitPrice', 
            'SalesDetailsDiscount', 
            'SalesDetailsAmount', 
            'SalesDetailsQuantity', 
            'SalesDetailsLocationId', 
            'SalesDetailsCost', 
            'SalesDetailsIsPicked', 
            'UomAndPriceProductId', 
            'UomAndPriceUnitName', 
            'UomAndPriceUnitMakeUp', 
            'UomAndPriceStandardUomid', 
            'UomAndPriceDiscontinued', 
            'UomAndPricePrice'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

