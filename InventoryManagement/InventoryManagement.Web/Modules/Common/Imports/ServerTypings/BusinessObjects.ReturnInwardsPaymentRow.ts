namespace InventoryManagement.BusinessObjects {
    export interface ReturnInwardsPaymentRow {
        RtnInwardsPaymentId?: number;
        RtnInwardsId?: number;
        SalesId?: number;
        Date?: string;
        Amount?: number;
        AmountRefunded?: number;
        Fee?: number;
        Credit?: number;
        RtnInwardsDate?: string;
        RtnInwardsSalesId?: number;
        RtnInwardsTotalAmount?: number;
        RtnInwardsTotalFee?: number;
        RtnInwardsTotalAmountRefunded?: number;
        RtnInwardsTotalCredit?: number;
    }

    export namespace ReturnInwardsPaymentRow {
        export const idProperty = 'RtnInwardsPaymentId';
        export const localTextPrefix = 'BusinessObjects.ReturnInwardsPayment';
        export const lookupKey = 'BusinessObjects.ReturnInwardsPayment';

        export function getLookup(): Q.Lookup<ReturnInwardsPaymentRow> {
            return Q.getLookup<ReturnInwardsPaymentRow>('BusinessObjects.ReturnInwardsPayment');
        }

        export namespace Fields {
            export declare const RtnInwardsPaymentId: string;
            export declare const RtnInwardsId: string;
            export declare const SalesId: string;
            export declare const Date: string;
            export declare const Amount: string;
            export declare const AmountRefunded: string;
            export declare const Fee: string;
            export declare const Credit: string;
            export declare const RtnInwardsDate: string;
            export declare const RtnInwardsSalesId: string;
            export declare const RtnInwardsTotalAmount: string;
            export declare const RtnInwardsTotalFee: string;
            export declare const RtnInwardsTotalAmountRefunded: string;
            export declare const RtnInwardsTotalCredit: string;
        }

        [
            'RtnInwardsPaymentId', 
            'RtnInwardsId', 
            'SalesId', 
            'Date', 
            'Amount', 
            'AmountRefunded', 
            'Fee', 
            'Credit', 
            'RtnInwardsDate', 
            'RtnInwardsSalesId', 
            'RtnInwardsTotalAmount', 
            'RtnInwardsTotalFee', 
            'RtnInwardsTotalAmountRefunded', 
            'RtnInwardsTotalCredit'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

