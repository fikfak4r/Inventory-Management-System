
namespace InventoryManagement.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[MovementHistory]")]
    [DisplayName("Movement History"), InstanceName("Movement History"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.MovementHistory.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.MovementHistory.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.MovementHistory.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.MovementHistory.Delete)]
    public sealed class MovementHistoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Movement History Id"), Identity]
        public Int32? MovementHistoryId
        {
            get { return Fields.MovementHistoryId[this]; }
            set { Fields.MovementHistoryId[this] = value; }
        }

        [DisplayName("Product"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Transaction Type"), Size(50), QuickSearch]
        public String TransactionType
        {
            get { return Fields.TransactionType[this]; }
            set { Fields.TransactionType[this] = value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Location"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
        public Int32? LocationId
        {
            get { return Fields.LocationId[this]; }
            set { Fields.LocationId[this] = value; }
        }

        [DisplayName("Purchase"), ForeignKey("[dbo].[Purchases]", "PurchasesID"), LeftJoin("jPurchase"), TextualField("PurchaseOrderId")]
        public Int32? PurchaseId
        {
            get { return Fields.PurchaseId[this]; }
            set { Fields.PurchaseId[this] = value; }
        }
        

        [DisplayName("Quantity Before"), Size(50)]
        public String QuantityBefore
        {
            get { return Fields.QuantityBefore[this]; }
            set { Fields.QuantityBefore[this] = value; }
        }

        [DisplayName("Quantity"), Size(50)]
        public String Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Quantity After"), Size(50)]
        public String QuantityAfter
        {
            get { return Fields.QuantityAfter[this]; }
            set { Fields.QuantityAfter[this] = value; }
        }

        [DisplayName("Location Account Id"), Expression("jLocation.[AccountID]")]
        public Int32? LocationAccountId
        {
            get { return Fields.LocationAccountId[this]; }
            set { Fields.LocationAccountId[this] = value; }
        }

        [DisplayName("Location Date"), Expression("jLocation.[Date]")]
        public DateTime? LocationDate
        {
            get { return Fields.LocationDate[this]; }
            set { Fields.LocationDate[this] = value; }
        }

        [DisplayName("Location Phone Number"), Expression("jLocation.[PhoneNumber]")]
        public String LocationPhoneNumber
        {
            get { return Fields.LocationPhoneNumber[this]; }
            set { Fields.LocationPhoneNumber[this] = value; }
        }

        [DisplayName("Location Email"), Expression("jLocation.[Email]")]
        public String LocationEmail
        {
            get { return Fields.LocationEmail[this]; }
            set { Fields.LocationEmail[this] = value; }
        }

        [DisplayName("Location Website"), Expression("jLocation.[Website]")]
        public String LocationWebsite
        {
            get { return Fields.LocationWebsite[this]; }
            set { Fields.LocationWebsite[this] = value; }
        }

        [DisplayName("Location Location Name"), Expression("jLocation.[LocationName]")]
        public String LocationLocationName
        {
            get { return Fields.LocationLocationName[this]; }
            set { Fields.LocationLocationName[this] = value; }
        }

        [DisplayName("Location Address"), Expression("jLocation.[Address]")]
        public String LocationAddress
        {
            get { return Fields.LocationAddress[this]; }
            set { Fields.LocationAddress[this] = value; }
        }

        [DisplayName("Location User Id"), Expression("jLocation.[UserID]")]
        public Int32? LocationUserId
        {
            get { return Fields.LocationUserId[this]; }
            set { Fields.LocationUserId[this] = value; }
        }

        [DisplayName("Location Is Visible"), Expression("jLocation.[IsVisible]")]
        public Boolean? LocationIsVisible
        {
            get { return Fields.LocationIsVisible[this]; }
            set { Fields.LocationIsVisible[this] = value; }
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



        [DisplayName("Order Number"), Size(50)]
        [Expression("jPurchase.[OrderID]")]
        public String PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.MovementHistoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TransactionType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MovementHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductId;
            public Int32Field MovementHistoryId;
            public StringField TransactionType;
            public DateTimeField Date;
            public Int32Field LocationId;
            public StringField QuantityBefore;
            public StringField Quantity;
            public StringField QuantityAfter;


            public DateTimeField ProductDate;
            public StringField ProductProductCode;
            public StringField ProductProductName;
            public StringField ProductBrandName;
            public Int32Field LocationAccountId;
            public DateTimeField LocationDate;
            public StringField LocationPhoneNumber;
            public StringField LocationEmail;
            public StringField LocationWebsite;
            public StringField LocationLocationName;
            public StringField LocationAddress;
            public Int32Field LocationUserId;
            public BooleanField LocationIsVisible;

            public Int32Field PurchaseId;
            public StringField PurchaseOrderId;


            public RowFields()
                : base()
            {
                LocalTextPrefix = "BusinessObjects.MovementHistory";
            }
        }
    }
}
