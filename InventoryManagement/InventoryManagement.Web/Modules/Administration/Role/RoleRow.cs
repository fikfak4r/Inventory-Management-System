
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
    using System.Collections.Generic;

    [ConnectionKey("Default"), DisplayName("Roles"), InstanceName("Role"), TwoLevelCached]
    [ReadPermission(Administration.PermissionKeys.Security)]
    [ModifyPermission(Administration.PermissionKeys.Security)]
    [LookupScript("Administration.Role")]
    public sealed class RoleRow : Row, IIdRow, INameRow
    {

        public const string AccountOwner = "AccountOwner";
        public const string ClientOfClient = "ClientOfClient";

        [DisplayName("Role Id"), Identity, ForeignKey("Roles", "RoleId"), LeftJoin("jRole")]
        public Int32? RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
        }

        [DisplayName("Role Name"), Size(100), NotNull, QuickSearch]
        public String RoleName
        {
            get { return Fields.RoleName[this]; }
            set { Fields.RoleName[this] = value; }
        }

        [Column("AccountID"), Hidden]
        public int? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        //[ForeignKey("[dbo].[RolesLocations]", "LocationID"), NotMapped, LookupInclude]
        //[LinkingSetRelation(typeof(Entities.RoleLocationRow), "RoleId", "LocationId"), LookupInclude]
        //public int? LocationId
        //{
        //    get { return Fields.LocationId[this]; }
        //    set { Fields.LocationId[this] = value; }
        //}

        [DisplayName("Locations")]
        [LookupEditor(typeof(Scripts.LocationLookup), Multiple = true)]
        [LinkingSetRelation(typeof(RoleLocationRow), "RoleId", "LocationId"), NotMapped]
        public List<int> LocationList
        {
            get { return Fields.LocationList[this]; }
            set { Fields.LocationList[this] = value; } 
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.RoleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RoleName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RoleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RoleId;
            public StringField RoleName;
            public ListField<Int32> LocationList;
            public Int32Field AccountId;
            //public Int32Field LocationId;

            public RowFields()
                : base("Roles")
            {
                LocalTextPrefix = "Administration.Role";
            }

        }
    }
}