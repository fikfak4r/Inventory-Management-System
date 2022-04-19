
namespace InventoryManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UserLocationDialog extends Serenity.EntityDialog<UserLocationRow, any> {
        protected getFormKey() { return UserLocationForm.formKey; }
        protected getIdProperty() { return UserLocationRow.idProperty; }
        protected getLocalTextPrefix() { return UserLocationRow.localTextPrefix; }
        protected getService() { return UserLocationService.baseUrl; }

        protected form = new UserLocationForm(this.idPrefix);

    }
}