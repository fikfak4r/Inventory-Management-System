
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class ReturnInwardsDetailsGrid extends Serenity.EntityGrid<ReturnInwardsDetailsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnInwardsDetails'; }
        protected getDialogType() { return ReturnInwardsDetailsDialog; }
        protected getIdProperty() { return ReturnInwardsDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnInwardsDetailsRow.localTextPrefix; }
        protected getService() { return ReturnInwardsDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getInitialTitle(): string {
            return null;
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