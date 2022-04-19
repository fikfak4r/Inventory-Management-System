namespace InventoryManagement.Membership {
    export interface SignUpRequest extends Serenity.ServiceRequest {
        CompanyName?: string;
        Address?: string;
        FullName?: string;
        Email?: string;
        Password?: string;
        ConfirmPassword?: string;
        Sex?: BusinessObjects.Gender;
        AgreeToTerms?: boolean;
    }
}

