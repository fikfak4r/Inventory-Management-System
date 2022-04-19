
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomerLocationDialog extends Serenity.EntityDialog<CustomerLocationRow, any> {
        protected getFormKey() { return CustomerLocationForm.formKey; }
        protected getIdProperty() { return CustomerLocationRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerLocationRow.localTextPrefix; }
        protected getService() { return CustomerLocationService.baseUrl; }

        protected form = new CustomerLocationForm(this.idPrefix);

    }
}