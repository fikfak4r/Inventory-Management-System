
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReorderPointDialog extends Serenity.EntityDialog<ReorderPointRow, any> {
        protected getFormKey() { return ReorderPointForm.formKey; }
        protected getIdProperty() { return ReorderPointRow.idProperty; }
        protected getLocalTextPrefix() { return ReorderPointRow.localTextPrefix; }
        protected getService() { return ReorderPointService.baseUrl; }

        protected form = new ReorderPointForm(this.idPrefix);

    }
}