namespace InventoryManagement.BusinessObjects {
    export interface ReturnInwardsRow {
        RtnInwardsId?: number;
        Date?: string;
        SalesId?: number;
        TotalAmount?: number;
        TotalFee?: number;
        TotalAmountRefunded?: number;
        TotalCredit?: number;
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

    export namespace ReturnInwardsRow {
        export const idProperty = 'RtnInwardsId';
        export const localTextPrefix = 'BusinessObjects.ReturnInwards';
        export const lookupKey = 'BusinessObjects.ReturnInwards';

        export function getLookup(): Q.Lookup<ReturnInwardsRow> {
            return Q.getLookup<ReturnInwardsRow>('BusinessObjects.ReturnInwards');
        }

        export namespace Fields {
            export declare const RtnInwardsId: string;
            export declare const Date: string;
            export declare const SalesId: string;
            export declare const TotalAmount: string;
            export declare const TotalFee: string;
            export declare const TotalAmountRefunded: string;
            export declare const TotalCredit: string;
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
            'RtnInwardsId', 
            'Date', 
            'SalesId', 
            'TotalAmount', 
            'TotalFee', 
            'TotalAmountRefunded', 
            'TotalCredit', 
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

