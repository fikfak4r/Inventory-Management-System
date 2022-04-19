
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class UserLocationEditor extends Common.GridEditorBase<UserLocationRow> {
        protected getColumnsKey() { return 'Administration.UserLocation'; }
        protected getDialogType() { return UserLocationEditorDialog; }
                protected getLocalTextPrefix() { return UserLocationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}