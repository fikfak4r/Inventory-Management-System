
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class StandardUoMDialog extends Serenity.EntityDialog<StandardUoMRow, any> {
        protected getFormKey() { return StandardUoMForm.formKey; }
        protected getIdProperty() { return StandardUoMRow.idProperty; }
        protected getLocalTextPrefix() { return StandardUoMRow.localTextPrefix; }
        protected getNameProperty() { return StandardUoMRow.nameProperty; }
        protected getService() { return StandardUoMService.baseUrl; }

        protected form = new StandardUoMForm(this.idPrefix);

    }
}