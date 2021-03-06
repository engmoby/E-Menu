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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var categoryService = (function () {
    function categoryService(http) {
        this.http = http;
    }
    categoryService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    categoryService.prototype.getData = function (menuId) {
        return this.http.get('Menus/' + menuId + '/Categories', new http_1.RequestOptions({
            withCredentials: true
        })).map(this.extractArrayData)
            .catch(this.handleError);
    };
    categoryService.prototype.getItemsList = function (catId) {
        return this.http.get('Categories/' + catId + '/Items', new http_1.RequestOptions({
            withCredentials: true
        })).map(this.extractArrayData)
            .catch(this.handleError);
    };
    categoryService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'bearer jTynYaxk-L_9vS-h22jRjYLgN_lLXWVgwaMtYN2duFcRrh-3eQ5jciD01RFBXWVix3Ny8ksnDJsrlXRhYNLY6kKj14QtefmE38UDlMtGuk_K3SgynoWzxzNBqsPNSBx1492ag9QNG4oKXehv7iLK_B9Os_coSy6gFCBxb4UEKEEE3l4ARd3d9dJ_-CC0x8ZkMkgVKNXk7rMuoGK3FeTaZsPHzlXtkgs36cPbBTIZfFa3E975Lgk3S7sSBFFTXbvk21StMFusZ241nBfnHICV89z_K2yL7H1UkHGMoJPp9gA9CgKl7-rufd0cutsNFil7vSRp2ma9cOlO8-gi57YXRCcbBQ0zOnNUk4IR_c5YeOQ');
        return headers;
    };
    categoryService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    categoryService.prototype.extractArrayData = function (res) {
        var body = res.json().results;
        return body || [];
    };
    return categoryService;
}());
categoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], categoryService);
exports.categoryService = categoryService;
//# sourceMappingURL=category.service.js.map