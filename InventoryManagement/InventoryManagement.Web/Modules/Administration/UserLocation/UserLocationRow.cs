
namespace InventoryManagement.Administration.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("UsersLocations"), InstanceName("UsersLocations"), TwoLevelCached]
    [ReadPermission(PermissionKeys.UserLocation.Read)]
    [InsertPermission(PermissionKeys.UserLocation.Insert)]
    [UpdatePermission(PermissionKeys.UserLocation.Update)]
    [DeletePermission(PermissionKeys.UserLocation.Delete)]
    [LookupScript("Administration.UserLocation", Permission = "?")]
    public sealed class UserLocationRow : Row, IIdRow
    {        
            #region User Location Id
            [DisplayName("User Location Id"), Column("UserLocationID"), Identity]
            public Int32? UserLocationId { get { return Fields.UserLocationId[this]; } set { Fields.UserLocationId[this] = value; } }
            public partial class RowFields { public Int32Field UserLocationId; }
            #endregion UserLocationId
                
            #region User
            [DisplayName("User"), Column("UserID"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
            //[LookupEditor(typeof(Administration.Entities.UserRow), InplaceAdd = true)]
            public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }
            public partial class RowFields { public Int32Field UserId; }
            #endregion UserId
                
            #region Location
            [DisplayName("Location"), Column("LocationID"), ForeignKey("[dbo].[Locations]", "LocationID"), LeftJoin("jLocation"), TextualField("LocationPhoneNumber")]
            //[LookupEditor(typeof(Administration.Entities.LocationRow), InplaceAdd = true)]
            public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
            public partial class RowFields { public Int32Field LocationId; }
            #endregion LocationId
        

    #region Foreign Fields
            
                [DisplayName("User Username"), Expression("jUser.[Username]")]
                public String UserUsername { get { return Fields.UserUsername[this]; } set { Fields.UserUsername[this] = value; } }
                public partial class RowFields { public StringField UserUsername; }

                        
                [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
                public String UserDisplayName { get { return Fields.UserDisplayName[this]; } set { Fields.UserDisplayName[this] = value; } }
                public partial class RowFields { public StringField UserDisplayName; }

                        
                [DisplayName("User Email"), Expression("jUser.[Email]")]
                public String UserEmail { get { return Fields.UserEmail[this]; } set { Fields.UserEmail[this] = value; } }
                public partial class RowFields { public StringField UserEmail; }

                        
                [DisplayName("User Source"), Expression("jUser.[Source]")]
                public String UserSource { get { return Fields.UserSource[this]; } set { Fields.UserSource[this] = value; } }
                public partial class RowFields { public StringField UserSource; }

                        
                [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
                public String UserPasswordHash { get { return Fields.UserPasswordHash[this]; } set { Fields.UserPasswordHash[this] = value; } }
                public partial class RowFields { public StringField UserPasswordHash; }

                        
                [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
                public String UserPasswordSalt { get { return Fields.UserPasswordSalt[this]; } set { Fields.UserPasswordSalt[this] = value; } }
                public partial class RowFields { public StringField UserPasswordSalt; }

                        
                [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
                public DateTime? UserInsertDate { get { return Fields.UserInsertDate[this]; } set { Fields.UserInsertDate[this] = value; } }
                public partial class RowFields { public DateTimeField UserInsertDate; }

                        
                [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
                public Int32? UserInsertUserId { get { return Fields.UserInsertUserId[this]; } set { Fields.UserInsertUserId[this] = value; } }
                public partial class RowFields { public Int32Field UserInsertUserId; }

                        
                [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
                public DateTime? UserUpdateDate { get { return Fields.UserUpdateDate[this]; } set { Fields.UserUpdateDate[this] = value; } }
                public partial class RowFields { public DateTimeField UserUpdateDate; }

                        
                [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
                public Int32? UserUpdateUserId { get { return Fields.UserUpdateUserId[this]; } set { Fields.UserUpdateUserId[this] = value; } }
                public partial class RowFields { public Int32Field UserUpdateUserId; }

                        
                [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
                public Int16? UserIsActive { get { return Fields.UserIsActive[this]; } set { Fields.UserIsActive[this] = value; } }
                public partial class RowFields { public Int16Field UserIsActive; }

                        
                [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
                public DateTime? UserLastDirectoryUpdate { get { return Fields.UserLastDirectoryUpdate[this]; } set { Fields.UserLastDirectoryUpdate[this] = value; } }
                public partial class RowFields { public DateTimeField UserLastDirectoryUpdate; }

                        
                [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
                public String UserUserImage { get { return Fields.UserUserImage[this]; } set { Fields.UserUserImage[this] = value; } }
                public partial class RowFields { public StringField UserUserImage; }

                        
                [DisplayName("User Account Id"), Expression("jUser.[AccountID]")]
                public Int32? UserAccountId { get { return Fields.UserAccountId[this]; } set { Fields.UserAccountId[this] = value; } }
                public partial class RowFields { public Int32Field UserAccountId; }

                        
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

            
    #endregion Foreign Fields

    #region Id and Name fields
    IIdField IIdRow.IdField
    {
    get { return Fields.UserLocationId; }
    }
    #endregion Id and Name fields

    #region Constructor
    public UserLocationRow()
    : base(Fields)
    {
    }
    #endregion Constructor

    #region RowFields
    public static readonly RowFields Fields = new RowFields().Init();

    public partial class RowFields : RowFieldsBase
    {
    public RowFields()
    : base("[dbo].[UsersLocations]")
    {
    LocalTextPrefix = "Administration.UserLocation";
    }
    }
    #endregion RowFields
    }
    }
