
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NotesEditorDialog extends Common.GridEditorDialog<NotesRow> {
        protected getFormKey() { return NotesForm.formKey; }
                protected getLocalTextPrefix() { return NotesRow.localTextPrefix; }
        protected getNameProperty() { return NotesRow.nameProperty; }
        protected form = new NotesForm(this.idPrefix);
    }
}