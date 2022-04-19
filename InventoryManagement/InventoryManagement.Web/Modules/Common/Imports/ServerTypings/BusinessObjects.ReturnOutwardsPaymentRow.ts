namespace InventoryManagement.BusinessObjects {
    export interface ReturnOutwardsPaymentRow {
        RtnOutwardsPaymentId?: number;
        RtnOutwardsId?: number;
        PurchasesId?: number;
        Date?: string;
        Amount?: number;
        AmountRefunded?: number;
        Fee?: number;
        Credit?: number;
        RtnOutwardsDate?: string;
        RtnOutwardsPurchasesId?: number;
        RtnOutwardsTotalAmount?: number;
        RtnOutwardsTotalFee?: number;
        RtnOutwardsTotalAmountRefunded?: number;
        RtnOutwardsTotalCredit?: number;
    }

    export namespace ReturnOutwardsPaymentRow {
        export const idProperty = 'RtnOutwardsPaymentId';
        export const localTextPrefix = 'BusinessObjects.ReturnOutwardsPayments';
        export const lookupKey = 'BusinessObjects.ReturnOutwardsPayments';

        export function getLookup(): Q.Lookup<ReturnOutwardsPaymentRow> {
            return Q.getLookup<ReturnOutwardsPaymentRow>('BusinessObjects.ReturnOutwardsPayments');
        }

        export namespace Fields {
            export declare const RtnOutwardsPaymentId: string;
            export declare const RtnOutwardsId: string;
            export declare const PurchasesId: string;
            export declare const Date: string;
            export declare const Amount: string;
            export declare const AmountRefunded: string;
            export declare const Fee: string;
            export declare const Credit: string;
            export declare const RtnOutwardsDate: string;
            export declare const RtnOutwardsPurchasesId: string;
            export declare const RtnOutwardsTotalAmount: string;
            export declare const RtnOutwardsTotalFee: string;
            export declare const RtnOutwardsTotalAmountRefunded: string;
            export declare const RtnOutwardsTotalCredit: string;
        }

        [
            'RtnOutwardsPaymentId', 
            'RtnOutwardsId', 
            'PurchasesId', 
            'Date', 
            'Amount', 
            'AmountRefunded', 
            'Fee', 
            'Credit', 
            'RtnOutwardsDate', 
            'RtnOutwardsPurchasesId', 
            'RtnOutwardsTotalAmount', 
            'RtnOutwardsTotalFee', 
            'RtnOutwardsTotalAmountRefunded', 
            'RtnOutwardsTotalCredit'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

