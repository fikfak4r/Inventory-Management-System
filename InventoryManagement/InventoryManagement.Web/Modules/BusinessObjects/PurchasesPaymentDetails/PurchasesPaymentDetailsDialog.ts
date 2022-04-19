
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchasesPaymentDetailsDialog extends Serenity.EntityDialog<PurchasesPaymentDetailsRow, any> {
        protected getFormKey() { return PurchasesPaymentDetailsForm.formKey; }
        protected getIdProperty() { return PurchasesPaymentDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesPaymentDetailsRow.localTextPrefix; }
        protected getService() { return PurchasesPaymentDetailsService.baseUrl; }

        protected form = new PurchasesPaymentDetailsForm(this.idPrefix);

        private purchasesPropertyGrid: Serenity.PropertyGrid;

        protected onSaveSuccess(response: Serenity.SaveResponse) {
            super.onSaveSuccess(response);

            this.purchasesDialogReference.UpdatePurchases()

        }

        private purchasesDialogReference: any;
        set PurchasesDialogReference(value: any) {
            this.purchasesDialogReference = value;
        }


    }
}