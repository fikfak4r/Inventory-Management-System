
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupplierLocationDialog extends Serenity.EntityDialog<SupplierLocationRow, any> {
        protected getFormKey() { return SupplierLocationForm.formKey; }
        protected getIdProperty() { return SupplierLocationRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierLocationRow.localTextPrefix; }
        protected getService() { return SupplierLocationService.baseUrl; }

        protected form = new SupplierLocationForm(this.idPrefix);

    }
}