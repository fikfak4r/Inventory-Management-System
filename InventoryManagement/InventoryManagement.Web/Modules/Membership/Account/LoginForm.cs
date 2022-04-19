
namespace InventoryManagement.Membership.Forms
{
    using System;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel;


    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginForm
    {
        //[System.ComponentModel.DataAnnotations.Required]
        //public String Username { get; set; }


        //[DataType(DataType.Password)]
        //[PasswordEditor, Placeholder("default password for admin user is 'serenity'")]
        //public String Password { get; set; }


        [System.ComponentModel.DataAnnotations.Required]
        [Display(Name = "User name")]
        public string Username { get; set; }

        [System.ComponentModel.DataAnnotations.Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }

    }
}