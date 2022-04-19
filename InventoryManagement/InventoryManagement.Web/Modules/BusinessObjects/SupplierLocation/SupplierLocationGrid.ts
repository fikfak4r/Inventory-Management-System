
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SupplierLocationGrid extends Serenity.EntityGrid<SupplierLocationRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.SupplierLocation'; }
        protected getDialogType() { return SupplierLocationDialog; }
        protected getIdProperty() { return SupplierLocationRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierLocationRow.localTextPrefix; }
        protected getService() { return SupplierLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}