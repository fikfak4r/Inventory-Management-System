
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class StockDialog extends Serenity.EntityDialog<StockRow, any> {
        protected getFormKey() { return StockForm.formKey; }
        protected getIdProperty() { return StockRow.idProperty; }
        protected getLocalTextPrefix() { return StockRow.localTextPrefix; }
        protected getService() { return StockService.baseUrl; }

        protected form = new StockForm(this.idPrefix);

    }
}