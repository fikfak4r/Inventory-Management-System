
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnInwardsPaymentDialog extends Serenity.EntityDialog<ReturnInwardsPaymentRow, any> {
        protected getFormKey() { return ReturnInwardsPaymentForm.formKey; }
        protected getIdProperty() { return ReturnInwardsPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnInwardsPaymentRow.localTextPrefix; }
        protected getService() { return ReturnInwardsPaymentService.baseUrl; }

        protected form = new ReturnInwardsPaymentForm(this.idPrefix);

    }
}