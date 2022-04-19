namespace InventoryManagement.BusinessObjects {
    export interface PurchasesUoMAndPriceRow {
        UomAndPriceId?: number;
        ProductId?: number;
        UnitName?: string;
        UnitMakeUp?: number;
        StandardUomid?: number;
        Discontinued?: boolean;
        Price?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        StandardUomidProductId?: number;
        StandardUomidStandardUnitName?: string;
        StandardUomidDiscontinued?: boolean;
        StandardUomidCost?: number;
        UnitOfMeasurement?: string;
        StandardUnitName?: string;
    }

    export namespace PurchasesUoMAndPriceRow {
        export const idProperty = 'UomAndPriceId';
        export const nameProperty = 'UnitName';
        export const localTextPrefix = 'BusinessObjects.PurchasesUoMAndPrice';
        export const lookupKey = 'BusinessObjects.PurchasesUoMAndPrice';

        export function getLookup(): Q.Lookup<PurchasesUoMAndPriceRow> {
            return Q.getLookup<PurchasesUoMAndPriceRow>('BusinessObjects.PurchasesUoMAndPrice');
        }

        export namespace Fields {
            export declare const UomAndPriceId: string;
            export declare const ProductId: string;
            export declare const UnitName: string;
            export declare const UnitMakeUp: string;
            export declare const StandardUomid: string;
            export declare const Discontinued: string;
            export declare const Price: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductSupplierId: string;
            export declare const ProductLeastUnitName: string;
            export declare const ProductAccountId: string;
            export declare const StandardUomidProductId: string;
            export declare const StandardUomidStandardUnitName: string;
            export declare const StandardUomidDiscontinued: string;
            export declare const StandardUomidCost: string;
            export declare const UnitOfMeasurement: string;
            export declare const StandardUnitName: string;
        }

        [
            'UomAndPriceId', 
            'ProductId', 
            'UnitName', 
            'UnitMakeUp', 
            'StandardUomid', 
            'Discontinued', 
            'Price', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'ProductProductCategoryId', 
            'ProductSupplierId', 
            'ProductLeastUnitName', 
            'ProductAccountId', 
            'StandardUomidProductId', 
            'StandardUomidStandardUnitName', 
            'StandardUomidDiscontinued', 
            'StandardUomidCost', 
            'UnitOfMeasurement', 
            'StandardUnitName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

