
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

    [ConnectionKey("Default"), DisplayName("SalesUOMsAndPrices"), InstanceName("Sales UoM and Price"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.SalesUoMAndPrice.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.SalesUoMAndPrice.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.SalesUoMAndPrice.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.SalesUoMAndPrice.Delete)]
    [LookupScript("BusinessObjects.SalesUoMAndPrice")]
    public sealed class SalesUoMAndPriceRow : Row, IIdRow, INameRow
    {
        #region Uom And Price Id
        [DisplayName("Uom And Price Id"), Column("UOMAndPriceID"), Identity]
        public Int32? UomAndPriceId { get { return Fields.UomAndPriceId[this]; } set { Fields.UomAndPriceId[this] = value; } }
        public partial class RowFields { public Int32Field UomAndPriceId; }
        #endregion UomAndPriceId

        #region Product
        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        [LookupEditor(typeof(BusinessObjects.Entities.ProductRow), InplaceAdd = true), LookupInclude]
        public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
        public partial class RowFields { public Int32Field ProductId; }
        #endregion ProductId

        #region Unit Name
        [DisplayName("Unit Name"), Size(50), NotNull, QuickSearch, LookupInclude]
        public String UnitName { get { return Fields.UnitName[this]; } set { Fields.UnitName[this] = value; } }
        public partial class RowFields { public StringField UnitName; }
        #endregion UnitName

        #region Unit Make Up
        [DisplayName("Unit Make Up"), Size(18), NotNull]
        public Int32? UnitMakeUp { get { return Fields.UnitMakeUp[this]; } set { Fields.UnitMakeUp[this] = value; } }
        public partial class RowFields { public Int32Field UnitMakeUp; }
        #endregion UnitMakeUp

        #region Standard Uomid
        [DisplayName("Standard Uomid"), Column("StandardUOMID"), ForeignKey("[dbo].[StandardUOMs]", "StandardUOMID"), LeftJoin("jStandardUomid"), TextualField("StandardUomidStandardUnitName")]
        [LookupEditor(typeof(BusinessObjects.Entities.StandardUoMRow), InplaceAdd = true)]
        public Int32? StandardUomid { get { return Fields.StandardUomid[this]; } set { Fields.StandardUomid[this] = value; } }
        public partial class RowFields { public Int32Field StandardUomid; }
        #endregion StandardUomid

        #region Discontinued
        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued { get { return Fields.Discontinued[this]; } set { Fields.Discontinued[this] = value; } }
        public partial class RowFields { public BooleanField Discontinued; }
        #endregion Discontinued

        #region Price
        [DisplayName("Price"), Size(19), Scale(4), NotNull, LookupInclude]
        public Decimal? Price { get { return Fields.Price[this]; } set { Fields.Price[this] = value; } }
        public partial class RowFields { public DecimalField Price; }
        #endregion Price


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


        [DisplayName("Standard Uomid Product Id"), Expression("jStandardUomid.[ProductID]")]
        public Int32? StandardUomidProductId { get { return Fields.StandardUomidProductId[this]; } set { Fields.StandardUomidProductId[this] = value; } }
        public partial class RowFields { public Int32Field StandardUomidProductId; }


        [DisplayName("Standard Uomid Standard Unit Name"), Expression("jStandardUomid.[StandardUnitName]")]
        public String StandardUomidStandardUnitName { get { return Fields.StandardUomidStandardUnitName[this]; } set { Fields.StandardUomidStandardUnitName[this] = value; } }
        public partial class RowFields { public StringField StandardUomidStandardUnitName; }


        [DisplayName("Standard Uomid Discontinued"), Expression("jStandardUomid.[Discontinued]")]
        public Boolean? StandardUomidDiscontinued { get { return Fields.StandardUomidDiscontinued[this]; } set { Fields.StandardUomidDiscontinued[this] = value; } }
        public partial class RowFields { public BooleanField StandardUomidDiscontinued; }


        [DisplayName("Standard Uomid Cost"), Expression("jStandardUomid.[Cost]")]
        public Decimal? StandardUomidCost { get { return Fields.StandardUomidCost[this]; } set { Fields.StandardUomidCost[this] = value; } }
        public partial class RowFields { public DecimalField StandardUomidCost; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.UomAndPriceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UnitName; }
        }
        #endregion Id and Name fields

        #region Constructor
        public SalesUoMAndPriceRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[SalesUOMsAndPrices]")
            {
                LocalTextPrefix = "BusinessObjects.SalesUoMAndPrice";
            }
        }
        #endregion RowFields
    }
}
