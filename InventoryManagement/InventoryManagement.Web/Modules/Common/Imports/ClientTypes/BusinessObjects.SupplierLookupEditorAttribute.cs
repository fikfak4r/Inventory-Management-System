using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace InventoryManagement.BusinessObjects
{
    public partial class SupplierLookupEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "InventoryManagement.BusinessObjects.SupplierLookupEditor";

        public SupplierLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}

