
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class GetCodeEditor extends Common.GridEditorBase<GetCodeRow> {
        protected getColumnsKey() { return 'Administration.GetCode'; }
        protected getDialogType() { return GetCodeEditorDialog; }
                protected getLocalTextPrefix() { return GetCodeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}