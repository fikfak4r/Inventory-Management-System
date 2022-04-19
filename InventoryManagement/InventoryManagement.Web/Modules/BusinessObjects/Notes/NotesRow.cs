
namespace InventoryManagement.BusinessObjects.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Notes"), InstanceName("Note"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.PurchasesDetails.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.PurchasesDetails.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.PurchasesDetails.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.PurchasesDetails.Delete)]
    [LookupScript("BusinessObjects.Notes")]
    public sealed class NotesRow : Row, IIdRow, INameRow
    {  
      
            #region Note Id
            [Hidden]
            [DisplayName("Note Id"), Column("NoteID"), Identity]
            public Int32? NoteId { get { return Fields.NoteId[this]; } set { Fields.NoteId[this] = value; } }
            public partial class RowFields { public Int32Field NoteId; }
            #endregion NoteId
                
            #region Purchase Id
            [Hidden]
            [DisplayName("Purchase Id"), Column("PurchaseID"), NotNull]
            public Int32? PurchaseId { get { return Fields.PurchaseId[this]; } set { Fields.PurchaseId[this] = value; } }
            public partial class RowFields { public Int32Field PurchaseId; }
            #endregion PurchaseId
                
            #region Date
            [DisplayName("Date"), NotNull, DefaultValue("now")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Description
            [TextAreaEditor(Rows = 8)]
            [DisplayName("Description"), NotNull, QuickSearch]
            public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
            public partial class RowFields { public StringField Description; }
            #endregion Description
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.NoteId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.Description; }
            }
            #endregion Id and Name fields

    #region Constructor
    public NotesRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Notes]")
    {
    LocalTextPrefix = "BusinessObjects.Notes";
    }
    }
    #endregion RowFields
    }
    }
