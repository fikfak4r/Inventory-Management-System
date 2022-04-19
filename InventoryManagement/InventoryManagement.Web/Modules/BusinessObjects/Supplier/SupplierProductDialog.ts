/// <reference path="../Product/ProductDialog.ts" />

namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupplierProductDialog extends ProductDialog{


        protected getFormKey() { return ProductForm2.formKey; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected getService() { return ProductService.baseUrl; }

        public form = new ProductForm(this.idPrefix);

        constructor() {
            super();
            
        }

      
    }
}