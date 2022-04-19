
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesUoMAndPriceDialog extends Serenity.EntityDialog<SalesUoMAndPriceRow, any> {
        protected getFormKey() { return SalesUoMAndPriceForm.formKey; }
        protected getIdProperty() { return SalesUoMAndPriceRow.idProperty; }
        protected getLocalTextPrefix() { return SalesUoMAndPriceRow.localTextPrefix; }
        protected getNameProperty() { return SalesUoMAndPriceRow.nameProperty; }
        protected getService() { return SalesUoMAndPriceService.baseUrl; }

        protected form = new SalesUoMAndPriceForm(this.idPrefix);

    }
}