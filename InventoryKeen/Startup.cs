using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(InventoryKeen.Startup))]
namespace InventoryKeen
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
