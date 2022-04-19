
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

    [ConnectionKey("Default"), DisplayName("Products"), InstanceName("Product"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Product.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.Product.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Product.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.Product.Delete)]
    [LookupScript("BusinessObjects.Product")]
    public sealed class ProductRow : Row, IIdRow, INameRow
    {
        #region Product Id
        [DisplayName("Product Id"), Column("ProductID"), Identity, Hidden]
        public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
        public partial class RowFields { public Int32Field ProductId; }
        #endregion ProductId

        #region Date
        [DisplayName("Date")]
        public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
        public partial class RowFields { public DateTimeField Date; }
        #endregion Date

        #region Product Code
        [DisplayName("Product Code"), Size(50), QuickSearch]
        public String ProductCode { get { return Fields.ProductCode[this]; } set { Fields.ProductCode[this] = value; } }
        public partial class RowFields { public StringField ProductCode; }
        #endregion ProductCode

        #region Product Name
        [DisplayName("Product Name"), Size(50), NotNull]
        public String ProductName { get { return Fields.ProductName[this]; } set { Fields.ProductName[this] = value; } }
        public partial class RowFields { public StringField ProductName; }
        #endregion ProductName

        #region Brand Name
        [DisplayName("Brand Name"), Size(50)]
        public String BrandName { get { return Fields.BrandName[this]; } set { Fields.BrandName[this] = value; } }
        public partial class RowFields { public StringField BrandName; }
        #endregion BrandName

        #region Barcode
        [DisplayName("Barcode"), Size(50)]
        public String Barcode { get { return Fields.Barcode[this]; } set { Fields.Barcode[this] = value; } }
        public partial class RowFields { public StringField Barcode; }
        #endregion Barcode


        #region ReorderPoint
        [DisplayName("Reorder Point")]
        public Int32? ReorderPoint { get { return Fields.ReorderPoint[this]; } set { Fields.ReorderPoint[this] = value; } }
        public partial class RowFields { public Int32Field ReorderPoint; }
        #endregion ReorderPoint

        #region ReorderQuantity
        [DisplayName("Reorder Quantity")]
        public Int32? ReorderQuantity { get { return Fields.ReorderQuantity[this]; } set { Fields.ReorderQuantity[this] = value; } }
        public partial class RowFields { public Int32Field ReorderQuantity; }
        #endregion ReorderQuantity


        #region Product Category

        [DisplayName("Category"), Column("ProductCategoryID"), ForeignKey("[dbo].[ProductsCategories]", "ProductCategoryID"), LeftJoin("jProductCategory"), TextualField("ProductCategoryCategoryName")]
        [LookupEditor(typeof(BusinessObjects.Scripts.ProductCategoryLookup), InplaceAdd = true, DialogType="BusinessObjects.ProductCategory")]
        public Int32? ProductCategoryId { get { return Fields.ProductCategoryId[this]; } set { Fields.ProductCategoryId[this] = value; } }
        public partial class RowFields { public Int32Field ProductCategoryId; }
        #endregion ProductCategoryId

        #region Supplier
        [DisplayName("Supplier"), Column("SupplierID"), ForeignKey("[dbo].[Suppliers]", "SupplierID"), LeftJoin("jSupplier"), TextualField("SupplierSupplierName")]
        [LookupEditor(typeof(BusinessObjects.Entities.SupplierRow), InplaceAdd = true)]
        public Int32? SupplierId { get { return Fields.SupplierId[this]; } set { Fields.SupplierId[this] = value; } }
        public partial class RowFields { public Int32Field SupplierId; }
        #endregion SupplierId

        #region Least Unit Name
        [DisplayName("Least Unit Name"), Size(50)]
        public String LeastUnitName { get { return Fields.LeastUnitName[this]; } set { Fields.LeastUnitName[this] = value; } }
        public partial class RowFields { public StringField LeastUnitName; }
        #endregion LeastUnitName

        [DisplayName("Locations"), NotMapped, QuickFilter, Required]
        [Width(130)]
        [LinkingSetRelation(typeof(ProductLocationRow), "ProductId", "LocationId")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        public List<Int32> LocationList
        {
            get { return Fields.LocationList[this]; }
            set { Fields.LocationList[this] = value; }
        }


        #region Account
        [DisplayName("Account"), Column("AccountID"), ForeignKey("[dbo].[Accounts]", "AccountID"), LeftJoin("jAccount"), TextualField("AccountCompanyName")]
        [LookupEditor(typeof(Administration.Entities.AccountRow), InplaceAdd = true)]
        public Int32? AccountId { get { return Fields.AccountId[this]; } set { Fields.AccountId[this] = value; } }
        public partial class RowFields { public Int32Field AccountId; }
        #endregion AccountId

        [NotMapped]
        [PurchasesUoMAndPriceEditor]
        [MasterDetailRelation(foreignKey: "ProductId")]
        [DisplayName("Purchases UOM and Price")]
        public List<PurchasesUoMAndPriceRow> PurchasesUoMAndPriceList
        {
            get { return Fields.PurchasesUoMAndPriceList[this]; }
            set { Fields.PurchasesUoMAndPriceList[this] = value; }
        }


        [NotMapped]
        [SalesUoMAndPriceEditor]
        [MasterDetailRelation(foreignKey: "ProductId")]
        [DisplayName("Sales UOM and Price")]
        public List<SalesUoMAndPriceRow> SalesUoMAndPriceList
        {
            get { return Fields.SalesUoMAndPriceList[this]; }
            set { Fields.SalesUoMAndPriceList[this] = value; }
        }

        [NotMapped]
        public string Pricing
        {
            get { return Fields.Pricing[this]; }
            set { Fields.Pricing[this] = value; }
        }


        [NotMapped]
        [MasterDetailRelation("SupplierId")]
        public List<ProductSupplierRow> ProductSupplierList
        {
            get { return Fields.ProductSupplierList[this]; }
            set { Fields.ProductSupplierList[this] = value; }
        }


        #region Foreign Fields

        [DisplayName("Category"), Expression("jProductCategory.[CategoryName]")]
        public String ProductCategoryCategoryName { get { return Fields.ProductCategoryCategoryName[this]; } set { Fields.ProductCategoryCategoryName[this] = value; } }
        public partial class RowFields { public StringField ProductCategoryCategoryName; }


        [DisplayName("Product Category Description"), Expression("jProductCategory.[Description]")]
        public String ProductCategoryDescription { get { return Fields.ProductCategoryDescription[this]; } set { Fields.ProductCategoryDescription[this] = value; } }
        public partial class RowFields { public StringField ProductCategoryDescription; }


        [DisplayName("Product Category Account Id"), Expression("jProductCategory.[AccountID]")]
        public Int32? ProductCategoryAccountId { get { return Fields.ProductCategoryAccountId[this]; } set { Fields.ProductCategoryAccountId[this] = value; } }
        public partial class RowFields { public Int32Field ProductCategoryAccountId; }


        [DisplayName("Supplier Date"), Expression("jSupplier.[Date]")]
        public DateTime? SupplierDate { get { return Fields.SupplierDate[this]; } set { Fields.SupplierDate[this] = value; } }
        public partial class RowFields { public DateTimeField SupplierDate; }


        [DisplayName("Supplier"), Expression("jSupplier.[SupplierName]")]
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
            get { return Fields.ProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }
        #endregion Id and Name fields

        #region Constructor
        public ProductRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[Products]")
            {
                LocalTextPrefix = "BusinessObjects.Product";
            }

            public RowListField<PurchasesUoMAndPriceRow> PurchasesUoMAndPriceList;
            public RowListField<SalesUoMAndPriceRow> SalesUoMAndPriceList;
            public RowListField<ProductSupplierRow> ProductSupplierList;
            public StringField Pricing;
            public ListField<Int32> LocationList;

        }

        #endregion RowFields

    }
}
