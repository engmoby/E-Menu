"use strict";
var router_1 = require("@angular/router");
var menu_list_component_1 = require("../../menus/menu-list.component");
var menu_details_component_1 = require("../../menus/menusDetails/menu-details-component");
var category_component_1 = require("../../categories/category.component");
// import { dogRoutes }    from './dogs/dog.routes';
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    },
    { path: 'menu', component: menu_list_component_1.MenuListComponent },
    { path: 'menu/:id', component: menu_details_component_1.MenuDetailsComponent },
    { path: 'menu/:id/category', component: category_component_1.CategoryListComponent },
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map