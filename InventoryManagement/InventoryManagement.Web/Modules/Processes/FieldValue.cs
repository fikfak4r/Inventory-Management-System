using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InventoryManagement.Processes
{
    public class FieldValue
    {

        public FieldValue(object oldValue, object newValue)
        {
            Value = oldValue;
            OldValue = oldValue;
            NewValue = newValue;
            Modified = (oldValue != newValue) ? true : false;
        }

        public object Value { get; set; }
        public object OldValue { get; set; }
        public object NewValue { get; set; }
        public bool Modified { get; set; }
    }

    
}