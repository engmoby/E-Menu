"use strict";
var router_1 = require("@angular/router");
var menu_list_component_1 = require("./menus/menu-list.component");
var menu_details_component_1 = require("./menus/menusDetails/menu-details-component");
var dog_routes_1 = require("./dogs/dog.routes");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: 'menu', component: menu_list_component_1.MenuListComponent },
    { path: 'menu/:id', component: menu_details_component_1.MenuDetailsComponent }
].concat(dog_routes_1.dogRoutes);
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map