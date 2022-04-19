
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

    [ConnectionKey("Default"), DisplayName("ReturnOutwardsPayments"), InstanceName("Refund"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ReturnOutwardsPayment.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ReturnOutwardsPayment.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ReturnOutwardsPayment.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ReturnOutwardsPayment.Delete)]
    [LookupScript("BusinessObjects.ReturnOutwardsPayments")]
    public sealed class ReturnOutwardsPaymentRow : Row, IIdRow
    {        
            #region Rtn Outwards Payment Id
        [Hidden]
            [DisplayName("Rtn Outwards Payment Id"), Column("RtnOutwardsPaymentID"), Identity]
            public Int32? RtnOutwardsPaymentId { get { return Fields.RtnOutwardsPaymentId[this]; } set { Fields.RtnOutwardsPaymentId[this] = value; } }
            public partial class RowFields { public Int32Field RtnOutwardsPaymentId; }
            #endregion RtnOutwardsPaymentId
                
            #region Rtn Outwards
        [Hidden]
            [DisplayName("Rtn Outwards"), Column("RtnOutwardsID"), ForeignKey("[dbo].[ReturnOutwards]", "RtnOutwardsID"), LeftJoin("jRtnOutwards")]
            [LookupEditor(typeof(BusinessObjects.Entities.ReturnOutwardsRow), InplaceAdd = true)]
            public Int32? RtnOutwardsId { get { return Fields.RtnOutwardsId[this]; } set { Fields.RtnOutwardsId[this] = value; } }
            public partial class RowFields { public Int32Field RtnOutwardsId; }
            #endregion RtnOutwardsId
                
            #region Purchases Id
        [Hidden]
            [DisplayName("Purchases Id"), Column("PurchasesID")]
            public Int32? PurchasesId { get { return Fields.PurchasesId[this]; } set { Fields.PurchasesId[this] = value; } }
            public partial class RowFields { public Int32Field PurchasesId; }
            #endregion PurchasesId
                
            #region Date
            [DefaultValue("now")]
            [DisplayName("Date"), NotNull]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Amount
        [Hidden]
            [DisplayName("Amount"), Size(19), Scale(4)]
            public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
            public partial class RowFields { public DecimalField Amount; }
            #endregion Amount
                
            #region Amount Refunded
            [DisplayName("Amount Refunded"), Scale(4), NotNull]
            [DisplayFormat("#,##0.00")]
            [DecimalEditor(MinValue = "-999999999.99", MaxValue = "999999999.99")]
        public Decimal? AmountRefunded { get { return Fields.AmountRefunded[this]; } set { Fields.AmountRefunded[this] = value; } }
            public partial class RowFields { public DecimalField AmountRefunded; }
            #endregion AmountRefunded
                
            #region Fee
        [Hidden]
            [DisplayName("Fee"), Size(19), Scale(4)]
            public Decimal? Fee { get { return Fields.Fee[this]; } set { Fields.Fee[this] = value; } }
            public partial class RowFields { public DecimalField Fee; }
            #endregion Fee
                
            #region Credit
        [Hidden]
            [DisplayName("Credit"), Size(19), Scale(4)]
            public Decimal? Credit { get { return Fields.Credit[this]; } set { Fields.Credit[this] = value; } }
            public partial class RowFields { public DecimalField Credit; }
            #endregion Credit
        

    #region Foreign Fields
            
                [DisplayName("Rtn Outwards Date"), Expression("jRtnOutwards.[Date]")]
                public DateTime? RtnOutwardsDate { get { return Fields.RtnOutwardsDate[this]; } set { Fields.RtnOutwardsDate[this] = value; } }
                public partial class RowFields { public DateTimeField RtnOutwardsDate; }

                        
                [DisplayName("Rtn Outwards Purchases Id"), Expression("jRtnOutwards.[PurchasesID]")]
                public Int32? RtnOutwardsPurchasesId { get { return Fields.RtnOutwardsPurchasesId[this]; } set { Fields.RtnOutwardsPurchasesId[this] = value; } }
                public partial class RowFields { public Int32Field RtnOutwardsPurchasesId; }

                        
                [DisplayName("Rtn Outwards Total Amount"), Expression("jRtnOutwards.[TotalAmount]")]
                public Decimal? RtnOutwardsTotalAmount { get { return Fields.RtnOutwardsTotalAmount[this]; } set { Fields.RtnOutwardsTotalAmount[this] = value; } }
                public partial class RowFields { public DecimalField RtnOutwardsTotalAmount; }

                        
                [DisplayName("Rtn Outwards Total Fee"), Expression("jRtnOutwards.[TotalFee]")]
                public Decimal? RtnOutwardsTotalFee { get { return Fields.RtnOutwardsTotalFee[this]; } set { Fields.RtnOutwardsTotalFee[this] = value; } }
                public partial class RowFields { public DecimalField RtnOutwardsTotalFee; }

                        
                [DisplayName("Rtn Outwards Total Amount Refunded"), Expression("jRtnOutwards.[TotalAmountRefunded]")]
                public Decimal? RtnOutwardsTotalAmountRefunded { get { return Fields.RtnOutwardsTotalAmountRefunded[this]; } set { Fields.RtnOutwardsTotalAmountRefunded[this] = value; } }
                public partial class RowFields { public DecimalField RtnOutwardsTotalAmountRefunded; }

                        
                [DisplayName("Rtn Outwards Total Credit"), Expression("jRtnOutwards.[TotalCredit]")]
                public Decimal? RtnOutwardsTotalCredit { get { return Fields.RtnOutwardsTotalCredit[this]; } set { Fields.RtnOutwardsTotalCredit[this] = value; } }
                public partial class RowFields { public DecimalField RtnOutwardsTotalCredit; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.RtnOutwardsPaymentId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public ReturnOutwardsPaymentRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ReturnOutwardsPayments]")
    {
    LocalTextPrefix = "BusinessObjects.ReturnOutwardsPayments";
    }
    }
    #endregion RowFields
    }
    }
