
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

    [ConnectionKey("Default"), DisplayName("CustomersLocations"), InstanceName("CustomersLocations"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.CustomerLocation.Insert)]
    [InsertPermission(BusinessObjects.PermissionKeys.CustomerLocation.Update)]
    [UpdatePermission(BusinessObjects.PermissionKeys.CustomerLocation.Read)]
    [DeletePermission(BusinessObjects.PermissionKeys.CustomerLocation.Delete)]
    [LookupScript("BusinessObjects.CustomerLocation")]
    public sealed class CustomerLocationRow : Row, IIdRow
    {        
            #region Customers Locations Id
            [DisplayName("Customers Locations Id"), Column("CustomersLocationsID"), Identity]
            public Int32? CustomersLocationsId { get { return Fields.CustomersLocationsId[this]; } set { Fields.CustomersLocationsId[this] = value; } }
            public partial class RowFields { public Int32Field CustomersLocationsId; }
            #endregion CustomersLocationsId
                
            #region Customer
            [DisplayName("Customer"), Column("CustomerID"), NotNull, ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerName")]
            [LookupEditor(typeof(BusinessObjects.Entities.CustomerRow), InplaceAdd = true)]
            public Int32? CustomerId { get { return Fields.CustomerId[this]; } set { Fields.CustomerId[this] = value; } }
            public partial class RowFields { public Int32Field CustomerId; }
            #endregion CustomerId
                
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
            
                [DisplayName("Customer Date"), Expression("jCustomer.[Date]")]
                public DateTime? CustomerDate { get { return Fields.CustomerDate[this]; } set { Fields.CustomerDate[this] = value; } }
                public partial class RowFields { public DateTimeField CustomerDate; }

                        
                [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
                public String CustomerName { get { return Fields.CustomerName[this]; } set { Fields.CustomerName[this] = value; } }
                public partial class RowFields { public StringField CustomerName; }

                        
                [DisplayName("Customer Phone Number"), Expression("jCustomer.[PhoneNumber]")]
                public String CustomerPhoneNumber { get { return Fields.CustomerPhoneNumber[this]; } set { Fields.CustomerPhoneNumber[this] = value; } }
                public partial class RowFields { public StringField CustomerPhoneNumber; }

                        
                [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
                public String CustomerEmail { get { return Fields.CustomerEmail[this]; } set { Fields.CustomerEmail[this] = value; } }
                public partial class RowFields { public StringField CustomerEmail; }

                        
                [DisplayName("Customer Website"), Expression("jCustomer.[Website]")]
                public String CustomerWebsite { get { return Fields.CustomerWebsite[this]; } set { Fields.CustomerWebsite[this] = value; } }
                public partial class RowFields { public StringField CustomerWebsite; }

                        
                [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
                public String CustomerAddress { get { return Fields.CustomerAddress[this]; } set { Fields.CustomerAddress[this] = value; } }
                public partial class RowFields { public StringField CustomerAddress; }

                        
                [DisplayName("Customer Account Id"), Expression("jCustomer.[AccountID]")]
                public Int32? CustomerAccountId { get { return Fields.CustomerAccountId[this]; } set { Fields.CustomerAccountId[this] = value; } }
                public partial class RowFields { public Int32Field CustomerAccountId; }

                        
                [DisplayName("Customer Address2"), Expression("jCustomer.[Address2]")]
                public String CustomerAddress2 { get { return Fields.CustomerAddress2[this]; } set { Fields.CustomerAddress2[this] = value; } }
                public partial class RowFields { public StringField CustomerAddress2; }

                        
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

                        
                [DisplayName("Location Is Visible"), Expression("jLocation.[IsVisible]")]
                public Boolean? LocationIsVisible { get { return Fields.LocationIsVisible[this]; } set { Fields.LocationIsVisible[this] = value; } }
                public partial class RowFields { public BooleanField LocationIsVisible; }

                        
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
    get { return Fields.CustomersLocationsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public CustomerLocationRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[CustomersLocations]")
    {
    LocalTextPrefix = "BusinessObjects.CustomerLocation";
    }
    }
    #endregion RowFields
    }
    }
