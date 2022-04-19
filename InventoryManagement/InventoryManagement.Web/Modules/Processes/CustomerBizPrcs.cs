using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using InventoryManagement.Administration.Entities;
using InventoryManagement.Membership;
using InventoryManagement.Administration.Repositories;
using InventoryManagement.BusinessObjects.Entities;

namespace InventoryManagement.BusinessObjects.Repositories
{
    public class CustomerBizPrcs
    {
        public void CreateCustomer()
        {
        }

        public static void CreateCustomerWithUserReference(SignUpRequest request, string accountID, List<LocationRow> locationList, System.Data.IDbConnection connection, out string username, out int userId)
        {
            string salt = null;
            var hash = UserRepository.GenerateHash(request.Password, ref salt);
            var displayName = request.FullName.TrimToEmpty();
            var email = request.Email;
            username = request.Email;


            var customerFld = CustomerRow.Fields;
            var customerId = (int)new SqlInsert(customerFld.TableName)
                              .Set(customerFld.FullName, request.FullName)
                               .Set(customerFld.Date, DateTime.Now)
                               .ExecuteAndGetID(connection);

            //Creates User
            var fld = UserRow.Fields;
            userId = (int)new SqlInsert(fld.TableName)
                    .Set(fld.Username, username)
                    .Set(fld.Source, "sign")
                    .Set(fld.DisplayName, displayName)
                    .Set(fld.Email, email)
                    .Set(fld.PasswordHash, hash)
                    .Set(fld.PasswordSalt, salt)
                    .Set(fld.IsActive, 0)
                    .Set(fld.InsertDate, DateTime.Now)
                    .Set(fld.InsertUserId, 1)
                    .Set(fld.LastDirectoryUpdate, DateTime.Now)
                    .Set(fld.AccountId, accountID)
                    .Set(fld.CustomerId, customerId)
                    .ExecuteAndGetID(connection);

            //Creates UserLocation
            foreach (LocationRow location in locationList)
            {
                CreateUserLocation(connection, userId, location);
            }

            var role = connection.Single<RoleRow>(new Criteria("AccountId") == accountID && new Criteria("RoleName") == RoleRow.ClientOfClient);

            //Creates UserRole
            var userRoleFlds = UserRoleRow.Fields;
            new SqlInsert(userRoleFlds.TableName)
                .Set(userRoleFlds.UserId, userId)
                .Set(userRoleFlds.RoleId, role.RoleId)
                .Execute(connection);
        }


        private static void CreateUserLocation(System.Data.IDbConnection connection, int userId, LocationRow location)
        {
            var userLocFlds = UserLocationRow.Fields;
            var userLocationID = (int)new SqlInsert(userLocFlds.TableName)
                .Set(userLocFlds.UserId, userId)
                .Set(userLocFlds.LocationId, location.LocationId)
                .ExecuteAndGetID(connection);
        }


    }
}