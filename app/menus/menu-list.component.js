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
var menu_service_1 = require("./menu.service");
var authentication_service_1 = require("../common/authentication/authentication.service");
var MenuListComponent = (function () {
    function MenuListComponent(menuService, authenticationService) {
        this.menuService = menuService;
        this.authenticationService = authenticationService;
    }
    MenuListComponent.prototype.ngOnInit = function () {
        this.getMenuList();
    };
    MenuListComponent.prototype.getMenuList = function () {
        var _this = this;
        this.menuService.getData()
            .subscribe(function (posts) { return _this.menuList = posts; }, function (error) { return _this.errorMessage = error; });
        console.log(this.authenticationService.getToken());
        console.log(this.authenticationService.getToken().access_token);
        console.log(this.menuList);
    };
    return MenuListComponent;
}());
MenuListComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../app/menus/menu-list-component.html',
    }),
    __metadata("design:paramtypes", [menu_service_1.MenuService, authentication_service_1.AuthenticationService])
], MenuListComponent);
exports.MenuListComponent = MenuListComponent;
//# sourceMappingURL=menu-list.component.js.map