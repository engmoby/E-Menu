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
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.hotelUrl = 'http://gmgapi.azurewebsites.net/SystemParameters/Hotels/GetAll?langId=en';
    }
    MenuService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    MenuService.prototype.getData = function () {
        return this.http.get('http://gmgapi.azurewebsites.net/SystemParameters/Hotels/GetAll?langId=en')
            .map(this.extractData)
            .catch(this.handleError);
    };
    MenuService.prototype.getMenuDetails = function (id) {
        return this.http.get('http://gmgapi.azurewebsites.net/SystemParameters/Hotels/GetHotelDetails/' + id + '?langId=en')
            .map(this.extractData)
            .catch(this.handleError);
    };
    MenuService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    return MenuService;
}());
MenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map