
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnOutwardsEditor extends Common.GridEditorBase<ReturnOutwardsRow> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnOutwards'; }
        protected getDialogType() { return ReturnOutwardsEditorDialog; }
                protected getLocalTextPrefix() { return ReturnOutwardsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}