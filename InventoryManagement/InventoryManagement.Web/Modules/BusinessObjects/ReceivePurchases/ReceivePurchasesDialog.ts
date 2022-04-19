
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReceivePurchasesDialog extends Serenity.EntityDialog<ReceivePurchasesRow, any> {
        protected getFormKey() { return ReceivePurchasesForm.formKey; }
        protected getIdProperty() { return ReceivePurchasesRow.idProperty; }
        protected getLocalTextPrefix() { return ReceivePurchasesRow.localTextPrefix; }
        protected getService() { return ReceivePurchasesService.baseUrl; }

        protected form = new ReceivePurchasesForm(this.idPrefix);

        constructor() {
            super();

            this.form.LocationId.value = GlobalScripts.locationId;

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

            this.form.Discount.change(e => {
                this.form.Discount.value = (this.form.Discount.value / 100)
                this.calculateAmount();
            })

            this.form.IsFree.change(e => {

                    this.calculateAmount();

                    })


        }//Ends the constructor 

        protected updateInterface(){
            super.updateInterface();
            this.form.LocationId.value = GlobalScripts.locationId;
        }

        private calculateAmount() {


            if (!this.form.IsFree.value) {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                var unitPrice = this.form.UnitPrice.value;


                if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                    if (discount != undefined && discount != 0) {
                        var amount1 = (unitPrice * quantity)
                        var amount2 = (unitPrice * quantity) * discount
                        this.form.Amount.value = amount1 - amount2;
                    } else
                        this.form.Amount.value = unitPrice * quantity;
                }
            }
            else
                this.form.Amount.value = 0;

        }//Ends the calculateAmount

    }



}