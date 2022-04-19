
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RestockDialog extends Serenity.EntityDialog<RestockRow, any> {
        protected getFormKey() { return RestockForm.formKey; }
        protected getIdProperty() { return RestockRow.idProperty; }
        protected getLocalTextPrefix() { return RestockRow.localTextPrefix; }
        protected getService() { return RestockService.baseUrl; }

        protected form = new RestockForm(this.idPrefix);

        constructor(){
            super();
            if(this.isNew() || this.isEditMode())
            {
                this.form.RtnInwardsDtlsId.cascadeField = RestockRow.Fields.SalesId
            }
        }

         protected updateInterface(){
            super.updateInterface();
            Q.reloadLookup("BusinessObjects.ReturnInwardsDetailsLookup")
            this.form.SalesId.value = GlobalScripts.salesId;
            this.form.LocationId.value = GlobalScripts.locationId;
            if(this.isNew())
            this.form.RtnInwardsDtlsId.cascadeValue = GlobalScripts.salesId;

          
        }

    

    }
}