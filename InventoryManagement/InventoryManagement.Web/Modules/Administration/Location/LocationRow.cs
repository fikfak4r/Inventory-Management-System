
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

    [ConnectionKey("Default"), DisplayName("Locations"), InstanceName("Location"), TwoLevelCached]
    [ReadPermission(Administration.PermissionKeys.Location)]
    [ModifyPermission(Administration.PermissionKeys.Location)]
    [LookupScript("Administration.Location", Permission = "?")]
    public sealed class LocationRow : Row, IIdRow, INameRow
    {
        #region Location Id
        [Hidden]
        [DisplayName("Location Id"), Column("LocationID"), Identity]
        public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
        public partial class RowFields { public Int32Field LocationId; }
        #endregion LocationId

        #region Account
        [Hidden]
        [DisplayName("Account"), Column("AccountID"), NotNull, ForeignKey("[dbo].[Accounts]", "AccountID"), LeftJoin("jAccount"), TextualField("AccountCompanyName")]
        [LookupEditor(typeof(Administration.Entities.AccountRow), InplaceAdd = true)]
        public Int32? AccountId { get { return Fields.AccountId[this]; } set { Fields.AccountId[this] = value; } }
        public partial class RowFields { public Int32Field AccountId; }
        #endregion AccountId


        #region Date
        [Hidden]
        [DisplayName("Date")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region Phone Number
        [EditLink]
        [DisplayName("Phone Number"), Size(50), QuickSearch]
        public String PhoneNumber { get { return Fields.PhoneNumber[this]; } set { Fields.PhoneNumber[this] = value; } }
        public partial class RowFields { public StringField PhoneNumber; }
        #endregion PhoneNumber

        #region Email
        [DisplayName("Email"), Size(150)]
        public String Email { get { return Fields.Email[this]; } set { Fields.Email[this] = value; } }
        public partial class RowFields { public StringField Email; }
        #endregion Email

        #region Website
        [DisplayName("Website"), Size(50)]
        public String Website { get { return Fields.Website[this]; } set { Fields.Website[this] = value; } }
        public partial class RowFields { public StringField Website; }
        #endregion Website

        #region Location Name
        [DisplayName("Location Name"), Size(250)]
        public String LocationName { get { return Fields.LocationName[this]; } set { Fields.LocationName[this] = value; } }
        public partial class RowFields { public StringField LocationName; }
        #endregion LocationName

        #region Address
        [DisplayName("Address")]
        public String Address { get { return Fields.Address[this]; } set { Fields.Address[this] = value; } }
        public partial class RowFields { public StringField Address; }
        #endregion Address

        #region User Id
        [Hidden]
        [DisplayName("User Id"), Column("UserID")]
        public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }
        public partial class RowFields { public Int32Field UserId; }
        #endregion UserId

        [Hidden]
        [DefaultValue(true)]
        public Boolean? IsVisible
        {
            get { return Fields.IsVisible[this]; }
            set { Fields.IsVisible[this] = value; }
        }


        #region Foreign Fields

        [DisplayName("Account Date"), Expression("jAccount.[Date]")]
        public DateTime? AccountDate { get { return Fields.AccountDate[this]; } set { Fields.AccountDate[this] = value; } }
        public partial class RowFields { public DateTimeField AccountDate; }


        [DisplayName("Account Company Name"), Expression("jAccount.[CompanyName]")]
        public String AccountCompanyName { get { return Fields.AccountCompanyName[this]; } set { Fields.AccountCompanyName[this] = value; } }
        public partial class RowFields { public StringField AccountCompanyName; }


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
            get { return Fields.LocationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.LocationName; }
        }
        #endregion Id and Name fields

        #region Constructor
        public LocationRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[Locations]")
            {
                LocalTextPrefix = "Administration.Location";
            }

            public BooleanField IsVisible;

        }
        #endregion RowFields
    }
}
