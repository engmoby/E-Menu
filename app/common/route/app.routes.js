"use strict";
var router_1 = require("@angular/router");
var menu_list_component_1 = require("../../menus/menu-list.component");
var menu_details_component_1 = require("../../menus/menusDetails/menu-details-component");
var category_component_1 = require("../../categories/category.component");
var login_component_1 = require("../../login/login.component");
var item_component_1 = require("../../items/item.component");
var home_component_1 = require("../../home/home.component");
// import { dogRoutes }    from './dogs/dog.routes';
var anonymous_role_1 = require("../authorization/anonymous.role");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [anonymous_role_1.CanActivateTeam] },
    { path: 'menu', component: menu_list_component_1.MenuListComponent, canActivate: [anonymous_role_1.CanActivateTeam] },
    { path: 'menu/:id', component: menu_details_component_1.MenuDetailsComponent, canActivate: [anonymous_role_1.CanActivateTeam] },
    { path: 'menu/:id/category', component: category_component_1.CategoryListComponent, canActivate: [anonymous_role_1.CanActivateTeam] },
    { path: 'menu/:id/item', component: item_component_1.ItemListComponent, canActivate: [anonymous_role_1.CanActivateTeam] },
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map