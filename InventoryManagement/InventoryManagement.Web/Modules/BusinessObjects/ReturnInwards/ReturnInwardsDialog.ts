
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnInwardsDialog extends Serenity.EntityDialog<ReturnInwardsRow, any> {
        protected getFormKey() { return ReturnInwardsForm.formKey; }
        protected getIdProperty() { return ReturnInwardsRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnInwardsRow.localTextPrefix; }
        protected getService() { return ReturnInwardsService.baseUrl; }

        protected form = new ReturnInwardsForm(this.idPrefix);

    }
}