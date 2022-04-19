
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


    [ConnectionKey("Default"), DisplayName("Stocks"), InstanceName("Stock"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Stock.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.Stock.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.Stock.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.Stock.Delete)]
    [LookupScript("BusinessObjects.Stock")]
    public sealed class StockRow : Row, IIdRow, INameRow
    {
        #region Stock Id
        [Hidden]
        [DisplayName("Stock Id"), Column("StockID"), Identity]
        public Int32? StockId { get { return Fields.StockId[this]; } set { Fields.StockId[this] = value; } }
        public partial class RowFields { public Int32Field StockId; }
        #endregion StockId

        #region Product
        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        [LookupEditor(typeof(BusinessObjects.Entities.ProductRow), InplaceAdd = true)]
        public Int32? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
        public partial class RowFields { public Int32Field ProductId; }
        #endregion ProductId

        #region Quantity
        [DisplayName("Quantity"), Size(18)]
        public Double? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
        public partial class RowFields { public DoubleField Quantity; }
        #endregion Quantity

        #region DummyQuantity
        [NotMapped]
        [DisplayName("Quantity"), Size(18)]
        public Double? DummyQuantity { get { return Fields.DummyQuantity[this]; } set { Fields.DummyQuantity[this] = value; } }
        public partial class RowFields { public DoubleField DummyQuantity; }
        #endregion DummyQuantity

        #region QuantityInUnit
        [DisplayName("Quantity"), Size(18)]
        public String QuantityInUnit { get { return Fields.QuantityInUnit[this]; } set { Fields.QuantityInUnit[this] = value; } }
        public partial class RowFields { public StringField QuantityInUnit; }
        #endregion QuantityInUnit

        #region Location
        
        [QuickFilter]
        [DisplayName("Location"), Column("LocationID"), NotNull, ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
        public partial class RowFields { public Int32Field LocationId; }
        #endregion LocationId

        //This column is used in TransferStockForm
        [DisplayName("Location"), NotMapped]
        [LookupEditor(typeof(Administration.Scripts.LocationLookup))]
        public Int32? DummyLocationId { get { return Fields.DummyLocationId[this]; } set { Fields.DummyLocationId[this] = value; } }
        public partial class RowFields { public Int32Field DummyLocationId; }

        #region Uom And Price
        [NotMapped]
        [DisplayName("Unit"), Column("UOMAndPriceID"), ForeignKey("[dbo].[PurchasesUOMsAndPrices]", "UOMAndPriceID"), LeftJoin("jUomAndPrice"), TextualField("UomAndPriceUnitName")]
        [LookupEditor(typeof(BusinessObjects.Entities.PurchasesUoMAndPriceRow), CascadeFrom = "ProductId", CascadeField = "ProductId"), ]
        public Int32? UomAndPriceId { get { return Fields.UomAndPriceId[this]; } set { Fields.UomAndPriceId[this] = value; } }
        public partial class RowFields { public Int32Field UomAndPriceId; }
        #endregion UomAndPriceId
        
        [Hidden]
        [NotMapped]
        public string ActionKey { get { return Fields.ActionKey[this]; } set { Fields.ActionKey[this] = value; } }
        public partial class RowFields { public StringField ActionKey; }

        //[Hidden]
        //[DisplayName("Locations"), NotMapped, QuickFilter]
        //[Width(180)]
        //[LookupEditor(typeof(Administration.Scripts.LocationLookup), Multiple = true)]
        //public List<Int32> LocationList
        //{
        //    get { return Fields.LocationList[this]; }
        //    set { Fields.LocationList[this] = value; }
        //}


        #region Foreign Fields

        [DisplayName("Product Date"), Expression("jProduct.[Date]")]
        public DateTime? ProductDate { get { return Fields.ProductDate[this]; } set { Fields.ProductDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProductDate; }


        [DisplayName("Product Code"), Expression("jProduct.[ProductCode]")]
        public String ProductProductCode { get { return Fields.ProductProductCode[this]; } set { Fields.ProductProductCode[this] = value; } }
        public partial class RowFields { public StringField ProductProductCode; }


        [DisplayName("Product Name"), Expression("jProduct.[ProductName]")]
        public String ProductProductName { get { return Fields.ProductProductName[this]; } set { Fields.ProductProductName[this] = value; } }
        public partial class RowFields { public StringField ProductProductName; }


        [DisplayName("Product Brand Name"), Expression("jProduct.[BrandName]")]
        public String ProductBrandName { get { return Fields.ProductBrandName[this]; } set { Fields.ProductBrandName[this] = value; } }
        public partial class RowFields { public StringField ProductBrandName; }


        [DisplayName("Product Category"), Expression("jProduct.[ProductCategoryID]"), ForeignKey("[dbo].[ProductsCategories]", "ProductCategoryID"), LeftJoin("jProductCategory")]
        public Int32? ProductProductCategoryId { get { return Fields.ProductProductCategoryId[this]; } set { Fields.ProductProductCategoryId[this] = value; } }
        public partial class RowFields { public Int32Field ProductProductCategoryId; }

        [DisplayName("Product Category"), Expression("jProductCategory.[CategoryName]")]
        public string ProductCategory { get { return Fields.ProductCategory[this]; } set { Fields.ProductCategory[this] = value; } }

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


        [DisplayName("Locations"), Expression("jLocation.[LocationName]")]
        public String LocationLocationName { get { return Fields.LocationLocationName[this]; } set { Fields.LocationLocationName[this] = value; } }
        public partial class RowFields { public StringField LocationLocationName; }


        [DisplayName("Location Address"), Expression("jLocation.[Address]")]
        public String LocationAddress { get { return Fields.LocationAddress[this]; } set { Fields.LocationAddress[this] = value; } }
        public partial class RowFields { public StringField LocationAddress; }


        [DisplayName("Location User Id"), Expression("jLocation.[UserID]")]
        public Int32? LocationUserId { get { return Fields.LocationUserId[this]; } set { Fields.LocationUserId[this] = value; } }
        public partial class RowFields { public Int32Field LocationUserId; }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.StockId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductProductName; }
        }
        
        #endregion Id and Name fields

        #region Constructor
        public StockRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[Stocks]")
            {
                LocalTextPrefix = "BusinessObjects.Stock";
            }

            public StringField ProductCategory;

            //public ListField<Int32> LocationList;
        }
        #endregion RowFields


    }
}
