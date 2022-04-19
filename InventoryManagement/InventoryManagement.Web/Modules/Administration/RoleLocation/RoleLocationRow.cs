
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

    [ConnectionKey("Default"), DisplayName("RolesLocations"), InstanceName("RolesLocations"), TwoLevelCached]
    [ReadPermission(PermissionKeys.RoleLocation.Read)]
    [InsertPermission(PermissionKeys.RoleLocation.Insert)]
    [UpdatePermission(PermissionKeys.RoleLocation.Update)]
    [DeletePermission(PermissionKeys.RoleLocation.Delete)]
    [LookupScript("Administration.RoleLocationRow", Permission = "?")]
    public sealed class RoleLocationRow : Row, IIdRow
    {
        #region Role Location Id
        [DisplayName("Role Location Id"), Column("RoleLocationID"), Identity]
        public Int32? RoleLocationId { get { return Fields.RoleLocationId[this]; } set { Fields.RoleLocationId[this] = value; } }
        public partial class RowFields { public Int32Field RoleLocationId; }
        #endregion RoleLocationId

        #region Role Id
        [DisplayName("Role Id"), Column("RoleID")]
        [ForeignKey("[dbo].[Roles]", "RoleId"), LeftJoin("jRole"), TextualField("RoleRoleName")]
        public Int32? RoleId { get { return Fields.RoleId[this]; } set { Fields.RoleId[this] = value; } }
        public partial class RowFields { public Int32Field RoleId; }
        #endregion RoleId

        #region Location Id
        [DisplayName("Location Id"), Column("LocationID")]
        public Int32? LocationId { get { return Fields.LocationId[this]; } set { Fields.LocationId[this] = value; } }
        public partial class RowFields { public Int32Field LocationId; }
        #endregion LocationId


        #region Foreign Fields

        [Expression("jRole.[RoleName]")]
        public String RoleRoleName
        {
            get { return Fields.RoleRoleName[this]; }
            set { Fields.RoleRoleName[this] = value; }
        }


        #endregion Foreign Fields

        #region Id and Name fields
        IIdField IIdRow.IdField
        {
            get { return Fields.RoleId; }
        }
        #endregion Id and Name fields

        #region Constructor
        public RoleLocationRow()
            : base(Fields)
        {
        }
        #endregion Constructor

        #region RowFields
        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
                : base("[dbo].[RolesLocations]")
            {
                LocalTextPrefix = "Administration.RoleLocation";
            }

            public StringField RoleRoleName;

        }
        #endregion RowFields
    }
}
