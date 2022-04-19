
namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class UserLocationGrid extends Serenity.EntityGrid<UserLocationRow, any> {
        protected getColumnsKey() { return 'Administration.UserLocation'; }
        protected getDialogType() { return UserLocationDialog; }
        protected getIdProperty() { return UserLocationRow.idProperty; }
        protected getLocalTextPrefix() { return UserLocationRow.localTextPrefix; }
        protected getService() { return UserLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}