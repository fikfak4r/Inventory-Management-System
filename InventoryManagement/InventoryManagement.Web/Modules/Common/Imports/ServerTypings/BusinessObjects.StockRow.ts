namespace InventoryManagement.BusinessObjects {
    export interface StockRow {
        StockId?: number;
        ProductId?: number;
        Quantity?: number;
        DummyQuantity?: number;
        QuantityInUnit?: string;
        LocationId?: number;
        DummyLocationId?: number;
        UomAndPriceId?: number;
        ActionKey?: string;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        ProductCategory?: string;
    }

    export namespace StockRow {
        export const idProperty = 'StockId';
        export const nameProperty = 'ProductProductName';
        export const localTextPrefix = 'BusinessObjects.Stock';
        export const lookupKey = 'BusinessObjects.Stock';

        export function getLookup(): Q.Lookup<StockRow> {
            return Q.getLookup<StockRow>('BusinessObjects.Stock');
        }

        export namespace Fields {
            export declare const StockId: string;
            export declare const ProductId: string;
            export declare const Quantity: string;
            export declare const DummyQuantity: string;
            export declare const QuantityInUnit: string;
            export declare const LocationId: string;
            export declare const DummyLocationId: string;
            export declare const UomAndPriceId: string;
            export declare const ActionKey: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductSupplierId: string;
            export declare const ProductLeastUnitName: string;
            export declare const ProductAccountId: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const ProductCategory: string;
        }

        [
            'StockId', 
            'ProductId', 
            'Quantity', 
            'DummyQuantity', 
            'QuantityInUnit', 
            'LocationId', 
            'DummyLocationId', 
            'UomAndPriceId', 
            'ActionKey', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'ProductProductCategoryId', 
            'ProductSupplierId', 
            'ProductLeastUnitName', 
            'ProductAccountId', 
            'LocationAccountId', 
            'LocationDate', 
            'LocationPhoneNumber', 
            'LocationEmail', 
            'LocationWebsite', 
            'LocationLocationName', 
            'LocationAddress', 
            'LocationUserId', 
            'ProductCategory'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

