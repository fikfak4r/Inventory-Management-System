namespace InventoryManagement.BusinessObjects {
    export interface BankTransactionRow {
        BankTransactionId?: number;
        BankId?: number;
        Date?: string;
        AccountType?: string;
        CustomerId?: number;
        SalesId?: number;
        Amount?: number;
        LocationId?: number;
        SalesPymntDetailsId?: number;
        BankDate?: string;
        BankBankName?: string;
        BankAccountId?: number;
        CustomerName?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerWebsite?: string;
        CustomerAddress?: string;
        CustomerAccountId?: number;
        CustomerAddress2?: string;
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
    }

    export namespace BankTransactionRow {
        export const idProperty = 'BankTransactionId';
        export const nameProperty = 'AccountType';
        export const localTextPrefix = 'BusinessObjects.BankTransaction';
        export const lookupKey = 'BusinessObjects.BankTransaction';

        export function getLookup(): Q.Lookup<BankTransactionRow> {
            return Q.getLookup<BankTransactionRow>('BusinessObjects.BankTransaction');
        }

        export namespace Fields {
            export declare const BankTransactionId: string;
            export declare const BankId: string;
            export declare const Date: string;
            export declare const AccountType: string;
            export declare const CustomerId: string;
            export declare const SalesId: string;
            export declare const Amount: string;
            export declare const LocationId: string;
            export declare const SalesPymntDetailsId: string;
            export declare const BankDate: string;
            export declare const BankBankName: string;
            export declare const BankAccountId: string;
            export declare const CustomerName: string;
            export declare const CustomerPhoneNumber: string;
            export declare const CustomerEmail: string;
            export declare const CustomerWebsite: string;
            export declare const CustomerAddress: string;
            export declare const CustomerAccountId: string;
            export declare const CustomerAddress2: string;
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
        }

        [
            'BankTransactionId', 
            'BankId', 
            'Date', 
            'AccountType', 
            'CustomerId', 
            'SalesId', 
            'Amount', 
            'LocationId', 
            'SalesPymntDetailsId', 
            'BankDate', 
            'BankBankName', 
            'BankAccountId', 
            'CustomerName', 
            'CustomerPhoneNumber', 
            'CustomerEmail', 
            'CustomerWebsite', 
            'CustomerAddress', 
            'CustomerAccountId', 
            'CustomerAddress2', 
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
            'SalesIsAdvanced'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

