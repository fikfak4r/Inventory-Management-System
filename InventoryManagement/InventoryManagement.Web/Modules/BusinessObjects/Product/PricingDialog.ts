
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PricingDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey() { return PricingForm.formKey }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected getService() { return ProductService.baseUrl; }

        protected form = new ProductForm(this.idPrefix);


        constructor(){
            super()
            
        }
 
        protected getPropertyItems(): Serenity.PropertyItem[]{
``
            var propertyItems = super.getPropertyItems();

           return propertyItems.filter(x => x.name == ProductRow.Fields.PurchasesUoMAndPriceList);

        }

    }





}