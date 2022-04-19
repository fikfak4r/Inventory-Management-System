namespace InventoryManagement.BusinessObjects {
    export interface PurchasesRow {
        PurchasesId?: number;
        OrderId?: string;
        Date?: string;
        SupplierId?: number;
        TotalAmount?: number;
        TotalAmountPaid?: number;
        TotalAmountLeft?: number;
        HasPurchasesDetails?: boolean;
        LocationId?: number;
        IsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        Status?: string;
        IsOpen?: boolean;
        IsInProgress?: boolean;
        IsFullyReceived?: boolean;
        IsFullyPaid?: boolean;
        IsAdvanced?: boolean;
        Discount?: number;
        Tax?: number;
        SupplierDate?: string;
        SupplierSupplierName?: string;
        SupplierPhoneNumber?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierWebsite?: string;
        SupplierAddress?: string;
        SupplierNote?: string;
        SupplierAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }

    export namespace PurchasesRow {
        export const idProperty = 'PurchasesId';
        export const nameProperty = 'OrderId';
        export const localTextPrefix = 'BusinessObjects.Purchases';
        export const lookupKey = 'BusinessObjects.Purchases';

        export function getLookup(): Q.Lookup<PurchasesRow> {
            return Q.getLookup<PurchasesRow>('BusinessObjects.Purchases');
        }

        export namespace Fields {
            export declare const PurchasesId: string;
            export declare const OrderId: string;
            export declare const Date: string;
            export declare const SupplierId: string;
            export declare const TotalAmount: string;
            export declare const TotalAmountPaid: string;
            export declare const TotalAmountLeft: string;
            export declare const HasPurchasesDetails: string;
            export declare const LocationId: string;
            export declare const IsIntegerTrailingOrderIdWithPrefixPo: string;
            export declare const Status: string;
            export declare const IsOpen: string;
            export declare const IsInProgress: string;
            export declare const IsFullyReceived: string;
            export declare const IsFullyPaid: string;
            export declare const IsAdvanced: string;
            export declare const Discount: string;
            export declare const Tax: string;
            export declare const SupplierDate: string;
            export declare const SupplierSupplierName: string;
            export declare const SupplierPhoneNumber: string;
            export declare const SupplierFax: string;
            export declare const SupplierEmail: string;
            export declare const SupplierWebsite: string;
            export declare const SupplierAddress: string;
            export declare const SupplierNote: string;
            export declare const SupplierAccountId: string;
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
        }

        [
            'PurchasesId', 
            'OrderId', 
            'Date', 
            'SupplierId', 
            'TotalAmount', 
            'TotalAmountPaid', 
            'TotalAmountLeft', 
            'HasPurchasesDetails', 
            'LocationId', 
            'IsIntegerTrailingOrderIdWithPrefixPo', 
            'Status', 
            'IsOpen', 
            'IsInProgress', 
            'IsFullyReceived', 
            'IsFullyPaid', 
            'IsAdvanced', 
            'Discount', 
            'Tax', 
            'SupplierDate', 
            'SupplierSupplierName', 
            'SupplierPhoneNumber', 
            'SupplierFax', 
            'SupplierEmail', 
            'SupplierWebsite', 
            'SupplierAddress', 
            'SupplierNote', 
            'SupplierAccountId', 
            'LocationAccountId', 
            'LocationDate', 
            'LocationPhoneNumber', 
            'LocationEmail', 
            'LocationWebsite', 
            'LocationLocationName', 
            'LocationAddress', 
            'LocationUserId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

