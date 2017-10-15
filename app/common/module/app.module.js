"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_2_local_storage_1 = require("angular-2-local-storage");
// import { HTTP_INTERCEPTORS } from'@angular/common/http'
// Declarations
var app_Component_1 = require("../../common/app-component/app.Component");
var menu_list_component_1 = require("../../menus/menu-list.component");
var home_component_1 = require("../../home/home.component");
var category_component_1 = require("../../categories/category.component");
var item_component_1 = require("../../items/item.component");
var menu_details_component_1 = require("../../menus/menusDetails/menu-details-component");
var menu_service_1 = require("../../menus/menu.service");
var category_service_1 = require("../../categories/category.service");
var item_service_1 = require("../../items/item.service");
var app_routes_1 = require("../../common/route/app.routes");
var app_constant_1 = require("../shared/app.constant");
var authorization_service_1 = require("../authorization/authorization.service");
var authentication_service_1 = require("../authentication/authentication.service");
var login_component_1 = require("../../login/login.component");
var anonymous_role_1 = require("../authorization/anonymous.role");
var httpFactory_1 = require("../authentication/httpFactory");
// Decorator
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routes_1.routing,
            angular_2_local_storage_1.LocalStorageModule.withConfig({
                prefix: 'my-app',
                storageType: 'localStorage'
            }),
        ],
        declarations: [
            app_Component_1.AppComponent,
            home_component_1.HomeComponent,
            menu_list_component_1.MenuListComponent,
            category_component_1.CategoryListComponent,
            menu_details_component_1.MenuDetailsComponent,
            login_component_1.LoginComponent,
            item_component_1.ItemListComponent,
        ],
        providers: [
            menu_service_1.MenuService,
            category_service_1.categoryService,
            app_constant_1.APPConstant,
            authorization_service_1.AuthorizationService,
            authentication_service_1.AuthenticationService,
            item_service_1.ItemService,
            anonymous_role_1.CanActivateTeam,
            {
                provide: http_1.Http,
                useFactory: httpFactory_1.httpFactory,
                deps: [http_1.XHRBackend, http_1.RequestOptions, authentication_service_1.AuthenticationService]
            }
        ],
        bootstrap: [app_Component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map