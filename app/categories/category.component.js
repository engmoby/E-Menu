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
var category_service_1 = require("./category.service");
var router_1 = require("@angular/router");
var CategoryListComponent = (function () {
    function CategoryListComponent(categoryService, route) {
        this.categoryService = categoryService;
        this.route = route;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getMenuList();
    };
    CategoryListComponent.prototype.getMenuList = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            // Retrieve Pet with Id route param
            _this.categoryService.getData(id)
                .subscribe(function (posts) { return _this.categorylist = posts; }, function (error) { return _this.errorMessage = error; });
        });
    };
    CategoryListComponent.prototype.getItemList = function (catId) {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.categoryService.getItemsList(catId)
                .subscribe(function (posts) { return _this.itemslist = posts; }, function (error) { return _this.errorMessage = error; });
        });
        console.log(this.itemslist);
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../app/categories/category.html',
    }),
    __metadata("design:paramtypes", [category_service_1.categoryService, router_1.ActivatedRoute])
], CategoryListComponent);
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=category.component.js.map