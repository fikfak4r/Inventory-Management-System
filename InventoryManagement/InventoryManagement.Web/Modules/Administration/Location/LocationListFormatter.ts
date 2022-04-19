namespace InventoryManagement.Administration {

    @Serenity.Decorators.registerFormatter()
    export class LocationListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            let idList = ctx.value as number[];

            if (!idList || !idList.length)
			{
                if(ctx.value)
                {
                   return Q.htmlEncode(LocationRow.getLookup().itemById[ctx.value].LocationName);
                }
                else
                    return ""

			}
                

            let byId = LocationRow.getLookup().itemById;

            return idList.map(x => {
                let g = byId[x];
                if (!g)
                    return x.toString();

                return Q.htmlEncode(g.LocationName);
            }).join(", ");
        }
    }
}