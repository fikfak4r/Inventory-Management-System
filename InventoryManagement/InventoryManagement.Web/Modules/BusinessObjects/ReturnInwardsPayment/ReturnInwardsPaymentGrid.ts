
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnInwardsPaymentGrid extends Serenity.EntityGrid<ReturnInwardsPaymentRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnInwardsPayment'; }
        protected getDialogType() { return ReturnInwardsPaymentDialog; }
        protected getIdProperty() { return ReturnInwardsPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnInwardsPaymentRow.localTextPrefix; }
        protected getService() { return ReturnInwardsPaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}