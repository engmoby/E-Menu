"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router'; 
var AppComponent = (function () {
    // App Component class
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['../app/common/app-component/app.Component.css'],
        template: "\n    <div class=\"demo-layout-transparent mdl-layout mdl-js-layout\">\n      <header class=\"mdl-layout__header mdl-layout__header--transparent\">\n        <div class=\"mdl-layout__header-row\">\n\n          <!-- Title -->\n          <span class=\"mdl-layout-title\">E-Menu</span>\n\n          <!-- Add spacer, to align navigation to the right -->\n          <div class=\"mdl-layout-spacer\"></div>\n\n          <!-- Navigation with router directives-->\n          <nav class=\"mdl-navigation\">\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/']\">Home</a> \n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/menu']\">Menu</a>\n          </nav>\n        </div>\n      </header>\n\n      <main class=\"mdl-layout__content\">\n      <h1 class=\"header-text\">List Of Our Menus...</h1>       \n      </main>\n    </div>\n\n    <!-- Router Outlet -->\n    <router-outlet></router-outlet>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.Component.js.map