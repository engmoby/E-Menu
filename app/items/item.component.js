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
var item_service_1 = require("./item.service");
var router_1 = require("@angular/router");
var ItemListComponent = (function () {
    function ItemListComponent(ItemService, route) {
        this.ItemService = ItemService;
        this.route = route;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        this.getItemList();
    };
    ItemListComponent.prototype.getItemList = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            // Retrieve Pet with Id route param
            _this.ItemService.getData(id)
                .subscribe(function (posts) { return _this.Itemlist = posts; }, function (error) { return _this.errorMessage = error; });
        });
    };
    return ItemListComponent;
}());
ItemListComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../app/items/item.html',
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService, router_1.ActivatedRoute])
], ItemListComponent);
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item.component.js.map