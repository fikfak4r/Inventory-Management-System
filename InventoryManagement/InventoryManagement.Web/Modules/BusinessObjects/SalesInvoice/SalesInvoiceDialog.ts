
namespace InventoryManagement.BusinessObjects {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SalesInvoiceDialog extends Serenity.EntityDialog<SalesInvoiceRow, any> {
        protected getFormKey() { return SalesInvoiceForm.formKey; }
        protected getIdProperty() { return SalesInvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return SalesInvoiceRow.localTextPrefix; }
        protected getService() { return SalesInvoiceService.baseUrl; }

        protected form = new SalesInvoiceForm(this.idPrefix);

       constructor(){
            super()
                  this.form.ProductId.changeSelect2(e => {
                this.form.UnitPrice.value = null;
                this.form.Amount.value = null;
            })

            this.form.UomAndPriceId.changeSelect2(e => {
                var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);

                if (uomAndPriceId != null) {
                    this.form.UnitPrice.value = SalesUoMAndPriceRow.getLookup().itemById[uomAndPriceId].Price;
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
                this.calculateAmount();
            })

            

        }//Ends the constructor 

        protected updateInterface(){
            super.updateInterface();
            this.form.SalesId.value = GlobalScripts.salesId;
        }

        private calculateAmount() {


            var uomAndPriceId = Q.toId(this.form.UomAndPriceId.value);
            var quantity = this.form.Quantity.value;
            var discount = this.form.Discount.value;
            var unitPrice = this.form.UnitPrice.value;


            if (uomAndPriceId != null && uomAndPriceId != '' && quantity != null) {
                if (discount != undefined && discount != 0) {
                    var amount1 = (unitPrice * quantity)
                    var amount2 = (unitPrice * quantity) * (discount / 100)
                    this.form.Amount.value = amount1 - amount2;
                } else
                    this.form.Amount.value = unitPrice * quantity;
            }

        }//Ends the calculateAmount

    }
}