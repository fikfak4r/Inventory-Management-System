
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

    [ConnectionKey("Default"), DisplayName("Banks"), InstanceName("Banks"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Bank.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.Bank.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Bank.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.Bank.Delete)]
    [LookupScript("BusinessObjects.Bank")]
    public sealed class BankRow : Row, IIdRow, INameRow
    {        
            #region Bank Id
            [DisplayName("Bank Id"), Column("BankID"), Identity]
            public Int32? BankId { get { return Fields.BankId[this]; } set { Fields.BankId[this] = value; } }
            public partial class RowFields { public Int32Field BankId; }
            #endregion BankId
                
            #region Date
            [DisplayName("Date")]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Bank Name
            [DisplayName("Bank Name"), Size(150), QuickSearch]
            public String BankName { get { return Fields.BankName[this]; } set { Fields.BankName[this] = value; } }
            public partial class RowFields { public StringField BankName; }
            #endregion BankName
                
            #region Account
            [DisplayName("Account"), Column("AccountID"), ForeignKey("[dbo].[Accounts]", "AccountID"), LeftJoin("jAccount"), TextualField("AccountCompanyName")]
            [LookupEditor(typeof(Administration.Entities.AccountRow), InplaceAdd = true)]
            public Int32? AccountId { get { return Fields.AccountId[this]; } set { Fields.AccountId[this] = value; } }
            public partial class RowFields { public Int32Field AccountId; }
            #endregion AccountId
        

    #region Foreign Fields
            
                [DisplayName("Account Date"), Expression("jAccount.[Date]")]
                public DateTime? AccountDate { get { return Fields.AccountDate[this]; } set { Fields.AccountDate[this] = value; } }
                public partial class RowFields { public DateTimeField AccountDate; }

                        
                [DisplayName("Account Company Name"), Expression("jAccount.[CompanyName]")]
                public String AccountCompanyName { get { return Fields.AccountCompanyName[this]; } set { Fields.AccountCompanyName[this] = value; } }
                public partial class RowFields { public StringField AccountCompanyName; }

                        
                [DisplayName("Account Logo"), Expression("jAccount.[Logo]")]
                public Stream AccountLogo { get { return Fields.AccountLogo[this]; } set { Fields.AccountLogo[this] = value; } }
                public partial class RowFields { public StreamField AccountLogo; }

                        
                [DisplayName("Account Address"), Expression("jAccount.[Address]")]
                public String AccountAddress { get { return Fields.AccountAddress[this]; } set { Fields.AccountAddress[this] = value; } }
                public partial class RowFields { public StringField AccountAddress; }

                        
                [DisplayName("Account Email"), Expression("jAccount.[Email]")]
                public String AccountEmail { get { return Fields.AccountEmail[this]; } set { Fields.AccountEmail[this] = value; } }
                public partial class RowFields { public StringField AccountEmail; }

                        
                [DisplayName("Account Phone Number"), Expression("jAccount.[PhoneNumber]")]
                public String AccountPhoneNumber { get { return Fields.AccountPhoneNumber[this]; } set { Fields.AccountPhoneNumber[this] = value; } }
                public partial class RowFields { public StringField AccountPhoneNumber; }

                        
                [DisplayName("Account Website Address"), Expression("jAccount.[WebsiteAddress]")]
                public String AccountWebsiteAddress { get { return Fields.AccountWebsiteAddress[this]; } set { Fields.AccountWebsiteAddress[this] = value; } }
                public partial class RowFields { public StringField AccountWebsiteAddress; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.BankId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.BankName; }
            }
            #endregion Id and Name fields

    #region Constructor
    public BankRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[Banks]")
    {
    LocalTextPrefix = "BusinessObjects.Bank";
    }
    }
    #endregion RowFields
    }
    }
