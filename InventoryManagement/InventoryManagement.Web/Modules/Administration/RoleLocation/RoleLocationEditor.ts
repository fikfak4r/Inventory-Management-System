
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class RoleLocationEditor extends Common.GridEditorBase<RoleLocationRow> {
        protected getColumnsKey() { return 'Administration.RoleLocation'; }
        protected getDialogType() { return RoleLocationEditorDialog; }
                protected getLocalTextPrefix() { return RoleLocationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}