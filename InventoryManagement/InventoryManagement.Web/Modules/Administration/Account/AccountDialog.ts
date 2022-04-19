
namespace InventoryManagement.Administration {

    @Serenity.Decorators.panel()
    export class AccountDialog extends Serenity.EntityDialog<AccountRow, any> {
        protected getFormKey() { return AccountForm.formKey; }
        protected getIdProperty() { return AccountRow.idProperty; }
        protected getLocalTextPrefix() { return AccountRow.localTextPrefix; }
        protected getNameProperty() { return AccountRow.nameProperty; }
        protected getService() { return AccountService.baseUrl;  }

        protected form = new AccountForm(this.idPrefix);

		       constructor() {
            super();

            this.element.addClass('flex-layout');
 
               }

		/*
        protected getToolbarButtons(): Serenity.ToolButton[]
        {
            var toolbtns = super.getToolbarButtons();
            toolbtns.splice(Q.indexOf(toolbtns, x => x.cssClass == "delete-button"), 1)
            
            return toolbtns;
        }
		*/

    }
}