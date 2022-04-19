namespace InventoryManagement.BusinessObjects {
    export interface SalesPaymentDetailsRow {
        SalesPymntDetailsId?: number;
        SalesId?: number;
        Date?: string;
        TotalAmount?: number;
        AmountPaid?: number;
        AmountLeft?: number;
        IsTotalAmountRow?: boolean;
        LocationId?: number;
        PaymentMode?: string;
        BankId?: number;
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
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        BankDate?: string;
        BankBankName?: string;
        BankAccountId?: number;
    }

    export namespace SalesPaymentDetailsRow {
        export const idProperty = 'SalesPymntDetailsId';
        export const nameProperty = 'PaymentMode';
        export const localTextPrefix = 'BusinessObjects.SalesPaymentDetails';
        export const lookupKey = 'BusinessObjects.SalesPaymentDetails';

        export function getLookup(): Q.Lookup<SalesPaymentDetailsRow> {
            return Q.getLookup<SalesPaymentDetailsRow>('BusinessObjects.SalesPaymentDetails');
        }

        export namespace Fields {
            export declare const SalesPymntDetailsId: string;
            export declare const SalesId: string;
            export declare const Date: string;
            export declare const TotalAmount: string;
            export declare const AmountPaid: string;
            export declare const AmountLeft: string;
            export declare const IsTotalAmountRow: string;
            export declare const LocationId: string;
            export declare const PaymentMode: string;
            export declare const BankId: string;
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
            export declare const LocationAccountId: string;
            export declare const LocationDate: string;
            export declare const LocationPhoneNumber: string;
            export declare const LocationEmail: string;
            export declare const LocationWebsite: string;
            export declare const LocationLocationName: string;
            export declare const LocationAddress: string;
            export declare const LocationUserId: string;
            export declare const BankDate: string;
            export declare const BankBankName: string;
            export declare const BankAccountId: string;
        }

        [
            'SalesPymntDetailsId', 
            'SalesId', 
            'Date', 
            'TotalAmount', 
            'AmountPaid', 
            'AmountLeft', 
            'IsTotalAmountRow', 
            'LocationId', 
            'PaymentMode', 
            'BankId', 
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
            'LocationAccountId', 
            'LocationDate', 
            'LocationPhoneNumber', 
            'LocationEmail', 
            'LocationWebsite', 
            'LocationLocationName', 
            'LocationAddress', 
            'LocationUserId', 
            'BankDate', 
            'BankBankName', 
            'BankAccountId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

