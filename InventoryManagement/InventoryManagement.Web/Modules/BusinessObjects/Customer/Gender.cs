using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace InventoryManagement.BusinessObjects
{
    [EnumKey("BusinessObjects.Gender")]
    public enum Gender
    {
        [Description("Female")]
        Female = 1,

        [Description("Male")]
        Male = 2
    }
}