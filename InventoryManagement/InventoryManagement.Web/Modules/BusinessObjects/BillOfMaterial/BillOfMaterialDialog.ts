
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BillOfMaterialDialog extends Serenity.EntityDialog<BillOfMaterialRow, any> {
        protected getFormKey() { return BillOfMaterialForm.formKey; }
        protected getIdProperty() { return BillOfMaterialRow.idProperty; }
        protected getLocalTextPrefix() { return BillOfMaterialRow.localTextPrefix; }
        protected getNameProperty() { return BillOfMaterialRow.nameProperty; }
        protected getService() { return BillOfMaterialService.baseUrl; }

        protected form = new BillOfMaterialForm(this.idPrefix);

    }
}