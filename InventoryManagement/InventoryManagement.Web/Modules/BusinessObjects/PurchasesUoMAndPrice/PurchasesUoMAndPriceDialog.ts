
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchasesUoMAndPriceDialog extends Serenity.EntityDialog<PurchasesUoMAndPriceRow, any> {
        protected getFormKey() { return PurchasesUoMAndPriceForm.formKey; }
        protected getIdProperty() { return PurchasesUoMAndPriceRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesUoMAndPriceRow.localTextPrefix; }
        protected getNameProperty() { return PurchasesUoMAndPriceRow.nameProperty; }
        protected getService() { return PurchasesUoMAndPriceService.baseUrl;  }

        protected form = new PurchasesUoMAndPriceForm(this.idPrefix);

 

        


    }
}