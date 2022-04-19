
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    export class SalesDetailsGrid extends Serenity.EntityGrid<SalesDetailsRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.SalesDetails'; }
        protected getDialogType() { return SalesDetailsDialog; }
        protected getIdProperty() { return SalesDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SalesDetailsRow.localTextPrefix; }
        protected getService() { return SalesDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected addButtonClick() {
            this.editItem({ SalesId: this.salesID });
            this.refresh();
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