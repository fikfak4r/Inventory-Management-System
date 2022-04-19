
namespace InventoryManagement.Administration
{
    /// <summary>
    /// This class contains some permission key constants solely for
    /// easy access and intellisense purposes.
    /// 
    /// Please note that adding a permission here won't show it
    /// in user permissions dialog. In fact, Serenity doesn't
    /// care about this class at all.
    /// 
    /// To show a new permission in user/role permission dialog, just use
    /// its string key with ReadPermission / ModifyPermission / 
    /// DeletePermission / PageAuthorize / ServiceAuthorize etc. attributes 
    /// and Serenity will auto discover them at application start.
    /// 
    /// Permission tree hierarchy in dialog is determined by colons (:)
    /// in permission keys.
    /// </summary>
    public class PermissionKeys
    {

        public const string Administration = "Administration";
        public const string Security = "Administration:Security";
        public const string Translation = "Administration:Translation";
        public const string Location = "Administration:Locations";
        public const string Account = "Administration:Accounts";
        public const string GetCode = "Administration:GetCode";
        public const string Client = "Administration:Client";
        public const string ClientOfClient = "Administration:ClientOfClient";


        public class UserLocation
        {
            public const string Read = "Administration:UserLocation:Read";
            public const string Insert = "Administration:UserLocation:Insert";
            public const string Update = "Administration:UserLocation:Update";
            public const string Delete = "Administration:UserLocation:Delete";
        }

        public class RoleLocation
        {
            public const string Read = "Administration:RoleLocation:Read";
            public const string Insert = "Administration:RoleLocation:Insert";
            public const string Update = "Administration:RoleLocation:Update";
            public const string Delete = "Administration:RoleLocation:Delete";
        }

    }
}
