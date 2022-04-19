namespace InventoryManagement.BusinessObjects {
    export interface ReturnOutwardsRow {
        RtnOutwardsId?: number;
        Date?: string;
        PurchasesId?: number;
        TotalAmount?: number;
        TotalFee?: number;
        TotalAmountRefunded?: number;
        TotalCredit?: number;
        PurchasesOrderId?: string;
        PurchasesDate?: string;
        PurchasesSupplierId?: number;
        PurchasesTotalAmount?: number;
        PurchasesTotalAmountPaid?: number;
        PurchasesTotalAmountLeft?: number;
        PurchasesHasPurchasesDetails?: boolean;
        PurchasesLocationId?: number;
        PurchasesIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        PurchasesStatus?: string;
        PurchasesIsOpen?: boolean;
        PurchasesIsInProgress?: boolean;
        PurchasesIsFullyReceived?: boolean;
        PurchasesIsFullyPaid?: boolean;
        PurchasesIsAdvanced?: boolean;
    }

    export namespace ReturnOutwardsRow {
        export const idProperty = 'RtnOutwardsId';
        export const localTextPrefix = 'BusinessObjects.ReturnOutwards';
        export const lookupKey = 'BusinessObjects.ReturnOutwards';

        export function getLookup(): Q.Lookup<ReturnOutwardsRow> {
            return Q.getLookup<ReturnOutwardsRow>('BusinessObjects.ReturnOutwards');
        }

        export namespace Fields {
            export declare const RtnOutwardsId: string;
            export declare const Date: string;
            export declare const PurchasesId: string;
            export declare const TotalAmount: string;
            export declare const TotalFee: string;
            export declare const TotalAmountRefunded: string;
            export declare const TotalCredit: string;
            export declare const PurchasesOrderId: string;
            export declare const PurchasesDate: string;
            export declare const PurchasesSupplierId: string;
            export declare const PurchasesTotalAmount: string;
            export declare const PurchasesTotalAmountPaid: string;
            export declare const PurchasesTotalAmountLeft: string;
            export declare const PurchasesHasPurchasesDetails: string;
            export declare const PurchasesLocationId: string;
            export declare const PurchasesIsIntegerTrailingOrderIdWithPrefixPo: string;
            export declare const PurchasesStatus: string;
            export declare const PurchasesIsOpen: string;
            export declare const PurchasesIsInProgress: string;
            export declare const PurchasesIsFullyReceived: string;
            export declare const PurchasesIsFullyPaid: string;
            export declare const PurchasesIsAdvanced: string;
        }

        [
            'RtnOutwardsId', 
            'Date', 
            'PurchasesId', 
            'TotalAmount', 
            'TotalFee', 
            'TotalAmountRefunded', 
            'TotalCredit', 
            'PurchasesOrderId', 
            'PurchasesDate', 
            'PurchasesSupplierId', 
            'PurchasesTotalAmount', 
            'PurchasesTotalAmountPaid', 
            'PurchasesTotalAmountLeft', 
            'PurchasesHasPurchasesDetails', 
            'PurchasesLocationId', 
            'PurchasesIsIntegerTrailingOrderIdWithPrefixPo', 
            'PurchasesStatus', 
            'PurchasesIsOpen', 
            'PurchasesIsInProgress', 
            'PurchasesIsFullyReceived', 
            'PurchasesIsFullyPaid', 
            'PurchasesIsAdvanced'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

