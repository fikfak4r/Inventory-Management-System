using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace InventoryManagement.BusinessObjects
{
    public partial class SalesInvoiceEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "InventoryManagement.BusinessObjects.SalesInvoiceEditor";

        public SalesInvoiceEditorAttribute()
            : base(Key)
        {
        }
    }
}

