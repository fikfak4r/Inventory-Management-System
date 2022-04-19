
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NotesDialog extends Serenity.EntityDialog<NotesRow, any> {
        protected getFormKey() { return NotesForm.formKey; }
        protected getIdProperty() { return NotesRow.idProperty; }
        protected getLocalTextPrefix() { return NotesRow.localTextPrefix; }
        protected getNameProperty() { return NotesRow.nameProperty; }
        protected getService() { return NotesService.baseUrl; }

        protected form = new NotesForm(this.idPrefix);

    }
}