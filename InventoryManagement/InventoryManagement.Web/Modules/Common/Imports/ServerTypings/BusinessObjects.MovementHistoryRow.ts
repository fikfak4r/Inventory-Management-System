namespace InventoryManagement.BusinessObjects {
    export interface MovementHistoryRow {
        ProductId?: number;
        MovementHistoryId?: number;
        TransactionType?: string;
        Date?: string;
        LocationId?: number;
        QuantityBefore?: string;
        Quantity?: string;
        QuantityAfter?: string;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
        PurchaseId?: number;
        PurchaseOrderId?: string;
    }

    export namespace MovementHistoryRow {
        export const idProperty = 'MovementHistoryId';
        export const nameProperty = 'TransactionType';
        export const localTextPrefix = 'BusinessObjects.MovementHistory';

        export namespace Fields {
            export declare const ProductId: string;
            export declare const MovementHistoryId: string;
            export declare const TransactionType: string;
            export declare const Date: string;
            export declare const LocationId: string;
            export declare const QuantityBefore: string;
            export declare const Quantity: string;
            export declare const QuantityAfter: string;
            export declare const ProductDate: string;
            export declare const ProductProductCode: string;
            export declare const ProductProductName: string;
            export declare const ProductBrandName: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const LocationIsVisible: string;
            export declare const PurchaseId: string;
            export declare const PurchaseOrderId: string;
        }

        [
            'ProductId', 
            'MovementHistoryId', 
            'TransactionType', 
            'Date', 
            'LocationId', 
            'QuantityBefore', 
            'Quantity', 
            'QuantityAfter', 
            'ProductDate', 
            'ProductProductCode', 
            'ProductProductName', 
            'ProductBrandName', 
            'LocationAccountId', 
            'LocationDate', 
            'LocationPhoneNumber', 
            'LocationEmail', 
            'LocationWebsite', 
            'LocationLocationName', 
            'LocationAddress', 
            'LocationUserId', 
            'LocationIsVisible', 
            'PurchaseId', 
            'PurchaseOrderId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

