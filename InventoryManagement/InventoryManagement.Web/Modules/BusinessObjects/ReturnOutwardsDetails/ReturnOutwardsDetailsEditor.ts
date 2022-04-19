
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnOutwardsDetailsEditor extends Common.GridEditorBase<ReturnOutwardsDetailsRow> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnOutwardsDetails'; }
        protected getDialogType() { return ReturnOutwardsDetailsEditorDialog; }
                protected getLocalTextPrefix() { return ReturnOutwardsDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}