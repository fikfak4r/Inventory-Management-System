
namespace InventoryManagement.Administration.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Account"), InstanceName("Account"), TwoLevelCached]
    [ReadPermission(Administration.PermissionKeys.Account)]
    [ModifyPermission(Administration.PermissionKeys.Account)]
    [LookupScript("Administration.Account", Permission = "?")]
    public sealed class AccountRow : Row, IIdRow, INameRow
    {        
            
            #region Account Id
            [DisplayName("Account Id"), Column("AccountID"), Identity, Hidden]
            public Int32? AccountId { get { return Fields.AccountId[this]; } set { Fields.AccountId[this] = value; } }
            public partial class RowFields { public Int32Field AccountId; }
            #endregion AccountId
                
            #region Date
            [DisplayName("Date"), Hidden]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Company Name
            [DisplayName("Company Name"), Size(250), NotNull, QuickSearch]
            public String CompanyName { get { return Fields.CompanyName[this]; } set { Fields.CompanyName[this] = value; } }
            public partial class RowFields { public StringField CompanyName; }
            #endregion CompanyName
                
            #region Address
            [DisplayName("Address")]
            public String Address { get { return Fields.Address[this]; } set { Fields.Address[this] = value; } }
            public partial class RowFields { public StringField Address; }
            #endregion Address
                
            #region Email
            [DisplayName("Email"), Size(250)]
            public String Email { get { return Fields.Email[this]; } set { Fields.Email[this] = value; } }
            public partial class RowFields { public StringField Email; }
            #endregion Email
                
            #region Phone Number
            [DisplayName("Phone Number"), Size(50)]
            public String PhoneNumber { get { return Fields.PhoneNumber[this]; } set { Fields.PhoneNumber[this] = value; } }
            public partial class RowFields { public StringField PhoneNumber; }
            #endregion PhoneNumber
                
            #region Website Address
            [DisplayName("Website Address"), Size(250)]
            public String WebsiteAddress { get { return Fields.WebsiteAddress[this]; } set { Fields.WebsiteAddress[this] = value; } }
            public partial class RowFields { public StringField WebsiteAddress; }
            #endregion WebsiteAddress
        

    #region Foreign Fields

    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.AccountId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.CompanyName; }
            }
            #endregion Id and Name fields

    #region Constructor
    public AccountRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Accounts]")
    {
    LocalTextPrefix = "Administration.Account";
    }
    }
    #endregion RowFields
    }
    }
