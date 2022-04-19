
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnOutwardsPaymentDialog extends Serenity.EntityDialog<ReturnOutwardsPaymentRow, any> {
        protected getFormKey() { return ReturnOutwardsPaymentForm.formKey; }
        protected getIdProperty() { return ReturnOutwardsPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnOutwardsPaymentRow.localTextPrefix; }
        protected getService() { return ReturnOutwardsPaymentService.baseUrl; }

        protected form = new ReturnOutwardsPaymentForm(this.idPrefix);

    }
}