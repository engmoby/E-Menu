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
            app_routes_1.routing
        ],
        declarations: [
            app_Component_1.AppComponent,
            home_component_1.HomeComponent,
            menu_list_component_1.MenuListComponent,
            category_component_1.CategoryListComponent,
            item_component_1.ItemListComponent,
            menu_details_component_1.MenuDetailsComponent,
        ],
        providers: [
            menu_service_1.MenuService,
            category_service_1.categoryService,
            item_service_1.ItemService
        ],
        bootstrap: [app_Component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map