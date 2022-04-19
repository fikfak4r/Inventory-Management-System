
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UnstockDialog extends Serenity.EntityDialog<UnstockRow, any> {
        protected getFormKey() { return UnstockForm.formKey; }
        protected getIdProperty() { return UnstockRow.idProperty; }
        protected getLocalTextPrefix() { return UnstockRow.localTextPrefix; }
        protected getService() { return UnstockService.baseUrl; }

        protected form = new UnstockForm(this.idPrefix);

          constructor() {
            super();

         if(this.isNew() || this.isEditMode())
            this.form.RtnOutwardsDtlsId.cascadeField = BusinessObjects.ReturnOutwardsDetailsRow.Fields.PurchasesId

            // this.form.ProductId.changeSelect2(e => {
            //     Q.notifySuccess('Product selection changed')
                
                

            // })


        }//Ends the constructor 


        protected updateInterface(){
            super.updateInterface();
            Q.reloadLookup("BusinessObjects.ReturnOutwardsDetailsLookup");
            this.form.LocationId.value = GlobalScripts.locationId;
            
            if(this.isNew())
              this.form.RtnOutwardsDtlsId.cascadeValue = this.form.PurchasesId.value

              this.form.LocationId.value = GlobalScripts.locationId;
        }

 protected beforeLoadEntity(entity) {
            super.beforeLoadEntity(entity);

            // setting cascade value here
            // make sure you have [LookupInclude] on CategoryID property of ProductRow
            // otherwise this field won't be available in lookup script (will always be null),
            // so can't be filtered and you'll end up with an empty product list.
          
        }


    }
}