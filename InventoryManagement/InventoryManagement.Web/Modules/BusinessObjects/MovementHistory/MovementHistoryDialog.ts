
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MovementHistoryDialog extends Serenity.EntityDialog<MovementHistoryRow, any> {
        protected getFormKey() { return MovementHistoryForm.formKey; }
        protected getIdProperty() { return MovementHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return MovementHistoryRow.localTextPrefix; }
        protected getNameProperty() { return MovementHistoryRow.nameProperty; }
        protected getService() { return MovementHistoryService.baseUrl; }

        protected form = new MovementHistoryForm(this.idPrefix);

    }
}