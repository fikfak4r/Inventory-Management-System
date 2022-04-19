
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class LocationEditor extends Common.GridEditorBase<LocationRow> {
        protected getColumnsKey() { return 'Administration.Location'; }
        protected getDialogType() { return LocationEditorDialog; }
                protected getLocalTextPrefix() { return LocationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}