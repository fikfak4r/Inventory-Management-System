
namespace InventoryManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class GetCodeGrid extends Serenity.EntityGrid<GetCodeRow, any> {
        protected getColumnsKey() { return 'Administration.GetCode'; }
        protected getDialogType() { return GetCodeDialog; }
        protected getIdProperty() { return GetCodeRow.idProperty; }
        protected getLocalTextPrefix() { return GetCodeRow.localTextPrefix; }
        protected getService() { return GetCodeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getButtons() : Serenity.ToolButton[]
        {
            return null;
        }

    }
}