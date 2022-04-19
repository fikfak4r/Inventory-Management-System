
namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class RestockGrid extends Serenity.EntityGrid<RestockRow, any> {
        protected getColumnsKey() { return 'BusinessObjects.Restock'; }
        protected getDialogType() { return RestockDialog; }
        protected getIdProperty() { return RestockRow.idProperty; }
        protected getLocalTextPrefix() { return RestockRow.localTextPrefix; }
        protected getService() { return RestockService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getInitialTitle() : string
        {
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