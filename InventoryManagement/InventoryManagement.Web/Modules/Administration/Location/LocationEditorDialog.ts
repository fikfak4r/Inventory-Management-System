
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LocationEditorDialog extends Common.GridEditorDialog<LocationRow> {
        protected getFormKey() { return LocationForm.formKey; }
                protected getLocalTextPrefix() { return LocationRow.localTextPrefix; }
        protected getNameProperty() { return LocationRow.nameProperty; }
        protected form = new LocationForm(this.idPrefix);
    }
}