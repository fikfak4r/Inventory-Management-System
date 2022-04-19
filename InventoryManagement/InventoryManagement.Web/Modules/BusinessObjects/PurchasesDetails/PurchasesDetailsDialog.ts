
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchasesDetailsDialog extends Serenity.EntityDialog<PurchasesDetailsRow, any> {
        protected getFormKey() { return PurchasesDetailsForm.formKey; }
        protected getIdProperty() { return PurchasesDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PurchasesDetailsRow.localTextPrefix; }
        protected getService() { return PurchasesDetailsService.baseUrl; }

        protected form = new PurchasesDetailsForm(this.idPrefix);

        constructor() {
            super();

            this.form.ProductId.changeSelect2(e => {
                this.form.UnitPrice.value = null;
                this.form.Amount.value = null;
            })

            this.form.UomAndPriceId.changeSelect2(e => {

                this.checkDivisibility()

                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);

                if (uomAndPriceId != null) {
                    this.form.UnitPrice.value = PurchasesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
                    this.calculateAmount();
                }

            })

            this.form.Quantity.change(e => {
                this.checkDivisibility()
                this.calculateAmount();
            })

            this.form.UnitPrice.change(e => {
                this.calculateAmount();
            })

            this.form.Discount.change(e => {
                this.form.Discount.value = (this.form.Discount.value / 100)
                this.calculateAmount();
            })

            

        }//Ends the constructor 

        protected updateInterface(){
            super.updateInterface();
            this.form.PurchasesId.value = GlobalScripts.purchasesId;
            //Q.notifyInfo('From GlobalScripts: ' +  GlobalScripts.purchasesId)
            //Q.notifyInfo(this.form.PurchasesId.value)
        }

        private checkDivisibility() {
            var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
            var quantity = this.form.Quantity.value;
            
            if (uomAndPriceId != '' && uomAndPriceId != null && !isNaN(quantity)) {
                var val = PurchasesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].UnitMakeUp * quantity
                var x = /^\d+$/; //alert(x.test(val.toString()) + ' ' + val.toString())

                if (!x.test(val.toString())) {
                    this.form.Quantity.value = null
                    alert("Quantity is not in right divisibility " + val)
                }

            }

        }

        private calculateAmount() {

            var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
            var quantity = this.form.Quantity.value;
            var discount = this.form.Discount.value;
            var unitPrice = this.form.UnitPrice.value;


            if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                if (discount != undefined && discount != 0) {
                    var amount1 = (unitPrice * quantity)
                    var amount2 = (unitPrice * quantity) * (discount)
                    this.form.Amount.value = amount1 - amount2;
                } else
                    this.form.Amount.value = unitPrice * quantity;
            }

        }//Ends the calculateAmount

        protected save_submitHandler() {
            alert('Im clicked')
           
            return false;
        }

        protected onSaveSuccess(response: Serenity.SaveResponse) {
            super.onSaveSuccess(response);
            
            this.purchasesDialogReference.UpdatePurchases()
        }

        private purchasesDialogReference: any;
        set PurchasesDialogReference(value: any) {
            this.purchasesDialogReference = value;
        }


        protected onDeleteSuccess(response: Serenity.DeleteResponse) {
            super.onDeleteSuccess(response);

            this.purchasesDialogReference.UpdatePurchases();
        }

    }

}