
namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class RoleLocationGrid extends Serenity.EntityGrid<RoleLocationRow, any> {
        protected getColumnsKey() { return 'Administration.RoleLocation'; }
        protected getDialogType() { return RoleLocationDialog; }
        protected getIdProperty() { return RoleLocationRow.idProperty; }
        protected getLocalTextPrefix() { return RoleLocationRow.localTextPrefix; }
        protected getService() { return RoleLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}