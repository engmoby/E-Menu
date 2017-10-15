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
var app_constant_1 = require("../common/shared/app.constant");
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
    }
    MenuService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    MenuService.prototype.getData = function () {
        return this.http.get('/Menus', new http_1.RequestOptions({
            withCredentials: true
        }))
            .map(this.extractArrayData)
            .catch(this.handleError);
    };
    MenuService.prototype.getMenuDetails = function (id) {
        return this.http.get(app_constant_1.APPConstant.API_URL + 'Menus/' + id, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MenuService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'bearer cRht-PALtmCT2OxVUU3tOoiYVwCW1xGIHw0NxGOhJY2BUWuaIIAcnhPbrRqRVwbCXnwXAYckguiyShLVAcS2iBq19vrz-jKaIXrp8FKZ-KRkZTfLqHXXVjuW4T1OS1qyiAfIDz8X69QIWhfENZvYOB8BuV84rdRvSTPzODqlki-yS2QaaK3llhALr0cBOKGiwzjtburabtybCfD7FB8renNq7b5oqHuXcfyjh9Ji0y5vhFYHBc6VsSl5sxl_Z445DwXwMU0Ld0nLyquOoUzZa65xRmtX5OBR0KpdNS6YgcNRkg0SifEUdw1iniKHDy5BZEirXwdWCmb6nLCxc6Ve7itErwMg_PosD6gF0QEYopY');
        return headers;
    };
    MenuService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    MenuService.prototype.extractArrayData = function (res) {
        var body = res.json().results;
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