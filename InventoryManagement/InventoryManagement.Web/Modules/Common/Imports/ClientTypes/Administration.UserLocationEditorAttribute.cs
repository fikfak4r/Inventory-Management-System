using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace InventoryManagement.Administration
{
    public partial class UserLocationEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "InventoryManagement.Administration.UserLocationEditor";

        public UserLocationEditorAttribute()
            : base(Key)
        {
        }
    }
}

