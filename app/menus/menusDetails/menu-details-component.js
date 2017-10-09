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
var menu_service_1 = require("../menu.service");
var router_1 = require("@angular/router");
var MenuDetailsComponent = (function () {
    function MenuDetailsComponent(menuService, route) {
        this.menuService = menuService;
        this.route = route;
    }
    MenuDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to route params
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            // Retrieve Pet with Id route param
            _this.menuService.getMenuDetails(id).subscribe(function (dog) { return _this.menuObj = dog; });
        });
    };
    return MenuDetailsComponent;
}());
MenuDetailsComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " \n     \n   <div *ngIf='menuObj'>\n   <img src=\"{{ menuObj.ImageList[0].Image}}\"/>\n   \n       {{ menuObj.DisplayValue }} \n       {{ menuObj.Id }} \n       \n      \n</div> \n  ",
    }),
    __metadata("design:paramtypes", [menu_service_1.MenuService, router_1.ActivatedRoute])
], MenuDetailsComponent);
exports.MenuDetailsComponent = MenuDetailsComponent;
//# sourceMappingURL=menu-details-component.js.map