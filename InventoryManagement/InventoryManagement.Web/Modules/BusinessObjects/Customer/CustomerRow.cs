
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
    using System.Collections.Generic;
    
    [ConnectionKey("Default"), DisplayName("Customers"), InstanceName("Customer"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Customer.Insert)]
    [InsertPermission(BusinessObjects.PermissionKeys.Customer.Update)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Customer.Read)]
    [DeletePermission(BusinessObjects.PermissionKeys.Customer.Delete)]
    [LookupScript("BusinessObjects.Customer")]
    public sealed class CustomerRow : Row, IIdRow, INameRow
    {

        #region Date
        [DisplayName("Date")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region Customer Id
        [DisplayName("Customer Id"), Column("CustomerID"), Identity]
        public Int32? CustomerId { get { return Fields.CustomerId[this]; } set { Fields.CustomerId[this] = value; } }
        public partial class RowFields { public Int32Field CustomerId; }
        #endregion CustomerId

        #region Name
        [DisplayName("Name"), Size(250), QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
        public partial class RowFields { public StringField Name; }
        #endregion Name

        #region Full Name
        [DisplayName("Full Name"), Size(150)]
        public String FullName { get { return Fields.FullName[this]; } set { Fields.FullName[this] = value; } }
        public partial class RowFields { public StringField FullName; }
        #endregion FullName

        #region Phone Number
        [DisplayName("Phone Number"), Size(50)]
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

        #region Address
        [DisplayName("Address")]
        public String Address { get { return Fields.Address[this]; } set { Fields.Address[this] = value; } }
        public partial class RowFields { public StringField Address; }
        #endregion Address

        #region Account
        [DisplayName("Account"), Column("AccountID"), ForeignKey("[dbo].[Accounts]", "AccountID"), LeftJoin("jAccount"), TextualField("AccountCompanyName")]
        [LookupEditor(typeof(Administration.Entities.AccountRow), InplaceAdd = true)]
        public Int32? AccountId { get { return Fields.AccountId[this]; } set { Fields.AccountId[this] = value; } }
        public partial class RowFields { public Int32Field AccountId; }
        #endregion AccountId

        #region Address2
        [DisplayName("Address2"), Size(500)]
        public String Address2 { get { return Fields.Address2[this]; } set { Fields.Address2[this] = value; } }
        public partial class RowFields { public StringField Address2; }
        #endregion Address2

        [DisplayName("Locations"), NotMapped, QuickFilter]
        [Width(180)]
        [LinkingSetRelation(typeof(CustomerLocationRow), "CustomerId", "LocationId")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        public List<Int32> LocationList
        {
            get { return Fields.LocationList[this]; }
            set { Fields.LocationList[this] = value; }
        }


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
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }
        #endregion Id and Name fields

        #region Constructor
        public CustomerRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[Customers]")
            {
                LocalTextPrefix = "BusinessObjects.Customer";
            }
            public ListField<Int32> LocationList;
        }
        #endregion RowFields
    }
}
