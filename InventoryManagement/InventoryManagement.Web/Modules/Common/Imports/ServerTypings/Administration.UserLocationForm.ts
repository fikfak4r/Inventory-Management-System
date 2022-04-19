namespace InventoryManagement.Administration {
    export class UserLocationForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.UserLocation';

    }

    export interface UserLocationForm {
        UserId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['UserId', () => Serenity.IntegerEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(UserLocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

