namespace InventoryManagement.BusinessObjects {
    export interface PurchasesPaymentDetailsRow {
        PurchPymntDetailsId?: number;
        PurchasesId?: number;
        Date?: string;
        TotalAmount?: number;
        AmountPaid?: number;
        AmountLeft?: number;
        IsTotalAmountRow?: boolean;
        LocationId?: number;
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

    export namespace PurchasesPaymentDetailsRow {
        export const idProperty = 'PurchPymntDetailsId';
        export const localTextPrefix = 'BusinessObjects.PurchasesPaymentsDetails';
        export const lookupKey = 'BusinessObjects.PurchasesPaymentsDetails';

        export function getLookup(): Q.Lookup<PurchasesPaymentDetailsRow> {
            return Q.getLookup<PurchasesPaymentDetailsRow>('BusinessObjects.PurchasesPaymentsDetails');
        }

        export namespace Fields {
            export declare const PurchPymntDetailsId: string;
            export declare const PurchasesId: string;
            export declare const Date: string;
            export declare const TotalAmount: string;
            export declare const AmountPaid: string;
            export declare const AmountLeft: string;
            export declare const IsTotalAmountRow: string;
            export declare const LocationId: string;
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
            'PurchPymntDetailsId', 
            'PurchasesId', 
            'Date', 
            'TotalAmount', 
            'AmountPaid', 
            'AmountLeft', 
            'IsTotalAmountRow', 
            'LocationId', 
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

