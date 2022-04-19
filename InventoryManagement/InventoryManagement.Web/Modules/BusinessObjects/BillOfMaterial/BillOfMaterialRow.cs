
namespace InventoryManagement.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[BillOfMaterial]")]
    [DisplayName("Bill Of Material"), InstanceName("Bill Of Material"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.BillOfMaterial.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.BillOfMaterial.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.BillOfMaterial.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.BillOfMaterial.Delete)]
    public sealed class BillOfMaterialRow : Row, IIdRow, INameRow
    {
        [DisplayName("Bill Of Material Id"), Identity]
        public Int32? BillOfMaterialId
        {
            get { return Fields.BillOfMaterialId[this]; }
            set { Fields.BillOfMaterialId[this] = value; }
        }

        [DisplayName("Product"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Component Item"), Size(50), QuickSearch]
        public String ComponentItem
        {
            get { return Fields.ComponentItem[this]; }
            set { Fields.ComponentItem[this] = value; }
        }

        [TextAreaEditor(Rows = 6)]
        [DisplayName("Description"), Size(5000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Quantity"), Size(18), Scale(2)]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Cost"), Size(19), Scale(4)]
        public Decimal? Cost
        {
            get { return Fields.Cost[this]; }
            set { Fields.Cost[this] = value; }
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

        [DisplayName("Product Barcode"), Expression("jProduct.[Barcode]")]
        public String ProductBarcode
        {
            get { return Fields.ProductBarcode[this]; }
            set { Fields.ProductBarcode[this] = value; }
        }

        [DisplayName("Product Reorder Point"), Expression("jProduct.[ReorderPoint]")]
        public Int32? ProductReorderPoint
        {
            get { return Fields.ProductReorderPoint[this]; }
            set { Fields.ProductReorderPoint[this] = value; }
        }

        [DisplayName("Product Reorder Quantity"), Expression("jProduct.[ReorderQuantity]")]
        public Int32? ProductReorderQuantity
        {
            get { return Fields.ProductReorderQuantity[this]; }
            set { Fields.ProductReorderQuantity[this] = value; }
        }

        [DisplayName("Product Product Category Id"), Expression("jProduct.[ProductCategoryID]")]
        public Int32? ProductProductCategoryId
        {
            get { return Fields.ProductProductCategoryId[this]; }
            set { Fields.ProductProductCategoryId[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.BillOfMaterialId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ComponentItem; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BillOfMaterialRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BillOfMaterialId;
            public Int32Field ProductId;
            public StringField ComponentItem;
            public StringField Description;
            public DecimalField Quantity;
            public DecimalField Cost;

            public DateTimeField ProductDate;
            public StringField ProductProductCode;
            public StringField ProductProductName;
            public StringField ProductBrandName;
            public StringField ProductBarcode;
            public Int32Field ProductReorderPoint;
            public Int32Field ProductReorderQuantity;
            public Int32Field ProductProductCategoryId;
            public Int32Field ProductSupplierId;
            public StringField ProductLeastUnitName;
            public Int32Field ProductAccountId;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "BusinessObjects.BillOfMaterial2";
            }
        }
    }
}
