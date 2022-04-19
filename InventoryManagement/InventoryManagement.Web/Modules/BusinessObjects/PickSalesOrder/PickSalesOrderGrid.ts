
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class PickSalesOrderGrid extends Serenity.EntityGrid<PickSalesOrderRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.PickSalesOrder'; }
        protected getDialogType() { return PickSalesOrderDialog; }
        protected getIdProperty() { return PickSalesOrderRow.idProperty; }
        protected getLocalTextPrefix() { return PickSalesOrderRow.localTextPrefix; }
        protected getService() { return PickSalesOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

                    protected getInitialTitle(): string {
            return null
        }


           protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected getGridCanLoad(): boolean {
            return super.getGridCanLoad() && !!this.salesID
        }


        private _salesId: number;

        set salesID(value: number) {
            if (this._salesId != value) {
                this._salesId = value;
                this.setEquality(InventoryManagement.BusinessObjects.SalesDetailsRow.Fields.SalesId, value);
                this.refresh();
            }
        }

        get salesID() {
            return this._salesId;
        }

    }
}