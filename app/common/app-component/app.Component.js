"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var authorization_service_1 = require("../authorization/authorization.service");
var router_1 = require("@angular/router");
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router'; 
var AppComponent = (function () {
    function AppComponent(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authorizationService.logout();
        this.router.navigateByUrl('/login');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // styleUrls: ['../app/common/app-component/app.Component.css'],
        template: "\n  <div class=\"head\">\n  <div class=\"head-nav-grids\">\n    <div class=\"navbar-top\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          </button>\n           <div class=\"navbar-brand logo \">\n            <h1><a [routerLink]=\"['/home']\">E-Menu</a></h1>\n          </div>\n\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n         <ul class=\"nav navbar-nav link-effect-4\">\n        <li class=\"active\"><a [routerLink]=\"['/home']\">Home</a> </li>\n        <!-- <li><a  [routerLink]=\"['/menu']\">Menu </a> </li>-->\n        <li><a (click)=\"logout()\"> logout </a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div> \n    <div class=\"clearfix\"></div>\t\n  </div>\n</div> \n\n\n    <!-- Router Outlet --> \n    <router-outlet></router-outlet>\n  ",
    }),
    __metadata("design:paramtypes", [authorization_service_1.AuthorizationService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.Component.js.map