
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

    [ConnectionKey("Default"), DisplayName("SuppliersLocations"), InstanceName("SuppliersLocations"), TwoLevelCached]
    [ReadPermission(PermissionKeys.SupplierLocation.Read)]
    [InsertPermission(PermissionKeys.SupplierLocation.Insert)]
    [UpdatePermission(PermissionKeys.SupplierLocation.Update)]
    [DeletePermission(PermissionKeys.SupplierLocation.Delete)]
    [LookupScript("BusinessObjects.SupplierLocation")]
    public sealed class SupplierLocationRow : Row, IIdRow
    {        
            #region Suppliers Locations Id
            [DisplayName("Suppliers Locations Id"), Column("SuppliersLocationsID"), Identity]
            public Int32? SuppliersLocationsId { get { return Fields.SuppliersLocationsId[this]; } set { Fields.SuppliersLocationsId[this] = value; } }
            public partial class RowFields { public Int32Field SuppliersLocationsId; }
            #endregion SuppliersLocationsId
                
            #region Supplier
            [DisplayName("Supplier"), Column("SupplierID"), NotNull, ForeignKey("[dbo].[Suppliers]", "SupplierID"), LeftJoin("jSupplier"), TextualField("SupplierSupplierName")]
            [LookupEditor(typeof(BusinessObjects.Entities.SupplierRow), InplaceAdd = true)]
            public Int32? SupplierId { get { return Fields.SupplierId[this]; } set { Fields.SupplierId[this] = value; } }
            public partial class RowFields { public Int32Field SupplierId; }
            #endregion SupplierId
                
            #region Location
            [DisplayName("Location"), Column("LocationID"), NotNull, ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
            [LookupEditor(typeof(Administration.Entities.LocationRow), InplaceAdd = true)]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
                
            #region Account
            [DisplayName("Account"), Column("AccountID"), ForeignKey("[dbo].[Accounts]", "AccountID"), LeftJoin("jAccount"), TextualField("AccountCompanyName")]
            [LookupEditor(typeof(Administration.Entities.AccountRow), InplaceAdd = true)]
            public Int32? AccountId { get { return Fields.AccountId[this]; } set { Fields.AccountId[this] = value; } }
            public partial class RowFields { public Int32Field AccountId; }
            #endregion AccountId
        

    #region Foreign Fields
            
                [DisplayName("Supplier Date"), Expression("jSupplier.[Date]")]
                public DateTime? SupplierDate { get { return Fields.SupplierDate[this]; } set { Fields.SupplierDate[this] = value; } }
                public partial class RowFields { public DateTimeField SupplierDate; }

                        
                [DisplayName("Supplier Supplier Name"), Expression("jSupplier.[SupplierName]")]
                public String SupplierSupplierName { get { return Fields.SupplierSupplierName[this]; } set { Fields.SupplierSupplierName[this] = value; } }
                public partial class RowFields { public StringField SupplierSupplierName; }

                        
                [DisplayName("Supplier Phone Number"), Expression("jSupplier.[PhoneNumber]")]
                public String SupplierPhoneNumber { get { return Fields.SupplierPhoneNumber[this]; } set { Fields.SupplierPhoneNumber[this] = value; } }
                public partial class RowFields { public StringField SupplierPhoneNumber; }

                        
                [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
                public String SupplierFax { get { return Fields.SupplierFax[this]; } set { Fields.SupplierFax[this] = value; } }
                public partial class RowFields { public StringField SupplierFax; }

                        
                [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
                public String SupplierEmail { get { return Fields.SupplierEmail[this]; } set { Fields.SupplierEmail[this] = value; } }
                public partial class RowFields { public StringField SupplierEmail; }

                        
                [DisplayName("Supplier Website"), Expression("jSupplier.[Website]")]
                public String SupplierWebsite { get { return Fields.SupplierWebsite[this]; } set { Fields.SupplierWebsite[this] = value; } }
                public partial class RowFields { public StringField SupplierWebsite; }

                        
                [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
                public String SupplierAddress { get { return Fields.SupplierAddress[this]; } set { Fields.SupplierAddress[this] = value; } }
                public partial class RowFields { public StringField SupplierAddress; }

                        
                [DisplayName("Supplier Note"), Expression("jSupplier.[Note]")]
                public String SupplierNote { get { return Fields.SupplierNote[this]; } set { Fields.SupplierNote[this] = value; } }
                public partial class RowFields { public StringField SupplierNote; }

                        
                [DisplayName("Supplier Account Id"), Expression("jSupplier.[AccountID]")]
                public Int32? SupplierAccountId { get { return Fields.SupplierAccountId[this]; } set { Fields.SupplierAccountId[this] = value; } }
                public partial class RowFields { public Int32Field SupplierAccountId; }

                        
                [DisplayName("Location Account Id"), Expression("jLocation.[AccountID]")]
                public Int32? LocationAccountId { get { return Fields.LocationAccountId[this]; } set { Fields.LocationAccountId[this] = value; } }
                public partial class RowFields { public Int32Field LocationAccountId; }

                        
                [DisplayName("Location Date"), Expression("jLocation.[Date]")]
                public DateTime? LocationDate { get { return Fields.LocationDate[this]; } set { Fields.LocationDate[this] = value; } }
                public partial class RowFields { public DateTimeField LocationDate; }

                        
                [DisplayName("Location Phone Number"), Expression("jLocation.[PhoneNumber]")]
                public String LocationPhoneNumber { get { return Fields.LocationPhoneNumber[this]; } set { Fields.LocationPhoneNumber[this] = value; } }
                public partial class RowFields { public StringField LocationPhoneNumber; }

                        
                [DisplayName("Location Email"), Expression("jLocation.[Email]")]
                public String LocationEmail { get { return Fields.LocationEmail[this]; } set { Fields.LocationEmail[this] = value; } }
                public partial class RowFields { public StringField LocationEmail; }

                        
                [DisplayName("Location Website"), Expression("jLocation.[Website]")]
                public String LocationWebsite { get { return Fields.LocationWebsite[this]; } set { Fields.LocationWebsite[this] = value; } }
                public partial class RowFields { public StringField LocationWebsite; }

                        
                [DisplayName("Location Location Name"), Expression("jLocation.[LocationName]")]
                public String LocationLocationName { get { return Fields.LocationLocationName[this]; } set { Fields.LocationLocationName[this] = value; } }
                public partial class RowFields { public StringField LocationLocationName; }

                        
                [DisplayName("Location Address"), Expression("jLocation.[Address]")]
                public String LocationAddress { get { return Fields.LocationAddress[this]; } set { Fields.LocationAddress[this] = value; } }
                public partial class RowFields { public StringField LocationAddress; }

                        
                [DisplayName("Location User Id"), Expression("jLocation.[UserID]")]
                public Int32? LocationUserId { get { return Fields.LocationUserId[this]; } set { Fields.LocationUserId[this] = value; } }
                public partial class RowFields { public Int32Field LocationUserId; }

                        
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
    get { return Fields.SuppliersLocationsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public SupplierLocationRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[SuppliersLocations]")
    {
    LocalTextPrefix = "BusinessObjects.SupplierLocation";
    }
    }
    #endregion RowFields
    }
    }
