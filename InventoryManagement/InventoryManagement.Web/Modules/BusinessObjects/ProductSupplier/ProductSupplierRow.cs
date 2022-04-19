
namespace InventoryManagement.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using System.Collections.Generic;

    [ConnectionKey("Default"), TableName("[dbo].[ProductsSuppliers]")]
    [DisplayName("Product Supplier"), InstanceName("Product Supplier"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ProductSupplier.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ProductSupplier.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ProductSupplier.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ProductSupplier.Delete)]
    public sealed class ProductSupplierRow : Row, IIdRow
    {

        [Hidden]
        [DisplayName("Product Supplier Id"), Identity]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        [Hidden]
        [DisplayName("Product"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [Hidden]
        [DisplayName("Supplier"), ForeignKey("[dbo].[Suppliers]", "SupplierID"), LeftJoin("jSupplier"), TextualField("SupplierSupplierName")]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }


        [DisplayName("Suppliers"), NotMapped, QuickFilter]
        [Width(180)]
        [LinkingSetRelation(typeof(ProductSupplierRow), "ProductId", "SupplierId")]
        [LookupEditor(typeof(BusinessObjects.Scripts.SupplierLookup), Multiple = true)]
        public List<Int32> SupplierList
        {
            get { return Fields.SupplierList[this]; }
            set { Fields.SupplierList[this] = value; }
        }

   


        [DisplayName("Product Date"), Expression("jProduct.[Date]")]
        public DateTime? ProductDate
        {
            get { return Fields.ProductDate[this]; }
            set { Fields.ProductDate[this] = value; }
        }

        [DisplayName("Product Product Code"), Expression("jProduct.[ProductCode]")]
        public String ProductProductCode
        {
            get { return Fields.ProductProductCode[this]; }
            set { Fields.ProductProductCode[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Brand Name"), Expression("jProduct.[BrandName]")]
        public String ProductBrandName
        {
            get { return Fields.ProductBrandName[this]; }
            set { Fields.ProductBrandName[this] = value; }
        }

        [DisplayName("Product Product Category Id"), Expression("jProduct.[ProductCategoryID]")]
        public Int32? ProductProductCategoryId
        {
            get { return Fields.ProductProductCategoryId[this]; }
            set { Fields.ProductProductCategoryId[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
        public Int32? ProductSupplierId1
        {
            get { return Fields.ProductSupplierId1[this]; }
            set { Fields.ProductSupplierId1[this] = value; }
        }

        [DisplayName("Product Least Unit Name"), Expression("jProduct.[LeastUnitName]")]
        public String ProductLeastUnitName
        {
            get { return Fields.ProductLeastUnitName[this]; }
            set { Fields.ProductLeastUnitName[this] = value; }
        }

        [DisplayName("Product Account Id"), Expression("jProduct.[AccountID]")]
        public Int32? ProductAccountId
        {
            get { return Fields.ProductAccountId[this]; }
            set { Fields.ProductAccountId[this] = value; }
        }

        [DisplayName("Supplier Date"), Expression("jSupplier.[Date]")]
        public DateTime? SupplierDate
        {
            get { return Fields.SupplierDate[this]; }
            set { Fields.SupplierDate[this] = value; }
        }

        [EditLink]
        [DisplayName("Supplier"), Expression("jSupplier.[SupplierName]")]
        public String SupplierSupplierName
        {
            get { return Fields.SupplierSupplierName[this]; }
            set { Fields.SupplierSupplierName[this] = value; }
        }

        [DisplayName("Supplier Phone Number"), Expression("jSupplier.[PhoneNumber]")]
        public String SupplierPhoneNumber
        {
            get { return Fields.SupplierPhoneNumber[this]; }
            set { Fields.SupplierPhoneNumber[this] = value; }
        }

        [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        public String SupplierFax
        {
            get { return Fields.SupplierFax[this]; }
            set { Fields.SupplierFax[this] = value; }
        }

        [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
        public String SupplierEmail
        {
            get { return Fields.SupplierEmail[this]; }
            set { Fields.SupplierEmail[this] = value; }
        }

        [DisplayName("Supplier Website"), Expression("jSupplier.[Website]")]
        public String SupplierWebsite
        {
            get { return Fields.SupplierWebsite[this]; }
            set { Fields.SupplierWebsite[this] = value; }
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        [DisplayName("Supplier Note"), Expression("jSupplier.[Note]")]
        public String SupplierNote
        {
            get { return Fields.SupplierNote[this]; }
            set { Fields.SupplierNote[this] = value; }
        }

        [DisplayName("Supplier Account Id"), Expression("jSupplier.[AccountID]")]
        public Int32? SupplierAccountId
        {
            get { return Fields.SupplierAccountId[this]; }
            set { Fields.SupplierAccountId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductSupplierId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductSupplierRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductSupplierId;
            public Int32Field ProductId;
            public Int32Field SupplierId;

            public DateTimeField ProductDate;
            public StringField ProductProductCode;
            public StringField ProductProductName;
            public StringField ProductBrandName;
            public Int32Field ProductProductCategoryId;
            public Int32Field ProductSupplierId1;
            public StringField ProductLeastUnitName;
            public Int32Field ProductAccountId;

            public DateTimeField SupplierDate;
            public StringField SupplierSupplierName;
            public StringField SupplierPhoneNumber;
            public StringField SupplierFax;
            public StringField SupplierEmail;
            public StringField SupplierWebsite;
            public StringField SupplierAddress;
            public StringField SupplierNote;
            public Int32Field SupplierAccountId;

            public ListField<Int32> SupplierList;

     

            public RowFields()
                : base()
            {
                LocalTextPrefix = "BusinessObjects.ProductSupplier";
            }
        }
    }
}
