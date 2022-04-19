namespace InventoryManagement.BusinessObjects {
    export interface SalesRow {
        SalesId?: number;
        OrderId?: string;
        Date?: string;
        CustomerId?: number;
        TotalAmount?: number;
        TotalAmountPaid?: number;
        TotalAmountLeft?: number;
        CostOfGoodsSold?: number;
        GrossProfit?: number;
        HasSalesDetails?: boolean;
        LocationId?: number;
        IsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        Status?: string;
        IsOpen?: boolean;
        IsInProgress?: boolean;
        IsFullyPicked?: boolean;
        IsFullyPaid?: boolean;
        IsInvoiced?: boolean;
        IsAdvanced?: boolean;
        CustomerName?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerWebsite?: string;
        CustomerAddress?: string;
        CustomerAccountId?: number;
        CustomerAddress2?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }

    export namespace SalesRow {
        export const idProperty = 'SalesId';
        export const nameProperty = 'OrderId';
        export const localTextPrefix = 'BusinessObjects.Sales';
        export const lookupKey = 'BusinessObjects.Sales';

        export function getLookup(): Q.Lookup<SalesRow> {
            return Q.getLookup<SalesRow>('BusinessObjects.Sales');
        }

        export namespace Fields {
            export declare const SalesId: string;
            export declare const OrderId: string;
            export declare const Date: string;
            export declare const CustomerId: string;
            export declare const TotalAmount: string;
            export declare const TotalAmountPaid: string;
            export declare const TotalAmountLeft: string;
            export declare const CostOfGoodsSold: string;
            export declare const GrossProfit: string;
            export declare const HasSalesDetails: string;
            export declare const LocationId: string;
            export declare const IsIntegerTrailingOrderIdWithPrefixSo: string;
            export declare const Status: string;
            export declare const IsOpen: string;
            export declare const IsInProgress: string;
            export declare const IsFullyPicked: string;
            export declare const IsFullyPaid: string;
            export declare const IsInvoiced: string;
            export declare const IsAdvanced: string;
            export declare const CustomerName: string;
            export declare const CustomerPhoneNumber: string;
            export declare const CustomerEmail: string;
            export declare const CustomerWebsite: string;
            export declare const CustomerAddress: string;
            export declare const CustomerAccountId: string;
            export declare const CustomerAddress2: string;
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
            'SalesId', 
            'OrderId', 
            'Date', 
            'CustomerId', 
            'TotalAmount', 
            'TotalAmountPaid', 
            'TotalAmountLeft', 
            'CostOfGoodsSold', 
            'GrossProfit', 
            'HasSalesDetails', 
            'LocationId', 
            'IsIntegerTrailingOrderIdWithPrefixSo', 
            'Status', 
            'IsOpen', 
            'IsInProgress', 
            'IsFullyPicked', 
            'IsFullyPaid', 
            'IsInvoiced', 
            'IsAdvanced', 
            'CustomerName', 
            'CustomerPhoneNumber', 
            'CustomerEmail', 
            'CustomerWebsite', 
            'CustomerAddress', 
            'CustomerAccountId', 
            'CustomerAddress2', 
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

