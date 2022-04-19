
namespace InventoryManagement.Membership
{

    using Serenity.Services;
    using System;
    using BusinessObjects;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel;


    public class SignUpRequest : ServiceRequest
    {
        [Required]
        public String CompanyName { get; set; }
        public String Address { get; set; }
        public String FullName { get; set; }
        [Required]
        public String Email { get; set; }
        [Required]
        public String Password { get; set; }
        [Required]
        public String ConfirmPassword { get; set; }
        public Gender Sex { get; set; }

        public bool AgreeToTerms { get; set; }
    }
}