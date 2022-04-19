
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReturnOutwardsDetailsDialog extends Serenity.EntityDialog<ReturnOutwardsDetailsRow, any> {
        protected getFormKey() { return ReturnOutwardsDetailsForm.formKey; }
        protected getIdProperty() { return ReturnOutwardsDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnOutwardsDetailsRow.localTextPrefix; }
        protected getService() { return ReturnOutwardsDetailsService.baseUrl; }

        protected form = new ReturnOutwardsDetailsForm(this.idPrefix);

          constructor() {
            super();

            this.form.ProductId.changeSelect2(e => {
                this.form.UnitPrice.value = null;
                this.form.Amount.value = null;
            })

            this.form.UomAndPriceId.changeSelect2(e => {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);

                if (uomAndPriceId != null) {
                    this.form.UnitPrice.value = PurchasesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                    this.calculateAmount();
                }

            })

            this.form.Quantity.change(e => {
                this.calculateAmount();
            })

            this.form.UnitPrice.change(e => {
                this.calculateAmount();
            })

           

        }//Ends the constructor 




          protected onSaveSuccess(response: Serenity.SaveResponse) {
              super.onSaveSuccess(response);

              this.purchasesDialogReference.UpdatePurchases()

          }

          private purchasesDialogReference: any;
          set PurchasesDialogReference(value: any) {
              this.purchasesDialogReference = value;
          }




        private calculateAmount() {


            var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
            var quantity = this.form.Quantity.value;
            
            var unitPrice = this.form.UnitPrice.value;


            if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                
                    this.form.Amount.value = unitPrice * quantity;
            }

        }//Ends the calculateAmount

    }
}