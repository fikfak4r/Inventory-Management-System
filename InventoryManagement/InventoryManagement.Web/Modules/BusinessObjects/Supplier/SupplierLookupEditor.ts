namespace InventoryManagement.BusinessObjects{
    @Serenity.Decorators.registerEditor()

    export class SupplierLookupEditor extends Serenity.LookupEditorBase<SupplierRow, any>{

             constructor(hidden: JQuery){
                 super(hidden);
             }

      protected getLookupKey()
      {
           return 'BusinessObjects.Supplier';
          //return typeof(SupplierRow);
      }

        protected getItemText(item, lookup) {
            //alert(super.getItemText(item, lookup) + ' [' + item.SupplierId + ']')
            return super.getItemText(item, lookup) + ' [' + item.SupplierId + ']';
			//return item.SupplierId;
        }

    }

}