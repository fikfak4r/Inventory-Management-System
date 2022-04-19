
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

    [ConnectionKey("Default"), DisplayName("Product Category"), InstanceName("Category"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ProductCategory.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ProductCategory.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ProductCategory.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ProductCategory.Delete)]
    [LookupScript("BusinessObjects.ProductCategory")]
    public sealed class ProductCategoryRow : Row, IIdRow, INameRow
    {        
            #region Product Category Id
            [Hidden]
            [DisplayName("Product Category Id"), Column("ProductCategoryID"), Identity]
            public Int32? ProductCategoryId { get { return Fields.ProductCategoryId[this]; } set { Fields.ProductCategoryId[this] = value; } }
            public partial class RowFields { public Int32Field ProductCategoryId; }
            #endregion ProductCategoryId
                
            #region Category Name
            [DisplayName("Category Name"), Size(50), NotNull, QuickSearch]
            public String CategoryName { get { return Fields.CategoryName[this]; } set { Fields.CategoryName[this] = value; } }
            public partial class RowFields { public StringField CategoryName; }
            #endregion CategoryName
                
            #region Description
            [DisplayName("Description"), Size(250)]
            public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
            public partial class RowFields { public StringField Description; }
            #endregion Description
                
            #region Account
            [DisplayName("Account"), Column("AccountID"), ForeignKey("[dbo].[Accounts]", "AccountID"), LeftJoin("jAccount"), TextualField("AccountCompanyName")]
            [LookupEditor(typeof(Administration.Entities.AccountRow), InplaceAdd = true)]
            public Int32? AccountId { get { return Fields.AccountId[this]; } set { Fields.AccountId[this] = value; } }
            public partial class RowFields { public Int32Field AccountId; }
            #endregion AccountId

            [DisplayName("Locations"), NotMapped]
            [Width(130)]
            [LinkingSetRelation(typeof(ProductCategoryLocationRow), "ProductCategoryId", "LocationId")]
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
    get { return Fields.ProductCategoryId; }
    }
        
            StringField INameRow.NameField
            {
            get { return Fields.CategoryName; }
            }
            #endregion Id and Name fields

    #region Constructor
    public ProductCategoryRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ProductsCategories]")
    {
    LocalTextPrefix = "BusinessObjects.ProductCategory";

    }

    public ListField<Int32> LocationList;

    }
    #endregion RowFields
    }
    }
