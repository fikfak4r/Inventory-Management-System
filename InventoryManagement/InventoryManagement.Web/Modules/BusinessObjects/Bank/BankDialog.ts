
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BankDialog extends Serenity.EntityDialog<BankRow, any> {
        protected getFormKey() { return BankForm.formKey; }
        protected getIdProperty() { return BankRow.idProperty; }
        protected getLocalTextPrefix() { return BankRow.localTextPrefix; }
        protected getNameProperty() { return BankRow.nameProperty; }
        protected getService() { return BankService.baseUrl; }

        protected form = new BankForm(this.idPrefix);

    }
}