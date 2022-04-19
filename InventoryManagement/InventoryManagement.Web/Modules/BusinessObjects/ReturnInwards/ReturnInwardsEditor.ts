
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class ReturnInwardsEditor extends Common.GridEditorBase<ReturnInwardsRow> {
        protected getColumnsKey() { return 'BusinessObjects.ReturnInwards'; }
        protected getDialogType() { return ReturnInwardsEditorDialog; }
                protected getLocalTextPrefix() { return ReturnInwardsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}