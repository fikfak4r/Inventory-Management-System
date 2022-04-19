
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

    [ConnectionKey("Default"), DisplayName("ProductsCategoriesLocations"), InstanceName("ProductsCategoriesLocations"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ProductCategoryLocation.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ProductCategoryLocation.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ProductCategoryLocation.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ProductCategoryLocation.Delete)]
    [LookupScript("BusinessObjects.ProductCategoryLocation")]
    public sealed class ProductCategoryLocationRow : Row, IIdRow
    {        
            #region Prod Cat Loctn Id
            [DisplayName("Prod Cat Loctn Id"), Column("ProdCatLoctnID"), Identity]
            public Int32? ProdCatLoctnId { get { return Fields.ProdCatLoctnId[this]; } set { Fields.ProdCatLoctnId[this] = value; } }
            public partial class RowFields { public Int32Field ProdCatLoctnId; }
            #endregion ProdCatLoctnId
                
            #region Product Category
            [DisplayName("Product Category"), Column("ProductCategoryID"), NotNull, ForeignKey("[dbo].[ProductsCategories]", "ProductCategoryID"), LeftJoin("jProductCategory"), TextualField("ProductCategoryCategoryName")]
            [LookupEditor(typeof(BusinessObjects.Entities.ProductCategoryRow), InplaceAdd = true)]
            public Int32? ProductCategoryId { get { return Fields.ProductCategoryId[this]; } set { Fields.ProductCategoryId[this] = value; } }
            public partial class RowFields { public Int32Field ProductCategoryId; }
            #endregion ProductCategoryId
                
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
            
                [DisplayName("Product Category Category Name"), Expression("jProductCategory.[CategoryName]")]
                public String ProductCategoryCategoryName { get { return Fields.ProductCategoryCategoryName[this]; } set { Fields.ProductCategoryCategoryName[this] = value; } }
                public partial class RowFields { public StringField ProductCategoryCategoryName; }

                        
                [DisplayName("Product Category Description"), Expression("jProductCategory.[Description]")]
                public String ProductCategoryDescription { get { return Fields.ProductCategoryDescription[this]; } set { Fields.ProductCategoryDescription[this] = value; } }
                public partial class RowFields { public StringField ProductCategoryDescription; }

                        
                [DisplayName("Product Category Account Id"), Expression("jProductCategory.[AccountID]")]
                public Int32? ProductCategoryAccountId { get { return Fields.ProductCategoryAccountId[this]; } set { Fields.ProductCategoryAccountId[this] = value; } }
                public partial class RowFields { public Int32Field ProductCategoryAccountId; }

                        
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
    get { return Fields.ProdCatLoctnId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public ProductCategoryLocationRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ProductsCategoriesLocations]")
    {
    LocalTextPrefix = "BusinessObjects.ProductCategoryLocation";
    }
    }
    #endregion RowFields
    }
    }
