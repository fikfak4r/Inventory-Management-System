namespace InventoryManagement.BusinessObjects {
    export interface NotesRow {
        NoteId?: number;
        PurchaseId?: number;
        Date?: string;
        Description?: string;
    }

    export namespace NotesRow {
        export const idProperty = 'NoteId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'BusinessObjects.Notes';
        export const lookupKey = 'BusinessObjects.Notes';

        export function getLookup(): Q.Lookup<NotesRow> {
            return Q.getLookup<NotesRow>('BusinessObjects.Notes');
        }

        export namespace Fields {
            export declare const NoteId: string;
            export declare const PurchaseId: string;
            export declare const Date: string;
            export declare const Description: string;
        }

        [
            'NoteId', 
            'PurchaseId', 
            'Date', 
            'Description'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

