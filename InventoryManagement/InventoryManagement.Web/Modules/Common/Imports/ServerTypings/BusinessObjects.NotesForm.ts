namespace InventoryManagement.BusinessObjects {
    export class NotesForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Notes';

    }

    export interface NotesForm {
        PurchaseId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
    }

    [['PurchaseId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['Description', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(NotesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

