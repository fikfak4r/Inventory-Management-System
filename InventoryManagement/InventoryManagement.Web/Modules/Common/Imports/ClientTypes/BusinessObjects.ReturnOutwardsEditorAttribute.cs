using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace InventoryManagement.BusinessObjects
{
    public partial class ReturnOutwardsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "InventoryManagement.BusinessObjects.ReturnOutwardsEditor";

        public ReturnOutwardsEditorAttribute()
            : base(Key)
        {
        }
    }
}

