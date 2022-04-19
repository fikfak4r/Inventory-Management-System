
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AdjustStockDialog extends Serenity.EntityDialog<StockRow, any> {
        protected getFormKey() { return AdjustStockForm.formKey; }
        protected getIdProperty() { return StockRow.idProperty; }
        protected getLocalTextPrefix() { return StockRow.localTextPrefix; }
        protected getService() { return StockService.baseUrl;  }

        protected form = new AdjustStockForm(this.idPrefix);

        constructor(){
            super();
        }


protected updateInterface() {
            super.updateInterface();
            this.form.ActionKey.value = "AdjustStock"
}

     
    }
}