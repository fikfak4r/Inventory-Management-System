
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchaseTrailDialog extends Serenity.EntityDialog<PurchaseTrailRow, any> {
        protected getFormKey() { return PurchaseTrailForm.formKey; }
        protected getIdProperty() { return PurchaseTrailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseTrailRow.localTextPrefix; }
        protected getService() { return PurchaseTrailService.baseUrl; }

        protected form = new PurchaseTrailForm(this.idPrefix);

    }
}