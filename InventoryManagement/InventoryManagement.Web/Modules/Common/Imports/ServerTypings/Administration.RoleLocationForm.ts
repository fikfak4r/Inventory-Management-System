namespace InventoryManagement.Administration {
    export class RoleLocationForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.RoleLocation';

    }

    export interface RoleLocationForm {
        RoleId: Serenity.IntegerEditor;
        LocationId: Serenity.IntegerEditor;
    }

    [['RoleId', () => Serenity.IntegerEditor], ['LocationId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(RoleLocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

