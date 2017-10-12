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
        this.apiUrl = 'http://ecatalogbackend.azurewebsites.net/api/';
    }
    categoryService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    categoryService.prototype.getData = function (menuId) {
        return this.http.get(this.apiUrl + 'Menus/' + menuId + '/Categories', { headers: this.getHeaders() })
            .map(this.extractArrayData)
            .catch(this.handleError);
    };
    categoryService.prototype.getItemsList = function (catId) {
        return this.http.get(this.apiUrl + 'Categories/' + catId + '/Items', { headers: this.getHeaders() })
            .map(this.extractArrayData)
            .catch(this.handleError);
    };
    categoryService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'bearer cRht-PALtmCT2OxVUU3tOoiYVwCW1xGIHw0NxGOhJY2BUWuaIIAcnhPbrRqRVwbCXnwXAYckguiyShLVAcS2iBq19vrz-jKaIXrp8FKZ-KRkZTfLqHXXVjuW4T1OS1qyiAfIDz8X69QIWhfENZvYOB8BuV84rdRvSTPzODqlki-yS2QaaK3llhALr0cBOKGiwzjtburabtybCfD7FB8renNq7b5oqHuXcfyjh9Ji0y5vhFYHBc6VsSl5sxl_Z445DwXwMU0Ld0nLyquOoUzZa65xRmtX5OBR0KpdNS6YgcNRkg0SifEUdw1iniKHDy5BZEirXwdWCmb6nLCxc6Ve7itErwMg_PosD6gF0QEYopY');
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