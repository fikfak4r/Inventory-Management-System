
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace InventoryManagement.BusinessObjects {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchasesUoMAndPriceEditorDialog extends Common.GridEditorDialog<PurchasesUoMAndPriceRow> {
        protected getFormKey() { return PurchasesUoMAndPriceForm.formKey; }
                protected getLocalTextPrefix() { return PurchasesUoMAndPriceRow.localTextPrefix; }
        protected getNameProperty() {  return PurchasesUoMAndPriceRow.nameProperty; }

        protected form: PurchasesUoMAndPriceForm;

        constructor(){
            super();
 
            this.form = new PurchasesUoMAndPriceForm(this.idPrefix);
        }
    
    //   protected getToolbarButtons(): Serenity.ToolButton[]{
    //       var tlbBtns = super.getToolbarButtons();
    //       tlbBtns.splice(1, tlbBtns.length - 1)
    //       return tlbBtns;
    //   }

    //    protected afterLoadEntity()
    //    {
           
    //        if(this.isNew())
    //        {
    //        this.form.UnitName.value = 'afterLoadEntity'
    //        this.form.ProductId.value = '1'
    //        }
    //    }
    }
}