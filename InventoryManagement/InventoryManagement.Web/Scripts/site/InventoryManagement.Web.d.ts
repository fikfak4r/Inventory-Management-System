declare namespace InventoryManagement.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.ScriptInitialization {
}
declare namespace InventoryManagement.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare var jsPDF: any;
declare namespace InventoryManagement.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace InventoryManagement.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyItems;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace InventoryManagement.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace InventoryManagement.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace InventoryManagement.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace InventoryManagement.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace InventoryManagement.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace InventoryManagement.Administration {
}
declare namespace InventoryManagement.Administration {
    class AccountForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AccountForm {
        Date: Serenity.DateEditor;
        CompanyName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        WebsiteAddress: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
    }
}
declare namespace InventoryManagement.Administration {
    interface AccountRow {
        AccountId?: number;
        Date?: string;
        CompanyName?: string;
        Address?: string;
        Email?: string;
        PhoneNumber?: string;
        WebsiteAddress?: string;
    }
    namespace AccountRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<AccountRow>;
        namespace Fields {
            const AccountId: string;
            const Date: string;
            const CompanyName: string;
            const Address: string;
            const Email: string;
            const PhoneNumber: string;
            const WebsiteAddress: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace AccountService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<AccountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
}
declare namespace InventoryManagement.Administration {
    class GetCodeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface GetCodeForm {
        AccountId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        LocationLocationName: Serenity.StringEditor;
        LinkCode: Serenity.TextAreaEditor;
        FormCode: Serenity.TextAreaEditor;
    }
}
declare namespace InventoryManagement.Administration {
    interface GetCodeRow {
        GetCodeId?: number;
        AccountId?: number;
        LocationId?: number;
        LinkCode?: string;
        FormCode?: string;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
    }
    namespace GetCodeRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<GetCodeRow>;
        namespace Fields {
            const GetCodeId: string;
            const AccountId: string;
            const LocationId: string;
            const LinkCode: string;
            const FormCode: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const LocationIsVisible: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace GetCodeService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<GetCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GetCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GetCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GetCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
}
declare namespace InventoryManagement.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace InventoryManagement.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace LanguageService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
}
declare namespace InventoryManagement.Administration {
    class LocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LocationForm {
        AccountId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        LocationName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        UserId: Serenity.IntegerEditor;
        IsVisible: Serenity.BooleanEditor;
    }
}
declare namespace InventoryManagement.Administration {
    interface LocationRow {
        LocationId?: number;
        AccountId?: number;
        Date?: string;
        PhoneNumber?: string;
        Email?: string;
        Website?: string;
        LocationName?: string;
        Address?: string;
        UserId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        IsVisible?: boolean;
    }
    namespace LocationRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<LocationRow>;
        namespace Fields {
            const LocationId: string;
            const AccountId: string;
            const Date: string;
            const PhoneNumber: string;
            const Email: string;
            const Website: string;
            const LocationName: string;
            const Address: string;
            const UserId: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
            const IsVisible: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace LocationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<LocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
}
declare namespace InventoryManagement.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.Administration {
}
declare namespace InventoryManagement.Administration {
    class RoleLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleLocationForm {
        RoleId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.Administration {
    interface RoleLocationRow {
        RoleLocationId?: number;
        RoleId?: number;
        LocationId?: number;
        RoleRoleName?: string;
    }
    namespace RoleLocationRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RoleLocationRow>;
        namespace Fields {
            const RoleLocationId: string;
            const RoleId: string;
            const LocationId: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace RoleLocationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RoleLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace InventoryManagement.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace InventoryManagement.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace RolePermissionService {
        const baseUrl: string;
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace InventoryManagement.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        LocationList?: number[];
        AccountId?: number;
    }
    namespace RoleRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
            const LocationList: string;
            const AccountId: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace RoleService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace InventoryManagement.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace InventoryManagement.Administration {
    namespace TranslationService {
        const baseUrl: string;
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace InventoryManagement.Administration {
}
declare namespace InventoryManagement.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.Administration {
}
declare namespace InventoryManagement.Administration {
    class UserLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserLocationForm {
        UserId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.Administration {
    interface UserLocationRow {
        UserLocationId?: number;
        UserId?: number;
        LocationId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }
    namespace UserLocationRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<UserLocationRow>;
        namespace Fields {
            const UserLocationId: string;
            const UserId: string;
            const LocationId: string;
            const UserUsername: string;
            const UserDisplayName: string;
            const UserEmail: string;
            const UserSource: string;
            const UserPasswordHash: string;
            const UserPasswordSalt: string;
            const UserInsertDate: string;
            const UserInsertUserId: string;
            const UserUpdateDate: string;
            const UserUpdateUserId: string;
            const UserIsActive: string;
            const UserLastDirectoryUpdate: string;
            const UserUserImage: string;
            const UserAccountId: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace UserLocationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<UserLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace InventoryManagement.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace UserPermissionService {
        const baseUrl: string;
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace InventoryManagement.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace InventoryManagement.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace InventoryManagement.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<UserRoleRow>;
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace UserRoleService {
        const baseUrl: string;
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace InventoryManagement.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        AccountId?: number;
        CustomerId?: number;
        LocationList?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty: string;
        const isActiveProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const AccountId: string;
            const CustomerId: string;
            const LocationList: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace InventoryManagement.Administration {
    namespace UserService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class AdjustStockForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AdjustStockForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        Unit: Serenity.StringEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class BankForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BankForm {
        Date: Serenity.DateEditor;
        BankName: Serenity.StringEditor;
        AccountId: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface BankRow {
        BankId?: number;
        Date?: string;
        BankName?: string;
        AccountId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
    }
    namespace BankRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<BankRow>;
        namespace Fields {
            const BankId: string;
            const Date: string;
            const BankName: string;
            const AccountId: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace BankService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<BankRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BankRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BankRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class BankTransactionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BankTransactionForm {
        BankId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        AccountType: Serenity.StringEditor;
        CustomerId: Serenity.LookupEditor;
        SalesId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        SalesPymntDetailsId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface BankTransactionRow {
        BankTransactionId?: number;
        BankId?: number;
        Date?: string;
        AccountType?: string;
        CustomerId?: number;
        SalesId?: number;
        Amount?: number;
        LocationId?: number;
        SalesPymntDetailsId?: number;
        BankDate?: string;
        BankBankName?: string;
        BankAccountId?: number;
        CustomerName?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerWebsite?: string;
        CustomerAddress?: string;
        CustomerAccountId?: number;
        CustomerAddress2?: string;
        SalesOrderId?: string;
        SalesDate?: string;
        SalesCustomerId?: number;
        SalesTotalAmount?: number;
        SalesTotalAmountPaid?: number;
        SalesTotalAmountLeft?: number;
        SalesCostOfGoodsSold?: number;
        SalesGrossProfit?: number;
        SalesHasSalesDetails?: boolean;
        SalesLocationId?: number;
        SalesIsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        SalesStatus?: string;
        SalesIsOpen?: boolean;
        SalesIsInProgress?: boolean;
        SalesIsFullyPicked?: boolean;
        SalesIsFullyPaid?: boolean;
        SalesIsInvoiced?: boolean;
        SalesIsAdvanced?: boolean;
    }
    namespace BankTransactionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<BankTransactionRow>;
        namespace Fields {
            const BankTransactionId: string;
            const BankId: string;
            const Date: string;
            const AccountType: string;
            const CustomerId: string;
            const SalesId: string;
            const Amount: string;
            const LocationId: string;
            const SalesPymntDetailsId: string;
            const BankDate: string;
            const BankBankName: string;
            const BankAccountId: string;
            const CustomerName: string;
            const CustomerPhoneNumber: string;
            const CustomerEmail: string;
            const CustomerWebsite: string;
            const CustomerAddress: string;
            const CustomerAccountId: string;
            const CustomerAddress2: string;
            const SalesOrderId: string;
            const SalesDate: string;
            const SalesCustomerId: string;
            const SalesTotalAmount: string;
            const SalesTotalAmountPaid: string;
            const SalesTotalAmountLeft: string;
            const SalesCostOfGoodsSold: string;
            const SalesGrossProfit: string;
            const SalesHasSalesDetails: string;
            const SalesLocationId: string;
            const SalesIsIntegerTrailingOrderIdWithPrefixSo: string;
            const SalesStatus: string;
            const SalesIsOpen: string;
            const SalesIsInProgress: string;
            const SalesIsFullyPicked: string;
            const SalesIsFullyPaid: string;
            const SalesIsInvoiced: string;
            const SalesIsAdvanced: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace BankTransactionService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<BankTransactionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BankTransactionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BankTransactionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankTransactionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class CostingInfoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CostingInfoForm {
        ProductId: Serenity.LookupEditor;
        Cost: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface CostingInfoRow {
        CostingInfoId?: number;
        ProductId?: number;
        Cost?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
    }
    namespace CostingInfoRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CostingInfoRow>;
        namespace Fields {
            const CostingInfoId: string;
            const ProductId: string;
            const Cost: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace CostingInfoService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CostingInfoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CostingInfoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CostingInfoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CostingInfoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerForm {
        Name: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerLocationForm {
        CustomerId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface CustomerLocationRow {
        CustomersLocationsId?: number;
        CustomerId?: number;
        LocationId?: number;
        AccountId?: number;
        CustomerDate?: string;
        CustomerName?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerWebsite?: string;
        CustomerAddress?: string;
        CustomerAccountId?: number;
        CustomerAddress2?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
    }
    namespace CustomerLocationRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CustomerLocationRow>;
        namespace Fields {
            const CustomersLocationsId: string;
            const CustomerId: string;
            const LocationId: string;
            const AccountId: string;
            const CustomerDate: string;
            const CustomerName: string;
            const CustomerPhoneNumber: string;
            const CustomerEmail: string;
            const CustomerWebsite: string;
            const CustomerAddress: string;
            const CustomerAccountId: string;
            const CustomerAddress2: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const LocationIsVisible: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace CustomerLocationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CustomerLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface CustomerRow {
        Date?: string;
        CustomerId?: number;
        Name?: string;
        FullName?: string;
        PhoneNumber?: string;
        Email?: string;
        Website?: string;
        Address?: string;
        AccountId?: number;
        Address2?: string;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        LocationList?: number[];
    }
    namespace CustomerRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CustomerRow>;
        namespace Fields {
            const Date: string;
            const CustomerId: string;
            const Name: string;
            const FullName: string;
            const PhoneNumber: string;
            const Email: string;
            const Website: string;
            const Address: string;
            const AccountId: string;
            const Address2: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
            const LocationList: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace CustomerService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    enum Gender {
        Female = 1,
        Male = 2,
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class PickSalesOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PickSalesOrderForm {
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        SalesDetailsId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        IsPicked: Serenity.BooleanEditor;
        UomAndPriceId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        Cost: Serenity.DecimalEditor;
        QuantitySold: Serenity.DecimalEditor;
        CostOfGoodsSold: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        SalesProfit: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface PickSalesOrderRow {
        PickSalesOrderId?: number;
        SalesId?: number;
        ProductId?: number;
        SalesDetailsId?: number;
        Quantity?: number;
        Date?: string;
        IsPicked?: boolean;
        Amount?: number;
        UomAndPriceId?: number;
        UnitPrice?: number;
        Discount?: number;
        Cost?: number;
        QuantitySold?: number;
        CostOfGoodsSold?: number;
        LocationId?: number;
        SalesProfit?: number;
        SalesOrderId?: string;
        SalesDate?: string;
        SalesCustomerId?: number;
        SalesTotalAmount?: number;
        SalesTotalAmountPaid?: number;
        SalesTotalAmountLeft?: number;
        SalesCostOfGoodsSold?: number;
        SalesGrossProfit?: number;
        SalesHasSalesDetails?: boolean;
        SalesLocationId?: number;
        SalesIsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        SalesStatus?: string;
        SalesIsOpen?: boolean;
        SalesIsInProgress?: boolean;
        SalesIsFullyPicked?: boolean;
        SalesIsFullyPaid?: boolean;
        SalesIsInvoiced?: boolean;
        SalesIsAdvanced?: boolean;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }
    namespace PickSalesOrderRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<PickSalesOrderRow>;
        namespace Fields {
            const PickSalesOrderId: string;
            const SalesId: string;
            const ProductId: string;
            const SalesDetailsId: string;
            const Quantity: string;
            const Date: string;
            const IsPicked: string;
            const Amount: string;
            const UomAndPriceId: string;
            const UnitPrice: string;
            const Discount: string;
            const Cost: string;
            const QuantitySold: string;
            const CostOfGoodsSold: string;
            const LocationId: string;
            const SalesProfit: string;
            const SalesOrderId: string;
            const SalesDate: string;
            const SalesCustomerId: string;
            const SalesTotalAmount: string;
            const SalesTotalAmountPaid: string;
            const SalesTotalAmountLeft: string;
            const SalesCostOfGoodsSold: string;
            const SalesGrossProfit: string;
            const SalesHasSalesDetails: string;
            const SalesLocationId: string;
            const SalesIsIntegerTrailingOrderIdWithPrefixSo: string;
            const SalesStatus: string;
            const SalesIsOpen: string;
            const SalesIsInProgress: string;
            const SalesIsFullyPicked: string;
            const SalesIsFullyPaid: string;
            const SalesIsInvoiced: string;
            const SalesIsAdvanced: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace PickSalesOrderService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<PickSalesOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PickSalesOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PickSalesOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PickSalesOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PricingForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PricingForm {
        PurchasesUoMAndPriceList: PurchasesUoMAndPriceEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductCategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        LocationList: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductCategoryLocationForm {
        ProductCategoryId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ProductCategoryLocationRow {
        ProdCatLoctnId?: number;
        ProductCategoryId?: number;
        LocationId?: number;
        AccountId?: number;
        ProductCategoryCategoryName?: string;
        ProductCategoryDescription?: string;
        ProductCategoryAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        LocationIsVisible?: boolean;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
    }
    namespace ProductCategoryLocationRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductCategoryLocationRow>;
        namespace Fields {
            const ProdCatLoctnId: string;
            const ProductCategoryId: string;
            const LocationId: string;
            const AccountId: string;
            const ProductCategoryCategoryName: string;
            const ProductCategoryDescription: string;
            const ProductCategoryAccountId: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const LocationIsVisible: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ProductCategoryLocationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductCategoryLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductCategoryLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductCategoryLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductCategoryLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ProductCategoryRow {
        ProductCategoryId?: number;
        CategoryName?: string;
        Description?: string;
        AccountId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        LocationList?: number[];
    }
    namespace ProductCategoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductCategoryRow>;
        namespace Fields {
            const ProductCategoryId: string;
            const CategoryName: string;
            const Description: string;
            const AccountId: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
            const LocationList: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ProductCategoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductForm {
        Date: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        ProductCategoryId: Serenity.LookupEditor;
        ProductName: Serenity.StringEditor;
        ProductCode: Serenity.StringEditor;
        BrandName: Serenity.StringEditor;
        LeastUnitName: Serenity.StringEditor;
        LocationList: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
        PurchasesUoMAndPriceList: PurchasesUoMAndPriceEditor;
        SalesUoMAndPriceList: SalesUoMAndPriceEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductLocationForm {
        ProductId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ProductLocationRow {
        ProductsLocationsId?: number;
        ProductId?: number;
        LocationId?: number;
        AccountId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
    }
    namespace ProductLocationRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductLocationRow>;
        namespace Fields {
            const ProductsLocationsId: string;
            const ProductId: string;
            const LocationId: string;
            const AccountId: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ProductLocationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ProductRow {
        ProductId?: number;
        Date?: string;
        ProductCode?: string;
        ProductName?: string;
        BrandName?: string;
        ProductCategoryId?: number;
        SupplierId?: number;
        LeastUnitName?: string;
        AccountId?: number;
        ProductCategoryCategoryName?: string;
        ProductCategoryDescription?: string;
        ProductCategoryAccountId?: number;
        SupplierDate?: string;
        SupplierSupplierName?: string;
        SupplierPhoneNumber?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierWebsite?: string;
        SupplierAddress?: string;
        SupplierNote?: string;
        SupplierAccountId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        PurchasesUoMAndPriceList?: PurchasesUoMAndPriceRow[];
        SalesUoMAndPriceList?: SalesUoMAndPriceRow[];
        Pricing?: string;
        LocationList?: number[];
    }
    namespace ProductRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductRow>;
        namespace Fields {
            const ProductId: string;
            const Date: string;
            const ProductCode: string;
            const ProductName: string;
            const BrandName: string;
            const ProductCategoryId: string;
            const SupplierId: string;
            const LeastUnitName: string;
            const AccountId: string;
            const ProductCategoryCategoryName: string;
            const ProductCategoryDescription: string;
            const ProductCategoryAccountId: string;
            const SupplierDate: string;
            const SupplierSupplierName: string;
            const SupplierPhoneNumber: string;
            const SupplierFax: string;
            const SupplierEmail: string;
            const SupplierWebsite: string;
            const SupplierAddress: string;
            const SupplierNote: string;
            const SupplierAccountId: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
            const PurchasesUoMAndPriceList: string;
            const SalesUoMAndPriceList: string;
            const Pricing: string;
            const LocationList: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ProductService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface PurchaseRequest extends Serenity.ServiceRequest {
        LocationId?: number;
        PurchasesId?: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface PurchaseResponse extends Serenity.ServiceResponse {
        LocationId?: number;
        PurchaseId?: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PurchasesDetailsForm {
        PurchasesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        UomAndPriceId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        IsReceived: Serenity.BooleanEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface PurchasesDetailsRow {
        PurchasesDetailsId?: number;
        PurchasesId?: number;
        Date?: string;
        ProductId?: number;
        Quantity?: number;
        UomAndPriceId?: number;
        UnitPrice?: number;
        Discount?: number;
        Amount?: number;
        LocationId?: number;
        IsReceived?: boolean;
        PurchasesOrderId?: string;
        PurchasesDate?: string;
        PurchasesSupplierId?: number;
        PurchasesTotalAmount?: number;
        PurchasesTotalAmountPaid?: number;
        PurchasesTotalAmountLeft?: number;
        PurchasesHasPurchasesDetails?: boolean;
        PurchasesLocationId?: number;
        PurchasesIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        PurchasesStatus?: string;
        PurchasesIsOpen?: boolean;
        PurchasesIsInProgress?: boolean;
        PurchasesIsFullyReceived?: boolean;
        PurchasesIsFullyPaid?: boolean;
        PurchasesIsAdvanced?: boolean;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }
    namespace PurchasesDetailsRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<PurchasesDetailsRow>;
        namespace Fields {
            const PurchasesDetailsId: string;
            const PurchasesId: string;
            const Date: string;
            const ProductId: string;
            const Quantity: string;
            const UomAndPriceId: string;
            const UnitPrice: string;
            const Discount: string;
            const Amount: string;
            const LocationId: string;
            const IsReceived: string;
            const PurchasesOrderId: string;
            const PurchasesDate: string;
            const PurchasesSupplierId: string;
            const PurchasesTotalAmount: string;
            const PurchasesTotalAmountPaid: string;
            const PurchasesTotalAmountLeft: string;
            const PurchasesHasPurchasesDetails: string;
            const PurchasesLocationId: string;
            const PurchasesIsIntegerTrailingOrderIdWithPrefixPo: string;
            const PurchasesStatus: string;
            const PurchasesIsOpen: string;
            const PurchasesIsInProgress: string;
            const PurchasesIsFullyReceived: string;
            const PurchasesIsFullyPaid: string;
            const PurchasesIsAdvanced: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace PurchasesDetailsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<PurchasesDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchasesDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchasesDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchasesDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PurchasesForm {
        PurchasesId: Serenity.IntegerEditor;
        OrderId: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        SupplierId: Serenity.LookupEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalAmountPaid: Serenity.DecimalEditor;
        TotalAmountLeft: Serenity.DecimalEditor;
        HasPurchasesDetails: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        IsIntegerTrailingOrderIdWithPrefixPo: Serenity.BooleanEditor;
        Status: Serenity.StringEditor;
        IsOpen: Serenity.BooleanEditor;
        IsInProgress: Serenity.BooleanEditor;
        IsFullyReceived: Serenity.BooleanEditor;
        IsFullyPaid: Serenity.BooleanEditor;
        IsAdvanced: Serenity.BooleanEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesPaymentDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PurchasesPaymentDetailsForm {
        PurchasesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        TotalAmount: Serenity.DecimalEditor;
        AmountPaid: Serenity.DecimalEditor;
        IsTotalAmountRow: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface PurchasesPaymentDetailsRow {
        PurchPymntDetailsId?: number;
        PurchasesId?: number;
        Date?: string;
        TotalAmount?: number;
        AmountPaid?: number;
        AmountLeft?: number;
        IsTotalAmountRow?: boolean;
        LocationId?: number;
        PurchasesOrderId?: string;
        PurchasesDate?: string;
        PurchasesSupplierId?: number;
        PurchasesTotalAmount?: number;
        PurchasesTotalAmountPaid?: number;
        PurchasesTotalAmountLeft?: number;
        PurchasesHasPurchasesDetails?: boolean;
        PurchasesLocationId?: number;
        PurchasesIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        PurchasesStatus?: string;
        PurchasesIsOpen?: boolean;
        PurchasesIsInProgress?: boolean;
        PurchasesIsFullyReceived?: boolean;
        PurchasesIsFullyPaid?: boolean;
        PurchasesIsAdvanced?: boolean;
    }
    namespace PurchasesPaymentDetailsRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<PurchasesPaymentDetailsRow>;
        namespace Fields {
            const PurchPymntDetailsId: string;
            const PurchasesId: string;
            const Date: string;
            const TotalAmount: string;
            const AmountPaid: string;
            const AmountLeft: string;
            const IsTotalAmountRow: string;
            const LocationId: string;
            const PurchasesOrderId: string;
            const PurchasesDate: string;
            const PurchasesSupplierId: string;
            const PurchasesTotalAmount: string;
            const PurchasesTotalAmountPaid: string;
            const PurchasesTotalAmountLeft: string;
            const PurchasesHasPurchasesDetails: string;
            const PurchasesLocationId: string;
            const PurchasesIsIntegerTrailingOrderIdWithPrefixPo: string;
            const PurchasesStatus: string;
            const PurchasesIsOpen: string;
            const PurchasesIsInProgress: string;
            const PurchasesIsFullyReceived: string;
            const PurchasesIsFullyPaid: string;
            const PurchasesIsAdvanced: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace PurchasesPaymentDetailsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<PurchasesPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchasesPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchasesPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchasesPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface PurchasesRow {
        PurchasesId?: number;
        OrderId?: string;
        Date?: string;
        SupplierId?: number;
        TotalAmount?: number;
        TotalAmountPaid?: number;
        TotalAmountLeft?: number;
        HasPurchasesDetails?: boolean;
        LocationId?: number;
        IsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        Status?: string;
        IsOpen?: boolean;
        IsInProgress?: boolean;
        IsFullyReceived?: boolean;
        IsFullyPaid?: boolean;
        IsAdvanced?: boolean;
        SupplierDate?: string;
        SupplierSupplierName?: string;
        SupplierPhoneNumber?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierWebsite?: string;
        SupplierAddress?: string;
        SupplierNote?: string;
        SupplierAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }
    namespace PurchasesRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<PurchasesRow>;
        namespace Fields {
            const PurchasesId: string;
            const OrderId: string;
            const Date: string;
            const SupplierId: string;
            const TotalAmount: string;
            const TotalAmountPaid: string;
            const TotalAmountLeft: string;
            const HasPurchasesDetails: string;
            const LocationId: string;
            const IsIntegerTrailingOrderIdWithPrefixPo: string;
            const Status: string;
            const IsOpen: string;
            const IsInProgress: string;
            const IsFullyReceived: string;
            const IsFullyPaid: string;
            const IsAdvanced: string;
            const SupplierDate: string;
            const SupplierSupplierName: string;
            const SupplierPhoneNumber: string;
            const SupplierFax: string;
            const SupplierEmail: string;
            const SupplierWebsite: string;
            const SupplierAddress: string;
            const SupplierNote: string;
            const SupplierAccountId: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace PurchasesService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<PurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CompletePurchase(request: PurchaseRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ReopenOrder(request: PurchaseRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ConvertToAdvancedPurchase(request: PurchaseRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ConvertToSimplePurchase(request: PurchaseRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
            const CompletePurchase: string;
            const ReopenOrder: string;
            const ConvertToAdvancedPurchase: string;
            const ConvertToSimplePurchase: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesUoMAndPriceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PurchasesUoMAndPriceForm {
        UnitName: Serenity.StringEditor;
        UnitMakeUp: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface PurchasesUoMAndPriceRow {
        UomAndPriceId?: number;
        ProductId?: number;
        UnitName?: string;
        UnitMakeUp?: number;
        StandardUomid?: number;
        Discontinued?: boolean;
        Price?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        StandardUomidProductId?: number;
        StandardUomidStandardUnitName?: string;
        StandardUomidDiscontinued?: boolean;
        StandardUomidCost?: number;
        UnitOfMeasurement?: string;
        StandardUnitName?: string;
    }
    namespace PurchasesUoMAndPriceRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<PurchasesUoMAndPriceRow>;
        namespace Fields {
            const UomAndPriceId: string;
            const ProductId: string;
            const UnitName: string;
            const UnitMakeUp: string;
            const StandardUomid: string;
            const Discontinued: string;
            const Price: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const StandardUomidProductId: string;
            const StandardUomidStandardUnitName: string;
            const StandardUomidDiscontinued: string;
            const StandardUomidCost: string;
            const UnitOfMeasurement: string;
            const StandardUnitName: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace PurchasesUoMAndPriceService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<PurchasesUoMAndPriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchasesUoMAndPriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchasesUoMAndPriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchasesUoMAndPriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ReceivePurchasesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReceivePurchasesForm {
        PurchasesId: Serenity.IntegerEditor;
        PurchasesDetailsId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        UomAndPriceId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        IsReceived: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ReceivePurchasesRow {
        ReceivePurchasesId?: number;
        PurchasesId?: number;
        ProductId?: number;
        PurchasesDetailsId?: number;
        Quantity?: number;
        Date?: string;
        IsReceived?: boolean;
        Amount?: number;
        UnitPrice?: number;
        UomAndPriceId?: number;
        Discount?: number;
        LocationId?: number;
        PurchasesOrderId?: string;
        PurchasesDate?: string;
        PurchasesSupplierId?: number;
        PurchasesTotalAmount?: number;
        PurchasesTotalAmountPaid?: number;
        PurchasesTotalAmountLeft?: number;
        PurchasesHasPurchasesDetails?: boolean;
        PurchasesLocationId?: number;
        PurchasesIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        PurchasesStatus?: string;
        PurchasesIsOpen?: boolean;
        PurchasesIsInProgress?: boolean;
        PurchasesIsFullyReceived?: boolean;
        PurchasesIsFullyPaid?: boolean;
        PurchasesIsAdvanced?: boolean;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }
    namespace ReceivePurchasesRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReceivePurchasesRow>;
        namespace Fields {
            const ReceivePurchasesId: string;
            const PurchasesId: string;
            const ProductId: string;
            const PurchasesDetailsId: string;
            const Quantity: string;
            const Date: string;
            const IsReceived: string;
            const Amount: string;
            const UnitPrice: string;
            const UomAndPriceId: string;
            const Discount: string;
            const LocationId: string;
            const PurchasesOrderId: string;
            const PurchasesDate: string;
            const PurchasesSupplierId: string;
            const PurchasesTotalAmount: string;
            const PurchasesTotalAmountPaid: string;
            const PurchasesTotalAmountLeft: string;
            const PurchasesHasPurchasesDetails: string;
            const PurchasesLocationId: string;
            const PurchasesIsIntegerTrailingOrderIdWithPrefixPo: string;
            const PurchasesStatus: string;
            const PurchasesIsOpen: string;
            const PurchasesIsInProgress: string;
            const PurchasesIsFullyReceived: string;
            const PurchasesIsFullyPaid: string;
            const PurchasesIsAdvanced: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ReceivePurchasesService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReceivePurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReceivePurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReceivePurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReceivePurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ReorderPointForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReorderPointForm {
        ProductId: Serenity.LookupEditor;
        ReorderPointValue: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ReorderPointRow {
        ReorderPointId?: number;
        ProductId?: number;
        ReorderPointValue?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
    }
    namespace ReorderPointRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReorderPointRow>;
        namespace Fields {
            const ReorderPointId: string;
            const ProductId: string;
            const ReorderPointValue: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ReorderPointService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReorderPointRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReorderPointRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReorderPointRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReorderPointRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class RestockForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RestockForm {
        ProductId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        RtnInwardsDtlsId: Serenity.LookupEditor;
        SalesId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        IsRestocked: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface RestockRow {
        ReStockId?: number;
        ProductId?: number;
        Date?: string;
        RtnInwardsDtlsId?: number;
        SalesId?: number;
        Quantity?: number;
        UomAndPriceId?: number;
        IsRestocked?: boolean;
        LocationId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }
    namespace RestockRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RestockRow>;
        namespace Fields {
            const ReStockId: string;
            const ProductId: string;
            const Date: string;
            const RtnInwardsDtlsId: string;
            const SalesId: string;
            const Quantity: string;
            const UomAndPriceId: string;
            const IsRestocked: string;
            const LocationId: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace RestockService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RestockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RestockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RestockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RestockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReturnInwardsDetailsForm {
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UomAndPriceId: Serenity.LookupEditor;
        RtnInwardsId: Serenity.LookupEditor;
        SalesDetailsId: Serenity.LookupEditor;
        SalesId: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ReturnInwardsDetailsRow {
        RtnInwardsDtlsId?: number;
        Date?: string;
        ProductId?: number;
        RtnInwardsId?: number;
        SalesDetailsId?: number;
        SalesId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Amount?: number;
        Discount?: number;
        UomAndPriceId?: number;
        LocationId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        RtnInwardsDate?: string;
        RtnInwardsSalesId?: number;
        RtnInwardsTotalAmount?: number;
        RtnInwardsTotalFee?: number;
        RtnInwardsTotalAmountRefunded?: number;
        RtnInwardsTotalCredit?: number;
        SalesDetailsSalesId?: number;
        SalesDetailsDate?: string;
        SalesDetailsProductId?: number;
        SalesDetailsUomAndPriceId?: number;
        SalesDetailsUnitPrice?: number;
        SalesDetailsDiscount?: number;
        SalesDetailsAmount?: number;
        SalesDetailsQuantity?: number;
        SalesDetailsLocationId?: number;
        SalesDetailsCost?: number;
        SalesDetailsIsPicked?: boolean;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }
    namespace ReturnInwardsDetailsRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReturnInwardsDetailsRow>;
        namespace Fields {
            const RtnInwardsDtlsId: string;
            const Date: string;
            const ProductId: string;
            const RtnInwardsId: string;
            const SalesDetailsId: string;
            const SalesId: string;
            const Quantity: string;
            const UnitPrice: string;
            const Amount: string;
            const Discount: string;
            const UomAndPriceId: string;
            const LocationId: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const RtnInwardsDate: string;
            const RtnInwardsSalesId: string;
            const RtnInwardsTotalAmount: string;
            const RtnInwardsTotalFee: string;
            const RtnInwardsTotalAmountRefunded: string;
            const RtnInwardsTotalCredit: string;
            const SalesDetailsSalesId: string;
            const SalesDetailsDate: string;
            const SalesDetailsProductId: string;
            const SalesDetailsUomAndPriceId: string;
            const SalesDetailsUnitPrice: string;
            const SalesDetailsDiscount: string;
            const SalesDetailsAmount: string;
            const SalesDetailsQuantity: string;
            const SalesDetailsLocationId: string;
            const SalesDetailsCost: string;
            const SalesDetailsIsPicked: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ReturnInwardsDetailsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReturnInwardsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReturnInwardsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnInwardsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnInwardsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReturnInwardsForm {
        Date: Serenity.DateEditor;
        SalesId: Serenity.LookupEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalFee: Serenity.DecimalEditor;
        TotalAmountRefunded: Serenity.DecimalEditor;
        TotalCredit: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsPaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReturnInwardsPaymentForm {
        RtnInwardsId: Serenity.LookupEditor;
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        AmountRefunded: Serenity.DecimalEditor;
        Fee: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ReturnInwardsPaymentRow {
        RtnInwardsPaymentId?: number;
        RtnInwardsId?: number;
        SalesId?: number;
        Date?: string;
        Amount?: number;
        AmountRefunded?: number;
        Fee?: number;
        Credit?: number;
        RtnInwardsDate?: string;
        RtnInwardsSalesId?: number;
        RtnInwardsTotalAmount?: number;
        RtnInwardsTotalFee?: number;
        RtnInwardsTotalAmountRefunded?: number;
        RtnInwardsTotalCredit?: number;
    }
    namespace ReturnInwardsPaymentRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReturnInwardsPaymentRow>;
        namespace Fields {
            const RtnInwardsPaymentId: string;
            const RtnInwardsId: string;
            const SalesId: string;
            const Date: string;
            const Amount: string;
            const AmountRefunded: string;
            const Fee: string;
            const Credit: string;
            const RtnInwardsDate: string;
            const RtnInwardsSalesId: string;
            const RtnInwardsTotalAmount: string;
            const RtnInwardsTotalFee: string;
            const RtnInwardsTotalAmountRefunded: string;
            const RtnInwardsTotalCredit: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ReturnInwardsPaymentService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReturnInwardsPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReturnInwardsPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnInwardsPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnInwardsPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ReturnInwardsRow {
        RtnInwardsId?: number;
        Date?: string;
        SalesId?: number;
        TotalAmount?: number;
        TotalFee?: number;
        TotalAmountRefunded?: number;
        TotalCredit?: number;
        SalesOrderId?: string;
        SalesDate?: string;
        SalesCustomerId?: number;
        SalesTotalAmount?: number;
        SalesTotalAmountPaid?: number;
        SalesTotalAmountLeft?: number;
        SalesCostOfGoodsSold?: number;
        SalesGrossProfit?: number;
        SalesHasSalesDetails?: boolean;
        SalesLocationId?: number;
        SalesIsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        SalesStatus?: string;
        SalesIsOpen?: boolean;
        SalesIsInProgress?: boolean;
        SalesIsFullyPicked?: boolean;
        SalesIsFullyPaid?: boolean;
        SalesIsInvoiced?: boolean;
        SalesIsAdvanced?: boolean;
    }
    namespace ReturnInwardsRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReturnInwardsRow>;
        namespace Fields {
            const RtnInwardsId: string;
            const Date: string;
            const SalesId: string;
            const TotalAmount: string;
            const TotalFee: string;
            const TotalAmountRefunded: string;
            const TotalCredit: string;
            const SalesOrderId: string;
            const SalesDate: string;
            const SalesCustomerId: string;
            const SalesTotalAmount: string;
            const SalesTotalAmountPaid: string;
            const SalesTotalAmountLeft: string;
            const SalesCostOfGoodsSold: string;
            const SalesGrossProfit: string;
            const SalesHasSalesDetails: string;
            const SalesLocationId: string;
            const SalesIsIntegerTrailingOrderIdWithPrefixSo: string;
            const SalesStatus: string;
            const SalesIsOpen: string;
            const SalesIsInProgress: string;
            const SalesIsFullyPicked: string;
            const SalesIsFullyPaid: string;
            const SalesIsInvoiced: string;
            const SalesIsAdvanced: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ReturnInwardsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReturnInwardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReturnInwardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnInwardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnInwardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReturnOutwardsDetailsForm {
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        RtnOutwardsId: Serenity.LookupEditor;
        PurchasesDetailsId: Serenity.IntegerEditor;
        PurchasesId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ReturnOutwardsDetailsRow {
        RtnOutwardsDtlsId?: number;
        Date?: string;
        ProductId?: number;
        RtnOutwardsId?: number;
        PurchasesDetailsId?: number;
        PurchasesId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Amount?: number;
        Discount?: number;
        UomAndPriceId?: number;
        LocationId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        RtnOutwardsDate?: string;
        RtnOutwardsPurchasesId?: number;
        RtnOutwardsTotalAmount?: number;
        RtnOutwardsTotalFee?: number;
        RtnOutwardsTotalAmountRefunded?: number;
        RtnOutwardsTotalCredit?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }
    namespace ReturnOutwardsDetailsRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReturnOutwardsDetailsRow>;
        namespace Fields {
            const RtnOutwardsDtlsId: string;
            const Date: string;
            const ProductId: string;
            const RtnOutwardsId: string;
            const PurchasesDetailsId: string;
            const PurchasesId: string;
            const Quantity: string;
            const UnitPrice: string;
            const Amount: string;
            const Discount: string;
            const UomAndPriceId: string;
            const LocationId: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const RtnOutwardsDate: string;
            const RtnOutwardsPurchasesId: string;
            const RtnOutwardsTotalAmount: string;
            const RtnOutwardsTotalFee: string;
            const RtnOutwardsTotalAmountRefunded: string;
            const RtnOutwardsTotalCredit: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ReturnOutwardsDetailsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReturnOutwardsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReturnOutwardsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnOutwardsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnOutwardsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReturnOutwardsForm {
        Date: Serenity.DateEditor;
        PurchasesId: Serenity.LookupEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalFee: Serenity.DecimalEditor;
        TotalAmountRefunded: Serenity.DecimalEditor;
        TotalCredit: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsPaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReturnOutwardsPaymentForm {
        RtnOutwardsId: Serenity.LookupEditor;
        PurchasesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        AmountRefunded: Serenity.DecimalEditor;
        Fee: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ReturnOutwardsPaymentRow {
        RtnOutwardsPaymentId?: number;
        RtnOutwardsId?: number;
        PurchasesId?: number;
        Date?: string;
        Amount?: number;
        AmountRefunded?: number;
        Fee?: number;
        Credit?: number;
        RtnOutwardsDate?: string;
        RtnOutwardsPurchasesId?: number;
        RtnOutwardsTotalAmount?: number;
        RtnOutwardsTotalFee?: number;
        RtnOutwardsTotalAmountRefunded?: number;
        RtnOutwardsTotalCredit?: number;
    }
    namespace ReturnOutwardsPaymentRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReturnOutwardsPaymentRow>;
        namespace Fields {
            const RtnOutwardsPaymentId: string;
            const RtnOutwardsId: string;
            const PurchasesId: string;
            const Date: string;
            const Amount: string;
            const AmountRefunded: string;
            const Fee: string;
            const Credit: string;
            const RtnOutwardsDate: string;
            const RtnOutwardsPurchasesId: string;
            const RtnOutwardsTotalAmount: string;
            const RtnOutwardsTotalFee: string;
            const RtnOutwardsTotalAmountRefunded: string;
            const RtnOutwardsTotalCredit: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ReturnOutwardsPaymentService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReturnOutwardsPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReturnOutwardsPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnOutwardsPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnOutwardsPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface ReturnOutwardsRow {
        RtnOutwardsId?: number;
        Date?: string;
        PurchasesId?: number;
        TotalAmount?: number;
        TotalFee?: number;
        TotalAmountRefunded?: number;
        TotalCredit?: number;
        PurchasesOrderId?: string;
        PurchasesDate?: string;
        PurchasesSupplierId?: number;
        PurchasesTotalAmount?: number;
        PurchasesTotalAmountPaid?: number;
        PurchasesTotalAmountLeft?: number;
        PurchasesHasPurchasesDetails?: boolean;
        PurchasesLocationId?: number;
        PurchasesIsIntegerTrailingOrderIdWithPrefixPo?: boolean;
        PurchasesStatus?: string;
        PurchasesIsOpen?: boolean;
        PurchasesIsInProgress?: boolean;
        PurchasesIsFullyReceived?: boolean;
        PurchasesIsFullyPaid?: boolean;
        PurchasesIsAdvanced?: boolean;
    }
    namespace ReturnOutwardsRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReturnOutwardsRow>;
        namespace Fields {
            const RtnOutwardsId: string;
            const Date: string;
            const PurchasesId: string;
            const TotalAmount: string;
            const TotalFee: string;
            const TotalAmountRefunded: string;
            const TotalCredit: string;
            const PurchasesOrderId: string;
            const PurchasesDate: string;
            const PurchasesSupplierId: string;
            const PurchasesTotalAmount: string;
            const PurchasesTotalAmountPaid: string;
            const PurchasesTotalAmountLeft: string;
            const PurchasesHasPurchasesDetails: string;
            const PurchasesLocationId: string;
            const PurchasesIsIntegerTrailingOrderIdWithPrefixPo: string;
            const PurchasesStatus: string;
            const PurchasesIsOpen: string;
            const PurchasesIsInProgress: string;
            const PurchasesIsFullyReceived: string;
            const PurchasesIsFullyPaid: string;
            const PurchasesIsAdvanced: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace ReturnOutwardsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReturnOutwardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReturnOutwardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnOutwardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnOutwardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SalesDetailsForm {
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UomAndPriceId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface SalesDetailsRow {
        SalesDetailsId?: number;
        SalesId?: number;
        Date?: string;
        ProductId?: number;
        UomAndPriceId?: number;
        UnitPrice?: number;
        Discount?: number;
        Amount?: number;
        Quantity?: number;
        LocationId?: number;
        Cost?: number;
        IsPicked?: boolean;
        SalesOrderId?: string;
        SalesDate?: string;
        SalesCustomerId?: number;
        SalesTotalAmount?: number;
        SalesTotalAmountPaid?: number;
        SalesTotalAmountLeft?: number;
        SalesCostOfGoodsSold?: number;
        SalesGrossProfit?: number;
        SalesHasSalesDetails?: boolean;
        SalesLocationId?: number;
        SalesIsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        SalesStatus?: string;
        SalesIsOpen?: boolean;
        SalesIsInProgress?: boolean;
        SalesIsFullyPicked?: boolean;
        SalesIsFullyPaid?: boolean;
        SalesIsInvoiced?: boolean;
        SalesIsAdvanced?: boolean;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }
    namespace SalesDetailsRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SalesDetailsRow>;
        namespace Fields {
            const SalesDetailsId: string;
            const SalesId: string;
            const Date: string;
            const ProductId: string;
            const UomAndPriceId: string;
            const UnitPrice: string;
            const Discount: string;
            const Amount: string;
            const Quantity: string;
            const LocationId: string;
            const Cost: string;
            const IsPicked: string;
            const SalesOrderId: string;
            const SalesDate: string;
            const SalesCustomerId: string;
            const SalesTotalAmount: string;
            const SalesTotalAmountPaid: string;
            const SalesTotalAmountLeft: string;
            const SalesCostOfGoodsSold: string;
            const SalesGrossProfit: string;
            const SalesHasSalesDetails: string;
            const SalesLocationId: string;
            const SalesIsIntegerTrailingOrderIdWithPrefixSo: string;
            const SalesStatus: string;
            const SalesIsOpen: string;
            const SalesIsInProgress: string;
            const SalesIsFullyPicked: string;
            const SalesIsFullyPaid: string;
            const SalesIsInvoiced: string;
            const SalesIsAdvanced: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace SalesDetailsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SalesDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SalesForm {
        SalesId: Serenity.IntegerEditor;
        OrderId: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalAmountPaid: Serenity.DecimalEditor;
        TotalAmountLeft: Serenity.DecimalEditor;
        CostOfGoodsSold: Serenity.DecimalEditor;
        HasSalesDetails: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        Status: Serenity.StringEditor;
        IsOpen: Serenity.BooleanEditor;
        IsInProgress: Serenity.BooleanEditor;
        IsFullyPicked: Serenity.BooleanEditor;
        IsFullyPaid: Serenity.BooleanEditor;
        IsInvoiced: Serenity.BooleanEditor;
        IsAdvanced: Serenity.BooleanEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesInvoiceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SalesInvoiceForm {
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        ProductId: Serenity.LookupEditor;
        SalesDetailsId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        IsPicked: Serenity.BooleanEditor;
        Discount: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        LocationId: Serenity.IntegerEditor;
        PickSalesOrderId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface SalesInvoiceRow {
        SalesInvoiceId?: number;
        SalesId?: number;
        ProductId?: number;
        SalesDetailsId?: number;
        Quantity?: number;
        Date?: string;
        IsPicked?: boolean;
        Amount?: number;
        UomAndPriceId?: number;
        Discount?: number;
        LocationId?: number;
        PickSalesOrderId?: number;
        UnitPrice?: number;
        SalesOrderId?: string;
        SalesDate?: string;
        SalesCustomerId?: number;
        SalesTotalAmount?: number;
        SalesTotalAmountPaid?: number;
        SalesTotalAmountLeft?: number;
        SalesCostOfGoodsSold?: number;
        SalesGrossProfit?: number;
        SalesHasSalesDetails?: boolean;
        SalesLocationId?: number;
        SalesIsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        SalesStatus?: string;
        SalesIsOpen?: boolean;
        SalesIsInProgress?: boolean;
        SalesIsFullyPicked?: boolean;
        SalesIsFullyPaid?: boolean;
        SalesIsInvoiced?: boolean;
        SalesIsAdvanced?: boolean;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }
    namespace SalesInvoiceRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SalesInvoiceRow>;
        namespace Fields {
            const SalesInvoiceId: string;
            const SalesId: string;
            const ProductId: string;
            const SalesDetailsId: string;
            const Quantity: string;
            const Date: string;
            const IsPicked: string;
            const Amount: string;
            const UomAndPriceId: string;
            const Discount: string;
            const LocationId: string;
            const PickSalesOrderId: string;
            const UnitPrice: string;
            const SalesOrderId: string;
            const SalesDate: string;
            const SalesCustomerId: string;
            const SalesTotalAmount: string;
            const SalesTotalAmountPaid: string;
            const SalesTotalAmountLeft: string;
            const SalesCostOfGoodsSold: string;
            const SalesGrossProfit: string;
            const SalesHasSalesDetails: string;
            const SalesLocationId: string;
            const SalesIsIntegerTrailingOrderIdWithPrefixSo: string;
            const SalesStatus: string;
            const SalesIsOpen: string;
            const SalesIsInProgress: string;
            const SalesIsFullyPicked: string;
            const SalesIsFullyPaid: string;
            const SalesIsInvoiced: string;
            const SalesIsAdvanced: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace SalesInvoiceService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SalesInvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesInvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesInvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesInvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesPaymentDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SalesPaymentDetailsForm {
        SalesId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        TotalAmount: Serenity.DecimalEditor;
        AmountPaid: Serenity.DecimalEditor;
        AmountLeft: Serenity.DecimalEditor;
        IsTotalAmountRow: Serenity.BooleanEditor;
        LocationId: Serenity.LookupEditor;
        PaymentMode: Serenity.StringEditor;
        BankId: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface SalesPaymentDetailsRow {
        SalesPymntDetailsId?: number;
        SalesId?: number;
        Date?: string;
        TotalAmount?: number;
        AmountPaid?: number;
        AmountLeft?: number;
        IsTotalAmountRow?: boolean;
        LocationId?: number;
        PaymentMode?: string;
        BankId?: number;
        SalesOrderId?: string;
        SalesDate?: string;
        SalesCustomerId?: number;
        SalesTotalAmount?: number;
        SalesTotalAmountPaid?: number;
        SalesTotalAmountLeft?: number;
        SalesCostOfGoodsSold?: number;
        SalesGrossProfit?: number;
        SalesHasSalesDetails?: boolean;
        SalesLocationId?: number;
        SalesIsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        SalesStatus?: string;
        SalesIsOpen?: boolean;
        SalesIsInProgress?: boolean;
        SalesIsFullyPicked?: boolean;
        SalesIsFullyPaid?: boolean;
        SalesIsInvoiced?: boolean;
        SalesIsAdvanced?: boolean;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        BankDate?: string;
        BankBankName?: string;
        BankAccountId?: number;
    }
    namespace SalesPaymentDetailsRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SalesPaymentDetailsRow>;
        namespace Fields {
            const SalesPymntDetailsId: string;
            const SalesId: string;
            const Date: string;
            const TotalAmount: string;
            const AmountPaid: string;
            const AmountLeft: string;
            const IsTotalAmountRow: string;
            const LocationId: string;
            const PaymentMode: string;
            const BankId: string;
            const SalesOrderId: string;
            const SalesDate: string;
            const SalesCustomerId: string;
            const SalesTotalAmount: string;
            const SalesTotalAmountPaid: string;
            const SalesTotalAmountLeft: string;
            const SalesCostOfGoodsSold: string;
            const SalesGrossProfit: string;
            const SalesHasSalesDetails: string;
            const SalesLocationId: string;
            const SalesIsIntegerTrailingOrderIdWithPrefixSo: string;
            const SalesStatus: string;
            const SalesIsOpen: string;
            const SalesIsInProgress: string;
            const SalesIsFullyPicked: string;
            const SalesIsFullyPaid: string;
            const SalesIsInvoiced: string;
            const SalesIsAdvanced: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const BankDate: string;
            const BankBankName: string;
            const BankAccountId: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace SalesPaymentDetailsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SalesPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface SalesRow {
        SalesId?: number;
        OrderId?: string;
        Date?: string;
        CustomerId?: number;
        TotalAmount?: number;
        TotalAmountPaid?: number;
        TotalAmountLeft?: number;
        CostOfGoodsSold?: number;
        GrossProfit?: number;
        HasSalesDetails?: boolean;
        LocationId?: number;
        IsIntegerTrailingOrderIdWithPrefixSo?: boolean;
        Status?: string;
        IsOpen?: boolean;
        IsInProgress?: boolean;
        IsFullyPicked?: boolean;
        IsFullyPaid?: boolean;
        IsInvoiced?: boolean;
        IsAdvanced?: boolean;
        CustomerName?: string;
        CustomerPhoneNumber?: string;
        CustomerEmail?: string;
        CustomerWebsite?: string;
        CustomerAddress?: string;
        CustomerAccountId?: number;
        CustomerAddress2?: string;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
    }
    namespace SalesRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SalesRow>;
        namespace Fields {
            const SalesId: string;
            const OrderId: string;
            const Date: string;
            const CustomerId: string;
            const TotalAmount: string;
            const TotalAmountPaid: string;
            const TotalAmountLeft: string;
            const CostOfGoodsSold: string;
            const GrossProfit: string;
            const HasSalesDetails: string;
            const LocationId: string;
            const IsIntegerTrailingOrderIdWithPrefixSo: string;
            const Status: string;
            const IsOpen: string;
            const IsInProgress: string;
            const IsFullyPicked: string;
            const IsFullyPaid: string;
            const IsInvoiced: string;
            const IsAdvanced: string;
            const CustomerName: string;
            const CustomerPhoneNumber: string;
            const CustomerEmail: string;
            const CustomerWebsite: string;
            const CustomerAddress: string;
            const CustomerAccountId: string;
            const CustomerAddress2: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace SalesService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesUoMAndPriceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SalesUoMAndPriceForm {
        ProductId: Serenity.LookupEditor;
        UnitName: Serenity.StringEditor;
        UnitMakeUp: Serenity.DecimalEditor;
        StandardUomid: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface SalesUoMAndPriceRow {
        UomAndPriceId?: number;
        ProductId?: number;
        UnitName?: string;
        UnitMakeUp?: number;
        StandardUomid?: number;
        Discontinued?: boolean;
        Price?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        StandardUomidProductId?: number;
        StandardUomidStandardUnitName?: string;
        StandardUomidDiscontinued?: boolean;
        StandardUomidCost?: number;
    }
    namespace SalesUoMAndPriceRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SalesUoMAndPriceRow>;
        namespace Fields {
            const UomAndPriceId: string;
            const ProductId: string;
            const UnitName: string;
            const UnitMakeUp: string;
            const StandardUomid: string;
            const Discontinued: string;
            const Price: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const StandardUomidProductId: string;
            const StandardUomidStandardUnitName: string;
            const StandardUomidDiscontinued: string;
            const StandardUomidCost: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace SalesUoMAndPriceService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SalesUoMAndPriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesUoMAndPriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesUoMAndPriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesUoMAndPriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class StandardUoMForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StandardUoMForm {
        ProductId: Serenity.LookupEditor;
        StandardUnitName: Serenity.StringEditor;
        Discontinued: Serenity.BooleanEditor;
        Cost: Serenity.DecimalEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface StandardUoMRow {
        StandardUomid?: number;
        ProductId?: number;
        StandardUnitName?: string;
        Discontinued?: boolean;
        Cost?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
    }
    namespace StandardUoMRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<StandardUoMRow>;
        namespace Fields {
            const StandardUomid: string;
            const ProductId: string;
            const StandardUnitName: string;
            const Discontinued: string;
            const Cost: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace StandardUoMService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<StandardUoMRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StandardUoMRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StandardUoMRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StandardUoMRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class StockForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StockForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        LocationId: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface StockRow {
        StockId?: number;
        ProductId?: number;
        Quantity?: number;
        QuantityInUnit?: string;
        LocationId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        ProductCategory?: string;
    }
    namespace StockRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<StockRow>;
        namespace Fields {
            const StockId: string;
            const ProductId: string;
            const Quantity: string;
            const QuantityInUnit: string;
            const LocationId: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const ProductCategory: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace StockService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<StockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SupplierForm {
        SupplierId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        SupplierName: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Note: Serenity.TextAreaEditor;
        LocationList: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SupplierLocationForm {
        SupplierId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        AccountId: Serenity.LookupEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface SupplierLocationRow {
        SuppliersLocationsId?: number;
        SupplierId?: number;
        LocationId?: number;
        AccountId?: number;
        SupplierDate?: string;
        SupplierSupplierName?: string;
        SupplierPhoneNumber?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierWebsite?: string;
        SupplierAddress?: string;
        SupplierNote?: string;
        SupplierAccountId?: number;
        LocationAccountId?: number;
        LocationDate?: string;
        LocationPhoneNumber?: string;
        LocationEmail?: string;
        LocationWebsite?: string;
        LocationLocationName?: string;
        LocationAddress?: string;
        LocationUserId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
    }
    namespace SupplierLocationRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SupplierLocationRow>;
        namespace Fields {
            const SuppliersLocationsId: string;
            const SupplierId: string;
            const LocationId: string;
            const AccountId: string;
            const SupplierDate: string;
            const SupplierSupplierName: string;
            const SupplierPhoneNumber: string;
            const SupplierFax: string;
            const SupplierEmail: string;
            const SupplierWebsite: string;
            const SupplierAddress: string;
            const SupplierNote: string;
            const SupplierAccountId: string;
            const LocationAccountId: string;
            const LocationDate: string;
            const LocationPhoneNumber: string;
            const LocationEmail: string;
            const LocationWebsite: string;
            const LocationLocationName: string;
            const LocationAddress: string;
            const LocationUserId: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace SupplierLocationService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SupplierLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface SupplierRow {
        SupplierId?: number;
        Date?: string;
        SupplierName?: string;
        PhoneNumber?: string;
        Fax?: string;
        Email?: string;
        Website?: string;
        Address?: string;
        Note?: string;
        AccountId?: number;
        AccountDate?: string;
        AccountCompanyName?: string;
        AccountLogo?: number[];
        AccountAddress?: string;
        AccountEmail?: string;
        AccountPhoneNumber?: string;
        AccountWebsiteAddress?: string;
        LocationList?: number[];
    }
    namespace SupplierRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SupplierRow>;
        namespace Fields {
            const SupplierId: string;
            const Date: string;
            const SupplierName: string;
            const PhoneNumber: string;
            const Fax: string;
            const Email: string;
            const Website: string;
            const Address: string;
            const Note: string;
            const AccountId: string;
            const AccountDate: string;
            const AccountCompanyName: string;
            const AccountLogo: string;
            const AccountAddress: string;
            const AccountEmail: string;
            const AccountPhoneNumber: string;
            const AccountWebsiteAddress: string;
            const LocationList: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace SupplierService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
}
declare namespace InventoryManagement.BusinessObjects {
    class UnstockForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UnstockForm {
        Date: Serenity.DateEditor;
        PurchasesId: Serenity.IntegerEditor;
        RtnOutwardsDtlsId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        UomAndPriceId: Serenity.LookupEditor;
        IsUnstocked: Serenity.BooleanEditor;
        LocationId: Serenity.IntegerEditor;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    interface UnstockRow {
        UnStockId?: number;
        ProductId?: number;
        Date?: string;
        PurchasesId?: number;
        RtnOutwardsDtlsId?: number;
        Quantity?: number;
        UomAndPriceId?: number;
        IsUnstocked?: boolean;
        LocationId?: number;
        ProductDate?: string;
        ProductProductCode?: string;
        ProductProductName?: string;
        ProductBrandName?: string;
        ProductProductCategoryId?: number;
        ProductSupplierId?: number;
        ProductLeastUnitName?: string;
        ProductAccountId?: number;
        UomAndPriceProductId?: number;
        UomAndPriceUnitName?: string;
        UomAndPriceUnitMakeUp?: number;
        UomAndPriceStandardUomid?: number;
        UomAndPriceDiscontinued?: boolean;
        UomAndPricePrice?: number;
    }
    namespace UnstockRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<UnstockRow>;
        namespace Fields {
            const UnStockId: string;
            const ProductId: string;
            const Date: string;
            const PurchasesId: string;
            const RtnOutwardsDtlsId: string;
            const Quantity: string;
            const UomAndPriceId: string;
            const IsUnstocked: string;
            const LocationId: string;
            const ProductDate: string;
            const ProductProductCode: string;
            const ProductProductName: string;
            const ProductBrandName: string;
            const ProductProductCategoryId: string;
            const ProductSupplierId: string;
            const ProductLeastUnitName: string;
            const ProductAccountId: string;
            const UomAndPriceProductId: string;
            const UomAndPriceUnitName: string;
            const UomAndPriceUnitMakeUp: string;
            const UomAndPriceStandardUomid: string;
            const UomAndPriceDiscontinued: string;
            const UomAndPricePrice: string;
        }
    }
}
declare namespace InventoryManagement.BusinessObjects {
    namespace UnstockService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<UnstockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnstockRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnstockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnstockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace InventoryManagement.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace InventoryManagement.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace InventoryManagement.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace InventoryManagement.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace InventoryManagement.Common {
    namespace UserPreferenceService {
        const baseUrl: string;
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace InventoryManagement.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace InventoryManagement {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace InventoryManagement {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace InventoryManagement {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace InventoryManagement {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace InventoryManagement.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace InventoryManagement.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace InventoryManagement.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace InventoryManagement.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace InventoryManagement.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace InventoryManagement.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace InventoryManagement.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace InventoryManagement.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace InventoryManagement.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace InventoryManagement.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        CompanyName?: string;
        Address?: string;
        FullName?: string;
        Email?: string;
        Password?: string;
        ConfirmPassword?: string;
        Sex?: BusinessObjects.Gender;
    }
}
declare namespace InventoryManagement.Modules {
    interface LocationListRequest extends Serenity.ListRequest {
        LocationList?: number[];
    }
}
declare namespace InventoryManagement {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace InventoryManagement {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace InventoryManagement.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace InventoryManagement.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace InventoryManagement.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace InventoryManagement.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        private nextId;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace InventoryManagement.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace InventoryManagement.LanguageList {
    function getValue(): string[][];
}
declare namespace InventoryManagement.Common {
    interface ReportButtonOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
        download?: boolean;
        reportKey: string;
        extension?: string;
        getParams?: () => any;
        target?: string;
    }
    namespace ReportHelper {
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class UnstockDialog extends Serenity.EntityDialog<UnstockRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: UnstockForm;
        constructor();
        protected updateInterface(): void;
        protected beforeLoadEntity(entity: any): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class UnstockEditor extends Common.GridEditorBase<UnstockRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnstockEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class UnstockEditorDialog extends Common.GridEditorDialog<UnstockRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: UnstockForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class UnstockGrid extends Serenity.EntityGrid<UnstockRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnstockDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected getGridCanLoad(): boolean;
        private _purchasesId;
        purchasesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierLocationDialog extends Serenity.EntityDialog<SupplierLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: SupplierLocationForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierLocationEditor extends Common.GridEditorBase<SupplierLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierLocationEditorDialog extends Common.GridEditorDialog<SupplierLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SupplierLocationForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierLocationGrid extends Serenity.EntityGrid<SupplierLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        private productsGrid;
        constructor();
        loadEntity(entity: SupplierRow): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierEditor extends Common.GridEditorBase<SupplierRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierEditorDialog extends Common.GridEditorDialog<SupplierRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: SupplierForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierLookupEditor extends Serenity.LookupEditorBase<SupplierRow, any> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
        private purchasesDetailsGrid;
        constructor();
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SuppplierProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
        constructor();
        updateInterface(): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SupplierProductGrid extends ProductGrid {
        protected getDialogType(): typeof SuppplierProductDialog;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _supplierID;
        supplierID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class StockDialog extends Serenity.EntityDialog<StockRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: StockForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class StockEditor extends Common.GridEditorBase<StockRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StockEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class StockEditorDialog extends Common.GridEditorDialog<StockRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: StockForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class StockGrid extends Serenity.EntityGrid<StockRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StockDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class StandardUoMDialog extends Serenity.EntityDialog<StandardUoMRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StandardUoMForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class StandardUoMEditor extends Common.GridEditorBase<StandardUoMRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StandardUoMEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class StandardUoMEditorDialog extends Common.GridEditorDialog<StandardUoMRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: StandardUoMForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class StandardUoMGrid extends Serenity.EntityGrid<StandardUoMRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StandardUoMDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesUoMAndPriceDialog extends Serenity.EntityDialog<SalesUoMAndPriceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SalesUoMAndPriceForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesUoMAndPriceEditor extends Common.GridEditorBase<SalesUoMAndPriceRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesUoMAndPriceEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesUoMAndPriceEditorDialog extends Common.GridEditorDialog<SalesUoMAndPriceRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: SalesUoMAndPriceForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesUoMAndPriceGrid extends Serenity.EntityGrid<SalesUoMAndPriceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesUoMAndPriceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesPaymentDetailsDialog extends Serenity.EntityDialog<SalesPaymentDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SalesPaymentDetailsForm;
        protected updateInterface(): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesPaymentDetailsEditor extends Common.GridEditorBase<SalesPaymentDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesPaymentDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesPaymentDetailsEditorDialog extends Common.GridEditorDialog<SalesPaymentDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: SalesPaymentDetailsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesPaymentDetailsGrid extends Serenity.EntityGrid<SalesPaymentDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesPaymentDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _salesId;
        salesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesInvoiceDialog extends Serenity.EntityDialog<SalesInvoiceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: SalesInvoiceForm;
        protected updateInterface(): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesInvoiceEditor extends Common.GridEditorBase<SalesInvoiceRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesInvoiceEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesInvoiceEditorDialog extends Common.GridEditorDialog<SalesInvoiceRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SalesInvoiceForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesInvoiceGrid extends Serenity.EntityGrid<SalesInvoiceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesInvoiceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _salesId;
        salesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesDetailsDialog extends Serenity.EntityDialog<SalesDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: SalesDetailsForm;
        constructor();
        protected updateInterface(): void;
        private calculateAmount();
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesDetailsEditor extends Common.GridEditorBase<SalesDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesDetailsEditorDialog extends Common.GridEditorDialog<SalesDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SalesDetailsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesDetailsGrid extends Serenity.EntityGrid<SalesDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _salesId;
        salesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesDialog extends Serenity.EntityDialog<SalesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SalesForm;
        private salesOrdersGrid;
        private pickGrid;
        private invoiceGrid;
        private paymentGrid;
        private returnGrid;
        private restockGrid;
        constructor();
        loadEntity(entity: SalesRow): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesEditor extends Common.GridEditorBase<SalesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesEditorDialog extends Common.GridEditorDialog<SalesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: SalesForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class SalesGrid extends Serenity.EntityGrid<SalesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsPaymentDialog extends Serenity.EntityDialog<ReturnOutwardsPaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ReturnOutwardsPaymentForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsPaymentEditor extends Common.GridEditorBase<ReturnOutwardsPaymentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnOutwardsPaymentEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsPaymentEditorDialog extends Common.GridEditorDialog<ReturnOutwardsPaymentRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReturnOutwardsPaymentForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsPaymentGrid extends Serenity.EntityGrid<ReturnOutwardsPaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnOutwardsPaymentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected getGridCanLoad(): boolean;
        private _purchasesId;
        purchasesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsDetailsDialog extends Serenity.EntityDialog<ReturnOutwardsDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ReturnOutwardsDetailsForm;
        constructor();
        private calculateAmount();
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsDetailsEditor extends Common.GridEditorBase<ReturnOutwardsDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnOutwardsDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsDetailsEditorDialog extends Common.GridEditorDialog<ReturnOutwardsDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReturnOutwardsDetailsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsDetailsGrid extends Serenity.EntityGrid<ReturnOutwardsDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnOutwardsDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected getGridCanLoad(): boolean;
        private _purchasesId;
        purchasesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsDialog extends Serenity.EntityDialog<ReturnOutwardsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ReturnOutwardsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsEditor extends Common.GridEditorBase<ReturnOutwardsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnOutwardsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsEditorDialog extends Common.GridEditorDialog<ReturnOutwardsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReturnOutwardsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnOutwardsGrid extends Serenity.EntityGrid<ReturnOutwardsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnOutwardsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsPaymentDialog extends Serenity.EntityDialog<ReturnInwardsPaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ReturnInwardsPaymentForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsPaymentEditor extends Common.GridEditorBase<ReturnInwardsPaymentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnInwardsPaymentEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsPaymentEditorDialog extends Common.GridEditorDialog<ReturnInwardsPaymentRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReturnInwardsPaymentForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsPaymentGrid extends Serenity.EntityGrid<ReturnInwardsPaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnInwardsPaymentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsDetailsDialog extends Serenity.EntityDialog<ReturnInwardsDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ReturnInwardsDetailsForm;
        protected updateInterface(): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsDetailsEditor extends Common.GridEditorBase<ReturnInwardsDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnInwardsDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsDetailsEditorDialog extends Common.GridEditorDialog<ReturnInwardsDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReturnInwardsDetailsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsDetailsGrid extends Serenity.EntityGrid<ReturnInwardsDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnInwardsDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _salesId;
        salesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsDialog extends Serenity.EntityDialog<ReturnInwardsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ReturnInwardsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsEditor extends Common.GridEditorBase<ReturnInwardsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnInwardsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsEditorDialog extends Common.GridEditorDialog<ReturnInwardsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReturnInwardsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReturnInwardsGrid extends Serenity.EntityGrid<ReturnInwardsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnInwardsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class RestockDialog extends Serenity.EntityDialog<RestockRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: RestockForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class RestockEditor extends Common.GridEditorBase<RestockRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RestockEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class RestockEditorDialog extends Common.GridEditorDialog<RestockRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: RestockForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class RestockGrid extends Serenity.EntityGrid<RestockRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RestockDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _salesId;
        salesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReorderPointDialog extends Serenity.EntityDialog<ReorderPointRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ReorderPointForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReorderPointEditor extends Common.GridEditorBase<ReorderPointRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReorderPointEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReorderPointEditorDialog extends Common.GridEditorDialog<ReorderPointRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReorderPointForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReorderPointGrid extends Serenity.EntityGrid<ReorderPointRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReorderPointDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReceivePurchasesDialog extends Serenity.EntityDialog<ReceivePurchasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ReceivePurchasesForm;
        constructor();
        protected updateInterface(): void;
        private calculateAmount();
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReceivePurchasesEditor extends Common.GridEditorBase<ReceivePurchasesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReceivePurchasesEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReceivePurchasesEditorDialog extends Common.GridEditorDialog<ReceivePurchasesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ReceivePurchasesForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ReceivePurchasesGrid extends Serenity.EntityGrid<ReceivePurchasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReceivePurchasesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected getGridCanLoad(): boolean;
        private _purchasesId;
        purchasesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesUoMAndPriceDialog extends Serenity.EntityDialog<PurchasesUoMAndPriceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PurchasesUoMAndPriceForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesUoMAndPriceEditor extends Common.GridEditorBase<PurchasesUoMAndPriceRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesUoMAndPriceEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesUoMAndPriceEditorDialog extends Common.GridEditorDialog<PurchasesUoMAndPriceRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: PurchasesUoMAndPriceForm;
        constructor();
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesUoMAndPriceGrid extends Serenity.EntityGrid<PurchasesUoMAndPriceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesUoMAndPriceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesPaymentDetailsDialog extends Serenity.EntityDialog<PurchasesPaymentDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: PurchasesPaymentDetailsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesPaymentDetailsEditor extends Common.GridEditorBase<PurchasesPaymentDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesPaymentDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesPaymentDetailsEditorDialog extends Common.GridEditorDialog<PurchasesPaymentDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchasesPaymentDetailsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesPaymentDetailsGrid extends Serenity.EntityGrid<PurchasesPaymentDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesPaymentDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected getGridCanLoad(): boolean;
        private _purchasesId;
        purchasesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesDetailsDialog extends Serenity.EntityDialog<PurchasesDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: PurchasesDetailsForm;
        constructor();
        protected updateInterface(): void;
        private calculateAmount();
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesDetailsEditor extends Common.GridEditorBase<PurchasesDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesDetailsEditorDialog extends Common.GridEditorDialog<PurchasesDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchasesDetailsForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesDetailsGrid extends Serenity.EntityGrid<PurchasesDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _purchasesId;
        purchasesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesDialog extends Serenity.EntityDialog<PurchasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PurchasesForm;
        private purchaseOrdersGrid;
        private receiveGrid;
        private paymentGrid;
        private returnGrid;
        private unstockGrid;
        private returnOutardsPaymentGrid;
        constructor();
        private once;
        loadEntity(entity: PurchasesRow): void;
        protected updateInterface(): void;
        private toggleCompleteReOpenButtons(isCompleted);
        protected getToolbarButtons(): Serenity.ToolButton[];
        private initChildren();
        private GetRequestObject(locationId, purchaseId);
        private setToSimplePurchase();
        private setToAdvancedPurchase();
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesEditor extends Common.GridEditorBase<PurchasesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesEditorDialog extends Common.GridEditorDialog<PurchasesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: PurchasesForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PurchasesGrid extends Serenity.EntityGrid<PurchasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchasesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductLocationDialog extends Serenity.EntityDialog<ProductLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ProductLocationForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductLocationEditor extends Common.GridEditorBase<ProductLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductLocationEditorDialog extends Common.GridEditorDialog<ProductLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProductLocationForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductLocationGrid extends Serenity.EntityGrid<ProductLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryLocationDialog extends Serenity.EntityDialog<ProductCategoryLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ProductCategoryLocationForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryLocationEditor extends Common.GridEditorBase<ProductCategoryLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductCategoryLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryLocationEditorDialog extends Common.GridEditorDialog<ProductCategoryLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProductCategoryLocationForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryLocationGrid extends Serenity.EntityGrid<ProductCategoryLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductCategoryLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryDialog extends Serenity.EntityDialog<ProductCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductCategoryForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryEditor extends Common.GridEditorBase<ProductCategoryRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductCategoryEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryEditorDialog extends Common.GridEditorDialog<ProductCategoryRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ProductCategoryForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductCategoryGrid extends Serenity.EntityGrid<ProductCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductCategoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PricingDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
        constructor();
        protected getPropertyItems(): Serenity.PropertyItem[];
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductEditor extends Common.GridEditorBase<ProductRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductEditorDialog extends Common.GridEditorDialog<ProductRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ProductForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class ProductPurchasesDetailsGrid extends PurchasesDetailsGrid {
        constructor(container: JQuery);
        private _productID;
        protected getButtons(): Serenity.ToolButton[];
        protected getGridCanLoad(): boolean;
        productID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PickSalesOrderDialog extends Serenity.EntityDialog<PickSalesOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: PickSalesOrderForm;
        protected updateInterface(): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PickSalesOrderEditor extends Common.GridEditorBase<PickSalesOrderRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PickSalesOrderEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PickSalesOrderEditorDialog extends Common.GridEditorDialog<PickSalesOrderRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PickSalesOrderForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class PickSalesOrderGrid extends Serenity.EntityGrid<PickSalesOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PickSalesOrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): string;
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected getGridCanLoad(): boolean;
        private _salesId;
        salesID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class GlobalScripts {
        static purchasesId: number;
        static locationId: number;
        static salesId: number;
        static purchasesView: any;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerLocationDialog extends Serenity.EntityDialog<CustomerLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: CustomerLocationForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerLocationEditor extends Common.GridEditorBase<CustomerLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerLocationEditorDialog extends Common.GridEditorDialog<CustomerLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CustomerLocationForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerLocationGrid extends Serenity.EntityGrid<CustomerLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private customerSales;
        constructor();
        loadEntity(entity: CustomerRow): void;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerEditor extends Common.GridEditorBase<CustomerRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerEditorDialog extends Common.GridEditorDialog<CustomerRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: CustomerForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CustomerSalesGrid extends SalesGrid {
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: number;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CostingInfoDialog extends Serenity.EntityDialog<CostingInfoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: CostingInfoForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CostingInfoEditor extends Common.GridEditorBase<CostingInfoRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CostingInfoEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CostingInfoEditorDialog extends Common.GridEditorDialog<CostingInfoRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CostingInfoForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class CostingInfoGrid extends Serenity.EntityGrid<CostingInfoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CostingInfoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class BankTransactionDialog extends Serenity.EntityDialog<BankTransactionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BankTransactionForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class BankTransactionEditor extends Common.GridEditorBase<BankTransactionRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankTransactionEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class BankTransactionEditorDialog extends Common.GridEditorDialog<BankTransactionRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: BankTransactionForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class BankTransactionGrid extends Serenity.EntityGrid<BankTransactionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankTransactionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class BankDialog extends Serenity.EntityDialog<BankRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BankForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class BankEditor extends Common.GridEditorBase<BankRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class BankEditorDialog extends Common.GridEditorDialog<BankRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: BankForm;
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class BankGrid extends Serenity.EntityGrid<BankRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class AdjustStockDialog extends Serenity.EntityDialog<StockRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: AdjustStockForm;
        constructor();
    }
}
declare namespace InventoryManagement.BusinessObjects {
    class AdjustStockGrid extends Serenity.EntityGrid<StockRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AdjustStockDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getInitialTitle(): string;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace InventoryManagement.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace InventoryManagement.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace InventoryManagement.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        private rolePermissions;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace InventoryManagement.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace InventoryManagement.Administration {
    class UserLocationDialog extends Serenity.EntityDialog<UserLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: UserLocationForm;
    }
}
declare namespace InventoryManagement.Administration {
    class UserLocationEditor extends Common.GridEditorBase<UserLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Administration {
    class UserLocationEditorDialog extends Common.GridEditorDialog<UserLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: UserLocationForm;
    }
}
declare namespace InventoryManagement.Administration {
    class UserLocationGrid extends Serenity.EntityGrid<UserLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace InventoryManagement.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace InventoryManagement.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace InventoryManagement.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace InventoryManagement.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace InventoryManagement.Administration {
    class RoleLocationDialog extends Serenity.EntityDialog<RoleLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: RoleLocationForm;
    }
}
declare namespace InventoryManagement.Administration {
    class RoleLocationEditor extends Common.GridEditorBase<RoleLocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleLocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Administration {
    class RoleLocationEditorDialog extends Common.GridEditorDialog<RoleLocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: RoleLocationForm;
    }
}
declare namespace InventoryManagement.Administration {
    class RoleLocationGrid extends Serenity.EntityGrid<RoleLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace InventoryManagement.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace InventoryManagement.Administration {
    class LocationDialog extends Serenity.EntityDialog<LocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LocationForm;
    }
}
declare namespace InventoryManagement.Administration {
    class LocationEditor extends Common.GridEditorBase<LocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LocationEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Administration {
    class LocationEditorDialog extends Common.GridEditorDialog<LocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: LocationForm;
    }
}
declare namespace InventoryManagement.Administration {
    class LocationGrid extends Serenity.EntityGrid<LocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace InventoryManagement.Administration {
    class LocationListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace InventoryManagement.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace InventoryManagement.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace InventoryManagement.Administration {
    class GetCodeDialog extends Serenity.EntityDialog<GetCodeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GetCodeForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace InventoryManagement.Administration {
    class GetCodeEditor extends Common.GridEditorBase<GetCodeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GetCodeEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Administration {
    class GetCodeEditorDialog extends Common.GridEditorDialog<GetCodeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: GetCodeForm;
    }
}
declare namespace InventoryManagement.Administration {
    class GetCodeGrid extends Serenity.EntityGrid<GetCodeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GetCodeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace InventoryManagement.Administration {
    class AccountDialog extends Serenity.EntityDialog<AccountRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AccountForm;
        constructor();
    }
}
declare namespace InventoryManagement.Administration {
    class AccountEditor extends Common.GridEditorBase<AccountRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace InventoryManagement.Administration {
    class AccountEditorDialog extends Common.GridEditorDialog<AccountRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: AccountForm;
    }
}
declare namespace InventoryManagement.Administration {
    class AccountGrid extends Serenity.EntityGrid<AccountRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
