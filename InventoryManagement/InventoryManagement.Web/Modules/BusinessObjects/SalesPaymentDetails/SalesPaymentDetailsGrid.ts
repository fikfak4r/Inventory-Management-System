
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class SalesPaymentDetailsGrid extends Serenity.EntityGrid<SalesPaymentDetailsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.SalesPaymentDetails'; }
        protected getDialogType() { return SalesPaymentDetailsDialog; }
        protected getIdProperty() { return SalesPaymentDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SalesPaymentDetailsRow.localTextPrefix; }
        protected getService() { return SalesPaymentDetailsService.baseUrl; }

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