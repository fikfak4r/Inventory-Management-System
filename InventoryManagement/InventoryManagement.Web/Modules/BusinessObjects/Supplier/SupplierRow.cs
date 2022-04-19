
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

    [ConnectionKey("Default"), DisplayName("Suppliers"), InstanceName("Supplier"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Supplier.Insert)]
    [InsertPermission(BusinessObjects.PermissionKeys.Supplier.Update)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Supplier.Read)]
    [DeletePermission(BusinessObjects.PermissionKeys.Supplier.Delete)]
    [LookupScript("BusinessObjects.Supplier")]
    public sealed class SupplierRow : Row, IIdRow, INameRow
    {

        #region Supplier Id
        [DisplayName("Supplier Id"), Column("SupplierID"), Identity, Hidden]
        public Int32? SupplierId { get { return Fields.SupplierId[this]; } set { Fields.SupplierId[this] = value; } }
        public partial class RowFields { public Int32Field SupplierId; }
        #endregion SupplierId

        #region Date
        [DisplayName("Date")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region Supplier Name
        [DisplayName("Supplier Name"), Size(50), NotNull, QuickSearch]
        public String SupplierName { get { return Fields.SupplierName[this]; } set { Fields.SupplierName[this] = value; } }
        public partial class RowFields { public StringField SupplierName; }
        #endregion SupplierName

        #region Phone Number
        [DisplayName("Phone Number"), Size(50)]
        public String PhoneNumber { get { return Fields.PhoneNumber[this]; } set { Fields.PhoneNumber[this] = value; } }
        public partial class RowFields { public StringField PhoneNumber; }
        #endregion PhoneNumber

        #region Fax
        [DisplayName("Fax"), Size(100)]
        public String Fax { get { return Fields.Fax[this]; } set { Fields.Fax[this] = value; } }
        public partial class RowFields { public StringField Fax; }
        #endregion Fax

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

        #region Note
        [DisplayName("Note")]
        public String Note { get { return Fields.Note[this]; } set { Fields.Note[this] = value; } }
        public partial class RowFields { public StringField Note; }
        #endregion Note


        [DisplayName("Locations"), NotMapped, QuickFilter]
        [Width(180)]
        [LinkingSetRelation(typeof(SupplierLocationRow), "SupplierId", "LocationId")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        public List<Int32> LocationList
        {
            get { return Fields.LocationList[this]; }
            set { Fields.LocationList[this] = value; }
        }

        #region Account
        [DisplayName("Account"), Column("AccountID"), ForeignKey("[dbo].[Accounts]", "AccountID"), LeftJoin("jAccount"), TextualField("AccountCompanyName")]
        [LookupEditor(typeof(Administration.Entities.AccountRow), InplaceAdd = true)]
        [Hidden]
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
            get { return Fields.SupplierId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SupplierName; }
        }
        #endregion Id and Name fields

        #region Constructor
        public SupplierRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[Suppliers]")
            {
                LocalTextPrefix = "BusinessObjects.Supplier";
            }

            public ListField<Int32> LocationList;

        }
        #endregion RowFields
    }
}
