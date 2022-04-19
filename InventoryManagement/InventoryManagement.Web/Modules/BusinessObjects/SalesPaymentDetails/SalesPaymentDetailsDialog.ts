
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesPaymentDetailsDialog extends Serenity.EntityDialog<SalesPaymentDetailsRow, any> {
        protected getFormKey() { return SalesPaymentDetailsForm.formKey; }
        protected getIdProperty() { return SalesPaymentDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return SalesPaymentDetailsRow.localTextPrefix; }
        protected getNameProperty() { return SalesPaymentDetailsRow.nameProperty; }
        protected getService() { return SalesPaymentDetailsService.baseUrl; }

        protected form = new SalesPaymentDetailsForm(this.idPrefix);

        protected updateInterface(){
            super.updateInterface();
            this.form.SalesId.value = GlobalScripts.salesId;
            
        }


     

    }
}