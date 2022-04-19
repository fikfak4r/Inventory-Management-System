
namespace InventoryManagement.Membership
{
    using Serenity.Services;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel;
    using System;

    public class LoginRequest : ServiceRequest
    {
        [DisplayName("User name")]
        [Required(ErrorMessage = "Required from Model")]
        public string Username { get; set; }
        public string Password { get; set; }
    }
}