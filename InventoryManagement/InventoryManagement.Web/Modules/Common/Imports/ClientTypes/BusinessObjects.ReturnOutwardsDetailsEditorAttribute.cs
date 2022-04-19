using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace InventoryManagement.BusinessObjects
{
    public partial class ReturnOutwardsDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "InventoryManagement.BusinessObjects.ReturnOutwardsDetailsEditor";

        public ReturnOutwardsDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

