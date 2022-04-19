
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey() { return CustomerForm.formKey; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getNameProperty() { return CustomerRow.nameProperty; }
        protected getService() { return CustomerService.baseUrl; }

        protected form = new CustomerForm(this.idPrefix);

           private customerSales: CustomerSalesGrid;

        constructor(){
            super();

                this.customerSales = new CustomerSalesGrid(this.byId("SalesGrid"));
                this.tabs.bind("tabsactivate", () => this.arrange());
            
        }

        public loadEntity(entity: CustomerRow){
            super.loadEntity(entity);
            this.customerSales.customerID = entity.CustomerId;
            Serenity.TabsExtensions.setDisabled(this.tabs, "SalesRecords", this.isNewOrDeleted());
        }

    }
}