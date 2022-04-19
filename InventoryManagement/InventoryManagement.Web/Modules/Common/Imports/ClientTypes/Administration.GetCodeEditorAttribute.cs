using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace InventoryManagement.Administration
{
    public partial class GetCodeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "InventoryManagement.Administration.GetCodeEditor";

        public GetCodeEditorAttribute()
            : base(Key)
        {
        }
    }
}

