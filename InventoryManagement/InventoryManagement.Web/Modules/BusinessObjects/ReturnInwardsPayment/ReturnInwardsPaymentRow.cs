
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

    [ConnectionKey("Default"), DisplayName("ReturnInwardsPayments"), InstanceName("ReturnInwardsPayments"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.ReturnInwardsPayment.Read)]
    [InsertPermission(BusinessObjects.PermissionKeys.ReturnInwardsPayment.Insert)]
    [UpdatePermission(BusinessObjects.PermissionKeys.ReturnInwardsPayment.Update)]
    [DeletePermission(BusinessObjects.PermissionKeys.ReturnInwardsPayment.Delete)]
    [LookupScript("BusinessObjects.ReturnInwardsPayment")]
    public sealed class ReturnInwardsPaymentRow : Row, IIdRow
    {        
            #region Rtn Inwards Payment Id
            [DisplayName("Rtn Inwards Payment Id"), Column("RtnInwardsPaymentID"), Identity]
            public Int32? RtnInwardsPaymentId { get { return Fields.RtnInwardsPaymentId[this]; } set { Fields.RtnInwardsPaymentId[this] = value; } }
            public partial class RowFields { public Int32Field RtnInwardsPaymentId; }
            #endregion RtnInwardsPaymentId
                
            #region Rtn Inwards
            [DisplayName("Rtn Inwards"), Column("RtnInwardsID"), ForeignKey("[dbo].[ReturnInwards]", "RtnInwardsID"), LeftJoin("jRtnInwards")]
            [LookupEditor(typeof(BusinessObjects.Entities.ReturnInwardsRow), InplaceAdd = true)]
            public Int32? RtnInwardsId { get { return Fields.RtnInwardsId[this]; } set { Fields.RtnInwardsId[this] = value; } }
            public partial class RowFields { public Int32Field RtnInwardsId; }
            #endregion RtnInwardsId
                
            #region Sales Id
            [DisplayName("Sales Id"), Column("SalesID")]
            public Int32? SalesId { get { return Fields.SalesId[this]; } set { Fields.SalesId[this] = value; } }
            public partial class RowFields { public Int32Field SalesId; }
            #endregion SalesId
                
            #region Date
            [DisplayName("Date"), NotNull]
            public DateTime? Date { get { return Fields.Date[this]; } set { Fields.Date[this] = value; } }
            public partial class RowFields { public DateTimeField Date; }
            #endregion Date
                
            #region Amount
            [DisplayName("Amount"), Size(19), Scale(4)]
            public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
            public partial class RowFields { public DecimalField Amount; }
            #endregion Amount
                
            #region Amount Refunded
            [DisplayName("Amount Refunded"), Size(19), Scale(4), NotNull]
            public Decimal? AmountRefunded { get { return Fields.AmountRefunded[this]; } set { Fields.AmountRefunded[this] = value; } }
            public partial class RowFields { public DecimalField AmountRefunded; }
            #endregion AmountRefunded
                
            #region Fee
            [DisplayName("Fee"), Size(19), Scale(4)]
            public Decimal? Fee { get { return Fields.Fee[this]; } set { Fields.Fee[this] = value; } }
            public partial class RowFields { public DecimalField Fee; }
            #endregion Fee
                
            #region Credit
            [DisplayName("Credit"), Size(19), Scale(4)]
            public Decimal? Credit { get { return Fields.Credit[this]; } set { Fields.Credit[this] = value; } }
            public partial class RowFields { public DecimalField Credit; }
            #endregion Credit
        

    #region Foreign Fields
            
                [DisplayName("Rtn Inwards Date"), Expression("jRtnInwards.[Date]")]
                public DateTime? RtnInwardsDate { get { return Fields.RtnInwardsDate[this]; } set { Fields.RtnInwardsDate[this] = value; } }
                public partial class RowFields { public DateTimeField RtnInwardsDate; }

                        
                [DisplayName("Rtn Inwards Sales Id"), Expression("jRtnInwards.[SalesID]")]
                public Int32? RtnInwardsSalesId { get { return Fields.RtnInwardsSalesId[this]; } set { Fields.RtnInwardsSalesId[this] = value; } }
                public partial class RowFields { public Int32Field RtnInwardsSalesId; }

                        
                [DisplayName("Rtn Inwards Total Amount"), Expression("jRtnInwards.[TotalAmount]")]
                public Decimal? RtnInwardsTotalAmount { get { return Fields.RtnInwardsTotalAmount[this]; } set { Fields.RtnInwardsTotalAmount[this] = value; } }
                public partial class RowFields { public DecimalField RtnInwardsTotalAmount; }

                        
                [DisplayName("Rtn Inwards Total Fee"), Expression("jRtnInwards.[TotalFee]")]
                public Decimal? RtnInwardsTotalFee { get { return Fields.RtnInwardsTotalFee[this]; } set { Fields.RtnInwardsTotalFee[this] = value; } }
                public partial class RowFields { public DecimalField RtnInwardsTotalFee; }

                        
                [DisplayName("Rtn Inwards Total Amount Refunded"), Expression("jRtnInwards.[TotalAmountRefunded]")]
                public Decimal? RtnInwardsTotalAmountRefunded { get { return Fields.RtnInwardsTotalAmountRefunded[this]; } set { Fields.RtnInwardsTotalAmountRefunded[this] = value; } }
                public partial class RowFields { public DecimalField RtnInwardsTotalAmountRefunded; }

                        
                [DisplayName("Rtn Inwards Total Credit"), Expression("jRtnInwards.[TotalCredit]")]
                public Decimal? RtnInwardsTotalCredit { get { return Fields.RtnInwardsTotalCredit[this]; } set { Fields.RtnInwardsTotalCredit[this] = value; } }
                public partial class RowFields { public DecimalField RtnInwardsTotalCredit; }

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.RtnInwardsPaymentId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public ReturnInwardsPaymentRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[ReturnInwardsPayments]")
    {
    LocalTextPrefix = "BusinessObjects.ReturnInwardsPayment";
    }
    }
    #endregion RowFields
    }
    }
