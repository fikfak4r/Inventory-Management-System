
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class NotesEditor extends Common.GridEditorBase<NotesRow> {
        protected getColumnsKey() { return 'BusinessObjects.Notes'; }
        protected getDialogType() { return NotesEditorDialog; }
                protected getLocalTextPrefix() { return NotesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}