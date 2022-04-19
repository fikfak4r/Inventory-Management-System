
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class CostingInfoEditor extends Common.GridEditorBase<CostingInfoRow> {
        protected getColumnsKey() { return 'BusinessObjects.CostingInfo'; }
        protected getDialogType() { return CostingInfoEditorDialog; }
                protected getLocalTextPrefix() { return CostingInfoRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}