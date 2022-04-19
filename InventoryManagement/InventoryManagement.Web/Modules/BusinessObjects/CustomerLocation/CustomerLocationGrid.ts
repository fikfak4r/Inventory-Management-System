
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CustomerLocationGrid extends Serenity.EntityGrid<CustomerLocationRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.CustomerLocation'; }
        protected getDialogType() { return CustomerLocationDialog; }
        protected getIdProperty() { return CustomerLocationRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerLocationRow.localTextPrefix; }
        protected getService() { return CustomerLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}