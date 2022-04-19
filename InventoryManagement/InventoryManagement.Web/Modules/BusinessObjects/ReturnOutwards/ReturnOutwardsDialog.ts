
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnOutwardsDialog extends Serenity.EntityDialog<ReturnOutwardsRow, any> {
        protected getFormKey() { return ReturnOutwardsForm.formKey; }
        protected getIdProperty() { return ReturnOutwardsRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnOutwardsRow.localTextPrefix; }
        protected getService() { return ReturnOutwardsService.baseUrl; }

        protected form = new ReturnOutwardsForm(this.idPrefix);

    }
}