
namespace InventoryManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RoleLocationDialog extends Serenity.EntityDialog<RoleLocationRow, any> {
        protected getFormKey() { return RoleLocationForm.formKey; }
        protected getIdProperty() { return RoleLocationRow.idProperty; }
        protected getLocalTextPrefix() { return RoleLocationRow.localTextPrefix; }
        protected getService() { return RoleLocationService.baseUrl; }

        protected form = new RoleLocationForm(this.idPrefix);

    }
}