
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnInwardsDetailsEditor extends Common.GridEditorBase<ReturnInwardsDetailsRow> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnInwardsDetails'; }
        protected getDialogType() { return ReturnInwardsDetailsEditorDialog; }
                protected getLocalTextPrefix() { return ReturnInwardsDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}