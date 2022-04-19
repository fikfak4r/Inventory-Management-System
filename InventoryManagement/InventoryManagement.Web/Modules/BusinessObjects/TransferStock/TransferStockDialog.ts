
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TransferStockDialog extends Serenity.EntityDialog<StockRow, any> {
        protected getFormKey() { return TransferStockForm.formKey; }
        protected getIdProperty() { return StockRow.idProperty; }
        protected getLocalTextPrefix() { return StockRow.localTextPrefix; }
        protected getService() { return StockService.baseUrl;  }

        protected form = new TransferStockForm(this.idPrefix);

        constructor(){
            super();
        }

protected updateInterface() {
            super.updateInterface();
            //this.form.DummyLocationId.setEditValue(null, null)
            this.form.ActionKey.value = "TransferStock"
            this.form.DummyLocationId.items.splice(Q.indexOf(this.form.DummyLocationId.items, x => x.id == this.form.LocationId.value ), 1) 
}

    }
}