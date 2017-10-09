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
var app_component_1 = require("./app.component");
var cat_list_component_1 = require("./cats/cat-list.component");
// import { CatDetailsComponent }  from './cats/cat-details.component';
var dog_list_component_1 = require("./dogs/dog-list.component");
var menu_list_component_1 = require("./menus/menu-list.component");
var menu_details_component_1 = require("./menus/menusDetails/menu-details-component");
var menu_service_1 = require("./menus/menu.service");
// import { DogDetailsComponent }  from './dogs/dog-details.component';
// import { PetService }          from './pet.service';
// import { Pet }          from './pet';
var app_routes_1 = require("./app.routes");
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
            app_component_1.AppComponent,
            cat_list_component_1.CatListComponent,
            menu_list_component_1.MenuListComponent,
            menu_details_component_1.MenuDetailsComponent,
            // CatDetailsComponent,
            dog_list_component_1.DogListComponent,
        ],
        providers: [
            menu_service_1.MenuService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map