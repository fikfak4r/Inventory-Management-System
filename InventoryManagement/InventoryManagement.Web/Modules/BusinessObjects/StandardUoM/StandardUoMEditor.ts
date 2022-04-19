
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    export class StandardUoMEditor extends Common.GridEditorBase<StandardUoMRow> {
        protected getColumnsKey() { return 'BusinessObjects.StandardUoM'; }
        protected getDialogType() { return StandardUoMEditorDialog; }
                protected getLocalTextPrefix() { return StandardUoMRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}