
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

    [ConnectionKey("Default"), DisplayName("ProductsLocations"), InstanceName("ProductsLocations"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ProductLocation.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ProductLocation.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ProductLocation.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ProductLocation.Delete)]
    [LookupScript("BusinessObjects.ProductLocation")]
    public sealed class ProductLocationRow : Row, IIdRow
    {        
            #region Products Locations Id
            [DisplayName("Products Locations Id"), Column("ProductsLocationsID"), Identity]
            public Int32? ProductsLocationsId { get { return Fields.ProductsLocationsId[this]; } set { Fields.ProductsLocationsId[this] = value; } }
            public partial class RowFields { public Int32Field ProductsLocationsId; }
            #endregion ProductsLocationsId
                
            #region Product
            [DisplayName("Product"), Column("ProductID"), NotNull, ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
            [LookupEditor(typeof(BusinessObjects.Entities.ProductRow), InplaceAdd = true)]
            public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
            public partial class RowFields { public Int32Field ProductId; }
            #endregion ProductId
                
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
            
                [DisplayName("Product Date"), Expression("jProduct.[Date]")]
                public DateTime? ProductDate { get { return Fields.ProductDate[this]; } set { Fields.ProductDate[this] = value; } }
                public partial class RowFields { public DateTimeField ProductDate; }

                        
                [DisplayName("Product Product Code"), Expression("jProduct.[ProductCode]")]
                public String ProductProductCode { get { return Fields.ProductProductCode[this]; } set { Fields.ProductProductCode[this] = value; } }
                public partial class RowFields { public StringField ProductProductCode; }

                        
                [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
                public String ProductProductName { get { return Fields.ProductProductName[this]; } set { Fields.ProductProductName[this] = value; } }
                public partial class RowFields { public StringField ProductProductName; }

                        
                [DisplayName("Product Brand Name"), Expression("jProduct.[BrandName]")]
                public String ProductBrandName { get { return Fields.ProductBrandName[this]; } set { Fields.ProductBrandName[this] = value; } }
                public partial class RowFields { public StringField ProductBrandName; }

                        
                [DisplayName("Product Product Category Id"), Expression("jProduct.[ProductCategoryID]")]
                public Int32? ProductProductCategoryId { get { return Fields.ProductProductCategoryId[this]; } set { Fields.ProductProductCategoryId[this] = value; } }
                public partial class RowFields { public Int32Field ProductProductCategoryId; }

                        
                [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
                public Int32? ProductSupplierId { get { return Fields.ProductSupplierId[this]; } set { Fields.ProductSupplierId[this] = value; } }
                public partial class RowFields { public Int32Field ProductSupplierId; }

                        
                [DisplayName("Product Least Unit Name"), Expression("jProduct.[LeastUnitName]")]
                public String ProductLeastUnitName { get { return Fields.ProductLeastUnitName[this]; } set { Fields.ProductLeastUnitName[this] = value; } }
                public partial class RowFields { public StringField ProductLeastUnitName; }

                        
                [DisplayName("Product Account Id"), Expression("jProduct.[AccountID]")]
                public Int32? ProductAccountId { get { return Fields.ProductAccountId[this]; } set { Fields.ProductAccountId[this] = value; } }
                public partial class RowFields { public Int32Field ProductAccountId; }

                        
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
    get { return Fields.ProductsLocationsId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public ProductLocationRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ProductsLocations]")
    {
    LocalTextPrefix = "BusinessObjects.ProductLocation";
    }
    }
    #endregion RowFields
    }
    }
