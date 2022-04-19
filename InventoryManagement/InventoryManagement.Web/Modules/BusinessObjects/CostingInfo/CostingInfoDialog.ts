
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CostingInfoDialog extends Serenity.EntityDialog<CostingInfoRow, any> {
        protected getFormKey() { return CostingInfoForm.formKey; }
        protected getIdProperty() { return CostingInfoRow.idProperty; }
        protected getLocalTextPrefix() { return CostingInfoRow.localTextPrefix; }
        protected getService() { return CostingInfoService.baseUrl; }

        protected form = new CostingInfoForm(this.idPrefix);

    }
}