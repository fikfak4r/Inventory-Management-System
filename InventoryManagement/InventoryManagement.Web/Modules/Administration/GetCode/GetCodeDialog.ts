
namespace InventoryManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class GetCodeDialog extends Serenity.EntityDialog<GetCodeRow, any> {
        protected getFormKey() { return GetCodeForm.formKey; }
        protected getIdProperty() { return GetCodeRow.idProperty; }
        protected getLocalTextPrefix() { return GetCodeRow.localTextPrefix; }
        protected getNameProperty() { return GetCodeRow.nameProperty; }
        protected getService() { return GetCodeService.baseUrl; }

        protected form = new GetCodeForm(this.idPrefix);
    
        constructor(){
            super();
         this.set_dialogTitle("Get code (" + "this.form.LocationLocationName" + ")" );
         this.dialogTitle = ""
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            return buttons;
        }

        protected updateInterface(): void {

            super.updateInterface();
             //Serenity.EditorUtils.setReadonly(this.form.LocationId.element, true);
            this.deleteButton.hide();
        }


    }
}