using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using Serenity.ComponentModel;

namespace InventoryManagement.BusinessObjects
{

    [EnumKey("PaymentMode")]
    public enum PaymentMode
    {
        [Description("N/A")]
        NotAvailable = 1,
        Cash = 2,
        Cheque = 3
    }
}